import { useState } from "react";

/*
 ╔═══════════════════════════════════════════════════════╗
 ║  THEME — 1:1 match with AddTechnology.tsx             ║
 ║                                                       ║
 ║  bg-orange-50      → page background  #fff7ed         ║
 ║  bg-white          → card background  #ffffff         ║
 ║  border-orange-200 → borders          #fed7aa         ║
 ║  border-orange-100 → divider          #ffedd5         ║
 ║  text-orange-600   → accent / active  #ea580c         ║
 ║  bg-orange-600     → primary button   #ea580c         ║
 ║  hover:bg-orange-500                  #f97316         ║
 ║  bg-orange-50 badge                   #fff7ed         ║
 ║  text-gray-900     → headings         #111827         ║
 ║  text-gray-800     → labels           #1f2937         ║
 ║  text-gray-700     → body             #374151         ║
 ║  text-gray-500     → muted            #6b7280         ║
 ║  text-gray-400     → hints            #9ca3af         ║
 ║  shadow-lg         → card shadow                      ║
 ║  rounded-2xl       → card radius  16px                ║
 ║  rounded-xl        → row radius   12px                ║
 ║  rounded-lg        → input radius  8px                ║
 ╚═══════════════════════════════════════════════════════╝
*/

/* ── Types ── */
type Status = "Created" | "Assigned" | "Cancelled";
interface Student  { id: number; name: string; email: string }
interface Question { id: number; text: string }

/* ── Mock Data ── */
const STUDENTS: Student[] = [
  { id: 1, name: "Nirjala Naik",  email: "nirjala@example.com" },
  { id: 2, name: "Sanika Bhor",   email: "sanika@example.com"  },
  { id: 3, name: "Pranita Mane",  email: "pranita@example.com" },
  { id: 4, name: "Rohit Sharma",  email: "rohit@example.com"   },
  { id: 5, name: "Priya Desai",   email: "priya@example.com"   },
  { id: 6, name: "Amit Kulkarni", email: "amit@example.com"    },
];

const ALL_QUESTIONS: Question[] = [
  { id:  1, text: "What is the difference between value types and reference types in C#?" },
  { id:  2, text: "Which keyword is used to implement inheritance in C#?" },
  { id:  3, text: "What does the 'async' keyword do in C#?" },
  { id:  4, text: "What is dependency injection?" },
  { id:  5, text: "Which collection guarantees unique elements in C#?" },
  { id:  6, text: "What is Entity Framework used for?" },
  { id:  7, text: "What does SOLID stand for in software design?" },
  { id:  8, text: "Which HTTP method is used to update a resource partially?" },
  { id:  9, text: "What is the purpose of the 'using' statement in C#?" },
  { id: 10, text: "What is middleware in ASP.NET Core?" },
  { id: 11, text: "What is a nullable type in C#?" },
  { id: 12, text: "What does REST stand for?" },
  { id: 13, text: "Which .NET feature allows running code in background?" },
  { id: 14, text: "What is the role of appsettings.json in .NET Core?" },
  { id: 15, text: "What is the difference between IEnumerable and IQueryable?" },
];

const PER_PAGE = 5;

/* ══════════════════════════════════════════════
   ORANGE PALETTE  (AddTechnology.tsx exact)
══════════════════════════════════════════════ */
const O = {
  /* page */
  pageBg:       "#fff7ed",   // bg-orange-50

  /* card */
  cardBg:       "#ffffff",   // bg-white
  cardBorder:   "#fed7aa",   // border-orange-200
  cardShadow:   "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)", // shadow-lg
  cardRadius:   16,          // rounded-2xl

  /* divider */
  divider:      "#ffedd5",   // border-orange-100

  /* primary accent */
  orange:       "#ea580c",   // text-orange-600 / bg-orange-600
  orangeHover:  "#f97316",   // hover:bg-orange-500
  orangeBg:     "#fff7ed",   // bg-orange-50 (badge bg)
  orangeBorder: "#fed7aa",   // border-orange-200 (badge border)

  /* text */
  gray900:  "#111827",   // text-gray-900  (page heading)
  gray800:  "#1f2937",   // text-gray-800  (label)
  gray700:  "#374151",   // text-gray-700  (body)
  gray500:  "#6b7280",   // text-gray-500  (muted / cancel btn)
  gray400:  "#9ca3af",   // text-gray-400  (placeholder / hints)
  gray300:  "#d1d5db",   // border for cancel

  white:    "#ffffff",
};

