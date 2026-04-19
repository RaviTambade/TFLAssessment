import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import LoginPage from "../components/assessment/membership/Login"; // login page 
import RegisterPage from "../components/assessment/membership/Register";// register page
import ChangePassword from "../components/assessment/membership/ChangePassword";// change password page


//Evaluation Content
import EvaluationContentMenu from "../components/assessment/evaluationcontent/EvaluationContentMenu";
import Language from "../components/assessment/skilltaxonomy/Language";
import ContentAnalysis from "../components/assessment/evaluationcontent/ContentAnalysis";
import ProblemStatement from "../components/assessment/evaluationcontent/ProblemStatement";
import AddNewMiniProject from "../components/assessment/evaluationcontent/MiniProject";
import QuestionButton from "../components/assessment/evaluationcontent/QuestionButton";
import CodeSnippet from "../components/assessment/evaluationcontent/CodeSnippet";
import AddQuestion from "../components/assessment/evaluationcontent/AddQuestion";
import McqManager from "../components/assessment/evaluationcontent/MCQ";
import AddNewMockQuestion from "../components/assessment/evaluationcontent/MockQuestion";
// import AddTechnology from "../ components/assessment/evaluationcontent/AddTechnology";
import SkillTaxonomyMenu from "../components/assessment/skilltaxonomy/SkillTaxonomyMenu";
import SMEDashboard from "../components/assessment/skilltaxonomy/SMEDashboard";
import Concept from "../components/assessment/skilltaxonomy/Concept";
import DisplayConcept from "../components/assessment/skilltaxonomy/DisplayConcept";
import DisplaySubject from "../components/assessment/skilltaxonomy/DisplayLanguage";
import QuestionBarGraph from "../components/assessment/evaluationcontent/QuestionBarGraph";
import QuickStatistics from "../components/assessment/evaluationcontent/overallcount";
import AddConcept from "../components/assessment/skilltaxonomy/AddConcept";
import DeleteConcept from "../components/assessment/skilltaxonomy/DeleteConcept";
import UpdateConcept from "../components/assessment/skilltaxonomy/UpdateConcept";
import AddLanguage from "../components/assessment/skilltaxonomy/AddLanguage";
import EditLanguage from "../components/assessment/skilltaxonomy/EditLanguage";
import DisplayLanguage from "../components/assessment/skilltaxonomy/DisplayLanguage";
import DeleteLanguage from "../components/assessment/skilltaxonomy/DeleteLanguage";
import DeleteSubject from "../components/assessment/skilltaxonomy/DeleteSubject";
import DisplayLayer from "../components/assessment/evaluationcontent/DisplayLayer";


// Membership
import MembershipMenu from "@/components/assessment/membership/Dashboards&Profiles/MembershipMenu";
import AdminDashboard from "../components/assessment/membership/Dashboards&Profiles/AdminDashboard";
import AssignAssesment from "../components/assessment/membership/Dashboards&Profiles/AssignAssesment";
import ManageUsers from "../components/assessment/membership/Dashboards&Profiles/ManageUsers";
import UserSessions from "../components/assessment/membership/Dashboards&Profiles/UserSessions";
import AdminProfile from "../components/assessment/membership/Dashboards&Profiles/AdminProfile";
import Assessment from "../components/assessment/ComponentButtons";
import EmployerDashboard from "../components/assessment/membership/Dashboards&Profiles/EmployerDashboard";
import StudentDashboard from "../components/assessment/membership/Dashboards&Profiles/StudentDashboard";
import MentorDashboard from "../components/assessment/membership/Dashboards&Profiles/MentorDashboard";
import EmployerProfile from "@/components/assessment/membership/Dashboards&Profiles/EmployerProfile";
import MentorProfile from "@/components/assessment/membership/Dashboards&Profiles/MentorProfile"; 
import StudentProfile from "@/components/assessment/membership/Dashboards&Profiles/StudentProfile";
import SmeProfile from "@/components/assessment/membership/Dashboards&Profiles/SmeProfile";
import AddJobDescription from "@/components/assessment/membership/Dashboards&Profiles/JobDescription";

