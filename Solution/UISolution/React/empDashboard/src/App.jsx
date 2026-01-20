import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import EmployerAssist from './components/dashboard/employerAssist';
import EmployerConfidence from './components/dashboard/employerConfidence';


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            {/* <Route path="/" element={<StudentDashboard />} /> */}
            <Route path="/employer-assist" element={<EmployerAssist/>}/>
            <Route path="/employer-confidence" element={<EmployerConfidence/>}/>
    
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;