/* ══════════════════════════════════════════════
   SHARED MINI-COMPONENTS
══════════════════════════════════════════════ */

/**
 * bg-white border border-orange-200 rounded-2xl p-8 shadow-lg
 */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background:   O.cardBg,
      border:       `1px solid ${O.cardBorder}`,
      borderRadius: O.cardRadius,
      padding:      "32px",
      boxShadow:    O.cardShadow,
      marginTop:    22,
    }}>
      {children}
    </div>
  );
}

/**
 * Section heading inside card — text-gray-800 font-semibold
 */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize:     11,
      fontWeight:   800,
      color:        O.gray400,
      textTransform: "uppercase" as const,
      letterSpacing: "0.1em",
      marginBottom: 14,
    }}>
      {children}
    </p>
  );
}

/**
 * bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg — ADD button
 */
function OrangeBtn({
  label, onClick, disabled, fullWidth,
}: { label: string; onClick: () => void; disabled?: boolean; fullWidth?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width:        fullWidth ? "100%" : undefined,
        background:   disabled ? O.gray300 : O.orange,
        color:        disabled ? O.gray500 : O.white,
        border:       "none",
        borderRadius: 8,
        padding:      "10px 24px",
        fontWeight:   700,
        fontSize:     13,
        cursor:       disabled ? "not-allowed" : "pointer",
        fontFamily:   "inherit",
        boxShadow:    disabled ? "none" : "0 4px 14px rgba(234,88,12,0.35)",
        transition:   "background 0.15s, transform 0.1s",
      }}
      onMouseEnter={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.background = O.orangeHover; }}
      onMouseLeave={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.background = O.orange; }}
      onMouseDown={e  => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.transform  = "scale(0.97)"; }}
      onMouseUp={e    => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.transform  = "scale(1)"; }}
    >
      {label}
    </button>
  );
}

/**
 * bg-transparent border border-orange-200 text-gray-500 — CANCEL button
 */
function CancelBtn({ label, onClick, fullWidth }: { label: string; onClick: () => void; fullWidth?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        width:        fullWidth ? "100%" : undefined,
        background:   "transparent",
        color:        O.gray500,
        border:       `1px solid ${O.cardBorder}`,
        borderRadius: 8,
        padding:      "10px 24px",
        fontWeight:   700,
        fontSize:     13,
        cursor:       "pointer",
        fontFamily:   "inherit",
        transition:   "all 0.15s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = O.orange;
        (e.currentTarget as HTMLButtonElement).style.color = O.gray700;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = O.cardBorder;
        (e.currentTarget as HTMLButtonElement).style.color = O.gray500;
      }}
    >
      {label}
    </button>
  );
}

/**
 * focus:border-orange-500 input — bg-white border border-orange-200 rounded-lg
 */
function OrangeInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width:        "100%",
        background:   O.cardBg,
        border:       `1px solid ${O.cardBorder}`,
        borderRadius: 8,
        padding:      "8px 12px",
        fontSize:     13,
        color:        O.gray800,
        fontFamily:   "inherit",
        outline:      "none",
        boxSizing:    "border-box" as const,
        boxShadow:    "0 1px 2px rgba(0,0,0,0.05)",
        ...props.style,
      }}
      onFocus={e => (e.currentTarget.style.borderColor = O.orange)}
      onBlur={e  => (e.currentTarget.style.borderColor = O.cardBorder)}
    />
  );
}

/**
 * text-gray-800 font-semibold label
 */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      display:    "block",
      marginBottom: 6,
      fontWeight: 600,
      fontSize:   13,
      color:      O.gray800,
    }}>
      {children}
    </label>
  );
}

/**
 * bg-orange-50 border border-orange-200 rounded px-2 — badge tag
 */
