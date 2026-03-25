import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//Evaluation Content
import EvaluationContentMenu from "../components/assessment/EvaluationContentMenu";
import Assessment from "../components/assessment/ComponentButtons";
import UpdateQuestion from "../components/assessment/UpdateQuestion";
function AppRoutes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="evaluationcontent/components" element={<Assessment />} />

          <Route path="evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />
          <Route path="evaluationcontent/updatequestion" element={<UpdateQuestion />} />
         
         
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
