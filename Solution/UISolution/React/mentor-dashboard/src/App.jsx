import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MentorData from "./components/dashboard/MentorData";
import TestData from "./components/dashboard/TestData";
import SkillHealthSnapshot from "./components/dashboard/SkillHealthSnapshot";
import PublishAssessment from "./components/dashboard/PublishAssessment";
import MentorRecommendation from "./components/dashboard/MentorRecommendation";
import LearnerSkillAnalytics from "./components/dashboard/LearnerSkillAnalytics";
import Sidebar from "./components/layout/Sidebar";
import MentorDashboard from "./components/dashboard/MentorData";
function App() {
  return (
     <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<MentorDashboard />} />
            <Route path="/dashboard" element={<MentorDashboard />} />
            <Route path="/mentor-recommendation" element={<MentorRecommendation />} />
            <Route path="/testdata" element={<TestData />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;