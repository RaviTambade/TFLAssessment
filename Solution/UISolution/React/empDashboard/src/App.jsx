import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            {/* <Route path="/" element={<StudentDashboard />} /> */}
    
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;