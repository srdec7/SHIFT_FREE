"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { LangCode, t } from "@/lib/translations";
import LanguageSelector from "./LanguageSelector";
import { defaultPlans } from "@/data/defaultPlans";
import { buildHybridPlan } from "@/data/archetypes";
import { showAdUI } from "@/lib/adManager";
import { v4 as uuidv4 } from "uuid";

interface Mission {
  week: number;
  theme: string;
  actions: string[];
}

interface Experiment {
  id?: string;
  experimentTitle: string;
  insight: string;
  hypothesis: string;
  missions: Mission[];
}

// ── localStorage helpers ──
const STORAGE_KEY = "shift_app_data";

interface SavedData {
  lang: LangCode;
  screen: string;
  problem: string;
  experiment: Experiment | null;
  currentDay: number;
  completedDays: number[];
  reflections: Record<number, string>;
}

function loadSaved(): Partial<SavedData> {
  if (typeof window === "undefined") return { lang: "en" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lang: "en" };
    
    let parsed = JSON.parse(raw) as Partial<SavedData>;
    
    // Force English if they somehow still have Korean stuck from legacy v1
    if (parsed.lang === "ko" && !localStorage.getItem("shift-v2-migrated")) {
      parsed.lang = "en";
      localStorage.setItem("shift-v2-migrated", "true");
      // Resave immediately
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    } else if (!parsed.lang) {
      parsed.lang = "en";
    }

    return parsed;
  } catch {
    return { lang: "en" };
  }
}

function saveData(data: SavedData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage full — silently fail
  }
}

function clearSaved() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

function getAudioSrc(screen: string): string {
  switch (screen) {
    case "landing":
    case "onboard":
      return "/bgm_landing.mp3";
    case "loading":
      return "/bgm_loading.mp3";
    case "experiment":
      return "/bgm_plan.mp3";
    case "daily":
      return "/bgm_daily.mp3";
    case "done":
    case "report":
      return "/bgm_success.mp3";
    default:
      return "/bgm_landing.mp3";
  }
}

