import React, { useState } from "react";

const RUNTIMES: string[] = [".NET", "Java", "Node.js", "Python"];
const LANGUAGES: Record<string, string[]> = {
  ".NET":    ["C#", "VB.NET"],
  "Java":    ["Java"],
  "Node.js": ["JavaScript", "TypeScript"],
  "Python":  ["Python"],
};
const LAYERS: string[] = ["FE", "BE", "AI", "DB"];
const LAYER_LABELS: Record<string, string> = { FE: "Frontend", BE: "Backend", AI: "AI", DB: "Database" };
const LAYER_ICONS: Record<string, string>  = { FE: "🖥️", BE: "⚙️", AI: "🤖", DB: "🗄️" };

const TECH_MAP: Record<string, Record<string, string[]>> = {
  "C#": {
    FE: ["Blazor", "Razor Pages"],
    BE: ["ASP.NET Core", "Web API", "gRPC"],
    AI: ["ML.NET", "Semantic Kernel"],
    DB: ["Entity Framework Core", "Dapper", "ADO.NET"],
  },
  "VB.NET": { FE: ["Razor Pages"], BE: ["ASP.NET Web Forms"], AI: [], DB: ["ADO.NET"] },
  "Java": {
    FE: ["JSF", "Thymeleaf"],
    BE: ["Spring Boot", "Jakarta EE", "Micronaut"],
    AI: ["Deeplearning4j"],
    DB: ["Hibernate", "JDBC", "MyBatis"],
  },
  "JavaScript": {
    FE: ["React", "Angular", "Vue", "Svelte"],
    BE: ["Express", "NestJS", "Fastify"],
    AI: ["TensorFlow.js"],
    DB: ["Mongoose", "Sequelize", "Knex"],
  },
  "TypeScript": {
    FE: ["React", "Angular", "Next.js"],
    BE: ["NestJS", "tRPC", "Hono"],
    AI: ["TensorFlow.js"],
    DB: ["TypeORM", "Prisma", "Drizzle"],
  },
  "Python": {
    FE: ["Streamlit", "Dash", "Gradio"],
    BE: ["Django", "FastAPI", "Flask"],
    AI: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain"],
    DB: ["SQLAlchemy", "PyMongo", "psycopg2"],
  },
};

const SKILL_LEVELS: string[] = ["Beginner", "Intermediate", "Advanced"];
const LEVEL_ICONS: Record<string, string>  = { Beginner: "🌱", Intermediate: "🌿", Advanced: "🌳" };

const CONCEPTS_BY_LEVEL: Record<string, string[]> = {
  Beginner:     ["Variables & Data Types", "Control Flow", "Functions & Methods", "Exception Handling", "Classes & Objects"],
  Intermediate: ["OOP Principles", "Collections & Generics", "Multithreading", "File I/O", "Design Patterns"],
  Advanced:     ["Database Connectivity", "Memory Management", "Async / Await", "Microservices", "Performance Tuning"],
};

const QUESTION_TYPES: { id: number; label: string; icon: string; marks: number; desc: string }[] = [
  { id: 1, label: "MCQ",               icon: "🔘", marks: 2,  desc: "Multiple choice, auto-graded"    },
  { id: 2, label: "Code Snippets",     icon: "💡", marks: 5,  desc: "Fill-in-blank code challenge"    },
  { id: 3, label: "Problem Statement", icon: "📝", marks: 10, desc: "Write full program from scratch" },
  { id: 4, label: "Mini Project",      icon: "💻", marks: 20, desc: "End-to-end project build"        },
];

type Question = { id: number; title: string; type: string; level: string; marks: number };

