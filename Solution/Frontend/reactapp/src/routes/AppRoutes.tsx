import React from "react";
import { Routes, Route } from "react-router-dom";

import EvaluationContentMenu from "../components/assessment/evaluationcontent/EvaluationContentMenu";
import SkillTaxonomyMenu from "../components/assessment/skilltaxonomy/SkillTaxonomyMenu";
import Assessment from "../components/assessment/ComponentButtons";
import AssessmentOrchestrator from "@/components/assessment/assessmentOrchestrator/assessmentOrchestrator";
import QuestionByType from "@/components/assessment/evaluationcontent/QuestionByType";
import GetQuestionsByDate from "@/components/assessment/evaluationcontent/GetQuestionsByDate";
import UpdateQuestion from "@/components/assessment/evaluationcontent/UpdateQuestion";
import QuestionsByConcept from "@/components/assessment/evaluationcontent/QuestionsByConcept";
import QuestionPage from "@/components/assessment/evaluationcontent/QuestionsPage";
import SMEInsertQuestion from "@/components/assessment/evaluationcontent/SMEInsertQuestion";
import QuestionDetails from "@/components/assessment/evaluationcontent/QuestionDetails";
import EditQuestion from "@/components/assessment/evaluationcontent/EditQuestion";
import ViewRuntimes from "@/components/assessment/skilltaxonomy/ViewRuntimes";
import Getallquestions from "@/components/assessment/evaluationcontent/Getallquestions";
// import AddConcept from "@/components/assessment/skilltaxonomy/AddConcept";
import UpcomingAssessment from "../components/assessment/assessmentOrchestrator/UpcomingAssessment";
import AllAssessment from "@/components/assessment/assessmentOrchestrator/AllAssessment";
//import Question from "@/components/assessment/assessmentOrchestrator/applyAssessment";
import Result from "@/components/assessment/assessmentOrchestrator/Result";
import SMEInterviewDashboard from "@/components/assessment/interview/SMEInterviewDashboard";
import ViewProjectInfo from "@/components/assessment/evaluationcontent/ViewProjectInfo";
import ProjectByMentee from "@/components/assessment/evaluationcontent/ProjectByMentee";
import QuestionsByDifficulty from "@/components/assessment/evaluationcontent/QuestionByDifficulty";
import MembershipMenu from "@/components/assessment/membership/MembershipMenu";
import ChangePassword from "@/components/assessment/membership/ChangePassword";
import GetUserLogDetail from "@/components/assessment/membership/UserLogDetail";
import LoginPage from "@/components/assessment/membership/Login";
import ManageUsers from "@/components/assessment/membership/ManageUsers";
import RegisterPage from "@/components/assessment/membership/Register";
import GetUserInformation from "@/components/assessment/membership/UserInformation";
import UserActivity from "@/components/assessment/membership/UserActivity";
import UserProfile from "@/components/assessment/membership/UserProfile";
import CreateTest from "@/components/assessment/assessmentOrchestrator/createTest/createTest";
import AssignAssessment from "@/components/assessment/assessmentOrchestrator/AssignAssessment";
import ConceptByFramework from "@/components/assessment/skilltaxonomy/ConceptByFramework";
import QuestionOptions from "@/components/assessment/assessmentOrchestrator/createTest/QuestionOptions";

import QuestionByConceptId from "@/components/assessment/evaluationcontent/QuestionByConceptId";
import Dashboard from "@/components/assessment/membership/dashboard";
import EvaluationDashboard from "@/components/assessment/evaluationcontent/EvaluationDashboard";
// import GetQuestionSme from "@/components/assessment/evaluationcontent/getQuestionsme";


// import EvaluationContentSme from "@/components/assessment/evaluationcontent/EvaluationContents";
import Question from "@/components/assessment/assessmentOrchestrator/applyAssessment";
import RTUpdateQuestion from "@/components/assessment/evaluationcontent/RTUpdateQuestion";
import ScheduleInterview from "@/components/assessment/interview/ScheduleInterview";
import InterviewMenu from "@/components/assessment/interview/interviewmenu";
import ShowInterviewDetailsStudent from "@/components/assessment/interview/ShowInterviewDetailsStudent";
import UpcomingInterviews from "@/components/assessment/interview/UpcomingInterviews";
import InterviewHistory from "@/components/assessment/interview/InterviewHistory";

import Mentees from "@/components/assessment/membership/Mentees";
import SMEExpertiseForm from "@/components/assessment/assessmentOrchestrator/createTest/smeExpertiseForm";
import InterviewFeedback from "@/components/assessment/interview/InterviewFeedback";
import DashboardSME from "@/components/assessment/membership/dashboardsme";
import StudentList from "@/components/assessment/assessmentOrchestrator/StudentList";
import QuestionFeedback from "@/components/assessment/interview/QuestionFeedback";

