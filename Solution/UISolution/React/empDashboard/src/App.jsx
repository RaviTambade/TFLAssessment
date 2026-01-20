import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import CandidateListView from "./components/dashboard/candidateListView";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />

        <div className="flex-grow-1 p-3">
          <Routes>
            <Route
              path="/candidateListView"
              element={<CandidateListView />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
