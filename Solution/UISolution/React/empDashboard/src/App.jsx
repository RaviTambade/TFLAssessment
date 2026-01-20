import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import SkillDrillDownPage from './pages/skillDrillDownPage';
import ProjectEvidencePage from './pages/projectEvidencePage';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<SkillDrillDownPage />} />
            <Route path="/skill-drill-down" element={<SkillDrillDownPage />} />
            <Route path="/project-evidence" element={<ProjectEvidencePage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;