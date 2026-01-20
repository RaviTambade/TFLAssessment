import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import LoginPage from './pages/loginPage';
import DashboardPage from './pages/dashboardPage';
import EmployerAssist from './components/dashboard/employerAssist';
import EmployerConfidence from './components/dashboard/employerConfidence';

import SkillDrillDownPage from './pages/skillDrillDownPage';
import ProjectEvidencePage from './pages/projectEvidencePage';
import EmployerAssistPage from './pages/employerAssistPage';
import EmployerConfidencePage from './pages/employerConfidencePage';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/employer-assist" element={<EmployerAssistPage/>}/>
            <Route path="/employer-confidence" element={<EmployerConfidencePage/>}/>
            <Route path="/skill-drill-down" element={<SkillDrillDownPage />} />
            <Route path="/project-evidence" element={<ProjectEvidencePage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;