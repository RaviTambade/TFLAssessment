function PublishAssessmentPage(){
    const PublishAssessment={
        AssessmentName:"ASP.NET Core – Layer 3 Diagnostic",
        AssignedTo:"Sejal kulkarni",
        StarDate:"15 Jan 2025",
        EndDate:"16 Jan 2025",
        AttemptsAllowed: "1",
        FeedbackMode:" Immediate ✓ Mentor Review ✓",
        Buttons:[
            "Publish","Schedule","Cancel"
        ]
    }
  return(

    <div className="card mb-3 center">
        <div className="">
            <div>
                <h3>Assessment Name:</h3>
                <h3>Assigned To: </h3>
                <h3>Start Date:</h3>
                <h3>End Date:</h3>
                <h3>Attempts Allowed:</h3>
                <h3>Feedback Mode:</h3>

            </div>

        </div>

    </div>
  )

}

export default PublishAssessmentPage;