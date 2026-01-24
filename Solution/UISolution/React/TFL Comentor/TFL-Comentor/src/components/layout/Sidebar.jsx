import React, { useState } from "react";
import StudentRoute from "../route/student/studentRoute";
import MentorRoutes from "../route/mentor/mentorRoute";
import EmployerRoute from "../route/employer/employerRoute";
import SmePages from "../pages/sme/smePages";

function Sidebar() {
  const [role, setRole] = useState("");

  const renderComponent = () => {
    switch (role) {
      case "student":
        return <StudentRoute />;
      case "mentor":
        return <MentorRoutes />;
      case "sme":
        return <SmePages/>;
      case "employer":
        return <EmployerRoute />;
      default:
        return;
    }
  };

  return (
    <div className="container mt-3">
      <label className="form-label">Select a role to continue</label>

      <select
        className="form-select"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">-- Select Role --</option>
        <option value="student">Student</option>
        <option value="mentor">Mentor</option>
        <option value="sme">SME</option>
        <option value="employer">Employer</option>
      </select>

      <div className="mt-4">{renderComponent()}</div>
    </div>
  );
}

export default Sidebar;
