import React from "react";

function Header() {
  const studentData = {
      studentPic:"/src/assets/mentor.jpg",
      studentName: 'Sanika',
      targetRole: 'Full Stack Developer',
      readiness: '68%',
      confidence: 'Medium',
    };

  return (
    <div className="mb-4 row d-flex">
      <div className="col-md-1">
        <img
          src={studentData.studentPic}
          alt={studentData.studentName}
          width={70}
          height={70}
        />
      </div>
      <div className="col-md-6" >
        <h4>Welcome,{studentData.studentName}</h4>
        <p><strong>Readiness:</strong>{studentData.readiness}   |   <strong>Target Role: </strong>{studentData.targetRole}   |   <strong>Confidence:</strong>{studentData.confidence} </p>
      </div>
    </div>
  );
}

export default Header;