// insightcore pages
import InsightCoreMenu from "../components/assessment/insightcore/InsightCoreMenu";
import CandidatePerformance from "../components/assessment/insightcore/CandidatePerformance";
import CandidateTestResult from "../components/assessment/insightcore/CandidateTestResult";
import PerformanceSnapshot from "../components/assessment/insightcore/PerformanceSnapshot";

// Assessment Orchestrator
import AssessmentOrchestratorMenu from "../components/assessment/assessmentorchestrator/AssessmentOrchestratorMenu";
import SMECreateTest from "../components/assessment/assessmentorchestrator/Smecreatetest";
import MCQTest from "../components/assessment/assessmentorchestrator/MCQTest";
import CodeSnippets from "../components/assessment/assessmentorchestrator/CodeSnippets";
import ProblemStatementAO from "../components/assessment/assessmentorchestrator/ProblemStatement";
import MiniProjectAO from "../components/assessment/assessmentorchestrator/MiniProject";
import Technology from "@/components/assessment/evaluationcontent/Technology";
import AddTechnology from "@/components/assessment/evaluationcontent/AddTechnology";
import UpdateTechnology from "@/components/assessment/evaluationcontent/UpdateTechnology";
import AssignAssessment from "../components/assessment/assessmentorchestrator/AssignAssessment";
import ShowAssessment from "../components/assessment/assessmentorchestrator/ShowAssessment";

