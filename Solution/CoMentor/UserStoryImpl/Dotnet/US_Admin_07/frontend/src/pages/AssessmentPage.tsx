import { useEffect, useState } from "react";
import { getAssessments } from "../services/api";
import { type Assessment } from "../types/assessment";

const AssessmentPage = () => {
  const [data, setData] = useState<Assessment[]>([]);
  const [filtered, setFiltered] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getAssessments()
      .then((res) => {
        setData(res);
        setFiltered(res);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔥 Filter Logic
  const handleFilter = (status: string) => {
    setFilter(status);

    if (status === "All") {
      setFiltered(data);
    } else {
      setFiltered(data.filter((item) => item.status === status));
    }
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div style={styles.container}>
      {/* 🔷 Header */}
      <div style={styles.header}>
        <h1 style={styles.heading}>Student Assessments</h1>
        <button style={styles.button}>Get Started</button>
      </div>

      {/* 🔷 Filter Buttons */}
      <div style={styles.filterContainer}>
        {["All", "Assigned", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => handleFilter(status)}
            style={{
              ...styles.filterButton,
              background: filter === status ? "#ff5722" : "#fff",
              color: filter === status ? "#fff" : "#333",
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* 🔷 TABLE */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
             <th style={styles.th}>Student</th>
    <th style={styles.th}>Test</th>
    <th style={styles.th}>Assigned</th>
    <th style={styles.th}>Scheduled</th>
    <th style={styles.th}>Score</th>
    <th style={styles.th}>Percentile</th>
    <th style={styles.th}>Time</th>
    <th style={styles.th}>Status</th>

            </tr>
          </thead>

          <tbody>
  {filtered.map((item) => (
    <tr key={item.assessmentId}>
      
      <td style={styles.td}>{item.studentName}</td>

      <td style={styles.td}>{item.testTitle}</td>

      <td style={styles.td}>
        {new Date(item.assignedAt).toLocaleString()}
      </td>

      <td style={styles.td}>
        {new Date(item.scheduledAt).toLocaleString()}
      </td>

      <td style={styles.td}>
        {item.result?.score ?? "-"}
      </td>

      <td style={styles.td}>
        {item.result?.percentile ?? "-"}
      </td>

      <td style={styles.td}>
        {item.result
          ? `${item.result.timeTakenMinutes} min`
          : "-"}
      </td>

      <td style={styles.td}>
       <span
  style={{
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#fff",
    background:
      item.status === "Completed"
        ? "green"
        : item.status === "Pending"
        ? "red"
        : item.status === "Assigned"
        ? "#ffc107"
        : "gray",
  }}
>
  {item.status}
</span>
      </td>

    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#f5f5f5",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  heading: {
    color: "#ff5722",
    fontSize: "28px",
  },

  button: {
    background: "#ff5722",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  filterContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  filterButton: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #ff5722",
    cursor: "pointer",
  },

  tableWrapper: {
    overflowX: "auto" as const,
  },

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

 th: {
  background: "#ff5722",
  color: "#fff",   // header white
},

td: {
  padding: "12px",
  borderBottom: "1px solid #eee",
  color: "#332f2f",        // ✅ BLACK text
  fontWeight: "500",    // optional (better visibility)
},

  row: {
    transition: "background 0.2s",
  },
};

export default AssessmentPage;