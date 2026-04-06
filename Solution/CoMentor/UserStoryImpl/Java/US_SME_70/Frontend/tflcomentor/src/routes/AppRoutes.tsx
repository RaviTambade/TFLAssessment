import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuestionByType from "@/components/assessment/evaluationcontent/QuestionByType";

//Evaluation Content
import Assessment from "../components/assessment/ComponentButtons";

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background"> 
      <Navbar />
      <main className="pt-20">
        <Routes>
          {/* With v7_relativeSplatPath, child routes match the splat portion (path after /models/) */}
          {/* Main Component Page */}
          <Route path="evaluationcontent/components" element={<Assessment />} />
          <Route path="evaluationcontent/question-by-type" element={<QuestionByType />} />
          <Route index element={<Assessment />} />
          <Route path="assessment/components" element={<Assessment />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
