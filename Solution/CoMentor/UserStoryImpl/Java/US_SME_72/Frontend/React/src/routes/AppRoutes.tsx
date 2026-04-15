import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

// Evaluation Content
import EvaluationContentMenu from "../components/assessment/EvaluationContentMenu";
import Assessment from "../components/assessment/ComponentButtons";
import SMEInsertQuestion from "../components/assessment/SMEInsertQuestion";
import MentorReviewQuestion from "../components/assessment/MentorReviewQuestion";

function AppRoutes() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <Routes>
          {/* Main Menu */}
          <Route path="/evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />

          {/* SME */}
          <Route path="/evaluationcontent/insertquestion" element={<SMEInsertQuestion />} />

          {/* Mentor */}
          <Route path="/evaluationcontent/reviewquestion" element={<MentorReviewQuestion />} />

          {/* Other */}
          <Route path="/evaluationcontent/components" element={<Assessment />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;