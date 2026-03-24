import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//Evaluation Content
import EvaluationContentMenu from "../components/assessment/evaluationcontent/EvaluationContentMenu";
import ViewQuestion from "../components/assessment/evaluationcontent/ViewQuestion";
import Assessment from "../components/assessment/ComponentButtons";
import QuestionList from "../components/assessment/evaluationcontent/QuestionList";
import ConceptQuestion from "../components/assessment/evaluationcontent/ConceptQuestion";
function AppRoutes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="evaluationcontent/components" element={<Assessment />} />

          <Route path="evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />
          <Route path="evaluationcontent/viewquestion" element={<ViewQuestion />} />
          <Route path="evaluationcontent/listquestion" element={<QuestionList />} />
          <Route path="evaluationcontent/conceptquestion" element={<ConceptQuestion />} />
         
         
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
