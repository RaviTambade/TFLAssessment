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

=======
import SkillsAnalyticsPage from './pages/skillsAnalyticsPage';
>>>>>>> c1ade591 (emp dashboard)
function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/employer-assist" element={<EmployerAssist/>}/>
            <Route path="/employer-confidence" element={<EmployerConfidence/>}/>
            <Route path="/skill-drill-down" element={<SkillDrillDownPage />} />
            <Route path="/project-evidence" element={<ProjectEvidencePage />} />
=======
            { <Route path="/skills-analytics" element={<SkillsAnalyticsPage />} /> }
    
>>>>>>> c1ade591 (emp dashboard)
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;