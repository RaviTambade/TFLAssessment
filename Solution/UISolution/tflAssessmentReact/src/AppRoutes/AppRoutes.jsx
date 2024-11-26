import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Dashboard/Home';
import Login from '../authentication/Components/Login';
import CandidateProfile from '../CandidateProfile/Component/CandidateProfile';
import TestAppear from '../Assessment/Components/TestAppear';
import ChangePassword from '../authentication/Components/ChangePassword';
import CandidateTestList from '../CandidateResultDetails/Components/CandidateTestList';
import TeacherDashboard from '../Dashboard/TeacherDashboard';
import StudentDashboard from '../Dashboard/StudentDashboard';
import CreateTestComponent from '../Assessment/Components/CreateNewAssesment';
import ManageQuestionsWithTest from '../Assessment/Components/InsertQuestionsByTest';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<CandidateProfile />} />
      <Route path="/profile/testAppear" element={<TestAppear />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/createTestComponent" element={<CreateTestComponent />} />
      <Route path="/insertQuestionsByTest" element={<ManageQuestionsWithTest />} />
      <Route path="/candidatetestlist" element={<CandidateTestList />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
