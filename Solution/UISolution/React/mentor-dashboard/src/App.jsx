import MentorData from "./components/dashboard/MentorData";
import TestData from "./components/dashboard/TestData";
import SkillHealthSnapshot from "./components/dashboard/SkillHealthSnapshot";
import PublishAssessment from "./components/dashboard/PublishAssessment";
import MentorRecommendation from "./components/dashboard/MentorRecommendation";

import LearnerSkillAnalytics from "./components/dashboard/LearnerSkillAnalytics";


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
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
    </Router>
  );
}

export default App;