const QUESTION_BANK: Record<string, Question[]> = {
  "Variables & Data Types": [
    { id: 101, title: "What is the default value of int in C#?",                     type: "MCQ",               level: "Beginner",     marks: 2  },
    { id: 102, title: "Declare a nullable integer variable and assign null",          type: "Code Snippets",     level: "Beginner",     marks: 5  },
  ],
  "Control Flow": [
    { id: 103, title: "Which loop is guaranteed to run at least once?",               type: "MCQ",               level: "Beginner",     marks: 2  },
    { id: 104, title: "Write a switch-case for grade evaluation (A / B / C / F)",    type: "Code Snippets",     level: "Beginner",     marks: 5  },
  ],
  "Functions & Methods": [
    { id: 105, title: "What is method overloading in C#?",                            type: "MCQ",               level: "Beginner",     marks: 2  },
    { id: 106, title: "Write a recursive function to compute power(x, n)",            type: "Problem Statement", level: "Beginner",     marks: 10 },
  ],
  "Exception Handling": [
    { id: 107, title: "Which exception is thrown on a null reference?",               type: "MCQ",               level: "Beginner",     marks: 2  },
    { id: 108, title: "Write try-catch-finally for a file read operation",            type: "Code Snippets",     level: "Beginner",     marks: 5  },
  ],
  "Classes & Objects": [
    { id: 109, title: "What is a constructor?",                                        type: "MCQ",               level: "Beginner",     marks: 2  },
    { id: 110, title: "Create a Student class with Name, Age and Grade fields",       type: "Code Snippets",     level: "Beginner",     marks: 5  },
  ],
  "OOP Principles": [
    { id: 201, title: "Which keyword enables inheritance in C#?",                     type: "MCQ",               level: "Intermediate", marks: 2  },
    { id: 202, title: "Implement encapsulation on a BankAccount class",               type: "Problem Statement", level: "Intermediate", marks: 10 },
    { id: 203, title: "Build a polymorphic Shape hierarchy (Circle / Rectangle)",     type: "Mini Project",      level: "Intermediate", marks: 20 },
  ],
  "Collections & Generics": [
    { id: 204, title: "Difference between List<T> and ArrayList?",                    type: "MCQ",               level: "Intermediate", marks: 2  },
    { id: 205, title: "Write a generic Stack<T> class with Push/Pop",                 type: "Code Snippets",     level: "Intermediate", marks: 5  },
  ],
  "Multithreading": [
    { id: 206, title: "What is a race condition?",                                     type: "MCQ",               level: "Intermediate", marks: 2  },
    { id: 207, title: "Create a thread-safe counter using the lock keyword",          type: "Code Snippets",     level: "Intermediate", marks: 5  },
  ],
  "Design Patterns": [
    { id: 208, title: "Which pattern ensures a single instance of a class?",          type: "MCQ",               level: "Intermediate", marks: 2  },
    { id: 209, title: "Implement the Singleton pattern in C#",                        type: "Code Snippets",     level: "Intermediate", marks: 5  },
    { id: 210, title: "Build a pluggable logger using the Strategy pattern",          type: "Mini Project",      level: "Intermediate", marks: 20 },
  ],
  "Database Connectivity": [
    { id: 301, title: "What does DbContext represent in EF Core?",                    type: "MCQ",               level: "Advanced",     marks: 2  },
    { id: 302, title: "Connect to SQL Server and run a parameterised query",          type: "Code Snippets",     level: "Advanced",     marks: 5  },
    { id: 303, title: "Build a CRUD REST API with Entity Framework Core",             type: "Mini Project",      level: "Advanced",     marks: 20 },
  ],
  "Async / Await": [
    { id: 304, title: "What does Task.WhenAll() do?",                                 type: "MCQ",               level: "Advanced",     marks: 2  },
    { id: 305, title: "Write an async method to fetch and deserialise a JSON API",    type: "Code Snippets",     level: "Advanced",     marks: 5  },
  ],
  "Memory Management": [
    { id: 306, title: "What is the role of the Garbage Collector in .NET?",           type: "MCQ",               level: "Advanced",     marks: 2  },
    { id: 307, title: "Implement IDisposable for unmanaged resource cleanup",         type: "Problem Statement", level: "Advanced",     marks: 10 },
  ],
};

const C = {
  red: "#e53935", redDark: "#c62828", redLight: "#ffebee",
  redMid: "#ffcdd2", redSoft: "#fff5f5",
  white: "#ffffff", text: "#1a0000", textMid: "#5c1a1a", textLight: "#9e4040",
  border: "#ffb3b3", borderSoft: "#ffd6d6",
  green: "#2e7d32", greenBg: "#f1f8f1", greenBdr: "#81c784",
  gray: "#f5f5f5", grayBdr: "#e0e0e0", grayText: "#757575",
};
const TYPE_COLOR: Record<string, string> = { "MCQ": "#1565c0", "Code Snippets": "#6a1b9a", "Problem Statement": "#e65100", "Mini Project": "#2e7d32" };
const TYPE_BG: Record<string, string>    = { "MCQ": "#e3f2fd", "Code Snippets": "#f3e5f5", "Problem Statement": "#fff3e0", "Mini Project": "#f1f8f1" };

