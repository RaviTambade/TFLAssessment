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
    <div className="container ">
      {/* <label className="form-label">Select a role to continue</label> */}

      <div>
        <nav className="d-flex justify-content-between align-items-center mb-  border-bottom">
          {/* Left side */}
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>Tansflower</div>

          {/* Right side */}
          <div className="d-flex gap-3">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setRole("student")}>Student
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => setRole("mentor")}>Mentor
            </span>

            <span style={{ cursor: "pointer" }} onClick={() => setRole("sme")}>SME
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => setRole("employer")}>Employer
            </span>
          </div>
        </nav>
      </div>

      {/* <select
        className="form-select"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        
      >
        <option value="">-- Select Role --</option>
        <option value="student">Student</option>
        <option value="mentor">Mentor</option>
        <option value="sme">SME</option>
        <option value="employer">Employer</option>
      </select> */}

      <div className="mt-4">{renderComponent()}</div>
    </div>
  );
}

export default Sidebar;
