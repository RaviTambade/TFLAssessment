function LearningTimeline() {
  const timeline = [
    { week: 1, content: "C# & OOP Basics" },
    { week: 4, content: "First Web API" },
    { week: 8, content: "Integrated Project" },
    { week: 12, content: "Azure Deployment" }
  ];

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
