import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../../layout/employer/Sidebar';
import CandidateListView from "../../dashboard/employer/candidateListView";
import CandidateScorecardView from "../../dashboard/employer/candidateScorecardView";
import LearningTimeline from '../../dashboard/employer/learningTimeline';
import RecommendationView from '../../dashboard/employer/RecommendationView'
import SkillDrillDownPage from '../../pages/employer/skillDrillDownPage';
import ProjectEvidencePage from '../../pages/employer/projectEvidencePage';
import LoginPage from '../../pages/employer/loginPage';
import DashboardPage from '../../pages/employer/dashboardPage';
import SkillsAnalyticsPage from '../../pages/employer/skillsAnalyticsPage';
import EmployerShortlistPage from '../../pages/employer/EmployerShortlisPage';
import EmployerConfidencePage from '../../pages/employer/employerConfidencePage';
import EmployerAssistPage from '../../pages/employer/employerAssistPage';


function EmployerRoute() {
  return (
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/candidate-List-View" element={<CandidateListView />} />
            <Route path="/candidate-Scorecard-View" element={<CandidateScorecardView />} />
            <Route path="/learning-timeline" element={<LearningTimeline />} />
            <Route path="/recommendation-View" element={<RecommendationView />} />
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
            <Route path="/employer-assist" element={<EmployerAssistPage/>}/>
            <Route path="/employer-confidence" element={<EmployerConfidencePage/>}/>
            <Route path="/skill-drill-down" element={<SkillDrillDownPage />} />
            <Route path="/project-evidence" element={<ProjectEvidencePage />} />
            <Route path="/employer-shortlist" element={<EmployerShortlistPage />} />
            <Route path="/skill-analytics" element={<SkillsAnalyticsPage />} />

          </Routes>
        </div>
      </div>
  );
}

export default EmployerRoute;
