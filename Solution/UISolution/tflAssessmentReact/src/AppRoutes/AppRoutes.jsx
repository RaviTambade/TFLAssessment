import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Authentication Components
import Login from '../authentication/Components/Login';
import NewUserForm from '../authentication/Components/NewUser';
import ChangePassword from '../authentication/Components/ChangePassword';

// Dashboard Layouts
import Home from '../Dashboard/Home';
import StudentLayout from '../Dashboard/StudentLayout';
import TeacherLayout from '../Dashboard/TeacherLayout';

// Student Components
import CandidateProfile from '../CandidateProfile/Component/CandidateProfile';
import TestAppear from '../Assessment/Components/TestAppear';
import CandidateTestList from '../CandidateResultDetails/Components/CandidateTestList';

// Teacher Components
import CreateTestComponent from '../Assessment/Components/CreateNewAssesment';
import ManageQuestionsWithTest from '../Assessment/Components/InsertQuestionsByTest';
import RescheduleAssessment from '../Assessment/Components/RescheduleAssesment';
import ChangeDuration from '../Assessment/Components/ChangeDuration';
// import CandidatesList from '../CandidateResultDetails/Components/CandidatesByTest';
import AssessmentList from '../Assessment/Components/AssessmentList';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newuser" element={<NewUserForm />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      

      {/* Student Layout and Nested Routes */}
      <Route path="/student" element={<StudentLayout />}>
        <Route path="profile" element={<CandidateProfile />} />
        <Route path="profile/testAppear" element={<TestAppear />} />
        <Route path="candidatetestlist" element={<CandidateTestList />} />
      </Route>

      {/* Teacher Layout and Nested Routes */}
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route path="createTestComponent" element={<CreateTestComponent />} />
        <Route path="insertQuestionsByTest" element={<ManageQuestionsWithTest />} />
        <Route path="rescheduleAssessment" element={<RescheduleAssessment />} />
        <Route path="changeDuration" element={<ChangeDuration />} />
        <Route path="assessmentlist" element={<AssessmentList />} />

        {/* <Route path="testresultdetails" element={<CandidatesList />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
