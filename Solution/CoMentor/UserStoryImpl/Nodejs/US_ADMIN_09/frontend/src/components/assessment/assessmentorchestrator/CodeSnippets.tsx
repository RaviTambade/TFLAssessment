import { useState, useEffect } from "react";
import { C, useCountdown, TopBar, NavBtn, ProgressBar } from "./Shared";

const SNIPPETS = [
  {
    id: 1, title: "Complete the missing code:",
    code: `public class Program\n{\n  public static void Main()\n  {\n    int x = 5;\n    Console.WriteLine( ___ );\n  }\n}`,
    options: ["A: x", 'B: "x"', "C: x.ToString()", "D: Console.ReadLine()"],
    correct: 0,
  },
  {
    id: 2, title: "What keyword defines a class in C#?",
    code: `// Fill in the blank:\n___ MyClass\n{\n  // class body\n}`,
    options: ["A: function", "B: class", "C: object", "D: define"],
    correct: 1,
  },
  {
    id: 3, title: "Which object prints output in C#?",
    code: `public static void Main()\n{\n  ___.WriteLine("Hello, World!");\n}`,
    options: ["A: System", "B: Debug", "C: Console", "D: Output"],
    correct: 2,
  },
];

export default function CodeSnippets({ onBack }) {
  const total = SNIPPETS.length;
  const [cur, setCur]           = useState(0);
  const [selected, setSelected] = useState(Array(total).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const { fmt, urgent }         = useCountdown(10 * 60);
  const q = SNIPPETS[cur];
  const score = SNIPPETS.filter((q, i) => selected[i] === q.correct).length;

  const choose = i => {
    if (submitted) return;
    const upd = [...selected]; upd[cur] = i; setSelected(upd);
  };

  // ── Result Screen ─────────────────────────────────────────
  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
        <TopBar title="Code Snippets" subtitle="Results" onBack={onBack} />
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "0 20px" }}>
          <div style={{ background: C.white, border: `2px solid ${C.borderSoft}`, borderRadius: "20px", padding: "36px 32px", textAlign: "center", boxShadow: "0 6px 28px rgba(229,57,53,0.1)" }}>
            <div style={{ fontSize: "52px", marginBottom: "12px" }}>🎯</div>
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: C.text, margin: "0 0 8px" }}>Submitted!</h2>
            <p style={{ color: C.textMid, fontSize: "14px", margin: "0 0 24px", fontFamily: "sans-serif" }}>
              Score: <b style={{ color: C.red, fontSize: "18px" }}>{score} / {total}</b> — {score === total ? "🎉 Perfect!" : score >= total / 2 ? "Good job!" : "Keep practising!"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", textAlign: "left" }}>
              {SNIPPETS.map((sq, i) => {
                const correct = selected[i] === sq.correct;
                return (
                  <div key={i} style={{ background: correct ? C.greenBg : C.wrongBg, border: `1.5px solid ${correct ? C.greenBdr : C.wrong}`, borderRadius: "10px", padding: "12px 16px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: correct ? C.green : C.wrong, fontFamily: "sans-serif", marginBottom: "4px" }}>
                      {correct ? "✅" : "❌"} Q{i + 1}: {sq.title}
                    </div>
                    <div style={{ fontSize: "12px", color: C.textMid, fontFamily: "sans-serif" }}>
                      Your answer: <b>{selected[i] !== null ? sq.options[selected[i]] : "Not answered"}</b>
                    </div>
                    {!correct && <div style={{ fontSize: "12px", color: C.green, fontFamily: "sans-serif" }}>Correct: <b>{sq.options[sq.correct]}</b></div>}
                  </div>
                );
              })}
            </div>
            <button onClick={onBack} style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none", borderRadius: "10px", padding: "12px 36px", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif" }}>← Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Test Screen ───────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
      <TopBar title="Code Snippets" subtitle={`Question ${cur + 1} of ${total}`} timer={fmt} urgent={urgent} onBack={onBack} />
      <ProgressBar value={((cur + 1) / total) * 100} label={`${cur + 1}/${total}`} />

      <div style={{ display: "flex", minHeight: "calc(100vh - 110px)" }}>

        {/* Sidebar — Q1 / Q2 / Q3 */}
        <aside style={{ width: "120px", background: C.white, borderRight: `2px solid ${C.borderSoft}`, padding: "20px 14px", display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: C.red, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px", fontFamily: "sans-serif" }}>Questions</p>
          {SNIPPETS.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: i === cur ? C.red : selected[i] !== null ? C.redMid : C.white,
              border: `1.5px solid ${i === cur ? C.redDark : C.border}`,
              borderRadius: "8px", padding: "9px 12px",
              color: i === cur ? "#fff" : C.textMid,
              fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif",
            }}>
              <span>Q{i + 1}</span>
              {selected[i] !== null && <span style={{ color: i === cur ? "#fff" : C.green }}>✓</span>}
            </button>
          ))}
          <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "5px" }}>
            {[[C.red, "Current"], [C.redMid, "Answered"], [C.white, "Not visited"]].map(([bg, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", color: C.textLight, fontFamily: "sans-serif" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: bg, border: `1px solid ${C.border}`, flexShrink: 0 }} />
                {label}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", background: C.redSoft, border: `1px solid ${C.borderSoft}`, borderRadius: "10px", padding: "10px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", color: C.red, textTransform: "uppercase", margin: "0 0 6px", fontFamily: "sans-serif" }}>Summary</p>
            {[["Answered", selected.filter(s => s !== null).length], ["Remaining", total - selected.filter(s => s !== null).length]].map(([l, v]) => (
              <p key={l} style={{ fontSize: "12px", color: C.textMid, margin: "3px 0", fontFamily: "sans-serif" }}>{l}: <b>{v}</b></p>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "28px 30px" }}>
          <div style={{ background: C.white, border: `2px solid ${C.border}`, borderRadius: "16px", padding: "24px", marginBottom: "18px", boxShadow: "0 3px 16px rgba(229,57,53,0.06)" }}>
            <p style={{ fontSize: "15px", fontWeight: "700", color: C.textMid, margin: "0 0 14px" }}>{q.title}</p>
            <pre style={{ background: C.redSoft, border: `1.5px solid ${C.borderSoft}`, borderRadius: "10px", padding: "16px", fontSize: "13px", color: C.redDark, lineHeight: "1.8", overflowX: "auto", margin: "0 0 18px", whiteSpace: "pre", fontFamily: "Courier New, monospace" }}>{q.code}</pre>
            <p style={{ fontSize: "13px", fontWeight: "700", color: C.textMid, margin: "0 0 12px", fontFamily: "sans-serif" }}>Choose the correct option:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {q.options.map((opt, i) => {
                const isSelected = selected[cur] === i;
                return (
                  <button key={i} onClick={() => choose(i)} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    background: isSelected ? C.redLight : C.redSoft,
                    border: `2px solid ${isSelected ? C.red : C.borderSoft}`,
                    borderRadius: "10px", padding: "12px 14px", cursor: "pointer",
                    textAlign: "left", fontFamily: "Courier New, monospace",
                  }}>
                    <span style={{ width: "14px", height: "14px", borderRadius: "50%", flexShrink: 0, border: `2px solid ${isSelected ? C.red : C.border}`, background: isSelected ? C.red : "transparent", display: "inline-block" }} />
                    <span style={{ fontSize: "13px", color: C.text, fontWeight: isSelected ? "700" : "400" }}>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <NavBtn label="← Prev" onClick={() => setCur(c => Math.max(0, c - 1))}         disabled={cur === 0} />
              <NavBtn label="Next →" onClick={() => setCur(c => Math.min(total - 1, c + 1))} disabled={cur === total - 1} />
            </div>
            <button onClick={() => setSubmitted(true)} style={{
              background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none",
              borderRadius: "10px", padding: "11px 26px", color: "#fff",
              fontSize: "14px", fontWeight: "800", cursor: "pointer",
              fontFamily: "sans-serif", boxShadow: "0 4px 14px rgba(229,57,53,0.3)",
            }}>Submit All →</button>
          </div>
        </main>
      </div>
    </div>
  );
}
