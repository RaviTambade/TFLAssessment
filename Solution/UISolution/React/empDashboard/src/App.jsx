import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import LearningTimeline from './components/dashboard/learningTimeline';
import RecommendationView from './components/dashboard/RecommendationView'


function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/learningTimeline" element={<LearningTimeline />} />
             <Route path="/RecommendationView" element={<RecommendationView />} />



          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;