import React from "react";
import { useNavigate } from "react-router-dom";

const AssessmentOrchestratorMenu = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "Create Test", path: "/models/assessmentorchestrator/createtest" },
    { label: "MCQ", path: "/models/assessmentorchestrator/mcq" },
    { label: "Code Snippets", path: "/models/assessmentorchestrator/snippets" },
    { label: "Problem Statement", path: "/models/assessmentorchestrator/problem" },
    { label: "Mini Project", path: "/models/assessmentorchestrator/project" },
    { label: "Show Assessment ", path: "/models/assessmentorchestrator/show" },
        { label: "Assign Assessment", path: "/models/assessmentorchestrator/assign" },
  ];

  const styles: Record<string, React.CSSProperties> = {
    page: {
      minHeight: "100vh",
      background: "#ffffff",
      fontFamily: "'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "60px",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "800",
      color: "#1a0a00",
      marginBottom: "40px",
      textAlign: "center",
    },
    headingAccent: {
      color: "#e53935",
    },
    container: {
      background: "#fff5f5",
      borderRadius: "16px",
      padding: "40px 48px",
      width: "100%",
      maxWidth: "1100px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    btn: {
      background: "linear-gradient(90deg, #c62828 0%, #e53935 60%, #ff7043 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "20px 32px",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
      textAlign: "left",
      letterSpacing: "0.3px",
      transition: "opacity 0.2s",
    },
  };

  return (
    <div style={styles.page}>
        <h1 style={styles.heading}>
          Assessment <span style={styles.headingAccent}>Orchestrator</span>
        </h1>

        <div style={styles.container}>
          <div style={styles.grid}>
            {buttons.map((btn) => (
              <button
                key={btn.label}
                style={styles.btn}
                onClick={() => navigate(btn.path)}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {btn.label} &nbsp;→
              </button>
            ))}
          </div>
        </div>
    </div>
  );
};

export default AssessmentOrchestratorMenu;
