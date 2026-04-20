import { useState } from "react";

const AddQuestionType = () => {
  const [questionType, setQuestionType] = useState("");
  const [marks, setMarks] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);

  const handleAdd = () => {
    if (!questionType.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  const handleCancel = () => {
    setQuestionType("");
    setMarks(1);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fff7ed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      padding: "20px",
    }}>
      <div style={{ width: "100%", maxWidth: "460px" }}>

        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <h1 style={{ margin: 0, fontSize: "32px", fontWeight: "700", color: "#111827", letterSpacing: "-0.5px" }}>
            Add <span style={{ color: "#ea580c" }}>Question Type</span>
          </h1>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #fed7aa",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 4px 24px rgba(234,88,12,0.08)",
            animation: shake ? "shake 0.4s ease" : "none",
          }}
        >
          {/* Question Type Field */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "8px",
            }}>Question Type</label>
            <input
              type="text"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              placeholder="e.g. Multiple Choice, Essay…"
              style={{
                width: "100%",
                padding: "10px 14px",
                background: "#ffffff",
                border: "1px solid #fed7aa",
                borderRadius: "10px",
                color: "#1f2937",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#ea580c")}
              onBlur={(e) => (e.target.style.borderColor = "#fed7aa")}
            />
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #fff1e6", marginBottom: "24px" }} />

          {/* Marks Field */}
          <div style={{ marginBottom: "32px" }}>
            <label style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "8px",
            }}>Marks</label>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <input
                type="number"
                value={marks}
                min={1}
                max={30}
                onChange={(e) => setMarks(Math.min(30, Math.max(1, Number(e.target.value))))}
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  background: "#ffffff",
                  border: "1px solid #fed7aa",
                  borderRadius: "10px",
                  color: "#1f2937",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#ea580c")}
                onBlur={(e) => (e.target.style.borderColor = "#fed7aa")}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {[
                  { label: "▲", fn: () => setMarks(m => Math.min(30, m + 1)) },
                  { label: "▼", fn: () => setMarks(m => Math.max(1, m - 1)) },
                ].map(({ label, fn }) => (
                  <button
                    key={label}
                    onClick={fn}
                    style={{
                      width: "32px",
                      height: "28px",
                      background: "#fff7ed",
                      border: "1px solid #fed7aa",
                      borderRadius: "6px",
                      color: "#ea580c",
                      cursor: "pointer",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >{label}</button>
                ))}
              </div>

              <div style={{ fontSize: "12px", color: "#9ca3af", whiteSpace: "nowrap" }}>
                Range: 1–30
              </div>
            </div>

            {/* Progress bar */}
            <div style={{
              marginTop: "10px",
              height: "4px",
              background: "#fff1e6",
              borderRadius: "2px",
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${(marks / 30) * 100}%`,
                background: "linear-gradient(90deg, #fb923c, #ea580c)",
                borderRadius: "2px",
                transition: "width 0.2s",
              }} />
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={handleAdd}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ea580c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = submitted ? "#16a34a" : "#c2410c")}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              style={{
                flex: 1,
                padding: "11px",
                background: submitted ? "#16a34a" : "#c2410c",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "background 0.2s, transform 0.1s",
                boxShadow: "0 4px 12px rgba(194,65,12,0.25)",
              }}
            >
              {submitted ? "✓ Added!" : "Add"}
            </button>

            <button
              onClick={handleCancel}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#fdba74";
                e.currentTarget.style.color = "#374151";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#fed7aa";
                e.currentTarget.style.color = "#6b7280";
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              style={{
                flex: 1,
                padding: "11px",
                background: "transparent",
                border: "1px solid #fed7aa",
                borderRadius: "10px",
                color: "#6b7280",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "border-color 0.2s, color 0.2s, transform 0.1s",
              }}
            >
              Cancel
            </button>
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

export default AddQuestionType;