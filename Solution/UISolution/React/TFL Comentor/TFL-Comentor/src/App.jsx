import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import StudentRoute from "./components/route/student/studentRoute";
import StudentDashboard from "./components/pages/student/StudentDashboard";
import Projects from "./components/pages/student/Projects";
import Assessments from "./components/pages/student/Assessments";
import MentorFeedback from "./components/pages/student/MentorFeedback";
import SkillHealth from "./components/pages/student/SkillHealth";
import LearningPath from "./components/pages/student/LearningPath";
import CareerReadiness from "./components/pages/student/CareerReadiness";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/student" element={<StudentRoute />}>
              <Route index element={<StudentDashboard />} />
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="assessments" element={<Assessments />} />
              <Route path="mentor-feedback" element={<MentorFeedback />} />
              <Route path="skill-health" element={<SkillHealth />} />
              <Route path="learning-path" element={<LearningPath />} />
              <Route path="career-readiness" element={<CareerReadiness />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
