import React from "react";

function Header() {
    const empData = {
        empPic: "/src/assets/react.svg",
        empName: 'Sanika',
        targetRole: 'Full Stack Developer',
        readiness: '68%',
        confidence: 'Medium',
    };

    return (
        <div className="mb-4 row d-flex">
            <div className="col-md-1">
                <img
                    src={empData.empPic}
                    alt={empData.empName}
                    width={70}
                    height={70}
                />
            </div>
            <div className="col-md-6" >
                <h4>Welcome,{empData.empName}</h4>
                <p><strong>Readiness:</strong>{empData.readiness}   |   <strong>Target Role: </strong>{empData.targetRole}   |   <strong>Confidence:</strong>{empData.confidence} </p>
            </div>
        </div>
    );
}

export default Header;
