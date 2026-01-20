function PublishAssessment() {
  const PublishAssessment = {
    Title: "Publish Assessment",
    AssessmentName: "ASP.NET Core – Layer 3 Diagnostic",
    AssignedTo: "Sejal kulkarni",
    StarDate: "15 Jan 2025",
    EndDate: "16 Jan 2025",
    AttemptsAllowed: "1",
    FeedbackMode: " Immediate ✓ Mentor Review ✓",
    Buttons: [
      "Publish", "Schedule", "Cancel"
    ]
  }
  return (

    <div className="card mb-3 center">
      <div className="class-header">
        {PublishAssessment.Title}
        <div className="card-body">
          <div className="mb-1"> <strong>Assessment Name: </strong>{PublishAssessment.AssessmentName} </div>
          <div className="mb-1"> <strong>Assigned To: </strong>{PublishAssessment.AssignedTo}</div>
          <div className="mb-1"> <strong>Start Date: </strong>{PublishAssessment.StarDate}</div>
          <div className="mb-1"> <strong>End Date: </strong>{PublishAssessment.EndDate}</div>
          <div className="mb-1"> <strong>Attempts Allowed: </strong>{PublishAssessment.AttemptsAllowed}</div>
          <div className="mb-1"> <strong>Feedback Mode: </strong>{PublishAssessment.FeedbackMode}</div>
          <div className="mb-1"> <button className="btn btn-success me-3">Publish</button>

            <button className="btn btn-secondary me-3">Schedule</button>

            <button className="btn btn-danger">Cancel</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishAssessment;