function OrangeBadge({ label }: { label: string }) {
  return (
    <span style={{
      background:   O.orangeBg,
      border:       `1px solid ${O.orangeBorder}`,
      borderRadius: 5,
      padding:      "2px 8px",
      fontSize:     11,
      color:        O.gray500,
    }}>
      {label}
    </span>
  );
}

/**
 * Active pill — bg-orange-600 text-white font-bold
 */
function ActivePill({ label }: { label: string }) {
  return (
    <span style={{
      background:   O.orange,
      color:        O.white,
      borderRadius: 20,
      padding:      "5px 16px",
      fontSize:     12,
      fontWeight:   700,
    }}>
      ✔ {label}
    </span>
  );
}

/**
 * Chip — bg-orange-50 border-orange-200 text-orange-600
 */
function Chip({ label, onRemove }: { label: string; onRemove?: () => void }) {
  return (
    <span style={{
      display:     "inline-flex",
      alignItems:  "center",
      gap:         5,
      background:  O.orangeBg,
      color:       O.orange,
      border:      `1px solid ${O.cardBorder}`,
      borderRadius: 20,
      padding:     "3px 12px",
      fontSize:    12,
      fontWeight:  700,
    }}>
      {label}
      {onRemove && (
        <button onClick={onRemove} style={{
          background: "none", border: "none",
          cursor: "pointer", color: O.orange,
          padding: 0, fontSize: 14, lineHeight: 1,
        }}>×</button>
      )}
    </span>
  );
}

/** Thin orange-100 divider — border-t border-orange-100 */
function Divider() {
  return <div style={{ borderTop: `1px solid ${O.divider}`, margin: "16px 0" }} />;
}

