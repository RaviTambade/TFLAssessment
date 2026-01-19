
function PublishAssessment() {
  const assessmentData = {
    name: "ASP.NET Core – Layer 3 Diagnostic",
    assignedTo: "Sejal kulkarni",
    startDate: "15 Jan 2025",
    endDate: "16 Jan 2025",
    attemptsAllowed: 1,
    feedbackImmediate: true,
    feedbackMentorReview: true,
  };

  return (
    <div className="publish-container">

      <div className="publish-title">
        ─────────────── Publish Assessment ───────────────
      </div>

      <div className="publish-info">
        <div>
          <strong>Assessment Name:</strong> {assessmentData.name}
        </div>
        <div>
          <strong>Assigned To:</strong> {assessmentData.assignedTo}
        </div>
        <div>
          <strong>Start Date:</strong> {assessmentData.startDate}
        </div>
        <div>
          <strong>End Date:</strong> {assessmentData.endDate}
        </div>
        <div>
          <strong>Attempts Allowed:</strong> {assessmentData.attemptsAllowed}
        </div>
        <div>
          <strong>Feedback Mode:</strong> 
          {assessmentData.feedbackImmediate && " Immediate ✓"} 
          {assessmentData.feedbackMentorReview && " Mentor Review ✓"}
        </div>
      </div>

      <div className="publish-buttons">
        <button className="publish-btn">Publish</button>
        <button className="schedule-btn">Schedule</button>
        <button className="cancel-btn">Cancel</button>
      </div>

    </div>
  );
}

export default PublishAssessment;
