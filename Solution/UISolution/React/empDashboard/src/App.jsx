import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
<<<<<<< HEAD
import LoginPage from './pages/loginPage';
import DashboardPage from './pages/dashboardPage';
import EmployerAssist from './components/dashboard/employerAssist';
import EmployerConfidence from './components/dashboard/employerConfidence';

import SkillDrillDownPage from './pages/skillDrillDownPage';
import ProjectEvidencePage from './pages/projectEvidencePage';
import EmployerShortlistPage from './pages/EmployerShortlisPage';


=======
import SkillsAnalyticsPage from './pages/skillsAnalyticsPage';
import SkillsAnalyticsPage from './pages/skillsAnalyticsPage';
>>>>>>> 0c1d38b13b51771ba00de4226f5b76c6432c0f80
function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/employer-assist" element={<EmployerAssist/>}/>
            <Route path="/employer-confidence" element={<EmployerConfidence/>}/>
            <Route path="/skill-drill-down" element={<SkillDrillDownPage />} />
            <Route path="/project-evidence" element={<ProjectEvidencePage />} />
            <Route path="/Employer Shortlist" element={<EmployerShortlistPage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;