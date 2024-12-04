import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Dashboard/Home';
import Login from '../authentication/Components/Login';
import NewUserForm from '../authentication/Components/NewUser';
import CandidateProfile from '../CandidateProfile/Component/CandidateProfile';
import TestAppear from '../Assessment/Components/TestAppear';
import ChangePassword from '../authentication/Components/ChangePassword';
import CandidateTestList from '../CandidateResultDetails/Components/CandidateTestList';
import TeacherDashboard from '../Dashboard/TeacherDashboard';
import StudentLayout from '../Dashboard/StudentLayout';
import CreateTestComponent from '../Assessment/Components/CreateNewAssesment';
import ManageQuestionsWithTest from '../Assessment/Components/InsertQuestionsByTest';
import RescheduleAssessment from '../Assessment/Components/RescheduleAssesment';
import ChangeDuration from '../Assessment/Components/ChangeDuration';
import CandidatesList from '../CandidateResultDetails/Components/CandidatesByTest';

function AppRoutes() {
  return (
    <Routes>
      {/* Non-nested routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newuser" element={<NewUserForm />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/createTestComponent" element={<CreateTestComponent />} />
      <Route path="/insertQuestionsByTest" element={<ManageQuestionsWithTest />} />
      <Route path="/rescheduleassessment" element={<RescheduleAssessment />} />
      <Route path="/changeduration" element={<ChangeDuration />} />
      <Route path="/testresultdetails" element={<CandidatesList />} />

      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

      <Route path="/student-dashboard" element={<StudentLayout />}>
        <Route path="profile" element={<CandidateProfile />} />
        <Route path="profile/testAppear" element={<TestAppear />} />
        <Route path="candidatetestlist" element={<CandidateTestList />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
