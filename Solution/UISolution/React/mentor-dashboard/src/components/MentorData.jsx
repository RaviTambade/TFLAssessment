 import "./Design.css";

function MentorData() {

  // 🔒 Hard-coded data (no API for now)
  const mentorData = {
    mentorName: "Ravi Tambade",
    role: "Lead Mentor",
    activeCohorts: 3,
    learners: 86
  };

    
  return (
    <div className="MentorData-container">

      <div className="MentorData-title">
        🌼 Transflower Mentors | TFLAssessment MentorData
      </div>

      <div className="MentorData-info">
        <div>
          <strong>Mentor:</strong> {mentorData.mentorName}
        </div>
        <div>
          <strong>Role:</strong> {mentorData.role}
        </div>
      </div>

      <div className="MentorData-stats">
        <div>
          <strong>Active Cohorts:</strong> {mentorData.activeCohorts}
        </div>
        <div>
          <strong>Learners:</strong> {mentorData.learners}
        </div>
      </div>

    </div>
  );
}

export default MentorData;
