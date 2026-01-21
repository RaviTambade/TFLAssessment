import { useEffect,useState } from "react";
import { getMentorData } from "../../service/MentorDataService";

function MentorData() {
  const [mentorData,setMentorData]=useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    getMentorData().then((data)=>{
      setMentorData(data);
      setLoading(false);
    });
  },[]);

    if(loading) return<p>Loading...</p>;
    if(!mentorData) return <p>No data available</p>;

  return (
    <div className="container my-4">
      <div className="card shadow-sm">

        {/* Header */}
        <div className="card-header bg-primary text-white fw-bold">
          🌼 Transflower Mentors | TFLAssessment Mentor Data
        </div>

        {/* Body */}
        <div className="card-body">

          {/* Mentor Info */}
          <div className="row mb-3">
            <div className="col-md-6">
              <p className="mb-1">
                <strong>Mentor:</strong> {mentorData.mentorName}
              </p>
            </div>
            <div className="col-md-6">
              <p className="mb-1">
                <strong>Role:</strong> {mentorData.role}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="row text-center">
            <div className="col-md-6 mb-2">
              <div className="border rounded p-3 bg-light">
                <h6 className="text-muted mb-1">Active Cohorts</h6>
                <h4 className="fw-bold">{mentorData.activeCohorts}</h4>
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="border rounded p-3 bg-light">
                <h6 className="text-muted mb-1">Learners</h6>
                <h4 className="fw-bold">{mentorData.learners}</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MentorData;
