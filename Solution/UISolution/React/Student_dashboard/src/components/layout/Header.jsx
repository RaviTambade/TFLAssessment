import React from 'react';

function Header() {
  const studentData = {
    student_pic: '/src/assets/nirjala.jpg',
    studentName: 'Nirjala',
    targetRole: 'Full Stack Developer',
    readiness: '68%',
    confidence: 'Medium',
  };
  //Destructure
  const { student_pic, studentName, targetRole, readiness, confidence } = studentData;

  return (
    <div className="mb-4 d-flex align-items-center gap-3">
      <img src={student_pic} height={50} width={50} alt="Student" />
      <div>
        <h4 className="m-0">Welcome, {studentName}</h4>
        <p className="m-0">
          <strong>Target Role:</strong> {targetRole} | 
          <strong> Readiness:</strong> {readiness} | 
          <strong> Confidence:</strong> {confidence}
        </p>
      </div>
    </div>
  );
}

export default Header;
