
function LearnerSkillAnalytics() {
  const learnerData = {
    learnerName: "Sanika Kulkarni",
    layer: "3 - System Understanding",

    skills: [
      { skillName: "Programming Basics", mastery: "85%", status: "strong" },
      { skillName: "MVC Flow", mastery: "78%", status: "stable" },
      { skillName: "Dependency Injection", mastery: "42%", status: "warning" },
      { skillName: "LINQ", mastery: "35%", status: "warning" },
      { skillName: "Asynchronous Programming", mastery: "25%", status: "warning" }
    ],

    insights: [
      "Conceptual clarity is good",
      "Struggles with lifetime selection",
      "Needs scenario-based practice"
    ]
  };

  return (
    <div className="LearnerAnalytics-container">
      <div className="LearnerAnalytics-title">Learner Skill Analytics</div>

      <div className="LearnerAnalytics-info">
        <div><strong>Learner:</strong> {learnerData.learnerName}</div>
        <div><strong>Layer:</strong> {learnerData.layer}</div>
      </div>

      <div className="LearnerAnalytics-table">
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Mastery</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {learnerData.skills.map((skill, index) => (
              <tr key={index}>
                <td>{skill.skillName}</td>
                <td>{skill.mastery}</td>
                <td className={`status-${skill.status}`}>
                  {skill.status === "strong" && "Strong"}
                  {skill.status === "stable" && "Stable"}
                  {skill.status === "warning" && "⚠ Needs Support"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="LearnerAnalytics-insights">
        <strong>AI Insights:</strong>
        <ul>
          {learnerData.insights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LearnerSkillAnalytics;
