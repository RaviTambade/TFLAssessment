import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import EvaluationContentMenu from "../components/assessment/evaluationcontent/EvaluationContentMenu";
import SkillTaxonomyMenu from "../components/assessment/skilltaxonomy/SkillTaxonomyMenu";
import Assessment from "../components/assessment/ComponentButtons";
import AddRuntime from "@/components/assessment/skilltaxonomy/AddRuntime";


function AppRoutes() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Routes>
          {/* Main Component Page */}
          <Route path="evaluationcontent/components" element={<Assessment />} />

          {/* Evaluation Content */}
          <Route path="evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />

          {/* Skill Taxonomy */}
          <Route path="skilltaxonomy/skilltaxonomy-menu" element={<SkillTaxonomyMenu />} />

           <Route path="skilltaxonomy/AddRuntime" element={<AddRuntime />} />
 
          

          {/* Default route - shows main assessment */}

          <Route path="evaluationcontent/updatequestion" element={<UpdateQuestion />} />
          <Route path="evaluationcontent/questionbyconcept" element={<QuestionsByConcept />} />
          <Route path="evaluationcontent/viewquestion" element={<QuestionPage />} />
          <Route path="/evaluationcontent/questiondetails/:question_id" element={<QuestionDetails />} />
          <Route path="/evaluationcontent/update/:id" element={<EditQuestion />} />
          <Route path="/evaluationcontent/edit/:id" element={<EditQuestion />} />
          <Route path="evaluationcontent/insertquestion" element={<SMEInsertQuestion />} />
          <Route path="evaluationcontent/reviewquestion" element={<MentorReviewQuestion />} />
          <Route index element={<Assessment />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
