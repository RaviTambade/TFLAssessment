import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import LoginPage from './pages/loginPage';
import DashboardPage from './pages/dashboardPage';


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
    
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;