import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorRoutes from "../src/components/route/mentor/mentorRoute"
import Sidebar from "./components/layout/Sidebar";
import StudentRoute from "./components/route/student/studentRoute";

function App() {
  return (
      <div className="d-flex">
        <div className="flex-grow-1 p-3">
        <Sidebar />
        </div>
      </div>
  );
}

export default App;
