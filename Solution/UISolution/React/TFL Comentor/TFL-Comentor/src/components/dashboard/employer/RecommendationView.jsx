import { useEffect, useState } from "react";

function RecommendationView() {
  const [hiringInsights, setHiringInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/dashboard/recommendationview")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recommendation data");
        }
        return response.json();
      })
      .then((data) => {
        setHiringInsights(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recommendation:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading recommendations...</div>;
  }

  if (!hiringInsights) {
    return <div className="text-danger">No recommendation data available</div>;
  }

  return (
    <div className="card shadow-sm mb-4" style={{ maxWidth: "500px" }}>
      <div className="card-header bg-dark text-white fw-bold">
        {hiringInsights.title}
      </div>

      <div className="card-body">
        <p className="mb-2">
          <strong>Recommended Role:</strong>{" "}
          {hiringInsights.recommendedRole}
        </p>

        <p className="fw-semibold mb-1">Interview Focus:</p>
        <ul className="list-group list-group-flush mb-3">
          {hiringInsights.interviewFocus.map((skill, index) => (
            <li key={index} className="list-group-item px-0">
              • {skill}
            </li>
          ))}
        </ul>

        <p className="mb-3">
          <strong>Onboarding Readiness:</strong>{" "}
          <span className="badge bg-success">
            {hiringInsights.onboardingReadiness}
          </span>
        </p>

        <div className="d-flex justify-content-end gap-2">
          {hiringInsights.actions.map((action, index) => (
            <button
              key={index}
              className={`btn btn-sm ${
                action === "Shortlist"
                  ? "btn-outline-primary"
                  : "btn-primary"
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendationView;
