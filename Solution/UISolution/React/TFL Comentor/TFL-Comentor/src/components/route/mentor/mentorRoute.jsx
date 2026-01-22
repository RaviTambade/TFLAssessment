import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from '../../layout/Sidebar';
import TestData from "../../dashboard/mentor/TestData";
import SkillHealthSnapshot from "../../dashboard/mentor/SkillHealthSnapshot";
import PublishAssessment from "../../dashboard/mentor/PublishAssessment";
function MentorRoutes() {
  return (

      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
  
            <Route path="/skill-health-snapshot" element={<SkillHealthSnapshot />} />
            <Route path="/skill-health-snapshot" element={<SkillHealthSnapshot />} />
            <Route path="/publish-assessment" element={<PublishAssessment />} />
            <Route path="/test-data" element={<TestData />} />
            <Route path="/" element={<TestData />} />

          </Routes>
        </div>
      </div>
  );
}

export default MentorRoutes;