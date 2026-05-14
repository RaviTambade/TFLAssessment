function Dashboard() {
  const rolesOverview = {
    junior_dev: "12 ready",
    fullstack: "7 near",
    cloud: 4,
  };

  const skills = [
    { name: "C#", value: 80 },
    { name: "React", value: 65 },
    { name: "Sql", value: 75 },
    { name: "Azure", value: 40 },
  ];
  return (
    <div className="container mt-4">
      <h3 className="text-center">Employee Dashboard</h3>
      <h5 className="fw-bold mb-3 mt-5">Roles Overview</h5>

      <div className="row g-3">
        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Junior Dev</h6>
              <h3 className="fw-bold">{rolesOverview.junior_dev}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">FullStack</h6>
              <h3 className="fw-bold">{rolesOverview.fullstack}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Cloud</h6>
              <h3 className="fw-bold">{rolesOverview.cloud}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 mt-5">
        <div className="card-header">Skill Heatmap</div>
        <div className="card-body">
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-2">
              <strong>{skill.name}</strong>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.value}%` }}
                >
                  {skill.value}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

// ┌──────────────────────────────────────────────────────────┐
// │ EMS Dashboard                                             │
// ├──────────────────────────────────────────────────────────┤
// │ Roles Overview                                            │
// │ [ Junior Dev: 12 Ready ] [ Fullstack: 7 Near ] [ Cloud: 4 ]│
// │                                                          │
// │ Skill Heatmap                                            │
// │ C#   ████████░░                                          │
// │ React ██████░░░░                                         │
// │ SQL  ███████░░░                                          │
// │ Azure █████░░░░░                                         │
// │                                                          │
// │ Candidate Pipeline                                       │
// │ [ View All Candidates ]                                  │
// └──────────────────────────────────────────────────────────┘
