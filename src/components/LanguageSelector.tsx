"use client";

import { useState, useRef, useEffect } from "react";
import { LANGUAGES, LangCode } from "@/lib/translations";

interface Props {
  current: LangCode;
  onChange: (code: LangCode) => void;
}

export default function LanguageSelector({ current, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const labels: Record<LangCode, string> = {
    en: "EN",
    ko: "KO",
    es: "ES",
    ja: "JP",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "rgba(13,13,13,0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "18px",
          color: "rgba(255,255,255,0.88)",
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: "12px",
          letterSpacing: "0.06em",
          padding: "6px 12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          transition: "background 0.2s",
        }}
      >
        <span>{labels[current] ?? current.toUpperCase()}</span>
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ opacity: 0.6, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "6px",
            background: "rgba(20,20,20,0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            minWidth: "70px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            zIndex: 1000,
            animation: "fadeInDown 0.15s ease-out forwards",
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onChange(lang.code);
                setIsOpen(false);
              }}
              style={{
                background: lang.code === current ? "rgba(255,255,255,0.08)" : "transparent",
                color: lang.code === current ? "#fff" : "rgba(255,255,255,0.5)",
                border: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "12px",
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                if (lang.code !== current) e.currentTarget.style.color = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                if (lang.code !== current) e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              {labels[lang.code] ?? lang.code.toUpperCase()}
            </button>
          ))}
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-4px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </div>
  );
}