function AppRoutes() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <Routes>
          {/* Main Component Page */}
          <Route path="evaluationcontent/components" element={<Assessment />} />
          {/* Evaluation Content */}
          <Route
            path="evaluationcontent/componentmenu"
            element={<EvaluationContentMenu />}
          />
          <Route path="evaluationcontent/dashboard" element={<EvaluationDashboard />} />
          {/* <Route
          path="evaluationcontent/sme"
          element={<GetQuestionSme />}
          /> */}
          {/* Question by Type */}
          <Route
            path="evaluationcontent/questionbytype"
            element={<QuestionByType />}
          />
          <Route
            path="evaluationcontent/questionsbyconceptid"
            element={<QuestionByConceptId />}
          />
          <Route
            path="evaluationcontent/getquestionsbydate"
            element={<GetQuestionsByDate />}
          />
            <Route
            path="evaluationcontent/GetAllQuestions"
            element={<Getallquestions />}
          />
          {/* Skill Taxonomy */}
          <Route
            path="skilltaxonomy/skilltaxonomy-menu"
            element={<SkillTaxonomyMenu />}
          />
          {/* Assessment Orchestrator */}
          <Route
            path="assessmentorchestrator/assessmentorchestrator-menu"
            element={<AssessmentOrchestrator />}
          />
          <Route path="/students" element={<StudentList />}/>
          <Route path="upcoming-assessment" element={<UpcomingAssessment />} />
          <Route path="all-assessment" element={<AllAssessment />} />
          <Route path="apply-assessment" element={<Question />} />
          {/* <Route path="result" element={<Result />} /> */}
          <Route path="result/:assessmentId" element={<Result />} />
          <Route path="assessment/start/:assessmentId" element={<Question />} />
          <Route
            path="membership/membership-menu"
            element={<MembershipMenu />}
          />
          <Route path="skilltaxonomy/ViewRuntimes" element={<ViewRuntimes />} />
          ce2
          {/* <Route path="skilltaxonomy/AddConcept" element={<AddConcept />} /> */}
          <Route
            path="skilltaxonomy/ConceptByFramework"
            element={<ConceptByFramework />}
          />
          {/* Default route - shows main assessment */}
          <Route
            path="evaluationcontent/updatequestion"
            element={<UpdateQuestion />}
          />
          <Route
            path="evaluationcontent/questionbyconcept"
            element={<QuestionsByConcept />}
          />
          <Route
            path="evaluationcontent/viewquestion"
            element={<QuestionPage />}
          />
          <Route
            path="evaluationcontent/questiondetails/:question_id"
            element={<QuestionDetails />}
          />
          <Route
            path="evaluationcontent/update/:id"
            element={<EditQuestion />}
          />
          <Route path="evaluationcontent/edit/:id" element={<EditQuestion />} />
          <Route
            path="evaluationcontent/insertquestion"
            element={<SMEInsertQuestion />}
          />
         
          <Route index element={<Assessment />} />
          <Route
            path="evaluationcontent/viewprojectinfo"
            element={<ViewProjectInfo />}
          />
          <Route index element={<Assessment />} />
          <Route path="upcoming-assessment" element={<UpcomingAssessment />} />
          <Route path="create-test" element={<CreateTest />} />
          <Route path="sme-expertise-form" element={<SMEExpertiseForm />} />
          <Route path="question-options" element={<QuestionOptions />} />
          <Route path="assign-assessment" element={<AssignAssessment />} />
          <Route path="all-assessment" element={<AllAssessment />} />
          <Route
            path="evaluationcontent/questionbydifficulty"
            element={<QuestionsByDifficulty />}
          />
          <Route
            path="evaluationcontent/projectbymentee"
            element={<ProjectByMentee />}
          />
          {/* Interview */}
          <Route path="interview/interview-menu" element={<InterviewMenu/>} />
          <Route path="interview/scheduleinterview" element={<ScheduleInterview/>} />
          <Route path="interview/show-details-student" element={<ShowInterviewDetailsStudent />} />
          <Route path="interview/upcoming-interviews" element={<UpcomingInterviews />} />
         <Route path="interview/interviewhistory" element={<InterviewHistory/>}/>
          <Route path="interview/interview-menu" element={<InterviewMenu />} />
          <Route path="interview/scheduleinterview" element={<ScheduleInterview />} />
          <Route path="interview/show-details-student/:id" element={<ShowInterviewDetailsStudent />} />
          <Route path="interview/upcoming-interviews" element={<UpcomingInterviews />} />
          <Route path="interview/SMEInterviewDashboard" element={<SMEInterviewDashboard />} />
          <Route path="interview/feedback/:id" element={<InterviewFeedback />} />
          <Route path="interview/question/feedback/:id" element={<QuestionFeedback/>} />
          {/* Membership model */}
          <Route
            path="membership/ChangePassword"
            element={<ChangePassword />}
          />
          <Route
            path="membership/GetUserInformation"
            element={<GetUserInformation />}
          />
          <Route
            path="membership/GetUserLogDetail"
            element={<GetUserLogDetail />}
          />
          <Route path="membership/Login" element={<LoginPage />} />
          <Route path="membership/ManageUsers" element={<ManageUsers />} />
          <Route path="membership/Register" element={<RegisterPage />} />
          <Route path="membership/UserActivity" element={<UserActivity />} />
          <Route path="membership/UserProfile" element={<UserProfile />} />
          <Route path="membership/dashboard" element={<Dashboard />} />
          <Route path="membership/SmeDashboard" element={<DashboardSME />} />
          <Route path="membership/Mentees" element={<Mentees />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