export default function ShiftApp() {
  const [loaded, setLoaded] = useState(false);
  const [screen, setScreen] = useState("landing");
  const [lang, setLang] = useState<LangCode>("en");
  const [problem, setProblem] = useState("");
  const [experiment, setExperiment] = useState<Experiment | null>(null);
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [reflection, setReflection] = useState("");
  const [reflections, setReflections] = useState<Record<number, string>>({});
  const [error, setError] = useState("");
  const [exporting, setExporting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // ── Ad Flow State ──
  const [showAdModal, setShowAdModal] = useState(false);
  const [adSuccess, setAdSuccess] = useState(false);
  
  // ── Session Checking ──
  const [finalFeedback, setFinalFeedback] = useState("");
  const [generatingFeedback, setGeneratingFeedback] = useState(false);
  const [reminderTime, setReminderTime] = useState("08:00");

  const downloadCalendarEvent = () => {
    if (!experiment) return;
    
    // Create ICS for 30 daily occurrences
    const today = new Date();
    // parse reminderTime "08:00" -> hours=8, mins=0
    const [hh, mm] = reminderTime.split(':').map(Number);
    
    const pad = (n: number) => n.toString().padStart(2, '0');
    const year = today.getFullYear();
    const month = pad(today.getMonth() + 1);
    const date = pad(today.getDate());
    const hours = pad(hh);
    const mins = pad(mm);
    
    const dtStart = `${year}${month}${date}T${hours}${mins}00`;
    
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//SHIFT App//KO",
      "BEGIN:VEVENT",
      `UID:${uuidv4()}@shiftapp.com`,
      `DTSTAMP:${dtStart}`,
      `DTSTART;TZID=${Intl.DateTimeFormat().resolvedOptions().timeZone}:${dtStart}`,
      "RRULE:FREQ=DAILY;COUNT=30",
      `SUMMARY:SHIFT: ${experiment.experimentTitle}`,
      `DESCRIPTION:Time for your daily micro-behavior mission in the SHIFT app!\\nhttps://shift-app-alpha.vercel.app`,
      "BEGIN:VALARM",
      "TRIGGER:-PT0M",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join('\\r\\n');

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isIOS || isSafari) {
      const file = new File([icsContent], 'shift-reminder.ics', { type: 'text/calendar' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: 'SHIFT Reminder' }).catch(() => {
          window.location.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent);
        });
      } else {
        window.location.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent);
      }
    } else {
      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'shift-reminder.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    // Generate device ID
    let deviceId = localStorage.getItem("shift_device_id");
    if (!deviceId) {
      deviceId = uuidv4();
      localStorage.setItem("shift_device_id", deviceId);
    }
  }, [lang]);

  const checkPremiumStatus = async (userId: string, deviceId: string) => {
      // No-op for offline mode
  };

  const audioSrc = getAudioSrc(screen);
  const prevAudioSrc = useRef(audioSrc);
  const cloudSaveTimer = useRef<NodeJS.Timeout | null>(null);

  // ── Handle BGM Track Changes ──
  useEffect(() => {
    if (prevAudioSrc.current !== audioSrc) {
      prevAudioSrc.current = audioSrc;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => setIsPlaying(true)).catch((e) => {
            console.warn("Audio playback failed on track change", e);
          });
        }
      }
    }
  }, [audioSrc]);

  // ── Attempt Autoplay on First Interaction ──
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setAudioError(true));
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
    
    const handleVisibility = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("visibilitychange", handleVisibility);
    
    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [isPlaying]);

  // ── Register service worker for PWA ──
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // SW registration failed silently — app still works
      });
    }
  }, []);

  // ── Load from localStorage on mount ──
  useEffect(() => {
    const saved = loadSaved();
    if (saved.lang) setLang(saved.lang);
    // if (saved.screen && saved.screen !== "loading") setScreen(saved.screen);
    if (saved.problem) setProblem(saved.problem);
    if (saved.experiment) setExperiment(saved.experiment);
    if (saved.currentDay) setCurrentDay(saved.currentDay);
    if (saved.completedDays) setCompletedDays(saved.completedDays);
    if (saved.reflections) setReflections(saved.reflections);
    setLoaded(true);
  }, []);

  // ── Auto-save whenever state changes ──
  const doSave = useCallback(async () => {
    if (!loaded) return;
    const stateObj = { lang, screen, problem, experiment, currentDay, completedDays, reflections };
    saveData(stateObj); // Local save instantly
  }, [loaded, lang, screen, problem, experiment, currentDay, completedDays, reflections]);

  useEffect(() => {
    doSave();
  }, [doSave]);

  // ── Sync experiment language when lang changes ──
  useEffect(() => {
    if (!loaded || !experiment || !experiment.id) return;
    
    // Check if the current experiment is a default plan
    const dict = defaultPlans[lang] || defaultPlans.en;
    if (dict && dict[experiment.id]) {
      const translatedPlan = dict[experiment.id];
      setExperiment(translatedPlan);
      setProblem(translatedPlan.experimentTitle);
    }
  }, [lang, loaded]);

  const T = t(lang);
  const go = (s: string) => setScreen(s);

  // ── Hybrid Mode Handlers ──
  const handleDesignClick = async () => {
    if (problem.trim().length < 5) return;
    
    // Fake AI Loading
    go("loading");
    
    // Wait 4 seconds to build anticipation
    setTimeout(() => {
       // After fake loading, trigger the Ad Wall
       setShowAdModal(true);
    }, 4000);
  };

  const handleAdSuccess = () => {
    setShowAdModal(false);
    setAdSuccess(true);
    
    // Generate the hybrid plan
    const generated = buildHybridPlan(problem, lang);
    generated.experimentTitle = generated.experimentTitle + ` : ${problem.substring(0, 15)}...`; 
    setExperiment(generated);
    go("experiment");
  };

  const executeGeneration = async () => {
     // No-op. Handled by handleAdSuccess
  };

  const getDayMission = (day: number) => {
    if (!experiment) return "";
    const weekIdx = Math.floor((day - 1) / 7);
    const dayIdx = (day - 1) % 7;
    return experiment.missions?.[weekIdx]?.actions?.[dayIdx] || "";
  };

  const completeDay = () => {
    const updated = [...completedDays, currentDay];
    setCompletedDays(updated);
    const updatedReflections = { ...reflections, [currentDay]: reflection };
    setReflections(updatedReflections);
    setReflection("");
    if (currentDay >= 30) {
      go("report");
    } else {
      setCurrentDay(currentDay + 1);
      go("done");
    }
  };

  const resetAll = () => {
    clearSaved();
    setProblem("");
    setExperiment(null);
    setCurrentDay(1);
    setCompletedDays([]);
    setReflection("");
    setReflections({});
    setFinalFeedback("");
    go("onboard");
  };

  const getFinalFeedback = async () => {
     setGeneratingFeedback(true);
     // Simulate AI final analysis by looking deeply at reflections locally
     setTimeout(() => {
        const textSum = Object.values(reflections).join(" ");
        if (textSum.length > 20) {
            setFinalFeedback(lang === "ko" 
              ? "놀라운 흔적들입니다. 30일 동안 당신이 걸어온 발자취를 통해, 초반의 막연했던 두려움이 점차 구체적인 용기로 바뀌었음을 확인할 수 있습니다. 이제 당신은 스스로 답을 찾는 법을 깨달았습니다."
              : "Incredible footprints. Throughout these 30 days, your vague fears transformed into concrete courage. You have learned how to find your own answers.");
        } else {
             setFinalFeedback(lang === "ko" ? "미션은 끝났지만 진짜 여정은 지금부터입니다." : "The mission is over, but the real journey begins now.");
        }
        setGeneratingFeedback(false);
     }, 3000);
  };

  const exportAsImage = async () => {
    if (!reportRef.current) return;
    setExporting(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(reportRef.current, {
        backgroundColor: "#080808",
        scale: 2,
        logging: false,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `SHIFT-30days-${experiment?.experimentTitle?.replace(/\s+/g, "-") ?? "experiment"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      // silently fail
    } finally {
      setExporting(false);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    // Clear any previous error
    setAudioError(false);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Browsers often require `load()` before `play()` if it was interrupted
      if (audioRef.current.readyState === 0) {
        audioRef.current.load();
      }
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((e) => {
            console.warn("Audio playback failed", e);
            setIsPlaying(false);
            setAudioError(true);
          });
      }
    }
  };

  // Don't render until localStorage is loaded (prevents flash)
  if (!loaded) return <div className="shift-root" />;

  return (
    <div className="shift-root">
      <div className="bg-noise" />
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      {/* ── BACKGROUND AUDIO ── */}
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        autoPlay
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setAudioError(true)}
      />

      {/* ── SOUND BAR MUSIC VISUALIZER ── */}
      <button className={`music-bar ${isPlaying ? "playing" : "paused"}`} type="button" aria-label="Toggle Music" onClick={toggleAudio}>
        <div className="music-bar-viz" id="music-viz">
          <span className="bar" style={{ "--delay": "0.0s" } as React.CSSProperties}></span>
          <span className="bar" style={{ "--delay": "0.15s" } as React.CSSProperties}></span>
          <span className="bar" style={{ "--delay": "0.3s" } as React.CSSProperties}></span>
          <span className="bar" style={{ "--delay": "0.1s" } as React.CSSProperties}></span>
          <span className="bar" style={{ "--delay": "0.25s" } as React.CSSProperties}></span>
        </div>
      </button>

      {/* ── TOP LEFT: SHIFT Logo (shown on all screens) ── */}
      <div style={{ position: "fixed", top: 16, left: 16, zIndex: 100, display: "flex", alignItems: "center", gap: 10 }}>
        {screen !== "landing" && screen !== "done" && screen !== "loading" ? (
          <button
            onClick={() => {
              if (screen === "onboard" || screen === "experiment") go("landing");
              else if (screen === "daily" || screen === "report") go("experiment");
              else go("landing");
            }}
            style={{
              background: "rgba(13,13,13,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.7)",
              height: "36px",
              borderRadius: "18px",
              cursor: "pointer",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: 300,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {T.back || "Back"}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/symbol.png" alt="SHIFT" style={{ height: 26, width: "auto", opacity: 0.8 }} />
            <img src="/logo.png" alt="SHIFT" style={{ height: 14, width: "auto", opacity: 0.65 }} />
          </div>
        )}
      </div>

      {/* ── TOP RIGHT CONTROLS (Lang) ── */}
      <div className="top-right-controls" style={{ position: "fixed", top: 16, right: 16, zIndex: 100, display: "flex", gap: "8px", alignItems: "center" }}>
        <LanguageSelector current={lang} onChange={setLang} />
        {audioError && <div style={{ fontSize: 10, color: "#c06060", marginRight: 8 }}>Audio blocked</div>}
      </div>

      {/* ── AD MODAL ── */}
      {showAdModal && (
         <div style={{
           position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
           background: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)",
           zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24
         }}>
           <div className="card" style={{ maxWidth: 400, width: "100%", position: "relative", textAlign: "center" }}>
             <div className="eyebrow">{lang === "ko" ? "블루프린트 완성" : "Blueprint Ready"}</div>
             <div className="display" style={{ fontSize: 24, margin: "16px 0" }}>
               {lang === "ko" ? "나만의 30일이 준비되었습니다." : "Your 30 days are ready."}
             </div>
             <p style={{ color: "#aaa", fontSize: 13, marginBottom: 24 }}>
               {lang === "ko" ? "짧은 스폰서 영상을 시청하고 플랜을 영구 소장하세요." : "Watch a short sponsor message to unlock your plan permanently."}
             </p>
             <button className="btn btn-gold" onClick={() => {
                showAdUI(lang, handleAdSuccess, () => setShowAdModal(false));
             }}>
               {lang === "ko" ? "영상 재생" : "Play Video"}
             </button>
           </div>
         </div>
      )}

      {/* ── LANDING ── */}
      {screen === "landing" && (
        <div className="screen">
          <img src="/symbol.png" alt="SHIFT Symbol" className="logo-symbol" />
          <img src="/logo.png" alt="SHIFT — 30 Days. One Thing." className="logo-image" style={{ marginTop: 0 }} />
          <div className="display">
            {T.landingLine1}
            <br />
            <em>{T.landingLine2}</em>
            <br />
            {T.landingLine3}
          </div>
          <div className="body-text">
            {T.bodyLine1}
            <br />
            {T.bodyLine2}
            <br />
            {T.bodyLine3}
          </div>
          {experiment ? (
            <div className="btn-row" style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              <button className="btn btn-gold" onClick={() => go("experiment")}>
                {lang === "ko" ? "내 플랜 이어하기" : "Continue My Plan"}
              </button>
              <button className="btn btn-outline" onClick={() => {
                if (confirm(lang === "ko" ? "기존 플랜을 삭제하고 새로 시작하시겠습니까?" : "Delete current plan and start over?")) {
                  clearSaved();
                  setExperiment(null);
                  setCompletedDays([]);
                  go("onboard");
                }
              }}>
                {lang === "ko" ? "새로 시작" : "Start New"}
              </button>
            </div>
          ) : (
            <button className="btn btn-gold" onClick={() => go("onboard")}>
              {T.startBtn}
            </button>
          )}
        </div>
      )}

      {/* ── ONBOARD (New Intake Design) ── */}
      {screen === "onboard" && (
        <div className="screen" style={{ paddingTop: 100 }}>
          <div style={{ width: "100%", maxWidth: 520, margin: "0 auto", padding: "0 20px" }}>

            {/* Step indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 44 }}>
              <div style={{ width: 18, height: 5, borderRadius: 3, background: "rgba(168,144,112,0.8)" }} />
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginLeft: 2 }}>
                Assessment
              </span>
            </div>

            {/* Question */}
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.2)", marginBottom: 12 }}>
                {T.step01}
              </p>
              <h1 style={{ fontSize: 24, fontWeight: 200, lineHeight: 1.35, color: "rgba(255,255,255,0.88)", letterSpacing: "-0.01em", margin: 0 }}>
                {T.questionLine1}<br />
                <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.55)" }}>{T.questionLine2}</em>
              </h1>
            </div>

            {/* Category cards 2×2 + 1 */}
            {(() => {
              const categoryMap = [
                { key: "burnout",      icon: <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,144,112,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}><path d="M12 2C8 6 5 9 5 13a7 7 0 0014 0c0-4-3-7-7-11z"/><path d="M12 20v-4M9.5 15l2.5-2 2.5 2"/></svg>, label: "Burnout", desc: T.prompts?.[4] || "Exhaustion, emptiness, loss of drive" },
                { key: "anxiety",     icon: <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,144,112,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>, label: "Anxiety", desc: T.prompts?.[5] || "Worry, overthinking, fear" },
                { key: "career",      icon: <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,144,112,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}><path d="M3 17l4-4 4 4 4-6 4 2"/><path d="M3 21h18"/></svg>, label: "Career", desc: T.prompts?.[2] || "Direction, purpose, workplace" },
                { key: "relationship", icon: <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,144,112,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, label: "Relationships", desc: T.prompts?.[3] || "Connection, loneliness" },
              ];
              return (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                    {categoryMap.map(({ key, icon, label, desc }) => {
                      const isSelected = problem === key;
                      return (
                        <button
                          key={key}
                          onClick={() => { setProblem(key); setExperiment(null); }}
                          style={{
                            background: isSelected ? "rgba(168,144,112,0.1)" : "rgba(255,255,255,0.025)",
                            border: `1px solid ${isSelected ? "rgba(168,144,112,0.5)" : "rgba(255,255,255,0.06)"}`,
                            borderRadius: 14,
                            padding: "18px 18px 16px",
                            cursor: "pointer",
                            textAlign: "left" as const,
                            transition: "all 0.22s",
                            position: "relative" as const,
                          }}
                        >
                          {isSelected && (
                            <div style={{ position: "absolute", top: 10, right: 10, width: 6, height: 6, borderRadius: "50%", background: "rgba(168,144,112,0.9)" }} />
                          )}
                          <div style={{ marginBottom: 12, opacity: isSelected ? 1 : 0.35 }}>{icon}</div>
                          <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.88)", marginBottom: 4 }}>{label}</div>
                          <div style={{ fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.36)", lineHeight: 1.5 }}>{desc}</div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Something else — full width */}
                  <button
                    onClick={() => { setProblem(""); setExperiment(null); }}
                    style={{
                      width: "100%",
                      background: (!problem || !categoryMap.find(c => c.key === problem)) ? "rgba(168,144,112,0.1)" : "rgba(255,255,255,0.025)",
                      border: `1px solid ${(!problem || !categoryMap.find(c => c.key === problem)) ? "rgba(168,144,112,0.4)" : "rgba(255,255,255,0.06)"}`,
                      borderRadius: 14, padding: "16px 20px",
                      cursor: "pointer", textAlign: "left" as const,
                      display: "flex", alignItems: "center", gap: 16,
                      transition: "all 0.22s",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,144,112,0.6)" strokeWidth="1.2" strokeLinecap="round" width={20} height={20}>
                      <circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.88)", marginBottom: 3 }}>Something else</div>
                      <div style={{ fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.36)" }}>Motivation, meaning, or I'm not sure yet</div>
                    </div>
                  </button>
                </>
              );
            })()}

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "24px 0 20px" }}>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.18)", whiteSpace: "nowrap" as const }}>or describe it</span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Freetext */}
            <div style={{ position: "relative" as const, marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.2)", display: "block", marginBottom: 10 }}>
                {T.customSituationsLabel?.split("(")[0]?.trim() || "In your own words — optional"}
              </span>
              <textarea
                value={["burnout","anxiety","career","relationship"].includes(problem) ? "" : problem}
                onChange={(e) => { setProblem(e.target.value); setExperiment(null); }}
                placeholder={T.placeholder}
                maxLength={200}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 14,
                  padding: "14px 16px",
                  color: "rgba(255,255,255,0.88)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.65,
                  resize: "none" as const,
                  outline: "none",
                  height: 100,
                  letterSpacing: "0.01em",
                }}
              />
            </div>

            {/* Quick prompt chips */}
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 7, marginBottom: 28 }}>
              {T.prompts?.slice(0, 4).map((p: string, i: number) => (
                <button
                  key={i}
                  onClick={() => { setProblem(p); setExperiment(null); }}
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 20,
                    padding: "5px 12px",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11.5, fontWeight: 300,
                    color: "rgba(255,255,255,0.38)",
                    cursor: "pointer",
                    transition: "all 0.18s",
                    letterSpacing: "0.01em",
                  }}
                >
                  {p.length > 32 ? p.slice(0, 32) + "…" : p}
                </button>
              ))}
            </div>

            {/* CTA */}
            {error && <div style={{ fontSize: 12, color: "#c06060", marginBottom: 12 }}>{error}</div>}
            <button
              disabled={problem.trim().length < 2}
              onClick={handleDesignClick}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, rgba(168,144,112,0.18), rgba(168,144,112,0.08))",
                border: "1px solid rgba(168,144,112,0.35)",
                borderRadius: 14,
                padding: "18px 24px",
                color: "rgba(255,255,255,0.88)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: 14,
                letterSpacing: "0.06em",
                cursor: problem.trim().length < 2 ? "not-allowed" : "pointer",
                opacity: problem.trim().length < 2 ? 0.35 : 1,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                transition: "all 0.25s",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start", gap: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" }}>Design my experiment</span>
                <span style={{ fontSize: 14, fontWeight: 300 }}>{T.designBtn || "Begin 30-day plan →"}</span>
              </div>
              <div style={{ width: 28, height: 28, border: "1px solid rgba(168,144,112,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(168,144,112,0.9)" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>

          </div>
        </div>
      )}

      {/* ── LOADING (Orb animation) ── */}
      {screen === "loading" && (
        <div className="screen" style={{ justifyContent: "center" }}>
          <style>{`
            @keyframes shift-orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes shift-orb-pulse { 0%,100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.12); opacity: 1; } }
            @keyframes shift-fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
          `}</style>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
            <div style={{ position: "relative" as const, width: 80, height: 80, marginBottom: 36 }}>
              <div style={{ position: "absolute" as const, inset: 0, borderRadius: "50%", border: "1px solid rgba(168,144,112,0.22)", animation: "shift-orbit-spin 12s linear infinite" }} />
              <div style={{ position: "absolute" as const, inset: -12, borderRadius: "50%", border: "1px dashed rgba(168,144,112,0.09)", animation: "shift-orbit-spin 22s linear infinite reverse" }} />
              <div style={{ position: "absolute" as const, inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,144,112,0.28), rgba(168,144,112,0.04))", animation: "shift-orb-pulse 2.5s ease-in-out infinite" }} />
              </div>
            </div>
            <div className="loading-title">{T.loadingTitle}</div>
            <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginTop: 6 }}>{T.loadingSub}</div>
            <div style={{ display: "flex", gap: 8, marginTop: 36, flexWrap: "wrap" as const, justifyContent: "center" }}>
              {["Identifying patterns", "Building micro-missions", "Calibrating 30-day arc"].map((tag, i) => (
                <div key={i} style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "5px 13px", fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.22)", letterSpacing: "0.07em", animation: `shift-fade-up 0.5s ease ${i * 0.3}s both` }}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── EXPERIMENT PLAN ── */}
      {screen === "experiment" && experiment && (
        <div className="screen">

          <div className="card">
            <div className="eyebrow">{T.yourExperiment}</div>
            <div className="exp-title">{experiment.experimentTitle}</div>
            <div className="exp-insight">{experiment.insight}</div>
            <div className="hypothesis">
              <span>{T.hypothesisLabel}</span>&quot;{experiment.hypothesis}&quot;
            </div>

            <div className="field-label" style={{ marginBottom: 12 }}>
              {T.weeklyThemes}
            </div>
            <div className="week-list">
              {experiment.missions?.map((week, i) => (
                <div key={i} className="week-item">
                  <div className="week-tag">W{i + 1}</div>
                  <div className="week-info">
                    <div className="week-theme">{week.theme}</div>
                    <div className="week-preview">{week.actions?.[0]}...</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Calendar Reminder Section */}
            <div style={{ margin: "24px 0", padding: "16px", background: "rgba(200,155,60,0.05)", borderRadius: "12px", border: "1px solid rgba(200,155,60,0.2)" }}>
              <div style={{ fontSize: 13, color: "#c89b3c", marginBottom: 8, fontWeight: 600 }}>
                {T.setReminderTitle || "🔔 30-Day Calendar Reminder"}
              </div>
              <p style={{ fontSize: 12, color: "#a39b90", marginBottom: 16, lineHeight: 1.4 }}>
                {T.setReminderDesc || "Get a daily notification to complete your SHIFT mission. (Downloads a calendar event)"}
              </p>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <input 
                  type="time" 
                  value={reminderTime} 
                  onChange={e => setReminderTime(e.target.value)}
                  style={{ 
                    background: "#1a1815", color: "#ede8e0", border: "1px solid #3a3530", 
                    padding: "8px 12px", borderRadius: "8px", fontSize: 14 
                  }}
                />
                <button 
                  className="btn btn-outline" 
                  style={{ flex: 1, padding: "8px 12px", fontSize: 13 }}
                  onClick={downloadCalendarEvent}
                >
                  {T.addToCalendarBtn || "Add to Calendar"}
                </button>
              </div>
            </div>

            <div className="btn-row">
              {completedDays.length > 0 && currentDay <= 30 ? (
                <>
                  <button
                    className="btn btn-gold"
                    onClick={() => go("daily")}
                  >
                    {T.continueDay?.replace("{day}", String(currentDay)) || `Continue Day ${currentDay}`}
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      if (confirm(T.confirmRestart || "Restart from Day 1? All progress will be lost.")) {
                        setCurrentDay(1);
                        setCompletedDays([]);
                        setReflections({});
                        go("daily");
                      }
                    }}
                  >
                    {T.restartSession || "Restart"}
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-gold"
                  onClick={() => {
                    setCurrentDay(1);
                    setCompletedDays([]);
                    setReflections({});
                    go("daily");
                  }}
                >
                  {T.startDay1}
                </button>
              )}
              <button className="btn btn-outline" onClick={resetAll}>
                {T.reenter}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DAILY MISSION ── */}
      {screen === "daily" && experiment && (
        <div className="screen">

          <div className="card">
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${(completedDays.length / 30) * 100}%` }}
              />
            </div>
            <div className="progress-meta">
              <span>{T.progress}</span>
              <span>{completedDays.length} / 30 {T.days}</span>
            </div>

            <div className="streak">
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`s-dot ${completedDays.includes(i + 1) ? "done" : ""} ${i + 1 === currentDay ? "today" : ""}`}
                />
              ))}
            </div>

            <div className="day-badge">DAY {currentDay}</div>
            <div className="daily-mission">{getDayMission(currentDay)}</div>

            <div className="reflection-label">{T.reflectionLabel}</div>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder={T.reflectionPlaceholder}
              style={{ minHeight: 72 }}
              maxLength={300}
            />
            <div className="reflection-hint" style={{ fontSize: 11, color: "#8a8580", marginTop: 8, lineHeight: 1.4 }}>
              {T.reflectionHint || "💡 Leave notes for at least 3 days to receive a deep AI analysis on Day 30."}
            </div>
            <div style={{ marginTop: 20 }}>
              <button className="btn btn-gold" onClick={completeDay}>
                {T.completeBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DAY DONE ── */}
      {screen === "done" && (
        <div className="screen">
          <div className="card" style={{ textAlign: "center" }}>
            <div className="big-symbol">◈</div>
            <div className="eyebrow" style={{ textAlign: "center" }}>
              Day {currentDay - 1} {T.dayComplete}
            </div>
            <div
              className="display"
              style={{ fontSize: "clamp(22px,4vw,28px)", marginBottom: 12 }}
            >
              {T.wellDone}
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#4a4540",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              {T.doneLine1}
              <br />
              {T.doneLine2}
            </p>
            <div className="gold-line" />
            <button className="btn btn-gold" onClick={() => go("landing")}>
              {lang === "ko" ? "처음으로" : "Back to Home"}
            </button>
          </div>
        </div>
      )}

      {/* ── REPORT ── */}
      {screen === "report" && (
        <div className="screen">
          <div className="card" ref={reportRef}>
            {/* Header */}
            <div className="eyebrow" style={{ textAlign: "center", marginBottom: 32 }}>{T.experimentDone}</div>

            {/* Cinematic Progress Circle */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, marginBottom: 40 }} className="camera-zoom-in">
              <svg viewBox="0 0 36 36" style={{ width: 80, height: 80, filter: "drop-shadow(0 0 8px rgba(200, 155, 60, 0.4))" }}>
                  <path className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle-progress"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
              </svg>
              <div>
                  <div style={{ fontSize: 26, fontWeight: 300, letterSpacing: -0.5, display: "flex", alignItems: "baseline", gap: 4 }}>
                    Day&nbsp;<span style={{ fontWeight: 500, color: "#fff" }}>{completedDays.length}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#c89b3c", textTransform: "uppercase", letterSpacing: 2.5, marginTop: 6, fontWeight: 500 }}>
                    {T.daysCompleted}
                  </div>
              </div>
            </div>

            {/* Headline */}
            <div
              className="display"
              style={{ fontSize: "clamp(20px,3.5vw,26px)", marginBottom: 16, textAlign: "center" }}
            >
              Measure the<br />
              <em style={{ color: "#c89b3c", fontStyle: "italic", fontWeight: 400 }}>shift.</em>
            </div>

            {/* Stats strip */}
            <div className="report-stats">
              <div className="report-stat">
                <div className="report-stat-num">{completedDays.length}</div>
                <div className="report-stat-label">{T.daysFinished}</div>
              </div>
              <div className="report-stat-divider" />
              <div className="report-stat">
                <div className="report-stat-num">
                  {Object.values(reflections).filter((r) => r && r.trim().length > 0).length}
                </div>
                <div className="report-stat-label">Reflections</div>
              </div>
              <div className="report-stat-divider" />
              <div className="report-stat">
                <div className="report-stat-num">30</div>
                <div className="report-stat-label">{T.dayExperiment}</div>
              </div>
            </div>

            {/* Hypothesis */}
            <div className="report-hypothesis">
              <div className="report-hyp-label">{T.hypothesisLabel}</div>
              <p className="report-hyp-text">&ldquo;{experiment?.hypothesis}&rdquo;</p>
            </div>

            {/* Reflection highlights & Final Analysis */}
            <div className="report-reflections" style={{ marginTop: 24 }}>
              {finalFeedback ? (
                <div style={{ padding: "24px", background: "rgba(200,155,60,0.05)", border: "1px solid rgba(200,155,60,0.2)", borderRadius: "12px" }}>
                  <div className="field-label" style={{ color: "#c89b3c", marginBottom: 12 }}>
                    {T.finalAnalysisTitle || "Your 30-Day Analysis"}
                  </div>
                  <p style={{ fontSize: 14, color: "#ede8e0", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                    {finalFeedback}
                  </p>
                </div>
              ) : Object.entries(reflections).filter(([, v]) => v && v.trim().length > 0).length > 2 ? (
                <div style={{ textAlign: "center", background: "rgba(20,20,20,0.5)", padding: 24, borderRadius: 12, border: "1px solid #222" }}>
                  <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
                    {T.analyzingText || "You've left enough reflections for a final psychological analysis."}
                  </p>
                  <button 
                    className="btn btn-gold" 
                    onClick={() => {
                      getFinalFeedback();
                    }} 
                    disabled={generatingFeedback}
                  >
                    {generatingFeedback ? "..." : (T.getFinalAnalysisBtn || "Get Final Analysis")}
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: "center", background: "rgba(20,20,20,0.5)", padding: 24, borderRadius: 12, border: "1px solid #222" }}>
                  <p style={{ fontSize: 13, color: "#666", margin: 0 }}>
                    {T.noReflectionsMsg || "Not enough reflections left for a deep analysis. Next time, leave more notes!"}
                  </p>
                </div>
              )}
            </div>
            {/* Cinematic SVG Chart (Pattern Shift Metric) */}
            <div style={{ position: "relative", width: "100%", height: 160, marginTop: 40, marginBottom: 40 }}>
                <div style={{ position: "absolute", top: -10, left: 0, fontSize: 11, color: "#888", letterSpacing: 1.5, textTransform: "uppercase" }}>
                  Pattern Shift Metric
                </div>
                <svg className="chart-svg" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="rgba(200,155,60,0.6)" />
                            <stop offset="100%" stopColor="rgba(200,155,60,0.0)" />
                        </linearGradient>
                    </defs>
                    <path className="chart-fill" d="M0,50 L0,40 Q25,35 45,20 T95,5 L100,2 L100,50 Z" />
                    <path className="chart-line" d="M0,40 Q25,35 45,20 T95,5 L100,2" />
                    <circle className="chart-point point-1" cx="0" cy="40"></circle>
                    <circle className="chart-point point-2" cx="45" cy="20"></circle>
                    <circle className="chart-point point-3" cx="100" cy="2"></circle>
                </svg>
            </div>

            <div className="gold-line" />

            {/* Action buttons */}
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <button className="btn btn-gold" onClick={resetAll}>
                {T.newExperiment}
              </button>
              <button
                className="btn btn-outline"
                onClick={exportAsImage}
                disabled={exporting}
                style={{ minWidth: 140 }}
              >
                {exporting ? "Saving..." : "⬇ Save Image"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