function SectionDivider({ label }: { label?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "14px 0 10px" }}>
      <div style={{ flex: 1, height: 1, background: O.divider }} />
      {label && (
        <span style={{
          fontSize: 10, fontWeight: 800,
          color: O.gray400,
          textTransform: "uppercase" as const,
          letterSpacing: "0.1em",
        }}>{label}</span>
      )}
      <div style={{ flex: 1, height: 1, background: O.divider }} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function AssignAssessment() {

  const [showStatus,    setShowStatus]    = useState(false);
  const [showStudents,  setShowStudents]  = useState(false);
  const [showSchedule,  setShowSchedule]  = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showSummary,   setShowSummary]   = useState(false);
  const [shake,         setShake]         = useState(false);

  const [status,   setStatus]   = useState<Status | "">("");
  const [search,   setSearch]   = useState("");
  const [selStuds, setSelStuds] = useState<number[]>([]);
  const [date,     setDate]     = useState("");
  const [time,     setTime]     = useState("");
  const [page,     setPage]     = useState(1);

  const TOTAL_PAGES    = Math.ceil(ALL_QUESTIONS.length / PER_PAGE);
  const pageQs         = ALL_QUESTIONS.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const filtered       = STUDENTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
  const toggleStud     = (id: number) =>
    setSelStuds(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const chosenStudents = STUDENTS.filter(s => selStuds.includes(s.id));

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const reset = () => {
    setShowStatus(false); setShowStudents(false);
    setShowSchedule(false); setShowQuestions(false); setShowSummary(false);
    setStatus(""); setSearch(""); setSelStuds([]);
    setDate(""); setTime(""); setPage(1);
  };

  const summaryRows = [
    { label: "Runtime",       value: ".NET"    },
    { label: "Language",      value: "C#"      },
    { label: "Layer",         value: "Backend" },
    { label: "Skill Level",   value: "Advance" },
    { label: "Question Type", value: "MCQ"     },
  ];

  return (
    /* min-h-screen bg-orange-50 */
    <div style={{
      minHeight:  "100vh",
      background: O.pageBg,
      fontFamily: "'Segoe UI','Inter',system-ui,sans-serif",
      padding:    "36px 16px",
    }}>
      <style>{`
        *,:before,:after { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:5px }
        ::-webkit-scrollbar-thumb { background:#fed7aa; border-radius:4px }
        @keyframes shake {
          0%,100% { transform:translateX(0) }
          20%     { transform:translateX(-8px) }
          40%     { transform:translateX(8px) }
          60%     { transform:translateX(-6px) }
          80%     { transform:translateX(6px) }
        }
      `}</style>

      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* ── Page header — text-gray-900 + text-orange-600 span ── */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{
            fontSize:   32,
            fontWeight: 700,
            color:      O.gray900,          // text-gray-900
            letterSpacing: "-0.02em",
          }}>
            Assign{" "}
            {/* text-orange-600 */}
            <span style={{ color: O.orange }}>Assessment</span>
          </h1>
          <p style={{ color: O.gray400, fontSize: 14, marginTop: 4 }}>
            Assign assessments to students step by step.
          </p>
        </div>

        {/* ── TRIGGER ── */}
        {!showStatus && (
          <OrangeBtn label="+ Assign Assessment" onClick={() => setShowStatus(true)} />
        )}

        {/* ══════════════════════════════════════════
            CARD 1 — Select Status
        ══════════════════════════════════════════ */}
        {showStatus && (
          <Card>
            <SectionTitle>① Select Status</SectionTitle>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 20 }}>
              {(["Created", "Assigned", "Cancelled"] as Status[]).map(s => {
                const active = status === s;
                return (
                  <button key={s} onClick={() => setStatus(s)} style={{
                    padding:    "8px 20px",
                    borderRadius: 20,
                    /* active = bg-orange-600 text-white, inactive = border-orange-200 text-gray-400 */
                    border:     `2px solid ${active ? O.orange : O.cardBorder}`,
                    background: active ? O.orange : "transparent",
                    color:      active ? O.white  : O.gray400,
                    fontWeight: 700, fontSize: 13,
                    cursor:     "pointer", fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}>
                    {active ? "• " : ""}{s}
                  </button>
                );
              })}
            </div>

            <Divider />

            <OrangeBtn
              label="Next: Select Students →"
              onClick={() => {
                if (!status) { triggerShake(); return; }
                setShowStudents(true);
              }}
              disabled={!status}
            />
          </Card>
        )}

        {/* ══════════════════════════════════════════
            CARD 2 — Select Students
        ══════════════════════════════════════════ */}
        {showStudents && (
          <Card>
            <SectionTitle>② Select Students</SectionTitle>

            {/* Search — like the technology input in AddTechnology */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: O.gray700, whiteSpace: "nowrap" }}>
                Search :
              </label>
              <OrangeInput
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search students..."
              />
            </div>

            {/* Selected chips */}
            {selStuds.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginBottom: 12 }}>
                {chosenStudents.map(s => (
                  <Chip key={s.id} label={s.name} onRemove={() => toggleStud(s.id)} />
                ))}
              </div>
            )}

            <Divider />

            {/* Student rows — bg-white border border-orange-200 rounded-xl */}
            <div style={{
              display: "flex", flexDirection: "column" as const,
              gap: 8, maxHeight: 240, overflowY: "auto" as const, marginBottom: 20,
            }}>
              {filtered.map(s => {
                const sel = selStuds.includes(s.id);
                return (
                  <button key={s.id} onClick={() => toggleStud(s.id)} style={{
                    display:    "flex",
                    alignItems: "center",
                    gap:        12,
                    padding:    "10px 14px",
                    borderRadius: 12,              // rounded-xl
                    border:     `1px solid ${sel ? O.orange : O.cardBorder}`,
                    background: sel ? O.orangeBg : O.cardBg,
                    cursor:     "pointer",
                    textAlign:  "left" as const,
                    fontFamily: "inherit",
                    boxShadow:  "0 1px 3px rgba(0,0,0,0.06)",
                    transition: "all 0.12s",
                  }}>
                    {/* avatar initials — bg-orange-600 when selected */}
                    <div style={{
                      width:    34, height: 34,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: sel ? O.orange : O.pageBg,
                      color:      sel ? O.white  : O.gray400,
                      border:     `1.5px solid ${sel ? O.orange : O.cardBorder}`,
                      display:    "flex", alignItems: "center", justifyContent: "center",
                      fontSize:   10, fontWeight: 800,
                    }}>
                      {s.name.split(" ").map(x => x[0]).join("")}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: O.gray800 }}>{s.name}</div>
                      <div style={{ fontSize: 11, color: O.gray400 }}>{s.email}</div>
                    </div>
                    {/* checkbox — bg-orange-600 when checked */}
                    <div style={{
                      width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                      border:     `2px solid ${sel ? O.orange : O.cardBorder}`,
                      background: sel ? O.orange : O.white,
                      color:      O.white,
                      fontSize:   10, fontWeight: 800,
                      display:    "flex", alignItems: "center", justifyContent: "center",
                    }}>{sel ? "✔" : ""}</div>
                  </button>
                );
              })}
              {!filtered.length && (
                <p style={{ color: O.gray400, fontSize: 13, textAlign: "center", padding: "14px 0" }}>
                  No students found.
                </p>
              )}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <OrangeBtn
                label={`Next: Schedule (${selStuds.length} selected) →`}
                onClick={() => {
                  if (selStuds.length === 0) { triggerShake(); return; }
                  setShowSchedule(true);
                }}
                disabled={selStuds.length === 0}
                fullWidth
              />
              <CancelBtn label="CANCEL" onClick={reset} fullWidth />
            </div>
          </Card>
        )}

        {/* ══════════════════════════════════════════
            CARD 3 — Schedule Date & Time
        ══════════════════════════════════════════ */}
        {showSchedule && (
          <div
            style={shake ? { animation: "shake 0.4s ease" } : {}}
          >
            <Card>
              <SectionTitle>③ Schedule Date & Time</SectionTitle>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <FieldLabel>Date</FieldLabel>
                  <OrangeInput
                    type="date"
                    value={date}
                    onChange={e => {
                      setDate(e.target.value);
                      if (e.target.value && time) setShowSummary(true);
                    }}
                  />
                </div>
                <div>
                  <FieldLabel>Time</FieldLabel>
                  <OrangeInput
                    type="time"
                    value={time}
                    onChange={e => {
                      setTime(e.target.value);
                      if (date && e.target.value) setShowSummary(true);
                    }}
                  />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ══════════════════════════════════════════
            CARD 4 — Summary
        ══════════════════════════════════════════ */}
        {showSummary && (
          <Card>
            <SectionTitle>④ Details — Assessment Summary</SectionTitle>

            {/* Info table — bg-white border border-orange-200 rounded-xl */}
            <div style={{
              border:       `1px solid ${O.cardBorder}`,
              borderRadius: 12,
              overflow:     "hidden",
              marginBottom: 20,
              boxShadow:    "0 1px 4px rgba(0,0,0,0.05)",
            }}>
              {summaryRows.map(({ label, value }, i) => (
                <div key={label} style={{
                  display:        "flex",
                  justifyContent: "space-between",
                  alignItems:     "center",
                  padding:        "11px 16px",
                  background:     i % 2 === 0 ? O.cardBg : O.pageBg,  // alternating white/orange-50
                  borderBottom:   `1px solid ${O.divider}`,
                }}>
                  <span style={{ fontSize: 13, color: O.gray500, fontWeight: 500 }}>{label}</span>
                  {/* bg-orange-50 border-orange-200 badge — like AddTechnology row badges */}
                  <OrangeBadge label={value} />
                </div>
              ))}

              {/* View Questions row */}
              <div style={{
                display:        "flex",
                justifyContent: "space-between",
                alignItems:     "center",
                padding:        "11px 16px",
                background:     O.pageBg,
                borderBottom:   `1px solid ${O.divider}`,
              }}>
                <span style={{ fontSize: 13, color: O.gray500, fontWeight: 500 }}>View Questions</span>
                {/* bg-orange-600 toggle button */}
                <button
                  onClick={() => setShowQuestions(p => !p)}
                  style={{
                    background:   showQuestions ? O.orange : "transparent",
                    color:        showQuestions ? O.white  : O.orange,
                    border:       `1px solid ${O.orange}`,
                    borderRadius: 6,
                    padding:      "5px 14px",
                    fontWeight:   700,
                    fontSize:     12,
                    cursor:       "pointer",
                    fontFamily:   "inherit",
                    transition:   "all 0.15s",
                  }}
                >
                  {showQuestions ? "Hide ▲" : "View ▼"}
                </button>
              </div>

              {/* Expandable questions panel */}
              {showQuestions && (
                <div style={{
                  padding:      "14px 16px",
                  background:   O.pageBg,
                  borderBottom: `1px solid ${O.divider}`,
                }}>
                  {/* Page tabs */}
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginBottom: 10 }}>
                    {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(p => (
                      <button key={p} onClick={() => setPage(p)} style={{
                        width:    28, height: 28,
                        borderRadius: 6, border: "none",
                        /* active = bg-orange-600, inactive = bg-white border-orange-200 */
                        background: p === page ? O.orange : O.white,
                        color:      p === page ? O.white  : O.gray400,
                        fontWeight: 700, fontSize: 12,
                        cursor:     "pointer", fontFamily: "inherit",
                        boxShadow:  p === page
                          ? "0 2px 6px rgba(234,88,12,0.35)"
                          : `0 0 0 1px ${O.cardBorder}`,
                      }}>{p}</button>
                    ))}
                  </div>

                  {/* Question rows */}
                  <div style={{
                    display: "flex", flexDirection: "column" as const,
                    gap: 7, marginBottom: 10,
                  }}>
                    {pageQs.map((q, i) => {
                      const num = (page - 1) * PER_PAGE + i + 1;
                      return (
                        <div key={q.id} style={{
                          display:    "flex", alignItems: "center", gap: 10,
                          padding:    "9px 12px", borderRadius: 8,
                          background: i % 2 === 0 ? O.cardBg : O.pageBg,
                          border:     `1px solid ${O.cardBorder}`,
                        }}>
                          {/* number badge — bg-orange-600 */}
                          <span style={{
                            width:    24, height: 24, borderRadius: 5, flexShrink: 0,
                            background: O.orange,
                            color:      O.white,
                            display:    "flex", alignItems: "center", justifyContent: "center",
                            fontSize:   10, fontWeight: 800,
                          }}>{num}</span>
                          <span style={{ fontSize: 13, color: O.gray700, lineHeight: 1.55 }}>
                            {q.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Prev / Next */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <CancelBtn label="‹ Prev" onClick={() => setPage(p => Math.max(1, p - 1))} />
                    <span style={{ fontSize: 12, color: O.gray400, fontWeight: 600 }}>
                      Page {page} / {TOTAL_PAGES}
                    </span>
                    <CancelBtn label="Next ›" onClick={() => setPage(p => Math.min(TOTAL_PAGES, p + 1))} />
                  </div>
                </div>
              )}

              {/* SME Name — text-orange-600 font-bold */}
              <div style={{
                display:        "flex",
                justifyContent: "space-between",
                alignItems:     "center",
                padding:        "11px 16px",
                background:     O.cardBg,
              }}>
                <span style={{ fontSize: 13, color: O.gray500, fontWeight: 500 }}>SME Name</span>
                <span style={{ fontSize: 13, color: O.orange, fontWeight: 700 }}>Nirjala Naik</span>
              </div>
            </div>

            {/* Assigned students chips */}
            {chosenStudents.length > 0 && (
              <>
                <SectionDivider label={`Assigned Students (${chosenStudents.length})`} />
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginBottom: 20 }}>
                  {chosenStudents.map(s => <Chip key={s.id} label={s.name} />)}
                </div>
              </>
            )}

            {/* Warning — orange-tinted like the active states in AddTechnology */}
            <div style={{
              padding:      "12px 16px",
              borderRadius: 8,
              marginBottom: 20,
              background:   O.pageBg,
              border:       `1px solid ${O.cardBorder}`,
              borderLeft:   `4px solid ${O.orange}`,
              display:      "flex", alignItems: "center", gap: 10,
              fontSize:     13, color: O.gray700, fontWeight: 600,
            }}>
              <span style={{ fontSize: 18 }}>⚠️</span>
              Are you sure you want to assign this assessment?
            </div>

            {/* Actions — flex gap-4 like AddTechnology buttons */}
            <div style={{ display: "flex", gap: 16 }}>
              <OrangeBtn
                label="✔ Assign Assessment"
                onClick={() => { alert("Assessment assigned successfully!"); reset(); }}
                fullWidth
              />
              <CancelBtn label="CANCEL" onClick={reset} fullWidth />
            </div>

          </Card>
        )}

      </div>
    </div>
  );
}
