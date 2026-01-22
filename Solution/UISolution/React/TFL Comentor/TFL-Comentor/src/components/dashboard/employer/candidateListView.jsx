import { useEffect, useState } from "react";

function CandidateListView() {
    const [candidateList, setCandidateList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:8080/dashboard/candidateList")
            .then((response) => response.json())
            .then(data => {
         setCandidateList(data);
        setLoading(false);
            })
            .catch(err => {
        console.error("Error fetching candidates:", err);
        setLoading(false);
      });
    }, []);

      if (loading) return <div className="text-center">Loading candidates...</div>;
    
      return (
    <div className="card mb-3">
      <div className="card-header fw-bold bg-dark text-white">
        {candidateList.title}
      </div>

      <div className="card-body p-0">
        <table className="table table-bordered mb-0 text-center">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Readiness</th>
              <th>Key Skills</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {candidateList.candidates.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${c.readiness}%` }}
                    >
                      {c.readiness}%
                    </div>
                  </div>
                </td>
                <td>{c.skills}</td>
                <td>
                  <button className="btn btn-sm btn-primary">
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}
    export default CandidateListView;
