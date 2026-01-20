import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/layout/Sidebar';
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
            <Route path="/dashboard" element={<MentorData />} />
            <Route path="/" element={<MentorData />} />
            <Route path="/learner-skill-analytics" element={<LearnerSkillAnalytics />} />
            <Route path="/mentor-data" element={<MentorData />} />
            <Route path="/test-data" element={<TestData />} />
            <Route path="/skill-health-snapshot" element={<SkillHealthSnapshot />} />
            <Route path="/publish-assessment" element={<PublishAssessment />} />
            <Route path="/mentor-recommendation" element={<MentorRecommendation />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;