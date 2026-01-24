import { useEffect, useState } from "react";
import { getPublishAssessment } from "../../services/mentor/PublishAssessmentService";

function PublishAssessment() {
  const [publishAssessment,setPublishAssessment]=useState(null);

  useEffect(()=>{
    getPublishAssessment().then((data)=>{
      setPublishAssessment(data);
    });
  },[]);

  if(!publishAssessment) return <p>No Data Available</p>
  return (

    <div className="card mb-3 center">
      <div className="class-header">
        {publishAssessment.Title}
        <div className="card-body">
          <div className="mb-1"> <strong>Assessment Name: </strong>{publishAssessment.AssessmentName} </div>
          <div className="mb-1"> <strong>Assigned To: </strong>{publishAssessment.AssignedTo}</div>
          <div className="mb-1"> <strong>Start Date: </strong>{publishAssessment.StarDate}</div>
          <div className="mb-1"> <strong>End Date: </strong>{publishAssessment.EndDate}</div>
          <div className="mb-1"> <strong>Attempts Allowed: </strong>{publishAssessment.AttemptsAllowed}</div>
          <div className="mb-1"> <strong>Feedback Mode: </strong>{publishAssessment.FeedbackMode}</div>
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
