import React,{useState,useEffect} from "react";

function SkillsAnalytics() {
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/dashboard/skillanalytics")
    .then(response=>response.json())
    .then(data=>{
      setSkills(data);
    })
    .catch(error=>{
      console.error("Error",error);
    })
  },[])

  if(skills.length==0){
    return <div>Loading data</div>
  }
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white fw-bold">
        Skills Analytics – Organization View
      </div>

      <div className="card-body">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th className="text-start">Skill</th>
              <th>Ready</th>
              <th>Near </th>
              <th>Learning </th>
            </tr>
             </thead>

            <tbody>
            {skills.map((item, index) => (
              <tr key={index}>
                <td className="text-start fw-semibold">{item.skill}</td>
                <td>{item.ready}</td>
                <td>{item.nearReady}</td>
                <td>{item.learning ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-3 text-muted">
          <strong>Purpose:</strong> Workforce readiness intelligence for planning
        </p>
      </div>
    </div>
  );
}

export default SkillsAnalytics;
