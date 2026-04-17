import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//Evaluation Content
import EvaluationContentMenu from "../components/assessment/evaluationcontent/EvaluationContentMenu";

import Assessment from "../components/assessment/ComponentButtons";
import Questions from "../components/assessment/evaluationcontent/Questions";


function AppRoutes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="evaluationcontent/components" element={<Assessment />} />
          <Route path="evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />
          <Route path="evaluationcontent/question-difficulty-level" element={<Questions />} />


          <Route index element={<Assessment />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
