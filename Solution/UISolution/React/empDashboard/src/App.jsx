import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import CandidateListView from "./components/dashboard/candidateListView";
import CandidateScorecardView from "./components/dashboard/candidateScorecardView";
import LearningTimeline from './components/dashboard/learningTimeline';
import RecommendationView from './components/dashboard/RecommendationView'
import SkillDrillDownPage from './pages/skillDrillDownPage';
import ProjectEvidencePage from './pages/projectEvidencePage';
import LoginPage from './pages/loginPage';
import DashboardPage from './pages/dashboardPage';
import SkillsAnalyticsPage from './pages/skillsAnalyticsPage';
import EmployerShortlistPage from './pages/EmployerShortlisPage';



function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />

        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/candidate-List-View" element={<CandidateListView />} />
            <Route path="/candidate-Scorecard-View" element={<CandidateScorecardView />} />
            <Route path="/learning-Timeline" element={<LearningTimeline />} />
            <Route path="/recommendation-View" element={<RecommendationView />} />
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/employer-assist" element={<EmployerAssistPage/>}/>
            <Route path="/employer-confidence" element={<EmployerConfidencePage/>}/>
            <Route path="/skill-drill-down" element={<SkillDrillDownPage />} />
            <Route path="/project-evidence" element={<ProjectEvidencePage />} />
            <Route path="/employer-Shortlist" element={<EmployerShortlistPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
