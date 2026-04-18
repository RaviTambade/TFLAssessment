import { useState } from "react";

type QuestionType = {
  id: number;
  type: string;
  marks: number;
};

type View = "list" | "edit";

const initialData: QuestionType[] = [
  { id: 1, type: "Multiple Choice", marks: 5 },
  { id: 2, type: "Problem Statement", marks: 20 },
  { id: 3, type: "Short Answer", marks: 10 },
  { id: 4, type: "Code Review", marks: 15 },
];

const UpdateQuestionType = () => {
  const [view, setView] = useState<View>("list");
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>(initialData);
  const [editTarget, setEditTarget] = useState<QuestionType | null>(null);
  const [questionType, setQuestionType] = useState("");
  const [marks, setMarks] = useState(1);
  const [shake, setShake] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [qtFocused, setQtFocused] = useState(false);
  const [marksFocused, setMarksFocused] = useState(false);

  const openEdit = (item: QuestionType) => {
    setEditTarget(item);
    setQuestionType(item.type);
    setMarks(item.marks);
    setSubmitted(false);
    setShake(false);
    setView("edit");
  };

  const handleUpdate = () => {
    if (!questionType.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setQuestionTypes((prev) =>
      prev.map((q) =>
        q.id === editTarget!.id
          ? { ...q, type: questionType.trim(), marks }
          : q
      )
    );
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setView("list");
    }, 1200);
  };

  const handleDelete = (id: number) => {
    setQuestionTypes((prev) => prev.filter((q) => q.id !== id));
    setDeleteConfirm(null);
  };

  const handleCancel = () => {
    setQuestionType("");
    setMarks(1);
    setView("list");
  };

  // ── LIST VIEW ──────────────────────────────────────────
  if (view === "list") {
    return (
      <div className="container mx-auto px-4" style={{ fontFamily: "'Georgia', serif" }}>
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
            Manage{" "}
            <span style={{
              background: "linear-gradient(135deg, #fb923c, #ea580c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Question Types
            </span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "14px" }}>
            Edit or remove existing question categories
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card */}
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(234,88,12,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }}>
            {/* Gradient header band */}
            <div style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)",
              padding: "24px 32px",
              borderBottom: "1px solid #fed7aa",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "linear-gradient(135deg, #fb923c, #ea580c)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", boxShadow: "0 4px 12px rgba(234,88,12,0.3)",
                }}>⚙️</div>
                <div>
                  <p style={{ margin: 0, fontWeight: "700", fontSize: "15px", color: "#1f2937" }}>
                    All Question Types
                  </p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#b45309" }}>
                    {questionTypes.length} type{questionTypes.length !== 1 ? "s" : ""} total
                  </p>
                </div>
              </div>
            </div>

            {/* List body */}
            <div style={{ background: "#ffffff", padding: "16px 24px" }}>
              {questionTypes.length === 0 ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>📭</div>
                  <p style={{ margin: 0, fontWeight: "600", color: "#92400e" }}>
                    No question types found
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#b45309" }}>
                    All entries have been removed
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {questionTypes.map((item, idx) => (
                    <div
                      key={item.id}
                      style={{
                        background: "#fafafa",
                        border: "1.5px solid #f3f4f6",
                        borderRadius: "12px",
                        padding: "14px 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#fed7aa";
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(234,88,12,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#f3f4f6";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Left info */}
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div style={{
                          width: "32px", height: "32px", borderRadius: "8px",
                          background: "linear-gradient(135deg, #fff7ed, #ffedd5)",
                          border: "1px solid #fed7aa",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "13px", fontWeight: "700", color: "#ea580c",
                        }}>{idx + 1}</div>
                        <div>
                          <p style={{ margin: 0, fontWeight: "700", fontSize: "14px", color: "#1f2937" }}>
                            {item.type}
                          </p>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "5px" }}>
                            <span style={{
                              background: "#fff7ed", border: "1px solid #fed7aa",
                              color: "#ea580c", fontSize: "11px", fontWeight: "700",
                              padding: "2px 8px", borderRadius: "20px",
                            }}>{item.marks} marks</span>
                            <div style={{ width: "70px", height: "4px", background: "#f3f4f6", borderRadius: "2px", overflow: "hidden" }}>
                              <div style={{
                                height: "100%",
                                width: `${(item.marks / 30) * 100}%`,
                                background: "linear-gradient(90deg, #fb923c, #ea580c)",
                                borderRadius: "2px",
                              }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        {/* Edit */}
                        <button
                          onClick={() => openEdit(item)}
                          title="Edit"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#ea580c";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.borderColor = "#ea580c";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#fff7ed";
                            e.currentTarget.style.color = "#ea580c";
                            e.currentTarget.style.borderColor = "#fed7aa";
                          }}
                          style={{
                            width: "36px", height: "36px", borderRadius: "9px",
                            background: "#fff7ed", border: "1.5px solid #fed7aa",
                            color: "#ea580c", cursor: "pointer", fontSize: "15px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.2s",
                          }}
                        >✏️</button>

                        {/* Delete with confirm */}
                        {deleteConfirm === item.id ? (
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <span style={{ fontSize: "11px", color: "#dc2626", fontWeight: "600" }}>Sure?</span>
                            <button
                              onClick={() => handleDelete(item.id)}
                              style={{
                                padding: "5px 10px", borderRadius: "7px",
                                background: "#dc2626", border: "none",
                                color: "#fff", fontSize: "11px", fontWeight: "700",
                                cursor: "pointer",
                              }}
                            >Yes</button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              style={{
                                padding: "5px 10px", borderRadius: "7px",
                                background: "transparent", border: "1.5px solid #d1d5db",
                                color: "#6b7280", fontSize: "11px", fontWeight: "700",
                                cursor: "pointer",
                              }}
                            >No</button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(item.id)}
                            title="Delete"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#dc2626";
                              e.currentTarget.style.color = "#fff";
                              e.currentTarget.style.borderColor = "#dc2626";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "#fff7ed";
                              e.currentTarget.style.color = "#dc2626";
                              e.currentTarget.style.borderColor = "#fed7aa";
                            }}
                            style={{
                              width: "36px", height: "36px", borderRadius: "9px",
                              background: "#fff7ed", border: "1.5px solid #fed7aa",
                              color: "#dc2626", cursor: "pointer", fontSize: "15px",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              transition: "all 0.2s",
                            }}
                          >🗑️</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── EDIT VIEW ──────────────────────────────────────────
  return (
    <div className="container mx-auto px-4" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
          Edit{" "}
          <span style={{
            background: "linear-gradient(135deg, #fb923c, #ea580c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Question Type
          </span>
        </h2>
        <p style={{ color: "#9ca3af", fontSize: "14px" }}>
          Update the details for "{editTarget?.type}"
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div style={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(234,88,12,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          animation: shake ? "shake 0.4s ease" : "none",
        }}>
          {/* Gradient header band */}
          <div style={{
            background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)",
            padding: "24px 40px 20px",
            borderBottom: "1px solid #fed7aa",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <button
              onClick={handleCancel}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fed7aa")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff7ed")}
              style={{
                width: "32px", height: "32px", borderRadius: "8px",
                background: "#fff7ed", border: "1.5px solid #fed7aa",
                color: "#ea580c", cursor: "pointer", fontSize: "16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s", fontWeight: "700",
              }}
            >←</button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: "linear-gradient(135deg, #fb923c, #ea580c)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px", boxShadow: "0 4px 12px rgba(234,88,12,0.3)",
              }}>✏️</div>
              <div>
                <p style={{ margin: 0, fontWeight: "700", fontSize: "15px", color: "#1f2937" }}>
                  Update Question Type
                </p>
                <p style={{ margin: 0, fontSize: "12px", color: "#b45309" }}>
                  Editing: {editTarget?.type}
                </p>
              </div>
            </div>
          </div>

          {/* Form body */}
          <div style={{ background: "#ffffff", padding: "32px 40px" }}>

            {/* Question Type field */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{
                display: "flex", alignItems: "center", gap: "6px",
                fontSize: "13px", fontWeight: "700", color: "#374151",
                letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ea580c", display: "inline-block" }} />
                Question Type
              </label>
              <input
                type="text"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                placeholder="e.g. Multiple Choice, Essay…"
                onFocus={() => setQtFocused(true)}
                onBlur={() => setQtFocused(false)}
                style={{
                  width: "100%", padding: "11px 16px", boxSizing: "border-box",
                  background: qtFocused ? "#fff7ed" : "#fafafa",
                  border: `1.5px solid ${qtFocused ? "#ea580c" : "#e5e7eb"}`,
                  borderRadius: "10px", color: "#1f2937", fontSize: "14px",
                  outline: "none", transition: "border-color 0.2s, background 0.2s",
                  boxShadow: qtFocused ? "0 0 0 3px rgba(234,88,12,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              />
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px dashed #fed7aa", marginBottom: "24px" }} />

            {/* Marks field */}
            <div style={{ marginBottom: "32px" }}>
              <label style={{
                display: "flex", alignItems: "center", gap: "6px",
                fontSize: "13px", fontWeight: "700", color: "#374151",
                letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ea580c", display: "inline-block" }} />
                Marks
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="number"
                  value={marks}
                  min={1} max={30}
                  onChange={(e) => setMarks(Math.min(30, Math.max(1, Number(e.target.value))))}
                  onFocus={() => setMarksFocused(true)}
                  onBlur={() => setMarksFocused(false)}
                  style={{
                    flex: 1, padding: "11px 16px", boxSizing: "border-box",
                    background: marksFocused ? "#fff7ed" : "#fafafa",
                    border: `1.5px solid ${marksFocused ? "#ea580c" : "#e5e7eb"}`,
                    borderRadius: "10px", color: "#1f2937", fontSize: "14px",
                    outline: "none", transition: "border-color 0.2s, background 0.2s",
                    boxShadow: marksFocused ? "0 0 0 3px rgba(234,88,12,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {[
                    { label: "▲", fn: () => setMarks((m) => Math.min(30, m + 1)) },
                    { label: "▼", fn: () => setMarks((m) => Math.max(1, m - 1)) },
                  ].map(({ label, fn }) => (
                    <button
                      key={label} onClick={fn}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#ea580c"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#fff7ed"; e.currentTarget.style.color = "#ea580c"; }}
                      style={{
                        width: "32px", height: "26px", background: "#fff7ed",
                        border: "1.5px solid #fed7aa", borderRadius: "7px",
                        color: "#ea580c", cursor: "pointer", fontSize: "10px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.15s, color 0.15s",
                      }}
                    >{label}</button>
                  ))}
                </div>
                <div style={{
                  background: "#fff7ed", border: "1px solid #fed7aa",
                  borderRadius: "8px", padding: "6px 10px",
                  fontSize: "11px", color: "#b45309", fontWeight: "600", whiteSpace: "nowrap",
                }}>1 – 30</div>
              </div>

              {/* Progress bar */}
              <div style={{ marginTop: "12px", height: "5px", background: "#f3f4f6", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", width: `${(marks / 30) * 100}%`,
                  background: "linear-gradient(90deg, #fb923c, #ea580c)",
                  borderRadius: "3px", transition: "width 0.25s ease",
                }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px", fontSize: "11px", color: "#9ca3af" }}>
                <span>1</span>
                <span style={{ color: "#ea580c", fontWeight: "700" }}>{marks} / 30</span>
                <span>30</span>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={handleUpdate}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onMouseEnter={(e) => !submitted && (e.currentTarget.style.background = "#ea580c")}
                onMouseLeave={(e) => !submitted && (e.currentTarget.style.background = "#c2410c")}
                style={{
                  flex: 1, padding: "12px", border: "none", borderRadius: "10px",
                  background: submitted ? "linear-gradient(135deg, #16a34a, #15803d)" : "#c2410c",
                  color: "#fff", fontSize: "13px", fontWeight: "700",
                  cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase",
                  transition: "background 0.2s, transform 0.1s",
                  boxShadow: submitted ? "0 4px 12px rgba(22,163,74,0.3)" : "0 4px 12px rgba(194,65,12,0.3)",
                }}
              >{submitted ? "✓ Updated!" : "Save Changes"}</button>

              <button
                onClick={handleCancel}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#f87171";
                  e.currentTarget.style.color = "#dc2626";
                  e.currentTarget.style.background = "#fef2f2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.color = "#6b7280";
                  e.currentTarget.style.background = "#fafafa";
                }}
                style={{
                  flex: 1, padding: "12px", background: "#fafafa",
                  border: "1.5px solid #e5e7eb", borderRadius: "10px",
                  color: "#6b7280", fontSize: "13px", fontWeight: "700",
                  cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase",
                  transition: "all 0.2s",
                }}
              >Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
};

export default UpdateQuestionType;