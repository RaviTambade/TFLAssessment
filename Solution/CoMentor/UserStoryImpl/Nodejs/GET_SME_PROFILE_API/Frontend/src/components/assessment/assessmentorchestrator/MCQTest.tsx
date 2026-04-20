import { useState, useEffect } from "react";
import { C, useCountdown, TopBar, NavBtn, ProgressBar } from "./Shared";

const MCQ_QUESTIONS = [
  { id:  1, q: "Which keyword declares a variable in C#?",                            a: "var",                        b: "let",                    c: "dim",                        d: "define",                   ans: "a" },
  { id:  2, q: "Which method prints output to the console in C#?",                    a: "print()",                    b: "echo()",                 c: "Console.WriteLine()",        d: "System.out.println()",     ans: "c" },
  { id:  3, q: "Which data type stores a single character in C#?",                    a: "string",                     b: "char",                   c: "letter",                     d: "byte",                     ans: "b" },
  { id:  4, q: "What does OOP stand for?",                                            a: "Object Oriented Prog.",      b: "Open Output Process",    c: "Ordered Object Protocol",    d: "Output Oriented Proc.",    ans: "a" },
  { id:  5, q: "Which symbol is used for single-line comments in C#?",                a: "#",                          b: "/*",                     c: "//",                         d: "--",                       ans: "c" },
  { id:  6, q: "Which keyword is used to create an object in C#?",                    a: "create",                     b: "new",                    c: "object",                     d: "make",                     ans: "b" },
  { id:  7, q: "What is the correct way to declare an integer in C#?",                a: "integer x = 5;",             b: "Int x = 5;",             c: "int x = 5;",                 d: "num x = 5;",               ans: "c" },
  { id:  8, q: "Which access modifier makes a member visible only within its class?", a: "public",                     b: "protected",              c: "internal",                   d: "private",                  ans: "d" },
  { id:  9, q: "What keyword is used to inherit a class in C#?",                      a: "extends",                    b: "inherits",               c: ":",                          d: "implements",               ans: "c" },
  { id: 10, q: "Which collection type stores key-value pairs in C#?",                 a: "List",                       b: "Array",                  c: "Dictionary",                 d: "Queue",                    ans: "c" },
  { id: 11, q: "What does the 'static' keyword mean in C#?",                          a: "Cannot be changed",          b: "Belongs to the class",   c: "Runs first",                 d: "Hides from other classes", ans: "b" },
  { id: 12, q: "Which loop is guaranteed to run at least once?",                      a: "for",                        b: "while",                  c: "foreach",                    d: "do-while",                 ans: "d" },
  { id: 13, q: "What is the base class of all classes in C#?",                        a: "Class",                      b: "Base",                   c: "Object",                     d: "System",                   ans: "c" },
  { id: 14, q: "Which keyword is used to handle exceptions in C#?",                   a: "catch",                      b: "handle",                 c: "error",                      d: "rescue",                   ans: "a" },
  { id: 15, q: "What does 'null' represent in C#?",                                   a: "Zero value",                 b: "Empty string",           c: "No reference / no object",   d: "False",                    ans: "c" },
  { id: 16, q: "Which method converts a string to an integer in C#?",                 a: "Convert.ToInt()",            b: "int.Parse()",            c: "Int.Convert()",              d: "ParseInt()",               ans: "b" },
  { id: 17, q: "What is a constructor in C#?",                                        a: "Destroys an object",         b: "A return type",          c: "Called when object is created", d: "A static method",       ans: "c" },
  { id: 18, q: "Which keyword prevents a class from being inherited?",                a: "static",                     b: "abstract",               c: "sealed",                     d: "readonly",                 ans: "c" },
  { id: 19, q: "What is the output of: Console.WriteLine(10 % 3)?",                   a: "3",                          b: "1",                      c: "0",                          d: "2",                        ans: "b" },
  { id: 20, q: "Which namespace contains the List<T> class in C#?",                   a: "System.Array",               b: "System.Data",            c: "System.Collections.Generic", d: "System.Linq",              ans: "c" },
];

