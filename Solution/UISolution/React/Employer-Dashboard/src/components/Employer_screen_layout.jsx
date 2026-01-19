import "../Styles/Employer_screen.css";

function EmployerDashboard() {

  const dashboardData = {
    employer: "TechNova",
    role: "Jr Full-Stack Developer",
    simulation: "Pre-Placement",
    runDate: "12-Mar-2025",

    kpis: {
      candidates: 24,
      employable: 7,
      trainable: 10,
      notReady: 7
    },

    rankings: [
      { name: "Nirjala Naik", score: "62%", status: "Trainable" },
      { name: "Sahil Kamble", score: "88%", status: "Employable" },
      { name: "Sanika Bhor", score: "95%", status: "Employable" },
      { name: "Nirjala ", score: "95%", status: "Employable" }
    ],

    actions: ["Hire", "Train", "Reject"]
  };

  return (
    <div className="Dashboard-Container">
      <div className="Dashboard-Header">
        <h2>Transflower EMS</h2>
        <p>
          Employer: <strong>{dashboardData.employer}</strong> |
          Role: <strong>{dashboardData.role}</strong>
        </p>
        <p>
          Simulation: {dashboardData.simulation} |
          Run Date: {dashboardData.runDate}
        </p>
      </div>

      
      <div className="KPI-Strip">
        <div>👥 Candidates <strong>{dashboardData.kpis.candidates}</strong></div>
        <div>🟢 Employable <strong>{dashboardData.kpis.employable}</strong></div>
        <div>🟡 Trainable <strong>{dashboardData.kpis.trainable}</strong></div>
        <div>🔴 Not Ready <strong>{dashboardData.kpis.notReady}</strong></div>
      </div>

    
      <div className="Dashboard-Table">
        <h3>Candidate Ranking</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.rankings.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.name}</td>
                <td>{candidate.score}</td>
                <td>{candidate.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="Dashboard-Panels" >
        <div className="Panel">Skill Gap Heatmap </div>
        <div className="Panel">Skill Demand vs Supply</div>
      </div>


      <div className="Action-Panel">
        <h3>Decision Panel</h3>
        {dashboardData.actions.map((action, index) => (
          <button key={index}>{action}</button>
        ))}
      </div>

    </div>
  );
}

export default EmployerDashboard;
