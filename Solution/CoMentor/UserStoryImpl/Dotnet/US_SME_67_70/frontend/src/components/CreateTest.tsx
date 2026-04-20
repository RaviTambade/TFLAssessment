import React, { useEffect, useState } from "react";
import "./CreateTest.css";

const API_BASE = "http://localhost:5181/api/CreateTest";

/* ===========================
   STATIC UI DATA
=========================== */
const LAYER_LABELS: Record<string, string> = {
  FE: "Frontend", BE: "Backend", AI: "AI", DB: "Database",
};
const LAYER_ICONS: Record<string, string> = {
  FE: "🖥️", BE: "⚙️", AI: "🤖", DB: "🗄️",
};
const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced"];
const TYPE_COLOR: Record<string, string> = {
  MCQ: "#e53935", "Code Snippets": "#fb8c00",
  "Problem Statement": "#ff7043", "Mini Project": "#e64a19",
};

/* ===========================
   THEME
=========================== */
const T = {
  red: "#e53935",
  orange: "#fb8c00",
  lightOrange: "#fff3e0",
  lightRed: "#ffebee",
  accent: "#ff7043",
  border: "#ffccbc",
  borderRed: "#ef9a9a",
  text: "#3e2723",
  muted: "#8d6e63",
  white: "#ffffff",
  cardBg: "#fffdf9",
  gradient: "linear-gradient(135deg, #fff3e0 0%, #ffebee 100%)",
  headerGrad: "linear-gradient(135deg, #e53935 0%, #fb8c00 100%)",
};

/* ===========================
   TYPES
=========================== */
type Runtime = { id: number; name: string };
type Language = { id: number; name: string };
type Framework = { id: number; name: string };
type Layer = { id: number; name: string; frameworks: Framework[] };
type Concept = { id: number; name: string };
type Question = { id: number; title: string; type: string; level: string; marks?: number };
type LayerTech = Record<string, string>;

/* ===========================
   API HELPERS
=========================== */


const apiGet = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("API Error");
  return res.json();
};




/* ===========================
   COMPONENTS
=========================== */

const SectionCard = ({ title, icon, children }: { title?: string; icon?: string; children: React.ReactNode }) => {
  return (
    <div className="section-card">
      {title && (
        <div className="section-card-header">
          {icon && <span style={{ fontSize: 18 }}>{icon}</span>}
          <span className="title">{title}</span>
        </div>
      )}
      <div className="section-card-body">{children}</div>
    </div>
  );
}

function Pill({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`pill ${selected ? 'selected' : ''}`}>
      {label}
    </button>
  );
}

function StyledInput({ placeholder, value, onChange, type = "text", id, style }: {
  placeholder?: string; value: string | number; onChange: (v: string) => void;
  type?: string; id?: string; style?: React.CSSProperties;
}) {
  return (
    <input id={id} type={type} placeholder={placeholder} value={value}
      onChange={(e) => onChange(e.target.value)}
      className="styled-input"
      style={{ ...style }}
      onFocus={(e) => (e.currentTarget.style.borderColor = T.red)}
      onBlur={(e) => (e.currentTarget.style.borderColor = T.borderRed)}
    />
  );
}

function FieldError({ msg }: { msg: string }) {
  return <p className="field-error">⚠ {msg}</p>;
}

/* ===========================
   HOVER HELPER
=========================== */
// hover behavior handled via CSS classes; no wrapper needed

