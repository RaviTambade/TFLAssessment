import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorRoutes from "../src/components/route/mentor/mentorRoute"
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <MentorRoutes/>
        </div>
      </div>
    </Router>
  );
}

export default App;
