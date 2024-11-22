import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Navigation/Home';
import Login from '../authentication/Components/Login';
import CandidateProfile from '../CandidateProfile/Component/CandidateProfile';
import TestAppear from '../Assessment/Components/TestAppear';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<CandidateProfile />} />
      <Route path="/profile/testAppear" element={<TestAppear />} />
    </Routes>
  );
}

export default AppRoutes;
