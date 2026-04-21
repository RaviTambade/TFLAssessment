import React, { useState, useEffect } from "react";

// ✅ Define type for assessment data
interface Assessment {
  srNo: number;
  assessmentName: string;
  scheduledAt: string;
  duration: number;
  status: string;
}

const UpcomingAssessment: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [userId, setUserId] = useState<string>("");
  const [inputId, setInputId] = useState<string>("");
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  const thStyle: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    padding: "10px",
  };

  useEffect(() => {
    if (!userId) return;

    const fetchAssessments = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiUrl = `http://localhost:5201/api/AssessmentUpcoming/${userId}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Assessment[] = await response.json();
        setAssessments(data);
      } catch (err: any) {
        setError(err.message);
        setAssessments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, [userId]);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f6e3df",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <h2
        style={{
          color: "#0f172a",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        📅 Upcoming Assessments
      </h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter User ID (1,2,3...)"
        value={inputId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;

          if (/^\d*$/.test(value)) {
            setInputId(value);
          }
        }}
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          marginTop: "15px",
        }}
      />

      {/* Button */}
      <button
        onClick={() => setUserId(inputId)}
        style={{
          padding: "8px 12px",
          cursor: "pointer",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Show Assessments
      </button>

      {/* Loading */}
      {loading && (
        <p style={{ marginTop: "15px", color: "#475569" }}>Loading...</p>
      )}

      {/* Error */}
      {error && (
        <p style={{ marginTop: "15px", color: "#ef4444" }}>{error}</p>
      )}

      {/* No Data */}
      {!loading && userId && assessments.length === 0 && !error && (
        <p style={{ marginTop: "20px", color: "#64748b" }}>
          No upcoming assessment available for you
        </p>
      )}

      {/* Table */}
      {assessments.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#ef4444", color: "white" }}>
                <th style={thStyle}>Assessment Name</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Duration</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((item) => (
                <tr key={item.srNo}>
                  <td style={tdStyle}>{item.assessmentName}</td>
                  <td style={tdStyle}>{item.scheduledAt}</td>
                  <td style={tdStyle}>{item.duration} mins</td>
                  <td style={tdStyle}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UpcomingAssessment;