/* ===========================
   DUAL PANEL QUESTIONS
=========================== */
function DualPanelQuestions({ questions, selected, onSelectionChange }: {
  questions: Question[];
  selected: number[];
  onSelectionChange: (ids: number[]) => void;
}) {
  const [leftChecked, setLeftChecked] = useState<number[]>([]);
  const [rightChecked, setRightChecked] = useState<number[]>([]);

  const unselected = questions.filter((q) => !selected.includes(q.id));
  const selectedQuestions = questions.filter((q) => selected.includes(q.id));

  const toggleLeft = (id: number) =>
    setLeftChecked((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  const toggleRight = (id: number) =>
    setRightChecked((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  const moveRight = () => { onSelectionChange([...selected, ...leftChecked]); setLeftChecked([]); };
  const moveLeft = () => { onSelectionChange(selected.filter((id) => !rightChecked.includes(id))); setRightChecked([]); };

  // panel styles moved to CSS classes

  return (
  <div className="dual-panel">
      {/* LEFT PANEL */}
      <div className="panel">
        <div className="panel-header">Questions ({unselected.length})</div>
        <div className="panel-scroll">
          {unselected.length === 0
            ? <p style={{ color: T.muted, fontSize: 12, padding: "12px 10px" }}>All questions moved →</p>
            : unselected.map((q) => (
              <div key={q.id}>
                <div
                  onClick={() => toggleLeft(q.id)}
                  className={`qp-item ${leftChecked.includes(q.id) ? 'checked' : ''}`}
                >
                  <input type="checkbox" checked={leftChecked.includes(q.id)}
                    onChange={() => toggleLeft(q.id)} onClick={(e) => e.stopPropagation()} />
                  <div>
                    <div className="title">{q.title}</div>
                    <div className="meta">{q.type} · {q.level}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* ARROW BUTTONS */}
      <div className="arrow-buttons">
        <button onClick={moveRight} disabled={leftChecked.length === 0}
          title="Move selected to right" className={`arrow-btn ${leftChecked.length ? 'enabled' : ''}`}>››</button>
        <button onClick={moveLeft} disabled={rightChecked.length === 0}
          title="Remove selected from right" className={`arrow-btn ${rightChecked.length ? 'enabled' : ''}`}>‹‹</button>
      </div>

      {/* RIGHT PANEL */}
      <div className="panel">
        <div className="panel-header">Selected Questions ({selectedQuestions.length})</div>
        <div className="panel-scroll">
          {selectedQuestions.length === 0
            ? <p style={{ color: T.muted, fontSize: 12, padding: "12px 10px" }}>No questions selected yet.</p>
            : selectedQuestions.map((q) => (
              <div key={q.id}>
                <div onClick={() => toggleRight(q.id)} className={`qp-item ${rightChecked.includes(q.id) ? 'checked' : ''}`}>
                  <input type="checkbox" checked={rightChecked.includes(q.id)}
                    onChange={() => toggleRight(q.id)} onClick={(e) => e.stopPropagation()} />
                  <div>
                    <div className="title">{q.title}</div>
                    <div className="meta">{q.type} · {q.level}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

/* ===========================
   MAIN
=========================== */
export default function SMECreateTest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [runtimes, setRuntimes] = useState<Runtime[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [conceptsList, setConceptsList] = useState<Concept[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  const [testName, setTestName] = useState("");
  const [runtime, setRuntime] = useState<Runtime | null>(null);
  const [language, setLanguage] = useState<Language | null>(null);
  const [layerTech, setLayerTech] = useState<LayerTech>({});
  const [skillLevel, setSkillLevel] = useState("");
  const [concepts, setConcepts] = useState<number[]>([]);
  const [examFormat, setExamFormat] = useState("");
  const [selectedQIds, setSelectedQIds] = useState<number[]>([]);
  const [duration, setDuration] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [created, setCreated] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiGet(`${API_BASE}/runtimes`)
      .then(setRuntimes)
      .catch(() => setError("Failed to load runtimes"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!runtime) return;
    apiGet(`${API_BASE}/languages/${runtime.id}`)
      .then(setLanguages).catch(() => setError("Failed to load languages"));
  }, [runtime]);

  useEffect(() => {
    if (!language) return;
    apiGet(`${API_BASE}/layers/${language.id}`)
      .then(setLayers).catch(() => setError("Failed to load layers"));
  }, [language]);

  useEffect(() => {
    const ids = Object.values(layerTech);
    if (!ids.length) return;
    const query = ids.map((id) => `frameworkIds=${id}`).join("&");
    apiGet(`${API_BASE}/concepts?${query}`)
      .then(setConceptsList).catch(() => setError("Failed to load concepts"));
  }, [layerTech]);

  useEffect(() => {
    if (!concepts.length || !examFormat) return;
    const query = concepts.map((id) => `conceptIds=${id}`).join("&");
    apiGet(`${API_BASE}/questions?${query}&type=${examFormat}`)
      .then((qs) => { setQuestions(qs); setSelectedQIds([]); })
      .catch(() => setError("Failed to load questions"));
  }, [concepts, examFormat]);

  // Validation map
  const v = {
    testName: testName.trim() === "",
    runtime: !runtime,
    language: runtime ? !language : false,
    layerTech: language ? Object.keys(layerTech).length === 0 : false,
    skillLevel: Object.keys(layerTech).length > 0 ? skillLevel === "" : false,
    concepts: skillLevel ? concepts.length === 0 : false,
    examFormat: concepts.length > 0 ? examFormat === "" : false,
    questions: examFormat ? selectedQIds.length === 0 : false,
    duration: examFormat ? (duration === "" || isNaN(Number(duration)) || Number(duration) <= 0) : false,
    totalMarks: examFormat ? (totalMarks === "" || isNaN(Number(totalMarks)) || Number(totalMarks) <= 0) : false,
  };
  const isValid = !Object.values(v).some(Boolean);

  const createTest = async () => {
  setShowErrors(true);
  if (!isValid) return;

  const payload = {
    title: testName.trim(),
    duration: parseInt(duration), // important
    skillLevel: skillLevel,
    smeId: 1,
    questionIds: selectedQIds
  };

  console.log(payload);

  try {
    const res = await fetch("http://localhost:5181/api/CreateTest/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    setCreated(true);
  } catch (err) {
    console.error(err);
    setError("Failed to create test");
  }
};

  if (created) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: T.gradient, fontFamily: "'Georgia', serif",
      }}>
        <div style={{
          background: T.white, borderRadius: 20, padding: "48px 56px", textAlign: "center",
          boxShadow: "0 8px 40px rgba(229,57,53,0.15)", border: `2px solid ${T.border}`,
        }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>🎉</div>
          <h2 style={{ color: T.red, fontSize: 26, margin: 0, fontFamily: "'Georgia', serif" }}>
            Test Created Successfully!
          </h2>
          
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh", background: T.gradient,
      fontFamily: "'Georgia', 'Times New Roman', serif", paddingBottom: 56,
    }}>
      {/* Header */}
      <div style={{
        background: T.headerGrad, padding: "22px 40px", marginBottom: 32,
        boxShadow: "0 4px 20px rgba(229,57,53,0.3)",
      }}>
        <h1 style={{ margin: 0, color: T.white, fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>
          🧪 SME — Create Assessment Test
        </h1>
        <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.8)", fontSize: 13 }}>
          Complete all sections to publish your test
        </p>
      </div>

      <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 24px" }}>
        {loading && <div style={{ textAlign: "center", padding: 20, color: T.muted }}>⏳ Loading…</div>}
        {error && (
          <div style={{
            background: T.lightRed, border: `1px solid ${T.borderRed}`,
            borderRadius: 10, padding: "10px 16px", marginBottom: 16, color: T.red, fontSize: 13,
          }}>⚠ {error}</div>
        )}

        {/* TEST NAME */}
        <SectionCard title="Test Name" icon="📝">
          <StyledInput placeholder="e.g. React Advanced Assessment" value={testName}
            onChange={setTestName} style={{ width: "100%", boxSizing: "border-box" }} />
          {showErrors && v.testName && <FieldError msg="Test name is required." />}
        </SectionCard>

        {/* RUNTIME */}
        <SectionCard title="Runtime" icon="⚙️">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {runtimes.map((r) => (
              <Pill key={r.id} label={r.name} selected={runtime?.id === r.id}
                onClick={() => { setRuntime(r); setLanguage(null); setLayerTech({}); setConcepts([]); setSelectedQIds([]); }} />
            ))}
          </div>
          {showErrors && v.runtime && <FieldError msg="Please select a runtime." />}
        </SectionCard>

        {/* LANGUAGE */}
        {runtime && (
          <SectionCard title="Language" icon="💬">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {languages.map((l) => (
                <Pill key={l.id} label={l.name} selected={language?.id === l.id}
                  onClick={() => { setLanguage(l); setLayerTech({}); setConcepts([]); setSelectedQIds([]); }} />
              ))}
            </div>
            {showErrors && v.language && <FieldError msg="Please select a language." />}
          </SectionCard>
        )}

        {/* LAYERS */}
        {language && (
          <SectionCard title="Layers & Frameworks" icon="🗂️">
            {layers.map((layer) => (
              <div key={layer.id} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.orange, marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  {LAYER_ICONS[layer.name]} {LAYER_LABELS[layer.name] || layer.name}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {layer.frameworks.map((fw) => (
                    <Pill key={fw.id} label={fw.name}
                      selected={layerTech[layer.name] === String(fw.id)}
                      onClick={() => setLayerTech((p) => ({ ...p, [layer.name]: String(fw.id) }))} />
                  ))}
                </div>
              </div>
            ))}
            {showErrors && v.layerTech && <FieldError msg="Please select at least one framework." />}
          </SectionCard>
        )}

        {/* SKILL LEVEL */}
        {Object.keys(layerTech).length > 0 && (
          <SectionCard title="Skill Level" icon="🎯">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {SKILL_LEVELS.map((s) => (
                <Pill key={s} label={s} selected={skillLevel === s} onClick={() => setSkillLevel(s)} />
              ))}
            </div>
            {showErrors && v.skillLevel && <FieldError msg="Please select a skill level." />}
          </SectionCard>
        )}

        {/* CONCEPTS */}
        {skillLevel && (
          <SectionCard title="Concepts" icon="💡">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {conceptsList.map((c) => (
                <Pill key={c.id} label={c.name} selected={concepts.includes(c.id)}
                  onClick={() => setConcepts((p) => p.includes(c.id) ? p.filter((x) => x !== c.id) : [...p, c.id])} />
              ))}
            </div>
            {showErrors && v.concepts && <FieldError msg="Please select at least one concept." />}
          </SectionCard>
        )}

        {/* QUESTION TYPE */}
        {concepts.length > 0 && (
          <SectionCard title="Question Type" icon="📋">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {Object.keys(TYPE_COLOR).map((type) => (
                <Pill key={type} label={type} selected={examFormat === type} onClick={() => setExamFormat(type)} />
              ))}
            </div>
            {showErrors && v.examFormat && <FieldError msg="Please select a question type." />}
          </SectionCard>
        )}

        {/* DUAL PANEL QUESTIONS */}
        {examFormat && (
          <SectionCard title="Select Questions" icon="❓">
            {questions.length === 0
              ? <p style={{ color: T.muted, fontSize: 13 }}>No questions found for this selection.</p>
              : <DualPanelQuestions questions={questions} selected={selectedQIds} onSelectionChange={setSelectedQIds} />
            }
            {showErrors && v.questions && <FieldError msg="Please move at least one question to the selected panel." />}
          </SectionCard>
        )}

        {/* FINAL SETTINGS */}
        {examFormat && (
          <SectionCard title="Test Settings" icon="⏱️">
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
              <div style={{ flex: 1, minWidth: 160 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 6 }}>
                  Total Marks
                </label>
                <StyledInput id="totalMarks" type="number" placeholder="e.g. 100"
                  value={totalMarks} onChange={setTotalMarks}
                  style={{ width: "100%", boxSizing: "border-box" }} />
                {showErrors && v.totalMarks && <FieldError msg="Enter a valid total marks value." />}
              </div>

              <div style={{ flex: 1, minWidth: 160 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 6 }}>
                  Duration (minutes)
                </label>
                <StyledInput id="duration" type="number" placeholder="e.g. 60"
                  value={duration} onChange={setDuration}
                  style={{ width: "100%", boxSizing: "border-box" }} />
                {showErrors && v.duration && <FieldError msg="Enter a valid duration in minutes." />}
              </div>
            </div>

            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={createTest}
                style={{
                  padding: "13px 40px", borderRadius: 12, border: "none",
                  background: T.headerGrad, color: T.white, fontSize: 15, fontWeight: 700,
                  cursor: "pointer", letterSpacing: 0.5,
                  boxShadow: "0 4px 16px rgba(229,57,53,0.35)", fontFamily: "inherit",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.target as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(229,57,53,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.target as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(229,57,53,0.35)";
                }}
              >
                🚀 Create Test
              </button>

              {showErrors && !isValid && (
                <span style={{
                  color: T.red, fontSize: 13, fontWeight: 600,
                  background: T.lightRed, padding: "9px 14px", borderRadius: 8,
                  border: `1px solid ${T.borderRed}`,
                }}>
                  ⚠ Please complete all highlighted fields above.
                </span>
              )}
            </div>
          </SectionCard>
        )}
      </div>
    </div>
  );
}
