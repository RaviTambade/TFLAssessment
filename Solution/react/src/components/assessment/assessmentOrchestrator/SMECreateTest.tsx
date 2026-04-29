import { useEffect, useState } from "react";
import "./SMECreateTest.css";

/* ==================================================
   API ROUTES
================================================== */
const API = {
  runtimes: "http://localhost:5201/api/Runtimes/runtimes",
  languages: (runtimeId: number) =>
    `http://localhost:5201/api/Languages/${runtimeId}`,

  layers: (languageId: number) =>
    `http://localhost:5201/api/Layers/${languageId}`,

  concepts: (frameworkIds: string[]) =>
    `http://localhost:5201/api/Concepts/concepts?${frameworkIds
      .map((id) => `frameworkIds=${id}`)
      .join("&")}`,

  // questions: (conceptIds: number[], type: string) =>
  //   `http://localhost:5201/api/CreateTest/questions?${conceptIds
  //     .map((id) => `conceptIds=${id}`)
  //     .join("&")}&type=${type}`,

      questions: (conceptIds: number[], type: string, level: string) =>
  `http://localhost:5201/api/CreateTest/questions?${conceptIds
    .map((id) => `conceptIds=${id}`)
    .join("&")}&type=${type}&difficulty=${level}`,

  createTest: "http://localhost:5201/api/CreateTest/create",
};

/* ==================================================
   TYPES
================================================== */
type Runtime = {
  id: number;
  name: string;
};

type Language = {
  id: number;
  name: string;
};

type Framework = {
  id: number;
  name: string;
};

type Layer = {
  id: number;
  name: string;
  frameworks: Framework[];
};

type Concept = {
  id: number;
  name: string;
};

type Question = {
  id: number;
  title: string;
  type: string;
  level: string;
};

type LayerTech = Record<string, string>;

