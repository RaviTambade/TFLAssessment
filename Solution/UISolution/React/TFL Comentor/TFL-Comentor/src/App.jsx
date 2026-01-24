import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import StudentRoute from "./components/route/student/studentRoute";

function App() {
  return (
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
        </div>
      </div>
  );
}

export default App;
