import { useState, useEffect } from "react";
import { C, useCountdown, TopBar, NavBtn, ProgressBar } from "./Shared";

const MINI_PROJECTS = [
  { id: 1, title: "Student Grade Calculator", duration: 30, statement: "Build a C# program that takes a student's name and marks for 5 subjects, calculates the total, percentage, and assigns a grade (A/B/C/D/F). Display a formatted result card.", hint: "Use arrays for marks. Grade: A=90+, B=75+, C=60+, D=40+, F=below 40" },
  { id: 2, title: "Simple Bank Account",       duration: 30, statement: "Create a C# class BankAccount with properties for AccountHolder and Balance. Implement Deposit(), Withdraw() (with insufficient funds check), and PrintStatement() methods.", hint: "Use a class with private fields. Throw an exception or print an error for invalid withdrawals." },
  { id: 3, title: "Number Guessing Game",      duration: 30, statement: "Write a C# console game where the computer picks a random number 1–100 and the user guesses. Give 'Too High' / 'Too Low' hints and count the number of attempts.", hint: "Use Random class, a while loop, and int.Parse() to read user input." },
];

export default function MiniProject({ onBack }) {
  const total = MINI_PROJECTS.length;
  const [cur, setCur]             = useState(0);
  const [answers, setAnswers]     = useState(Array(total).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint]   = useState(false);
  const { fmt, secs, urgent }     = useCountdown(30 * 60);
  const pct = Math.round((secs / (30 * 60)) * 100);
  const p = MINI_PROJECTS[cur];

  useEffect(() => { setShowHint(false); }, [cur]);

  // ── Result Screen ─────────────────────────────────────────
  if (submitted) {
    const attempted = answers.filter(a => a.trim().length > 0).length;
    return (
      <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
        <TopBar title="Mini Project" subtitle="Submission Complete" onBack={onBack} />
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "0 20px" }}>
          <div style={{ background: C.white, border: `2px solid ${C.borderSoft}`, borderRadius: "20px", padding: "36px 32px", textAlign: "center", boxShadow: "0 6px 28px rgba(229,57,53,0.1)" }}>
            <div style={{ fontSize: "52px", marginBottom: "12px" }}>🏆</div>
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: C.text, margin: "0 0 8px" }}>Project Submitted!</h2>
            <p style={{ color: C.textMid, fontSize: "14px", margin: "0 0 24px", fontFamily: "sans-serif" }}>Saved to candidate_test_result table</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "28px" }}>
              {[["Total", total, C.red], ["Attempted", attempted, C.green], ["Skipped", total - attempted, C.wrong]].map(([l, v, color]) => (
                <div key={l}>
                  <div style={{ fontSize: "34px", fontWeight: "800", fontFamily: "monospace" }}>{v}</div>
                  <div style={{ fontSize: "12px", color: C.textLight, fontWeight: "700", textTransform: "uppercase", fontFamily: "sans-serif" }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px", textAlign: "left" }}>
              {MINI_PROJECTS.map((mp, i) => (
                <div key={i} style={{ background: answers[i].trim() ? C.greenBg : C.wrongBg, border: `1.5px solid ${answers[i].trim() ? C.greenBdr : C.border}`, borderRadius: "8px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "16px" }}>{answers[i].trim() ? "✅" : "⬜"}</span>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: C.text, fontFamily: "sans-serif" }}>P{i + 1}: {mp.title}</div>
                    <div style={{ fontSize: "11px", color: C.textLight, fontFamily: "sans-serif" }}>{answers[i].trim() ? `${answers[i].length} chars written` : "Not attempted"}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={onBack} style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none", borderRadius: "10px", padding: "12px 36px", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif" }}>← Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Main Screen ───────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
      <TopBar title="Mini Project" subtitle={`Project ${cur + 1} of ${total} • ${p.duration} min`} timer={fmt} urgent={urgent} onBack={onBack} />
      <ProgressBar value={((cur + 1) / total) * 100} label={`${answers.filter(a => a.trim()).length}/${total} attempted`} />

      <div style={{ display: "flex", minHeight: "calc(100vh - 110px)" }}>

        {/* Sidebar — P1 / P2 / P3 */}
        <aside style={{ width: "120px", background: C.white, borderRight: `2px solid ${C.borderSoft}`, padding: "20px 14px", display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: C.red, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px", fontFamily: "sans-serif" }}>Projects</p>
          {MINI_PROJECTS.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: i === cur ? C.red : answers[i].trim() ? C.redMid : C.white,
              border: `1.5px solid ${i === cur ? C.redDark : C.border}`,
              borderRadius: "8px", padding: "9px 12px",
              color: i === cur ? "#fff" : C.textMid,
              fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif",
            }}>
              <span>P{i + 1}</span>
              {answers[i].trim() && <span style={{ color: i === cur ? "#fff" : C.green }}>✓</span>}
            </button>
          ))}

          {/* Timer ring */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "8px", gap: "4px" }}>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="32" fill="none" stroke={C.redMid} strokeWidth="6" />
              <circle cx="40" cy="40" r="32" fill="none"
                stroke={urgent ? C.wrong : C.red} strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 32}`}
                strokeDashoffset={`${2 * Math.PI * 32 * (1 - pct / 100)}`}
                strokeLinecap="round" transform="rotate(-90 40 40)"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
              <text x="40" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill={urgent ? C.wrong : C.red}>{pct}%</text>
            </svg>
            <p style={{ fontSize: "11px", color: C.textLight, margin: 0, fontFamily: "sans-serif" }}>Time left</p>
          </div>

          {/* Summary */}
          <div style={{ marginTop: "auto", background: C.redSoft, border: `1px solid ${C.borderSoft}`, borderRadius: "10px", padding: "12px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", color: C.red, textTransform: "uppercase", margin: "0 0 6px", fontFamily: "sans-serif" }}>Summary</p>
            {[["Attempted", answers.filter(a => a.trim()).length], ["Remaining", total - answers.filter(a => a.trim()).length]].map(([l, v]) => (
              <p key={l} style={{ fontSize: "12px", color: C.textMid, margin: "3px 0", fontFamily: "sans-serif" }}>{l}: <b>{v}</b></p>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "26px 30px", minWidth: 0 }}>

          {/* Info strip */}
          <div style={{ background: C.white, border: `1px solid ${C.borderSoft}`, borderRadius: "10px", padding: "10px 18px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", color: C.textMid, fontFamily: "sans-serif" }}>📁 Duration: {p.duration} Minutes</span>
            <span style={{ fontSize: "11px", color: C.textLight, fontStyle: "italic", fontFamily: "sans-serif" }}>Saves to candidate_test_result</span>
          </div>

          {/* Project card */}
          <div style={{ background: C.white, border: `2px solid ${C.border}`, borderRadius: "16px", padding: "22px 24px", marginBottom: "18px", boxShadow: "0 3px 16px rgba(229,57,53,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ background: C.red, color: "#fff", borderRadius: "8px", padding: "4px 14px", fontSize: "12px", fontWeight: "800", fontFamily: "sans-serif" }}>Project {p.id}</span>
                <span style={{ fontSize: "16px", fontWeight: "700", color: C.text }}>{p.title}</span>
              </div>
              <button onClick={() => setShowHint(h => !h)} style={{ background: "transparent", border: `1.5px solid ${C.border}`, borderRadius: "7px", padding: "5px 12px", color: C.red, fontSize: "12px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif" }}>
                {showHint ? "Hide Hint" : "💡 Hint"}
              </button>
            </div>
            <p style={{ fontSize: "15px", color: C.textMid, lineHeight: "1.7", margin: 0, fontFamily: "sans-serif" }}>{p.statement}</p>
            {showHint && (
              <div style={{ marginTop: "12px", background: "#fffde7", border: "1.5px solid #fdd835", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "#5c4900", fontFamily: "sans-serif" }}>
                💡 <b>Hint:</b> {p.hint}
              </div>
            )}
          </div>

          {/* Code editor */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: C.textMid, marginBottom: "8px", fontFamily: "sans-serif" }}>Your Answer — Write code below</label>
            <textarea
              value={answers[cur]}
              onChange={e => { const a = [...answers]; a[cur] = e.target.value; setAnswers(a); }}
              placeholder={"// Write your C# code here...\nusing System;\nclass Program {\n    static void Main() {\n        // your solution\n    }\n}"}
              style={{ width: "100%", height: "260px", background: C.redSoft, border: `2px solid ${C.border}`, borderRadius: "12px", padding: "16px", fontSize: "13px", color: C.redDark, fontFamily: "Courier New, monospace", resize: "vertical", lineHeight: "1.7", outline: "none", boxSizing: "border-box" }}
            />
            <div style={{ textAlign: "right", fontSize: "11px", color: C.textLight, marginTop: "4px", fontFamily: "sans-serif" }}>{answers[cur].length} characters</div>
          </div>

          {/* Action row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <NavBtn label="← Prev" onClick={() => setCur(c => Math.max(0, c - 1))}         disabled={cur === 0} />
              <NavBtn label="Next →" onClick={() => setCur(c => Math.min(total - 1, c + 1))} disabled={cur === total - 1} />
            </div>
            <button onClick={() => setSubmitted(true)} style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none", borderRadius: "10px", padding: "12px 28px", color: "#fff", fontSize: "14px", fontWeight: "800", cursor: "pointer", fontFamily: "sans-serif", boxShadow: "0 4px 14px rgba(229,57,53,0.35)" }}>
              Submit Project
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
