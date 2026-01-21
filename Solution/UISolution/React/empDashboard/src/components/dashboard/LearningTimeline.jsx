
import { useEffect, useState } from "react";

function LearningTimeline() {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/dashboard/learningtimeline")
      .then((response) => response.json())
      .then((data) => {
        setTimeline(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching timeline:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading timeline...</div>;
  }

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white fw-bold">
        Learning Journey Timeline
      </div>

      <div className="card-body">
        <ul className="list-group list-group-flush">
          {timeline.map((item) => (
            <li
              key={item.week}
              className="list-group-item d-flex align-items-start"
            >
              <span className="badge bg-primary rounded-pill me-3">
                Week {item.week}
              </span>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LearningTimeline;
