import { useEffect, useState } from "react";
import { getAssessments } from "../services/api";
import { type Assessment } from "../types/assessment";
import AssessmentCard from "../components/AssessmentCard";

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

      {/* 🔷 Cards */}
      <div style={styles.grid}>
        {filtered.map((item) => (
          <AssessmentCard key={item.assessmentId} data={item} />
        ))}
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
};

export default AssessmentPage;