import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorRoutes from "../src/components/route/mentor/mentorRoute"
import Sidebar from "./components/layout/Sidebar";
import EmployerRoute from './components/route/employer/employerRoute'

function App() {

  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <MentorRoutes />
          <EmployerRoute />
        </div>
      </div>
    </Router>
  );
}

export default App;