import UpdateQuestionType from "@/components/assessment/evaluationcontent/UpdateQuestionType";
import AddQuestionType from "@/components/assessment/evaluationcontent/AddQuestionType";
import QuestionType from "@/components/assessment/evaluationcontent/QuestionType";




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

          {/* Evaluation Content */}
          <Route path="evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />
          <Route path="evaluationcontent/content-analysis" element={<ContentAnalysis />} />
          <Route path="evaluationcontent/problem-statement" element={<ProblemStatement />} />
          <Route path="evaluationcontent/mini-project" element={<AddNewMiniProject />} />
          <Route path="evaluationcontent/question-button" element={<QuestionButton />} />
          <Route path="evaluationcontent/code-snippet" element={<CodeSnippet />} />
          <Route path="evaluationcontent/add-question" element={<AddQuestion />} />

          <Route path="evaluationcontent/technology" element={<Technology />} />
          <Route path="evaluationcontent/add-technology" element={<AddTechnology />} />
          <Route path="evaluationcontent/update-technology" element={<UpdateTechnology />} />
           <Route path="evaluationcontent/questiontype" element={<QuestionType />} />
           <Route path="evaluationcontent/add-questiontype" element={<AddQuestionType />} />
           <Route path="evaluationcontent/update-questiontype" element={<UpdateQuestionType />} />
          
          
          <Route path="evaluationcontent/mcq" element={<McqManager />} />
          <Route path="evaluationcontent/mock-question" element={<AddNewMockQuestion />} />
          <Route path="evaluationcontent/quick-statistics" element={<QuickStatistics />} />
          <Route path="evaluationcontent/display-layer" element={<DisplayLayer />} />


          {/* Skill Taxonomy */}
          <Route path="skilltaxonomy/skilltaxonomy-menu" element={<SkillTaxonomyMenu />} />
          <Route path="skilltaxonomy/languages" element={<Language />} />
          <Route path="skilltaxonomy/subjects" element={<DisplaySubject />} />
          <Route path="skilltaxonomy/smedashboard" element={<SMEDashboard />} />
          <Route path="skilltaxonomy/concept" element={<Concept />} />
          <Route path="skilltaxonomy/concept/list" element={<Concept />} />
          <Route path="skilltaxonomy/concept/display" element={<DisplayConcept />} />
          <Route path="skilltaxonomy/subject/display" element={<DisplaySubject />} />
          <Route path="skilltaxonomy/layers" element={<DisplayLayer />} />
          <Route path="skilltaxonomy/questionbargraph" element={<QuestionBarGraph />} />
          <Route path="skilltaxonomy/languages/add" element={<AddLanguage />} />
          <Route path="skilltaxonomy/languages/display" element={<DisplayLanguage />} />
          <Route path="skilltaxonomy/languages/edit" element={<EditLanguage />} />
          <Route path="skilltaxonomy/languages/delete" element={<DeleteLanguage />} />

          {/* Membership */}
          <Route path="membership/Login" element={<LoginPage />} />
          <Route path="membership/admin" element={<AdminDashboard />} />
          <Route path="membership/Register" element={<RegisterPage />} />
          <Route path="membership/MembershipMenu" element={<MembershipMenu />} />
          <Route path="membership/AssignAssessment" element={<AssignAssesment />}></Route>
          <Route path="membership/ManageUsers" element={<ManageUsers />} />
          <Route path="membership/UserSessions" element={<UserSessions />} />
          <Route path="membership/AdminProfile" element={<AdminProfile />} />
          <Route path="membership/ChangePassword" element={<ChangePassword />} />
          <Route path="membership/EmployerDashboard" element={<EmployerDashboard />} />
          <Route path="membership/StudentDashboard" element={<StudentDashboard />} />
          <Route path="membership/MentorDashboard" element={<MentorDashboard />} />
          <Route path="membership/EmployerProfile" element={<EmployerProfile />} />
          <Route path="membership/MentorProfile" element={<MentorProfile />} />
          <Route path="membership/StudentProfile" element={<StudentProfile />} />
          <Route path="membership/SmeProfile" element={<SmeProfile />} />
          <Route path="membership/AddJobDescription" element={<AddJobDescription />} />

          {/* Concept Actions */}
          <Route path="concept/add" element={<AddConcept />} />
          <Route path="concept/delete" element={<DeleteConcept />} />
          <Route path="concept/update" element={<UpdateConcept />} />

          {/* Subject Actions */}
          <Route path="subject/add" element={<AddLanguage />} />
          <Route path="subject/edit" element={<EditLanguage />} />
          <Route path="subject/edit/:id" element={<EditLanguage />} />
          <Route path="subject/delete" element={<DeleteSubject />} />
          <Route path="subject/delete/:id" element={<DeleteSubject />} />
          <Route path="subject/view/:id" element={<DisplaySubject />} />

          {/* insightcore pages */}
          {/* Insight Core */}
          <Route path="insight-core" element={<InsightCoreMenu />} />
          <Route path="candidate-performance" element={<CandidatePerformance />} />
          <Route path="candidate-test-results" element={<CandidateTestResult />} />
          <Route path="performance-snapshot" element={<PerformanceSnapshot />} />

          {/* membership index - show admin dashboard */}
          <Route path="membership" element={<AdminDashboard />} />


          {/* Assessment Orchestrator - /models/assessment-orchestrator from ComponentButtons */}
          <Route path="assessment-orchestrator" element={<AssessmentOrchestratorMenu />} />
          <Route path="assessmentorchestrator/menu" element={<AssessmentOrchestratorMenu />} />
          <Route path="assessmentorchestrator/createtest" element={<SMECreateTest onCancel={() => navigate("/models/assessmentorchestrator/menu")} />} />
          <Route path="assessmentorchestrator/mcq" element={<MCQTest onBack={() => navigate("/models/assessmentorchestrator/menu")} />} />
          <Route path="assessmentorchestrator/snippets" element={<CodeSnippets onBack={() => navigate("/models/assessmentorchestrator/menu")} />} />
          <Route path="assessmentorchestrator/problem" element={<ProblemStatementAO onBack={() => navigate("/models/assessmentorchestrator/menu")} />} />
          <Route path="assessmentorchestrator/project" element={<MiniProjectAO onBack={() => navigate("/models/assessmentorchestrator/menu")} />} />
          <Route path="assessmentorchestrator/show" element={<ShowAssessment />} />
           <Route path="assessmentorchestrator/assign" element={<AssignAssessment />} />
          {/* /models alone (empty splat) shows main assessment */}
          <Route index element={<Assessment />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
