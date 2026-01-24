import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MentorRoutes from "./components/route/mentor/mentorRoute";


function App() {
  return (

    <div >

      <MentorRoutes />

    </div>

  );
}

export default App;
