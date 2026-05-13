import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import StudentSidebar from "../../layout/student/StudentSidebar";
import StudentDashboard from "../../pages/student/StudentDashboard";
import Projects from "../../pages/student/ProjectsPage";
import Assessments from "../../pages/student/AssessmentsPage";
import MentorFeedback from "../../pages/student/MentorFeedbackPage";
import SkillHealth from "../../pages/student/SkillHealthPage";
import LearningPath from "../../pages/student/LearningPathPage";
import CareerReadiness from "../../pages/student/CareerReadinessPage";

const StudentRoute = () => {
  return (
    <div className="d-flex">
      <StudentSidebar />
      <div className="flex-grow-1 p-3">
          <Routes>
              {/* <Route path="/"  element={<StudentDashboard />} /> */}
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/assessments" element={<Assessments />} />
              <Route path="/mentor-feedback" element={<MentorFeedback />} />
              <Route path="/skill-health" element={<SkillHealth />} />
              <Route path="/learning-path" element={<LearningPath />} />
              <Route path="/career-readiness" element={<CareerReadiness />} />
          </Routes>
      </div>
    </div>
  );
};

export default StudentRoute;