// ── UI Atoms ─────────────────────────────────────────────────────────────────
function Card({ title, children, style = {} }: { title?: string; children?: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: C.white, border: `1.5px solid ${C.borderSoft}`, borderRadius: "14px", padding: "22px 26px", marginBottom: "18px", boxShadow: "0 2px 14px rgba(229,57,53,0.05)", ...style }}>
      {title && <p style={{ margin: "0 0 14px", fontSize: "11px", fontWeight: "800", color: C.red, textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "sans-serif" }}>{title}</p>}
      {children}
    </div>
  );
}

function Pill({ label, selected, onClick, disabled }: { label: string; selected: boolean; onClick: () => void; disabled?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      padding: "9px 20px", borderRadius: "24px",
      border: `2px solid ${selected ? C.red : disabled ? C.grayBdr : C.borderSoft}`,
      background: selected ? C.red : disabled ? C.gray : C.white,
      color: selected ? "#fff" : disabled ? C.grayText : C.textMid,
      fontWeight: selected ? "700" : "400", fontSize: "14px", fontFamily: "sans-serif",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, transition: "all 0.15s",
    }}>{label}</button>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span style={{ fontSize: "11px", fontWeight: "700", padding: "2px 9px", borderRadius: "6px", background: TYPE_BG[text] || C.redSoft, color: TYPE_COLOR[text] || C.red, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>
      {text}
    </span>
  );
}

// ── Animated expand helper ────────────────────────────────────────────────────
function SlideDown({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      overflow: "hidden",
      maxHeight: show ? "600px" : "0",
      opacity: show ? 1 : 0,
      transition: "max-height 0.35s ease, opacity 0.25s ease",
      marginTop: show ? "14px" : "0",
    }}>
      {children}
    </div>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
type QState = Record<number, { selected: boolean; examCount: number }>;
type LayerTech = Record<string, string>;
type OpenLayers = Record<string, boolean>;