/* ==================================================
   COMPONENT
================================================== */
export default function SMECreateTest() {
  /* ---------------------------
     STATES
  --------------------------- */
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
  const [created, setCreated] = useState(false);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [description, setDescription] = useState("");

  /* ==================================================
     LOAD RUNTIMES
  ================================================== */
  useEffect(() => {
    const fetchRuntimes = async () => {
      try {
        setLoading(true);

        const response = await fetch(API.runtimes);
        const data = await response.json();

        setRuntimes(data);
      } catch {
        setError("Failed to load runtimes");
      } finally {
        setLoading(false);
      }
    };

    fetchRuntimes();
  }, []);

  /* ==================================================
     LOAD LANGUAGES
  ================================================== */
  useEffect(() => {
    if (!runtime) return;

    const fetchLanguages = async () => {
      try {
        const response = await fetch(API.languages(runtime.id));
        const data = await response.json();

        setLanguages(data);
      } catch {
        setError("Failed to load languages");
      }
    };

    fetchLanguages();
  }, [runtime]);

  /* ==================================================
     LOAD LAYERS
  ================================================== */
  useEffect(() => {
    if (!language) return;

    const fetchLayers = async () => {
      try {
        const response = await fetch(API.layers(language.id));
        const data = await response.json();

        setLayers(data);
      } catch {
        setError("Failed to load layers");
      }
    };

    fetchLayers();
  }, [language]);

  /* ==================================================
     LOAD CONCEPTS
  ================================================== */
  useEffect(() => {
    const ids = Object.values(layerTech);
    if (!ids.length) return;

    const fetchConcepts = async () => {
      try {
        const response = await fetch(API.concepts(ids));
        const data = await response.json();

        setConceptsList(data);
      } catch {
        setError("Failed to load concepts");
      }
    };

    fetchConcepts();
  }, [layerTech]);


  useEffect(() => {
  if (!concepts.length || !examFormat || !skillLevel) return;  // also wait for skillLevel

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API.questions(concepts, examFormat, skillLevel));
      
      if (!response.ok) {
        setError(`Failed to load questions (${response.status})`);
        setQuestions([]);
        return;
      }

      const data = await response.json();
      setQuestions(Array.isArray(data) ? data : []);  // guard against non-array
      setSelectedQIds([]);
    } catch {
      setError("Failed to load questions");
      setQuestions([]);
    }
  };

  fetchQuestions();
}, [concepts, examFormat, skillLevel]);

  /* ==================================================
     CREATE TEST
  ================================================== */
  const createTest = async () => {
    try {
      const payload = {
        title: testName,
        duration: Number(duration),
        skillLevel,
        smeId: 1,
        questionIds: selectedQIds,
          description, 
      };

      const response = await fetch(API.createTest, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error();
      }

      setCreated(true);
    } catch {
      setError("Failed to create test");
    }
  };
  /* ==================================================
     UI HELPERS
  ================================================== */
  const resetDownstream = (level: "runtime" | "language") => {
    setCreated(false);
    setError("");
    setQuestions([]);
    setSelectedQIds([]);
    setCheckedIds([]);
    setDuration("");
    setTestName("");
    setDescription("");

    if (level === "runtime") {
      setLanguages([]);
      setLanguage(null);
      setLayers([]);
      setLayerTech({});
      setConceptsList([]);
      setConcepts([]);
      setExamFormat("");
      setSkillLevel("");

    }

    if (level === "language") {
      setLayers([]);
      setLayerTech({});
      setConceptsList([]);
      setConcepts([]);
      setExamFormat("");
      setSkillLevel("");

    }
  };

  const handleSelectRuntime = (r: Runtime) => {
    if (runtime?.id === r.id) return;
    setRuntime(r);
    resetDownstream("runtime");
  };

  const handleSelectLanguage = (l: Language) => {
    if (language?.id === l.id) return;
    setLanguage(l);
    resetDownstream("language");
  };

  const toggleFrameworkSelection = (layerId: number, fw: Framework) => {
    setLayerTech((prev) => {
      const cur = prev[String(layerId)];
      const next = { ...prev };

      // toggle: if already selected, remove; otherwise set
      if (cur && cur === String(fw.id)) {
        delete next[String(layerId)];
      } else {
        next[String(layerId)] = String(fw.id);
      }

      return next;
    });

    // Clear downstream concepts/questions while concepts reload
    setConceptsList([]);
    setConcepts([]);
    setQuestions([]);
    setSelectedQIds([]);
  };

  const toggleConcept = (conceptId: number) => {
    setConcepts((prev) => {
      if (prev.includes(conceptId)) return prev.filter((p) => p !== conceptId);
      return [...prev, conceptId];
    });
  };

  const availableQuestions = questions.filter((q) => !selectedQIds.includes(q.id));
  const selectedQuestions = questions.filter((q) => selectedQIds.includes(q.id));

  const [selectedCheckedIds, setSelectedCheckedIds] = useState<number[]>([]);

  const moveToSelected = () => {
    if (!checkedIds.length) return;
    setSelectedQIds((prev) => [...prev, ...checkedIds.filter((id) => !prev.includes(id))]);
    setCheckedIds([]);
  };

  const moveToAvailable = () => {
    if (!selectedCheckedIds.length) return;
    setSelectedQIds((prev) => prev.filter((id) => !selectedCheckedIds.includes(id)));
    setSelectedCheckedIds([]);
  };

  /* ==================================================
     UI
  ================================================== */
  return (
    <div className="create-root">
      <div className="create-header">
        <div className="create-container">
          <h1>Create Test</h1>
          <p className="muted-text">Build an assessment by selecting runtime, language, topics and questions.</p>
        </div>
      </div>

      <div className="create-container">
        {loading && <div className="loading-box">Loading...</div>}
        {error && <div className="error-box">{error}</div>}

        <div className="section-card">
          <div className="section-card-header">
            <div className="title">1. Runtime</div>
          </div>
          <div className="section-card-body">
            {runtimes.length === 0 && <div className="muted-text">No runtimes available.</div>}
            <div className="wrap">
              {runtimes.map((r) => (
                <button
                  key={r.id}
                  className={`pill ${runtime?.id === r.id ? "selected" : ""}`}
                  onClick={() => handleSelectRuntime(r)}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="section-card">
          <div className="section-card-header">
            <div className="title">2. Language</div>
          </div>
          <div className="section-card-body">
            {!runtime && <div className="muted-text">Select a runtime first.</div>}
            <div className="wrap">
              {languages.map((l) => (
                <button
                  key={l.id}
                  className={`pill ${language?.id === l.id ? "selected" : ""}`}
                  onClick={() => handleSelectLanguage(l)}
                  disabled={!runtime}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="section-card">
          <div className="section-card-header">
            <div className="title">3. Layers & Frameworks</div>
          </div>
          <div className="section-card-body">
            {!language && <div className="muted-text">Select a language to see layers.</div>}
            <div>
              {layers.map((layer) => (
                <div key={layer.id} style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 700, color: "#b71c1c", marginBottom: 6 }}>{layer.name}</div>
                  <div className="wrap">
                    {layer.frameworks.map((fw) => {
                      const selected = layerTech[String(layer.id)] === String(fw.id);
                      return (
                        <button
                          key={fw.id}
                          className={`pill ${selected ? "selected" : ""}`}
                          onClick={() => toggleFrameworkSelection(layer.id, fw)}
                          disabled={!language}
                        >
                          {fw.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-card">
          <div className="section-card-header">
            <div className="title">4. Concepts</div>
          </div>
          <div className="section-card-body">
            {conceptsList.length === 0 && <div className="muted-text">Select frameworks to load concepts.</div>}
            <div className="panel-scroll">
              {conceptsList.map((c) => (
                <label key={c.id} style={{ display: "block", marginBottom: 8, cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={concepts.includes(c.id)}
                    onChange={() => toggleConcept(c.id)}
                    style={{ marginRight: 8 }}
                  />
                  <span style={{ fontWeight: 600 }}>{c.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="section-card">
          <div className="section-card-header">
            <div className="title">5. Questions</div>
          </div>
          <div className="section-card-body">
            <div style={{ marginBottom: 12 }} className="muted-text">Choose exam format and skill-level, then select questions.</div>

            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#b71c1c", marginBottom: 8 }}>Exam Format</div>
                <div className="wrap">
                  <button className={`pill ${examFormat === "mcq" ? "selected" : ""}`} onClick={() => setExamFormat("mcq")}>
                    MCQ
                  </button>
                  <button className={`pill ${examFormat === "coding" ? "selected" : ""}`} onClick={() => setExamFormat("coding")}>
                    Coding
                  </button>
                </div>
              </div>

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#b71c1c", marginBottom: 8 }}>Skill Level</div>
                <div className="wrap">
                  <button className={`pill ${skillLevel === "Beginner" ? "selected" : ""}`} onClick={() => setSkillLevel("Beginner")}>
                    Beginner
                  </button>
                  <button className={`pill ${skillLevel === "Intermediate" ? "selected" : ""}`} onClick={() => setSkillLevel("Intermediate")}>
                    Intermediate
                  </button>
                  <button className={`pill ${skillLevel === "Advance" ? "selected" : ""}`} onClick={() => setSkillLevel("Advance")}>
                    Advanced
                  </button>
                </div>
              </div>
            </div>

            <div className="dual-panel">
              <div className="panel">
                <div className="panel-header">Available</div>
                <div className="panel-scroll">
                  {availableQuestions.map((q) => (
                    <div
                      key={q.id}
                      className={`qp-item ${checkedIds.includes(q.id) ? "checked" : ""}`}
                      onClick={() => {
                        setCheckedIds((prev) => (prev.includes(q.id) ? prev.filter((i) => i !== q.id) : [...prev, q.id]));
                      }}
                    >
                      <input type="checkbox" checked={checkedIds.includes(q.id)} readOnly />
                      <div>
                        <div className="title">{q.title}</div>
                        <div className="meta">{q.type} • {q.level}</div>
                      </div>
                    </div>
                  ))}
                  {availableQuestions.length === 0 && <div className="muted-text">No questions available for the selected concepts/format/level.</div>}
                </div>
              </div>

              <div className="arrow-buttons">
                <button className={`arrow-btn ${checkedIds.length ? "enabled" : ""}`} onClick={moveToSelected} disabled={!checkedIds.length}>
                  &gt;
                </button>
                <button className={`arrow-btn ${selectedCheckedIds.length ? "enabled" : ""}`} onClick={moveToAvailable} disabled={!selectedCheckedIds.length}>
                  &lt;
                </button>
              </div>

              <div className="panel">
                <div className="panel-header">Selected</div>
                <div className="panel-scroll">
                  {selectedQuestions.map((q) => (
                    <div
                      key={q.id}
                      className={`qp-item ${selectedCheckedIds.includes(q.id) ? "checked" : ""}`}
                      onClick={() => {
                        setSelectedCheckedIds((prev) => (prev.includes(q.id) ? prev.filter((i) => i !== q.id) : [...prev, q.id]));
                      }}
                    >
                      <input type="checkbox" checked={selectedCheckedIds.includes(q.id)} readOnly />
                      <div>
                        <div className="title">{q.title}</div>
                        <div className="meta">{q.type} • {q.level}</div>
                      </div>
                    </div>
                  ))}
                  {selectedQuestions.length === 0 && <div className="muted-text">No questions selected.</div>}
                </div>
              </div>
            </div>

            <div className="final-actions">
              <input className="styled-input" placeholder="Test title" value={testName} onChange={(e) => setTestName(e.target.value)} />
              <input className="styled-input" placeholder="Duration (minutes)" value={duration} onChange={(e) => setDuration(e.target.value)} />
              <input className="styled-input" placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)}/>
              <button className="create-btn" onClick={createTest} disabled={!selectedQIds.length || !testName}>Create Test</button>
            </div>
          </div>
        </div>

        {created && (
          <div style={{ marginTop: 22 }} className="summary-box">
            <h3>Test Created</h3>
            <p className="muted-text">"{testName}" has been created with {selectedQIds.length} questions.</p>
          </div>
        )}
      </div>
    </div>
  );
}
