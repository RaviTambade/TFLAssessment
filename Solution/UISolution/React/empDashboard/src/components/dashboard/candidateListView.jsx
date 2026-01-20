import React from "react";

function CandidateListView() {
    const candidateList = {
        title: "Candidates – Junior Developer Role",
        candidates: [
            { name: "Nirjala Naik", readiness: 82, skills: "C#, SQL, APIs" },
            { name: "Sahil Kamble", readiness: 92, skills: "OOP, LINQ" },
            { name: "Sanika Bhor", readiness: 89, skills: "ASP.NET, Azure" },
        ],
    };

    return (
        <div className="card mb-3">
            <div className="card-header fw-bold bg-dark text-white">{candidateList.title}</div>

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