// ══════════════════════════════════════════════════════════════════════════════
export default function SMECreateTest({ onCancel }: { onCancel?: () => void }) {
  const [runtime, setRuntime]         = useState<string>("");
  const [language, setLanguage]       = useState<string>("");
  const [layerTech, setLayerTech]     = useState<LayerTech>({});
  const [openLayers, setOpenLayers]   = useState<OpenLayers>({});
  const [skillLevel, setSkillLevel]   = useState<string>("");
  const [concepts, setConcepts]       = useState<string[]>([]);
  const [qState, setQState]           = useState<QState>({});
  const [examFormat, setExamFormat]   = useState<string>("");
  const [duration, setDuration]       = useState<number>(60);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [created, setCreated]         = useState<boolean>(false);

  // ── Derived ───────────────────────────────────────────────────────────────
  const langs       = LANGUAGES[runtime] || [];
  const conceptList = CONCEPTS_BY_LEVEL[skillLevel] || [];

  const allQs: Question[] = concepts.flatMap(c => QUESTION_BANK[c] || [])
    .filter((q, i, arr) => arr.findIndex(x => x.id === q.id) === i);

  const visibleQs   = examFormat ? allQs.filter(q => q.type === examFormat) : allQs;
  const selectedQs  = visibleQs.filter(q => qState[q.id]?.selected);
  const totalMarks  = selectedQs.reduce((s, q) => s + q.marks, 0);
  const totalInExam = selectedQs.reduce((s, q) => s + (qState[q.id]?.examCount || 1), 0);

  const selectedLayers = Object.entries(layerTech).filter(([, t]) => t).length;

  const createEnabled = !!(
    runtime && language && selectedLayers > 0 &&
    skillLevel && concepts.length > 0 && examFormat && selectedQs.length > 0
  );

  // ── Handlers ──────────────────────────────────────────────────────────────
  const toggleQ = (id: number) =>
    setQState(p => ({ ...p, [id]: { selected: !p[id]?.selected, examCount: p[id]?.examCount || 1 } }));

  const changeCount = (id: number, delta: number) =>
    setQState(p => ({ ...p, [id]: { ...p[id], examCount: Math.max(1, (p[id]?.examCount || 1) + delta) } }));

  const toggleConcept = (c: string) => {
    const next = concepts.includes(c) ? concepts.filter(x => x !== c) : [...concepts, c];
    setConcepts(next);
    setQState({});
  };

  const setLayerTechForLayer = (layer: string, tech: string) => {
    setLayerTech(p => ({ ...p, [layer]: tech }));
  };

  const toggleLayerOpen = (layer: string) => {
    const hasTechs = (TECH_MAP[language]?.[layer] || []).length > 0;
    if (!hasTechs) return;
    setOpenLayers(p => ({ ...p, [layer]: !p[layer] }));
  };

  const handleCreate = () => { setShowConfirm(false); setCreated(true); };

  const resetAll = () => {
    setCreated(false); setRuntime(""); setLanguage(""); setLayerTech({});
    setOpenLayers({}); setSkillLevel(""); setConcepts([]);
    setQState({}); setExamFormat(""); setDuration(60);
  };

  // ── Success ───────────────────────────────────────────────────────────────
  if (created) {
    return (
      <div style={{ minHeight: "100vh", background: C.redSoft, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif" }}>
        <div style={{ background: C.white, borderRadius: "24px", padding: "52px 44px", textAlign: "center", maxWidth: "460px", boxShadow: "0 12px 40px rgba(229,57,53,0.12)", border: `2px solid ${C.borderSoft}` }}>
          <div style={{ fontSize: "64px", marginBottom: "16px" }}>🎉</div>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: C.text, margin: "0 0 10px" }}>Test Created!</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "28px" }}>
            {[["Questions", selectedQs.length, C.red], ["Total Marks", totalMarks, C.green], ["Duration", `${duration}m`, C.textMid]].map(([l, v, col]) => (
              <div key={String(l)} style={{ background: C.redSoft, borderRadius: "10px", padding: "14px 8px", border: `1px solid ${C.borderSoft}` }}>
                <div style={{ fontSize: "22px", fontWeight: "800", fontFamily: "monospace" }}>{v}</div>
                <div style={{ fontSize: "10px", color: C.textLight, textTransform: "uppercase", fontWeight: "700", fontFamily: "sans-serif" }}>{l}</div>
              </div>
            ))}
          </div>
          <button onClick={resetAll} style={{ background: `linear-gradient(135deg,${C.red},${C.redDark})`, border: "none", borderRadius: "10px", padding: "12px 32px", color: "#fff", fontSize: "14px", fontWeight: "800", cursor: "pointer", fontFamily: "sans-serif" }}>
            + Create Another Test
          </button>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 1: Runtime & Language
  // ══════════════════════════════════════════════════════════════════════════
  const S0 = (
    <>
      <Card title="Runtime">
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {RUNTIMES.map(r => (
            <Pill key={r} label={r} selected={runtime === r}
              onClick={() => { setRuntime(r); setLanguage(""); setLayerTech({}); setOpenLayers({}); setConcepts([]); setQState({}); }} />
          ))}
        </div>
      </Card>

      {runtime && (
        <Card title={`Language  ·  ${runtime}`} style={{ borderLeft: `4px solid ${C.red}` }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {langs.map(l => (
              <Pill key={l} label={l} selected={language === l}
                onClick={() => { setLanguage(l); setLayerTech({}); setOpenLayers({}); setConcepts([]); setQState({}); }} />
            ))}
          </div>
          {language && (
            <div style={{ marginTop: "10px", padding: "6px 12px", background: C.greenBg, border: `1px solid ${C.greenBdr}`, borderRadius: "8px", fontSize: "12px", color: C.green, fontFamily: "sans-serif", display: "inline-block" }}>
              ✓ {language} selected
            </div>
          )}
        </Card>
      )}
    </>
  );

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 2: Application Layer
  // ══════════════════════════════════════════════════════════════════════════
  const S1 = language && (
    <Card title="Application Layer  ·  Select layers and technologies">
      <p style={{ margin: "0 0 14px", fontSize: "12px", color: C.textLight, fontFamily: "sans-serif" }}>
        Click any layer to expand its technology options. You can select multiple layers — each stores its own technology choice.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {LAYERS.map(layer => {
          const techs = TECH_MAP[language]?.[layer] || [];
          const hasTech = techs.length > 0;
          const isOpen = !!openLayers[layer];
          const chosenTech = layerTech[layer] || "";
          const isChosen = !!chosenTech;

          return (
            <div key={layer} style={{ borderRadius: "12px", overflow: "hidden", border: `2px solid ${isChosen ? C.red : isOpen ? C.borderSoft : C.grayBdr}`, transition: "border-color 0.2s" }}>
              <button
                onClick={() => toggleLayerOpen(layer)}
                disabled={!hasTech}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: "14px",
                  padding: "14px 18px", border: "none", cursor: hasTech ? "pointer" : "not-allowed",
                  background: isChosen ? C.redLight : isOpen ? "#fafafa" : C.white,
                  transition: "background 0.2s",
                }}
              >
                <span style={{ fontSize: "22px" }}>{LAYER_ICONS[layer]}</span>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: isChosen ? C.red : hasTech ? C.text : C.grayText, fontFamily: "sans-serif" }}>
                    {LAYER_LABELS[layer]}
                  </div>
                  {isChosen && (
                    <div style={{ fontSize: "12px", color: C.red, fontFamily: "sans-serif", marginTop: "2px" }}>
                      ✓ {chosenTech}
                    </div>
                  )}
                  {!hasTech && (
                    <div style={{ fontSize: "11px", color: C.grayText, fontFamily: "sans-serif" }}>No technologies for {language}</div>
                  )}
                </div>
                {hasTech && (
                  <span style={{ fontSize: "18px", color: C.textLight, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                    ▾
                  </span>
                )}
              </button>

              <SlideDown show={isOpen && hasTech}>
                <div style={{ padding: "0 18px 16px", background: "#fefefe", borderTop: `1px solid ${C.borderSoft}`, paddingTop: "14px" }}>
                  <p style={{ margin: "0 0 10px", fontSize: "11px", color: C.textLight, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                    Choose technology for {LAYER_LABELS[layer]}
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {techs.map(t => (
                      <button key={t} onClick={() => setLayerTechForLayer(layer, chosenTech === t ? "" : t)} style={{
                        padding: "9px 20px", borderRadius: "24px",
                        border: `2px solid ${chosenTech === t ? C.red : C.borderSoft}`,
                        background: chosenTech === t ? C.red : C.white,
                        color: chosenTech === t ? "#fff" : C.textMid,
                        fontWeight: chosenTech === t ? "700" : "400",
                        fontSize: "14px", fontFamily: "sans-serif", cursor: "pointer", transition: "all 0.15s",
                      }}>{t}</button>
                    ))}
                  </div>
                </div>
              </SlideDown>
            </div>
          );
        })}
      </div>

      {selectedLayers > 0 && (
        <div style={{ marginTop: "16px", padding: "10px 16px", background: C.greenBg, border: `1px solid ${C.greenBdr}`, borderRadius: "10px", fontFamily: "sans-serif" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", color: C.green, marginBottom: "6px", textTransform: "uppercase" }}>✓ {selectedLayers} layer{selectedLayers > 1 ? "s" : ""} configured</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {LAYERS.filter(l => layerTech[l]).map(l => (
              <span key={l} style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "16px", background: C.white, border: `1px solid ${C.greenBdr}`, color: C.green, fontWeight: "600" }}>
                {LAYER_ICONS[l]} {LAYER_LABELS[l]}: <b>{layerTech[l]}</b>
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  );

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 3: Skill Level & Concepts
  // ══════════════════════════════════════════════════════════════════════════
  const S2 = selectedLayers > 0 && (
    <>
      <Card title="Skill Level">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
          {SKILL_LEVELS.map(lvl => {
            const sel = skillLevel === lvl;
            return (
              <button key={lvl} onClick={() => { setSkillLevel(lvl); setConcepts([]); setQState({}); }} style={{
                padding: "22px 10px", borderRadius: "14px", cursor: "pointer",
                border: `2px solid ${sel ? C.red : C.borderSoft}`,
                background: sel ? C.red : C.white, color: sel ? "#fff" : C.text,
                fontWeight: "700", fontFamily: "sans-serif", fontSize: "15px",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                boxShadow: sel ? "0 4px 16px rgba(229,57,53,0.3)" : "none", transition: "all 0.2s",
              }}>
                <span style={{ fontSize: "30px" }}>{LEVEL_ICONS[lvl]}</span>
                {lvl}
              </button>
            );
          })}
        </div>
      </Card>

      {skillLevel && (
        <Card title={`Concepts  ·  ${skillLevel}`} style={{ borderLeft: `4px solid ${C.red}` }}>
          <p style={{ margin: "0 0 14px", fontSize: "12px", color: C.textLight, fontFamily: "sans-serif" }}>
            Select one or more concepts. Questions will be loaded from the bank for each.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {conceptList.map(c => (
              <Pill key={c} label={c} selected={concepts.includes(c)} onClick={() => toggleConcept(c)} />
            ))}
          </div>
          {concepts.length > 0 && (
            <div style={{ marginTop: "12px", padding: "8px 14px", background: C.greenBg, border: `1px solid ${C.greenBdr}`, borderRadius: "8px", fontSize: "12px", color: C.green, fontFamily: "sans-serif" }}>
              ✓ {concepts.length} concept{concepts.length > 1 ? "s" : ""} · {allQs.length} questions available
            </div>
          )}
        </Card>
      )}
    </>
  );

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 4: Exam Format — RADIO (single select)
  // ══════════════════════════════════════════════════════════════════════════
  const S4 = concepts.length > 0 && (
    <Card title="Exam Format  ·  Select one question type">
      <p style={{ margin: "0 0 16px", fontSize: "12px", color: C.textLight, fontFamily: "sans-serif" }}>
        Only one format can be selected per test. The question bank will filter accordingly.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        {QUESTION_TYPES.map(qt => {
          const sel = examFormat === qt.label;
          const col  = TYPE_COLOR[qt.label] || C.red;
          const bg   = TYPE_BG[qt.label]    || C.redLight;
          return (
            <label key={qt.id} onClick={() => setExamFormat(qt.label)} style={{
              display: "flex", alignItems: "flex-start", gap: "14px", cursor: "pointer",
              padding: "18px 20px", borderRadius: "14px",
              border: `2px solid ${sel ? col : C.borderSoft}`,
              background: sel ? bg : C.white, transition: "all 0.15s",
              boxShadow: sel ? `0 4px 16px ${col}30` : "none",
            }}>
              <div style={{
                width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0, marginTop: "3px",
                border: `2px solid ${sel ? col : C.borderSoft}`,
                background: sel ? col : C.white,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}>
                {sel && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />}
              </div>
              <div>
                <div style={{ fontSize: "24px", marginBottom: "4px" }}>{qt.icon}</div>
                <div style={{ fontSize: "15px", fontWeight: "700", color: sel ? col : C.text, fontFamily: "sans-serif" }}>{qt.label}</div>
                <div style={{ fontSize: "12px", color: C.grayText, fontFamily: "sans-serif", marginTop: "3px" }}>{qt.desc}</div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: col, marginTop: "6px", fontFamily: "sans-serif" }}>{qt.marks} marks / question</div>
              </div>
            </label>
          );
        })}
      </div>
    </Card>
  );

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 5: Pick Questions
  // ══════════════════════════════════════════════════════════════════════════
  const byLevel: Record<string, Question[]> = visibleQs.reduce((acc: Record<string, Question[]>, q) => {
    (acc[q.level] = acc[q.level] || []).push(q);
    return acc;
  }, {});

  const S3 = examFormat && (
    <>
      <div style={{ padding: "10px 16px", background: "#fff8e1", border: "1px solid #ffe082", borderRadius: "10px", marginBottom: "16px", fontSize: "12px", color: "#5c4900", fontFamily: "sans-serif" }}>
        ℹ️ Showing <b>{examFormat}</b> questions. Use <b>In Exam</b> counter to control how many times each appears per attempt.
      </div>

      {Object.keys(byLevel).length === 0 && (
        <div style={{ padding: "20px", textAlign: "center", color: C.textLight, fontFamily: "sans-serif", background: C.redSoft, borderRadius: "12px", border: `1px solid ${C.borderSoft}` }}>
          No <b>{examFormat}</b> questions found for the selected concepts.
        </div>
      )}

      {Object.entries(byLevel).map(([lvl, qs]) => (
        <Card key={lvl} title={`${lvl} Questions  (${qs.length} available)`}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {qs.map(q => {
              const st = qState[q.id] || { selected: false, examCount: 1 };
              return (
                <div key={q.id} style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  background: st.selected ? C.redLight : C.white,
                  border: `1.5px solid ${st.selected ? C.red : C.borderSoft}`,
                  borderRadius: "10px", padding: "12px 16px", transition: "all 0.15s",
                }}>
                  <input type="checkbox" checked={!!st.selected} onChange={() => toggleQ(q.id)}
                    style={{ accentColor: C.red, width: "18px", height: "18px", cursor: "pointer", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: C.text, fontFamily: "sans-serif", marginBottom: "5px" }}>{q.title}</div>
                    <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                      <Badge text={q.type} />
                      <span style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "6px", background: C.redSoft, color: C.textLight, fontFamily: "sans-serif" }}>{q.level}</span>
                      <span style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "6px", background: C.greenBg, color: C.green, fontFamily: "sans-serif", fontWeight: "700" }}>{q.marks} marks</span>
                    </div>
                  </div>
                  {st.selected && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", flexShrink: 0 }}>
                      <span style={{ fontSize: "10px", color: C.textLight, fontFamily: "sans-serif" }}>In Exam</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <button onClick={() => changeCount(q.id, -1)} style={ctrBtn}>−</button>
                        <span style={{ minWidth: "28px", textAlign: "center", fontWeight: "800", color: C.red, fontSize: "16px", fontFamily: "monospace" }}>{st.examCount}</span>
                        <button onClick={() => changeCount(q.id, +1)} style={ctrBtn}>+</button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      ))}

      {selectedQs.length > 0 && (
        <div style={{ padding: "12px 20px", background: C.redSoft, border: `1.5px solid ${C.borderSoft}`, borderRadius: "10px", display: "flex", gap: "24px", flexWrap: "wrap", fontFamily: "sans-serif" }}>
          {[["Selected", selectedQs.length, C.red], ["Appear per exam", totalInExam, C.textMid], ["Total marks", totalMarks, C.green]].map(([l, v, col]) => (
            <div key={String(l)}><span style={{ fontSize: "12px", color: C.textLight }}>{l}: </span><b style={{ color: String(col), fontSize: "15px" }}>{v}</b></div>
          ))}
        </div>
      )}
    </>
  );

  // ══════════════════════════════════════════════════════════════════════════
  //  SECTION 6: Duration + Create
  // ══════════════════════════════════════════════════════════════════════════
  const S5 = selectedQs.length > 0 && (
    <>
      <Card title="Exam Settings">
        <div>
          <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: C.textMid, marginBottom: "6px", fontFamily: "sans-serif" }}>Duration (minutes)</label>
          <input type="number" min="10" max="300" value={duration} onChange={e => setDuration(Number(e.target.value))}
            style={{ width: "120px", padding: "12px", border: `2px solid ${C.border}`, borderRadius: "10px", fontSize: "15px", color: C.red, fontWeight: "700", outline: "none", textAlign: "center", fontFamily: "monospace" }} />
        </div>
      </Card>
      <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "4px", flexWrap: "wrap" }}>
        <button onClick={() => setShowConfirm(true)} disabled={!createEnabled} style={{
          background: createEnabled ? `linear-gradient(135deg,${C.red},${C.redDark})` : C.grayBdr,
          border: "none", borderRadius: "10px", padding: "12px 28px", color: "#fff",
          fontSize: "14px", fontWeight: "800", cursor: createEnabled ? "pointer" : "not-allowed",
          boxShadow: createEnabled ? "0 4px 14px rgba(229,57,53,0.35)" : "none", fontFamily: "sans-serif",
        }}>Create Test ✓</button>
        <button onClick={onCancel || (() => {})} style={{ background: C.white, border: `2px solid ${C.grayBdr}`, borderRadius: "10px", padding: "12px 22px", color: C.grayText, fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif" }}>
          Cancel
        </button>
      </div>
    </>
  );

  // ══════════════════════════════════════════════════════════════════════════
  //  RENDER
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div style={{ minHeight: "100vh", background: C.redSoft, fontFamily: "Georgia, serif" }}>

      {/* Top bar */}
      <div style={{ background: `linear-gradient(135deg,${C.red} 0%,${C.redDark} 100%)`, padding: "14px 32px", boxShadow: "0 4px 20px rgba(229,57,53,0.3)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
        <div>
          <div style={{ fontSize: "18px", fontWeight: "800", color: "#fff" }}>SME — Create Test</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "1px" }}>Assessment Orchestrator → Test Builder</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {runtime  && <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "16px", padding: "4px 12px", color: "#fff", fontSize: "12px", fontFamily: "sans-serif" }}>{runtime}{language ? ` / ${language}` : ""}</span>}
          {selectedLayers > 0 && <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "16px", padding: "4px 12px", color: "#fff", fontSize: "12px", fontFamily: "sans-serif" }}>{selectedLayers} layer{selectedLayers > 1 ? "s" : ""}</span>}
          {skillLevel && <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "16px", padding: "4px 12px", color: "#fff", fontSize: "12px", fontFamily: "sans-serif" }}>{skillLevel}</span>}
          {examFormat && <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "16px", padding: "4px 12px", color: "#fff", fontSize: "12px", fontFamily: "sans-serif" }}>{examFormat}</span>}
        </div>
      </div>

      {/* Progress hint */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.borderSoft}`, padding: "10px 32px", display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
        {[
          ["Runtime", !!runtime],
          ["Language", !!language],
          ["Layer & Tech", selectedLayers > 0],
          ["Skill Level", !!skillLevel],
          ["Concepts", concepts.length > 0],
          ["Exam Format", !!examFormat],
          ["Questions", selectedQs.length > 0],
        ].map(([label, done], i) => (
          <React.Fragment key={String(label)}>
            <span style={{ fontSize: "11px", fontFamily: "sans-serif", color: done ? C.green : C.grayText, fontWeight: done ? "700" : "400" }}>
              {done ? "✓ " : `${i + 1}. `}{label}
            </span>
            {i < 6 && <span style={{ color: C.borderSoft, fontSize: "12px" }}>›</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "36px 24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "800", color: C.text, margin: "0 0 22px" }}>Build Assessment</h2>
        {S0}
        {S1}
        {S2}
        {S4}
        {S3}
        {S5}
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }}>
          <div style={{ background: C.white, borderRadius: "20px", padding: "40px 36px", maxWidth: "480px", width: "90%", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", textAlign: "center" }}>
            <div style={{ fontSize: "52px", marginBottom: "12px" }}>📋</div>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: C.text, margin: "0 0 16px" }}>Create Assessment?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px", textAlign: "left" }}>
              {[
                ["Runtime / Language", `${runtime} / ${language}`],
                ["Layers configured",  `${selectedLayers} layer${selectedLayers > 1 ? "s" : ""}`],
                ["Skill Level",        skillLevel],
                ["Concepts",           concepts.length],
                ["Exam Format",        examFormat],
                ["Questions",          selectedQs.length],
                ["Total Marks",        totalMarks],
                ["Duration",           `${duration} min`],
              ].map(([l, v]) => (
                <div key={String(l)} style={{ background: C.redSoft, borderRadius: "8px", padding: "8px 12px" }}>
                  <div style={{ fontSize: "10px", color: C.textLight, fontFamily: "sans-serif", textTransform: "uppercase" }}>{l}</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: C.text, fontFamily: "sans-serif" }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "12px", padding: "10px 14px", background: C.greenBg, border: `1px solid ${C.greenBdr}`, borderRadius: "8px", textAlign: "left" }}>
              <div style={{ fontSize: "11px", fontWeight: "700", color: C.green, marginBottom: "6px", fontFamily: "sans-serif", textTransform: "uppercase" }}>Layer Technologies</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {LAYERS.filter(l => layerTech[l]).map(l => (
                  <span key={l} style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "12px", background: C.white, border: `1px solid ${C.greenBdr}`, color: C.green, fontFamily: "sans-serif" }}>
                    {LAYER_ICONS[l]} {layerTech[l]}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ maxHeight: "200px", overflow: "auto", textAlign: "left", marginBottom: "16px" }}>
              <div style={{ fontSize: "12px", fontWeight: "800", color: C.textMid, margin: "6px 0 8px", fontFamily: "sans-serif" }}>Selected Questions ({selectedQs.length})</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {selectedQs.map((q, i) => (
                  <div key={q.id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", background: C.redSoft, border: `1px solid ${C.borderSoft}`, borderRadius: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: C.textLight, minWidth: "20px", fontFamily: "monospace" }}>#{i + 1}</span>
                    <span style={{ flex: 1, fontSize: "12px", color: C.text, fontFamily: "sans-serif" }}>{q.title}</span>
                    <Badge text={q.type} />
                    <span style={{ fontSize: "11px", color: C.green, fontWeight: "700", fontFamily: "sans-serif" }}>{q.marks}m</span>
                    <span style={{ fontSize: "11px", color: C.textLight, fontFamily: "sans-serif" }}>×{qState[q.id]?.examCount || 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: "12px", color: C.textLight, fontFamily: "sans-serif", margin: "0 0 22px" }}>
              This will save to <code style={{ fontSize: "11px" }}>assessment_orchestrator_db.tests</code>
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button onClick={handleCreate} style={{ background: `linear-gradient(135deg,${C.red},${C.redDark})`, border: "none", borderRadius: "10px", padding: "12px 28px", color: "#fff", fontSize: "14px", fontWeight: "800", cursor: "pointer", fontFamily: "sans-serif" }}>
                ✓ Create Test
              </button>
              <button onClick={() => setShowConfirm(false)} style={{ background: C.white, border: `2px solid ${C.grayBdr}`, borderRadius: "10px", padding: "12px 24px", color: C.grayText, fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "sans-serif" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ctrBtn: React.CSSProperties = {
  width: "26px", height: "26px", border: `1px solid #ffb3b3`,
  borderRadius: "5px", background: "#fff", color: "#e53935",
  fontWeight: "700", cursor: "pointer", fontSize: "16px",
  display: "flex", alignItems: "center", justifyContent: "center",
};