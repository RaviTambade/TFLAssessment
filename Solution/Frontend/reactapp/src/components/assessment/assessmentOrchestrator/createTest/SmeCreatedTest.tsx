import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

interface Assessment {
  id: number;
  title: string;
  description: string;
  duration: number;
  difficulty: Difficulty;
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
// const userId = localStorage.getItem("userId");
const currentUser = JSON.parse(
  sessionStorage.getItem("current") || "{}"
);

const userId = currentUser.userid;
const API_URL = `http://localhost:5201/api/CreateTest/GetSmeCreatedTest/${userId}`;

const DIFFICULTY_STYLES: Record<Difficulty, { bg: string; text: string }> = {
  BEGINNER: { bg: "#E8F7EE", text: "#1F9254" },
  INTERMEDIATE: { bg: "#FFF4E5", text: "#B5670A" },
  ADVANCED: { bg: "#FDEAEA", text: "#C4281C" },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function titleCase(text: string): string {
  return text
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}

// ---------------------------------------------------------------------------
// Skeleton loading card
// ---------------------------------------------------------------------------

function SkeletonCard() {
  return (
    <div className="ca-card ca-card-skeleton" aria-hidden="true">
      <div className="ca-skel ca-skel-title" />
      <div className="ca-skel ca-skel-line" />
      <div className="ca-skel ca-skel-line ca-skel-line-short" />
      <div className="ca-skel-row">
        <div className="ca-skel ca-skel-chip" />
        <div className="ca-skel ca-skel-chip" />
      </div>
      <div className="ca-skel ca-skel-btn" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Assessment card
// ---------------------------------------------------------------------------

function AssessmentCard({ assessment }: { assessment: Assessment }) {
  const navigate = useNavigate();
  const difficultyStyle =
    DIFFICULTY_STYLES[assessment.difficulty] ?? DIFFICULTY_STYLES.BEGINNER;

  return (
    <article className="ca-card">
      <div className="ca-card-head">
        <span className="ca-card-icon" aria-hidden="true">
          &#128214;
        </span>
        <h3 className="ca-card-title">{titleCase(assessment.title)}</h3>
      </div>

      <div className="ca-card-field">
        <span className="ca-field-label">Description</span>
        <p className="ca-field-value ca-card-desc">{assessment.description}</p>
      </div>

      <div className="ca-card-row">
        <div className="ca-card-field">
          <span className="ca-field-label">Duration</span>
          <span className="ca-field-value">
            {assessment.duration} {assessment.duration === 1 ? "Hour" : "Hours"}
          </span>
        </div>

        <div className="ca-card-field">
          <span className="ca-field-label">Difficulty</span>
          <span
            className="ca-badge"
            style={{
              backgroundColor: difficultyStyle.bg,
              color: difficultyStyle.text,
            }}
          >
            {assessment.difficulty}
          </span>
        </div>
      </div>

      <div className="ca-card-field">
        <span className="ca-field-label">Created On</span>
        <span className="ca-field-value">{formatDate(assessment.createdAt)}</span>
      </div>

      <button
        type="button"
        className="ca-view-btn"
        onClick={() => navigate(`/models/assessmentorchestrator/TestQuestionDetails/${assessment.id}`)}
          
        
      >
        View Details
      </button>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function EmptyState() {
  return (
    <div className="ca-empty">
      <span className="ca-empty-icon" aria-hidden="true">
        &#128203;
      </span>
      <p className="ca-empty-text">No assessments created yet.</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function CreatedAssessments(){
  
  
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function fetchAssessments() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data: Assessment[] = await response.json();
        if (!cancelled) {
          setAssessments(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Something went wrong while loading assessments."
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchAssessments();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="ca-page">
      <style>{STYLES}</style>

      

      <main className="ca-main">
        <div className="ca-header-row">
  <div>
    <h1 className="ca-title">Tests Created</h1>
    <p className="ca-subtitle">
      View all tests created by the SME.
    </p>
  </div>

  <button
    className="ca-create-btn"
    onClick={() => navigate("/models/create-test")}
  >
    + Create Test
  </button>
</div>

        {error && (
          <div className="ca-error" role="alert">
            Couldn&apos;t load assessments: {error}
          </div>
        )}

        {isLoading ? (
          <div className="ca-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : assessments.length === 0 && !error ? (
          <EmptyState />
        ) : (
          <div className="ca-grid">
            {assessments.map((assessment) => (
              <AssessmentCard key={assessment.id} assessment={assessment} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Styles — matches the Transflower Learning theme (white cards, rounded
// corners, soft shadow, red/maroon brand accent)
// ---------------------------------------------------------------------------

const STYLES = `
  :root {
    --tf-red: #DC2A2A;
    --tf-red-dark: #B91F1F;
    --tf-ink: #1F2430;
    --tf-muted: #6B7280;
    --tf-border: #EAEAEA;
    --tf-bg: #F7F7F8;
  }

  .ca-page {
    min-height: 100vh;
    background: var(--tf-bg);
    font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif;
    color: var(--tf-ink);
  }

  .ca-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.ca-create-btn {
  background: #DC2A2A;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.ca-create-btn:hover {
  background: #B91F1F;
}

  /* ---- Header ---- */
  .ca-header {
    background: #ffffff;
    border-bottom: 1px solid var(--tf-border);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .ca-header-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .ca-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--tf-ink);
    font-weight: 700;
    font-size: 20px;
    white-space: nowrap;
  }

  .ca-brand-mark {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: var(--tf-red);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .ca-brand-name {
    color: var(--tf-red);
  }

 
  .ca-user-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--tf-red);
    color: #fff;
    border: none;
    border-radius: 24px;
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
  }

  .ca-user-btn:hover {
    background: var(--tf-red-dark);
  }

  .ca-user-avatar {
    font-size: 14px;
  }

  .ca-user-chevron {
    font-size: 10px;
  }

  /* ---- Main ---- */
  .ca-main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 32px 64px;
  }

  .ca-title {
    font-size: 34px;
    font-weight: 800;
    margin: 0 0 8px;
  }

  .ca-subtitle {
    font-size: 16px;
    color: var(--tf-muted);
    margin: 0 0 32px;
  }

  .ca-error {
    background: #FDEAEA;
    color: #B91F1F;
    border: 1px solid #F5C2C2;
    border-radius: 10px;
    padding: 14px 18px;
    margin-bottom: 24px;
    font-size: 14px;
  }

  /* ---- Grid ---- */
  .ca-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 1024px) {
    .ca-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .ca-grid {
      grid-template-columns: 1fr;
    }
    .ca-header-inner {
      flex-wrap: wrap;
      padding: 14px 20px;
    }
   
    .ca-main {
      padding: 28px 20px 48px;
    }
    .ca-title {
      font-size: 26px;
    }
  }

  /* ---- Card ---- */
  .ca-card {
    background: #ffffff;
    border: 1px solid var(--tf-border);
    border-radius: 16px;
    padding: 22px;
    box-shadow: 0 2px 10px rgba(20, 20, 43, 0.05);
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .ca-card:hover {
    box-shadow: 0 8px 24px rgba(20, 20, 43, 0.09);
    transform: translateY(-2px);
  }

  .ca-card-head {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ca-card-icon {
    font-size: 20px;
  }

  .ca-card-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--tf-ink);
  }

  .ca-card-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ca-field-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--tf-muted);
    font-weight: 600;
  }

  .ca-field-value {
    font-size: 14px;
    color: var(--tf-ink);
  }

  .ca-card-desc {
    margin: 0;
    line-height: 1.5;
    color: #4B5160;
  }

  .ca-card-row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .ca-badge {
    display: inline-block;
    width: fit-content;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .ca-view-btn {
    margin-top: 4px;
    align-self: flex-start;
    background: #fff;
    color: var(--tf-red);
    border: 1.5px solid var(--tf-red);
    border-radius: 10px;
    padding: 9px 18px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .ca-view-btn:hover {
    background: var(--tf-red);
    color: #fff;
  }

  /* ---- Skeleton ---- */
  .ca-card-skeleton {
    pointer-events: none;
  }

  .ca-skel {
    background: linear-gradient(90deg, #EFEFF1 25%, #E4E4E7 37%, #EFEFF1 63%);
    background-size: 400% 100%;
    animation: ca-shimmer 1.4s ease infinite;
    border-radius: 6px;
  }

  .ca-skel-title {
    height: 20px;
    width: 60%;
  }

  .ca-skel-line {
    height: 12px;
    width: 100%;
  }

  .ca-skel-line-short {
    width: 75%;
  }

  .ca-skel-row {
    display: flex;
    gap: 12px;
  }

  .ca-skel-chip {
    height: 24px;
    width: 80px;
    border-radius: 999px;
  }

  .ca-skel-btn {
    height: 36px;
    width: 120px;
    border-radius: 10px;
  }

  @keyframes ca-shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: 0 0; }
  }

  /* ---- Empty state ---- */
  .ca-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: #ffffff;
    border: 1px dashed var(--tf-border);
    border-radius: 16px;
    padding: 64px 24px;
    text-align: center;
  }

  .ca-empty-icon {
    font-size: 40px;
  }

  .ca-empty-text {
    margin: 0;
    color: var(--tf-muted);
    font-size: 16px;
    font-weight: 500;
  }
`;
