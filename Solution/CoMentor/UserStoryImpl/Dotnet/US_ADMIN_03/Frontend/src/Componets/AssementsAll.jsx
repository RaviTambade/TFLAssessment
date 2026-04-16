
import { useState } from "react";

const levelStyle = {
  Beginner: { background: "#d1fae5", color: "#065f46" },
  Intermediate: { background: "#fef9c3", color: "#854d0e" },
  Advanced: { background: "#fee2e2", color: "#991b1b" },
};

const statusStyle = {
  Completed: { background: "#d1fae5", color: "#065f46" },
  Pending: { background: "#fef9c3", color: "#854d0e" },
  InProgress: { background: "#dbeafe", color: "#1e40af" },
};

function Badge({ label, colorMap }) {
  const style = colorMap[label] || { background: "#eee", color: "#333" };
  return (
    <span
      style={{
        ...style,
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: "600",
      }}
    >
      {label}
    </span>
  );
}

export default function AssessmentList() {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);

  const loadData = () => {
    setClicked(true);
    setLoading(true);
    setError(null);

    fetch("http://localhost:5201/api/Assessment/all")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setAssessments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: 30, background: "#fdf0f0", minHeight: "100vh" }}>
     
        <h1 style={{ color: "#E5322D" }}>
  Admin Dashboard

      </h1>

      <button
        onClick={loadData}
        style={{
          background: "#E5322D",
          color: "#fff",
          padding: "8px 16px",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginTop: 10,
        }}
      >
        All Assessments
      </button>

      {!clicked && (
        <p style={{ marginTop: 20 }}>Click button to load data</p>
      )}

      {loading && <p style={{ marginTop: 20 }}>Loading...</p>}

      {error && (
        <p style={{ color: "red", marginTop: 20 }}>{error}</p>
      )}

      {clicked && !loading && !error && (
        <table
          style={{
            width: "100%",
            marginTop: 20,
            borderCollapse: "collapse",
            background: "#fff",
          }}
        >
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={th}>Sr No</th>
              <th style={th}>Title</th>
              <th style={th}>Difficulty</th>
              <th style={th}>Student</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((a) => (
              <tr key={a.srNo}>
                <td style={td}>{a.srNo}</td>
                <td style={td}>{a.assessmentTitle}</td>
                <td style={td}>
                  <Badge label={a.difficultyLevel} colorMap={levelStyle} />
                </td>
                <td style={td}>{a.fullName}</td>
                <td style={td}>
                  <Badge label={a.status} colorMap={statusStyle} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const th = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

