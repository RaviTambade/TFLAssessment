import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import KPIStrip from "./components/EmployerDashboard/KPIStrip";
import CandidateSkills from "./components/EmployerDashboard/CandidateSkills";
import CandidateRanking from "./components/EmployerDashboard/CandidateRanking";
import DashboardPanels from "./components/EmployerDashboard/DashboardPanels";
// import EmployerDashboard from "./components/EmployerDashboard/EmployerDashboard";
// import CandidateTable from "./components/EmployerDashboard/CandidateTable";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
      
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/candidate-skills" element={<CandidateSkills />} /> 
            <Route path="/kpi-strip" element={<KPIStrip />} />
            <Route path="/candidate-ranking" element={<CandidateRanking />} />
            <Route path="/dashboard-panel" element={<DashboardPanels />} />
            {/* <Route path="/candidate-table" element={<CandidateTable />} /> */}
            {/* <Route path="/employer-dashboard" element={<EmployerDashboard />} /> */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
        </div>
    </Router>
  );
}

export default App;