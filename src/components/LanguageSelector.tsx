"use client";

import { LANGUAGES, LangCode } from "@/lib/translations";

interface Props {
  current: LangCode;
  onChange: (code: LangCode) => void;
}

export default function LanguageSelector({ current, onChange }: Props) {
  const labels: Record<LangCode, string> = {
    en: "EN",
    ko: "KO",
    es: "ES",
    ja: "JP",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        background: "rgba(13,13,13,0.85)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        padding: "4px 6px",
      }}
    >
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onChange(lang.code)}
          style={{
            background: lang.code === current ? "rgba(255,255,255,0.08)" : "none",
            border: "none",
            cursor: "pointer",
            color:
              lang.code === current
                ? "rgba(255,255,255,0.88)"
                : "rgba(255,255,255,0.35)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.06em",
            padding: "4px 9px",
            borderRadius: "14px",
            transition: "all 0.18s",
            lineHeight: 1,
          }}
          title={lang.label}
        >
          {labels[lang.code] ?? lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
