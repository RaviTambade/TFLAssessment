import { useState, useEffect } from "react";

// ── Color palette ─────────────────────────────────────────────────────────────
export const C: Record<string, string> = {
  red: "#e53935",
  redDark: "#c62828",
  redSoft: "#fff5f5",
  redMid: "#ffcdd2",
  redLight: "#ffebee",
  white: "#ffffff",
  text: "#1a0000",
  textMid: "#5c1a1a",
  textLight: "#9e4040",
  border: "#ffb3b3",
  borderSoft: "#ffd6d6",
  green: "#2e7d32",
  greenBg: "#f1f8f1",
  greenBdr: "#81c784",
  wrong: "#b71c1c",
  wrongBg: "#fff3f3",
};

// ── Countdown hook ────────────────────────────────────────────────────────────
export function useCountdown(totalSeconds: number): {
  fmt: string;
  secs: number;
  urgent: boolean;
} {
  const [secs, setSecs] = useState<number>(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecs((s: number) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fmt = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  const urgent = secs < 60;

  return { fmt, secs, urgent };
}

// ── TopBar props type ─────────────────────────────────────────────────────────
type TopBarProps = {
  title: string;
  subtitle?: string;
  timer?: string;
  urgent?: boolean;
  onBack?: () => void;
};

export const TopBar = ({ title, subtitle, timer, urgent, onBack }: TopBarProps) => {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`,
      padding: "14px 24px",
      color: C.white,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 20px rgba(229,57,53,0.3)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {onBack && (
          <button onClick={onBack} style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "8px",
            padding: "6px 12px",
            color: C.white,
            cursor: "pointer",
            fontSize: "13px",
            fontFamily: "sans-serif",
          }}>← Back</button>
        )}
        <div>
          <div style={{ fontSize: "18px", fontWeight: "800", fontFamily: "Georgia, serif" }}>{title}</div>
          {subtitle && (
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", marginTop: "2px", fontFamily: "sans-serif" }}>{subtitle}</div>
          )}
        </div>
      </div>

      {timer && (
        <div style={{
          background: urgent ? C.wrong : "rgba(255,255,255,0.15)",
          border: `1px solid ${urgent ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)"}`,
          borderRadius: "10px",
          padding: "8px 16px",
          textAlign: "center",
          transition: "background 0.3s",
        }}>
          <div style={{ fontSize: "18px", fontWeight: "800", fontFamily: "monospace", color: C.white }}>{timer}</div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.8px" }}>
            {urgent ? "⚠ Hurry!" : "Time Left"}
          </div>
        </div>
      )}
    </div>
  );
};

// ── NavBtn props type ─────────────────────────────────────────────────────────
type NavBtnProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

export const NavBtn = ({ label, onClick, disabled = false, variant = "secondary" }: NavBtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        margin: "5px",
        borderRadius: "9px",
        border: variant === "primary" ? "none" : `2px solid ${C.borderSoft}`,
        background: disabled
          ? "#e0e0e0"
          : variant === "primary"
          ? `linear-gradient(135deg, ${C.red}, ${C.redDark})`
          : C.white,
        color: disabled ? "#9e9e9e" : variant === "primary" ? C.white : C.textMid,
        fontWeight: "700",
        fontSize: "13px",
        fontFamily: "sans-serif",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        boxShadow: (!disabled && variant === "primary") ? "0 4px 12px rgba(229,57,53,0.3)" : "none",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );
};

// ── ProgressBar props type ────────────────────────────────────────────────────
type ProgressBarProps = {
  value: number;   // 0–100
  label?: string;
};

export const ProgressBar = ({ value, label }: ProgressBarProps) => {
  return (
    <div style={{
      padding: "10px 24px",
      background: C.white,
      borderBottom: `1px solid ${C.borderSoft}`,
    }}>
      <div style={{
        height: "8px",
        background: C.redMid,
        borderRadius: "4px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${Math.min(100, Math.max(0, value))}%`,
          background: `linear-gradient(90deg, ${C.red}, ${C.redDark})`,
          borderRadius: "4px",
          transition: "width 0.4s ease",
        }} />
      </div>
      {label && (
        <span style={{
          fontSize: "11px",
          color: C.textLight,
          fontFamily: "sans-serif",
          marginTop: "4px",
          display: "block",
        }}>
          {label}
        </span>
      )}
    </div>
  );
};