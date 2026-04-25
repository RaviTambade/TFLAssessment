import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import EvaluationContentMenu from "../components/assessment/evaluationcontent/EvaluationContentMenu";
import SkillTaxonomyMenu from "../components/assessment/skilltaxonomy/SkillTaxonomyMenu";
import Assessment from "../components/assessment/ComponentButtons";
import AssessmentOrchestrator from "@/components/assessment/assessmentOrchestrator/assessmentOrchestrator";
import QuestionByStatus from "@/components/assessment/evaluationcontent/QuestionByStatus";
import QuestionByType from "@/components/assessment/evaluationcontent/QuestionByType";
import AddRuntime from "@/components/assessment/skilltaxonomy/AddRuntime";
import UpdateQuestion from "@/components/assessment/evaluationcontent/UpdateQuestion";
import QuestionsByConcept from "@/components/assessment/evaluationcontent/QuestionsByConcept";
import QuestionPage from "@/components/assessment/evaluationcontent/QuestionsPage";
import SMEInsertQuestion from "@/components/assessment/evaluationcontent/SMEInsertQuestion";
import MentorReviewQuestion from "@/components/assessment/evaluationcontent/MentorReviewQuestion";
import QuestionDetails from "@/components/assessment/evaluationcontent/QuestionDetails";
import EditQuestion from "@/components/assessment/evaluationcontent/EditQuestion";
import ViewRuntimes from "@/components/assessment/skilltaxonomy/ViewRuntimes";
import AddConcept from "@/components/assessment/skilltaxonomy/AddConcept";
import UpcomingAssessment from "../components/assessment/assessmentOrchestrator/UpcomingAssessment";
import DeleteAssessment from "@/components/assessment/assessmentOrchestrator/DeleteAssessment";
import QuestionsByDifficulty from "@/components/assessment/evaluationcontent/QuestionByDifficulty";
import ProjectByMentee from "@/components/assessment/evaluationcontent/ProjectByMentee";

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

          {/* Question by Status */}
          <Route path="evaluationcontent/questionbystatus" element={<QuestionByStatus />} />
          {/* Question by Type */}
          <Route path="evaluationcontent/questionbytype" element={<QuestionByType />} />

          {/* Skill Taxonomy */}
          <Route path="skilltaxonomy/skilltaxonomy-menu" element={<SkillTaxonomyMenu />} />

          {/* Assessment Orchestrator */}
          <Route path="assessmentorchestrator/assessmentorchestrator-menu" element={<AssessmentOrchestrator />} />
          
          <Route path="skilltaxonomy/AddRuntime" element={<AddRuntime />} />
              <Route path="skilltaxonomy/ViewRuntimes" element={<ViewRuntimes />} />
 
           <Route path="skilltaxonomy/AddRuntime" element={<AddRuntime />} />
           <Route path="skilltaxonomy/AddConcept" element={<AddConcept />} />

          

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
           <Route path="upcoming-assessment" element={<UpcomingAssessment />} />
            <Route path="delete-assessment" element={<DeleteAssessment />} />
            <Route path="evaluationcontent/questionbydifficulty" element={<QuestionsByDifficulty />} />
            <Route path="evaluationcontent/projectbymentee" element={<ProjectByMentee />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
