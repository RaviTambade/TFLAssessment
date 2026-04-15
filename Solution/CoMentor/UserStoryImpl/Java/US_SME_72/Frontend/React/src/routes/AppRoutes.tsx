import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

// Components
import EvaluationContentMenu from "../components/assessment/EvaluationContentMenu";
import Assessment from "../components/assessment/ComponentButtons";
import SMEInsertQuestion from "../components/assessment/SMEInsertQuestion";
import MentorReviewQuestion from "../components/assessment/MentorReviewQuestion";
import QuestionDetails from "../components/assessment/QuestionDetails";
import UpdateQuestion from "@/components/assessment/UpdateQuestion";

function AppRoutes() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <Routes>

          {/* ✅ Question Details */}
          <Route path="/evaluationcontent/questiondetails/:id" element={<QuestionDetails />} />
          <Route path="/evaluationcontent/update/:id" element={<UpdateQuestion />} />

          {/* ✅ Edit Route */}
          <Route path="/evaluationcontent/edit/:id" element={<UpdateQuestion />} />

          {/* Other Routes */}
          <Route path="/evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />
          <Route path="/evaluationcontent/insertquestion" element={<SMEInsertQuestion />} />
          <Route path="/evaluationcontent/reviewquestion" element={<MentorReviewQuestion />} />
          <Route path="/evaluationcontent/components" element={<Assessment />} />

        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;