export default function MCQTest({ onBack }) {
  const total = MCQ_QUESTIONS.length;
  const [cur, setCur]         = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone]       = useState(false);
  const { fmt, secs, urgent } = useCountdown(20 * 60);
  const q = MCQ_QUESTIONS[cur];

  useEffect(() => { if (secs === 0 && !done) setDone(true); }, [secs, done]);
  const score = MCQ_QUESTIONS.filter(q => answers[q.id] === q.ans).length;

  if (done) {
    return (
      <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
        <TopBar title="MCQ Test" subtitle="Results" onBack={onBack} />
        <div style={{ maxWidth: "460px", margin: "60px auto", padding: "0 20px" }}>
          <div style={{ background: C.white, border: `2px solid ${C.borderSoft}`, borderRadius: "20px", padding: "40px 32px", textAlign: "center", boxShadow: "0 6px 28px rgba(229,57,53,0.1)" }}>
            <div style={{ fontSize: "56px", marginBottom: "14px" }}>🎯</div>
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: C.text, margin: "0 0 8px" }}>Test Complete!</h2>
            <p style={{ color: C.textMid, fontSize: "14px", margin: "0 0 28px", fontFamily: "sans-serif" }}>Saved to candidate_test_result table</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
              {[["Total", total, C.text], ["Correct", score, C.green], ["Wrong", total - score, C.wrong], ["Score", `${Math.round(score / total * 100)}%`, C.red]].map(([label, val, color]) => (
                <div key={label} style={{ background: C.redSoft, border: `1.5px solid ${C.borderSoft}`, borderRadius: "12px", padding: "18px 10px" }}>
                  <div style={{ fontSize: "28px", fontWeight: "800", fontFamily: "monospace" }}>{val}</div>
                  <div style={{ fontSize: "12px", color: C.textLight, fontWeight: "700", textTransform: "uppercase", fontFamily: "sans-serif", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>
            <button onClick={onBack} style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none", borderRadius: "10px", padding: "12px 36px", color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif" }}>← Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>
      <TopBar title="MCQ Test" subtitle={`C# Programming — Question ${cur + 1} of ${total}`} timer={fmt} urgent={urgent} onBack={onBack} />
      <ProgressBar value={((cur + 1) / total) * 100} label={`${cur + 1}/${total}`} />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "28px 24px" }}>
        {/* Question number dots */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "22px", flexWrap: "wrap" }}>
          {MCQ_QUESTIONS.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{
              width: "36px", height: "36px", borderRadius: "50%",
              border: `2px solid ${i === cur ? C.red : answers[MCQ_QUESTIONS[i].id] ? C.border : C.borderSoft}`,
              background: i === cur ? C.red : answers[MCQ_QUESTIONS[i].id] ? C.redMid : C.white,
              color: i === cur ? "#fff" : C.textMid,
              fontSize: "12px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif",
            }}>{i + 1}</button>
          ))}
        </div>

        {/* Question card */}
        <div style={{ background: C.white, border: `2px solid ${C.border}`, borderRadius: "16px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 3px 16px rgba(229,57,53,0.07)" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ background: C.red, color: "#fff", borderRadius: "8px", padding: "4px 12px", fontSize: "13px", fontWeight: "800", whiteSpace: "nowrap", fontFamily: "sans-serif" }}>Q{q.id}</span>
            <p style={{ fontSize: "16px", color: C.text, margin: 0, lineHeight: "1.55", fontWeight: "600" }}>{q.q}</p>
          </div>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
          {["a", "b", "c", "d"].map(opt => {
            const isSelected = answers[q.id] === opt;
            const isCorrect  = done && opt === q.ans;
            const isWrong    = done && isSelected && opt !== q.ans;
            return (
              <button key={opt} onClick={() => { if (!done) setAnswers(prev => ({ ...prev, [q.id]: opt })); }} style={{
                display: "flex", alignItems: "center", gap: "14px",
                background: isCorrect ? C.greenBg : isWrong ? C.wrongBg : isSelected ? C.redLight : C.white,
                border: `2px solid ${isCorrect ? C.greenBdr : isWrong ? C.wrong : isSelected ? C.red : C.borderSoft}`,
                borderRadius: "12px", padding: "14px 18px",
                cursor: done ? "default" : "pointer", textAlign: "left", width: "100%",
              }}>
                <span style={{
                  width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
                  background: isCorrect ? C.green : isWrong ? C.wrong : isSelected ? C.red : C.redSoft,
                  border: `2px solid ${isCorrect ? C.green : isWrong ? C.wrong : isSelected ? C.redDark : C.border}`,
                  color: "#fff", fontSize: "13px", fontWeight: "800",
                  display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif",
                }}>{opt.toUpperCase()}</span>
                <span style={{ fontSize: "15px", color: isCorrect ? C.green : isWrong ? C.wrong : C.text, fontFamily: "sans-serif", fontWeight: isSelected ? "700" : "400" }}>{q[opt]}</span>
                {isCorrect && <span style={{ marginLeft: "auto" }}>✅</span>}
                {isWrong   && <span style={{ marginLeft: "auto" }}>❌</span>}
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <NavBtn label="First"   onClick={() => setCur(0)}                               disabled={cur === 0} />
            <NavBtn label="← Prev" onClick={() => setCur(c => Math.max(0, c - 1))}         disabled={cur === 0} />
            <NavBtn label="Next →" onClick={() => setCur(c => Math.min(total - 1, c + 1))} disabled={cur === total - 1} />
            <NavBtn label="Last"   onClick={() => setCur(total - 1)}                        disabled={cur === total - 1} />
          </div>
          <button onClick={() => setDone(true)} style={{
            background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`, border: "none",
            borderRadius: "10px", padding: "12px 28px", color: "#fff",
            fontSize: "14px", fontWeight: "800", cursor: "pointer",
            boxShadow: "0 4px 14px rgba(229,57,53,0.35)", fontFamily: "sans-serif",
          }}>Submit Test</button>
        </div>
      </div>
    </div>
  );
}
