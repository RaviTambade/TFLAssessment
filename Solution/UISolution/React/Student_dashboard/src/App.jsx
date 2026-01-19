import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import StudentDashboard from './pages/StudentDashboard';
import Projects from './pages/Projects';
import Assessments from './pages/Assessments';
import MentorFeedback from './pages/MentorFeedback';
import CareerReadiness from './pages/CareerReadiness';
import SkillHealth from './pages/SkillHealth';
import LearningPath from './pages/LearningPath';

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