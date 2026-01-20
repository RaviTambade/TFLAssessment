import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import SkillsAnalyticsPage from './pages/skillsAnalyticsPage';
import SkillsAnalyticsPage from './pages/skillsAnalyticsPage';
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
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;