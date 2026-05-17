import React, { useEffect, useState } from "react";
import { getSkillHealthSnapshot } from "../../../components/services/mentor/SkillHealthSnapshotService";

function SkillHealthCard() {
  const [skillHealthSnapshot,setSkillHealthSnapshot]=useState(null);
   const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getSkillHealthSnapshot().then((data)=>{
      setSkillHealthSnapshot(data);
      setLoading(false);

    })

  },[])

    if (loading) return <p>Loading...</p>;
  if (!skillHealthSnapshot) return <p>No data available.</p>;

  return (
    <div className="card mb-2">
      <div className="card-header">Skill Health</div>

      <div className="card-body">
        {skillHealthSnapshot.map((skill, idx) => (
          <div key={idx} className="mb-3">
        
            <div className="d-flex justify-content-between">
              <strong>{skill.level}:</strong>
              <span>{skill.topic}</span>
            </div>

            <div className="d-flex align-items-center gap-2 mt-1">
              <span style={{ width: "35px" }}>
                {skill.percent}%
              </span>

              <div className="progress flex-grow-1" style={{ height: "6px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillHealthCard;
