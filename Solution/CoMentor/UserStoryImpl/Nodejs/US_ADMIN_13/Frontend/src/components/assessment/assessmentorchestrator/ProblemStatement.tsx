import { useState } from "react";
import { C, useCountdown, TopBar, NavBtn, ProgressBar } from "./Shared";

const PROBLEMS = [
  { id: 1, title: "Factorial",   statement: "Write a C# program to find the factorial of a given number n. Handle edge cases: 0! = 1 and negative numbers should return an error." },
  { id: 2, title: "Prime Check", statement: "Write a C# program to check whether a given number is prime. Your program should take an integer as input and output 'Prime' or 'Not Prime'." },
  { id: 3, title: "Fibonacci",   statement: "Write a C# program to print the Fibonacci series up to n terms. Example for 7 terms: 0, 1, 1, 2, 3, 5, 8." },
];

export default function ProblemStatement({ onBack }) {
  const total = PROBLEMS.length;
  const [cur, setCur]         = useState(0);
  const [answers, setAnswers] = useState(Array(total).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const { fmt, urgent }       = useCountdown(30 * 60);
  const p = PROBLEMS[cur];

  // ── Result Screen ─────────────────────────────────────────
  if (submitted) {
    const attempted = answers.filter(a => a.trim().length > 0).length;
    return (
      <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
        <TopBar title="Problem Statement" subtitle="Submission Complete" onBack={onBack} />
        <div style={{ maxWidth: "460px", margin: "60px auto", padding: "0 20px" }}>
          <div style={{ background: C.white, border: `2px solid ${C.borderSoft}`, borderRadius: "20px", padding: "40px 32px", textAlign: "center", boxShadow: "0 6px 28px rgba(229,57,53,0.1)" }}>
            <div style={{ fontSize: "52px", marginBottom: "12px" }}>✅</div>
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: C.text, margin: "0 0 8px" }}>Submitted!</h2>
            <p style={{ color: C.textMid, fontSize: "14px", margin: "0 0 24px", fontFamily: "sans-serif" }}>Saved to candidate_test_result table</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "28px" }}>
              {[["Total", total, C.red], ["Attempted", attempted, C.green], ["Skipped", total - attempted, C.wrong]].map(([l, v, color]) => (
                <div key={l}>
                  <div style={{ fontSize: "34px", fontWeight: "800", fontFamily: "monospace" }}>{v}</div>
                  <div style={{ fontSize: "12px", color: C.textLight, fontWeight: "700", textTransform: "uppercase", fontFamily: "sans-serif" }}>{l}</div>
                </div>
              ))}
            </div>
            <button onClick={onBack} style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none", borderRadius: "10px", padding: "12px 36px", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif" }}>← Home</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Main Screen ───────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
      <TopBar title="Problem Statement" subtitle={`Problem ${cur + 1} of ${total} • 30 min`} timer={fmt} urgent={urgent} onBack={onBack} />
      <ProgressBar value={((cur + 1) / total) * 100} label={`${answers.filter(a => a.trim()).length}/${total} answered`} />

      <div style={{ display: "flex", minHeight: "calc(100vh - 110px)" }}>

        {/* Sidebar — Q1 / Q2 / Q3 */}
        <aside style={{ width: "120px", background: C.white, borderRight: `2px solid ${C.borderSoft}`, padding: "20px 14px", display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: C.red, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 6px", fontFamily: "sans-serif" }}>Sidebar</p>
          {PROBLEMS.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: i === cur ? C.red : answers[i].trim() ? C.redMid : C.white,
              border: `1.5px solid ${i === cur ? C.redDark : C.border}`,
              borderRadius: "8px", padding: "9px 12px",
              color: i === cur ? "#fff" : C.textMid,
              fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif",
            }}>
              <span>Q{i + 1}</span>
              {answers[i].trim() && <span style={{ color: i === cur ? "#fff" : C.green }}>✓</span>}
            </button>
          ))}
          <div style={{ marginTop: "auto", background: C.redSoft, border: `1px solid ${C.borderSoft}`, borderRadius: "10px", padding: "10px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", color: C.red, textTransform: "uppercase", margin: "0 0 8px", fontFamily: "sans-serif" }}>Summary</p>
            {[["Attempted", answers.filter(a => a.trim()).length], ["Remaining", total - answers.filter(a => a.trim()).length]].map(([l, v]) => (
              <p key={l} style={{ fontSize: "12px", color: C.textMid, margin: "3px 0", fontFamily: "sans-serif" }}>{l}: <b>{v}</b></p>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "26px 30px", minWidth: 0 }}>
          {/* Problem card */}
          <div style={{ background: C.white, border: `2px solid ${C.border}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "18px", boxShadow: "0 3px 16px rgba(229,57,53,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ background: C.red, color: "#fff", borderRadius: "8px", padding: "4px 14px", fontSize: "12px", fontWeight: "800", fontFamily: "sans-serif" }}>Problem {p.id}</span>
              <span style={{ fontSize: "16px", fontWeight: "700", color: C.text }}>{p.title}</span>
            </div>
            <p style={{ fontSize: "15px", color: C.textMid, lineHeight: "1.7", margin: 0, fontFamily: "sans-serif" }}>{p.statement}</p>
          </div>

          {/* Answer textarea */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: C.textMid, marginBottom: "8px", fontFamily: "sans-serif" }}>Your Answer (textbox)</label>
            <textarea
              value={answers[cur]}
              onChange={e => { const a = [...answers]; a[cur] = e.target.value; setAnswers(a); }}
              placeholder={"// Write your C# code here...\nusing System;\nclass Program {\n    static void Main() {\n        // your solution\n    }\n}"}
              style={{ width: "100%", height: "240px", background: C.redSoft, border: `2px solid ${C.border}`, borderRadius: "12px", padding: "16px", fontSize: "13px", color: C.redDark, fontFamily: "Courier New, monospace", resize: "vertical", lineHeight: "1.7", outline: "none", boxSizing: "border-box" }}
            />
            <div style={{ textAlign: "right", fontSize: "11px", color: C.textLight, marginTop: "4px", fontFamily: "sans-serif" }}>{answers[cur].length} chars</div>
          </div>

          {/* Action row */}
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <NavBtn label="← Prev" onClick={() => setCur(c => Math.max(0, c - 1))}         disabled={cur === 0} />
              <NavBtn label="Next →" onClick={() => setCur(c => Math.min(total - 1, c + 1))} disabled={cur === total - 1} />
            </div>
            <button onClick={() => setSubmitted(true)} style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none", borderRadius: "10px", padding: "11px 28px", color: "#fff", fontSize: "14px", fontWeight: "800", cursor: "pointer", fontFamily: "sans-serif", boxShadow: "0 4px 14px rgba(229,57,53,0.35)" }}>
              Submit All
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
