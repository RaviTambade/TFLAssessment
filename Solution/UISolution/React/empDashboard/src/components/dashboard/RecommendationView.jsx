function RecommendationView() {
  const hiringInsights = {
    title: "Hiring Insights",
    recommendedRole: "Junior .NET Developer",
    interviewFocus: [
      "API Design",
      "Exception Handling",
      "SQL Optimization"
    ],
    onboardingReadiness: "High",
    actions: ["Shortlist", "Schedule Interview"]
  };

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
          <button className="btn btn-outline-primary btn-sm">
            Shortlist
          </button>
          <button className="btn btn-primary btn-sm">
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecommendationView;
