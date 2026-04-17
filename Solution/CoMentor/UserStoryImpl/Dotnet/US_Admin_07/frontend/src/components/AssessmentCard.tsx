import { type Assessment } from "../types/assessment";

interface Props {
  data: Assessment;
}

const AssessmentCard = ({ data }: Props) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{data.testTitle}</h3>

      <p><b>Student:</b> {data.studentName}</p>
      <p><b>Status:</b> 
        <span style={{
          color:
            data.status === "Completed"
              ? "green"
              : data.status === "Pending"
              ? "orange"
              : "#ff5722"
        }}>
          {" "}{data.status}
        </span>
      </p>

      <p><b>Scheduled:</b> {new Date(data.scheduledAt).toLocaleString()}</p>

      {data.result ? (
        <div style={styles.resultBox}>
          <p>Score: {data.result.score}</p>
          <p>Percentile: {data.result.percentile}</p>
          <p>Time: {data.result.timeTakenMinutes} min</p>
        </div>
      ) : (
        <p style={{ color: "#999" }}>No Result Yet</p>
      )}
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderTop: "4px solid #ff5722",
  },
  title: {
    color: "#ff5722",
  },
  resultBox: {
    background: "#f9f9f9",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "10px",
  }
};

export default AssessmentCard;