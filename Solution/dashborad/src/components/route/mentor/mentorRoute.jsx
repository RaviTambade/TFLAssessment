import { Routes, Route, Navigate } from "react-router-dom";

import MentorDataPage from "../../pages/mentor/MentorDataPage";
import LearnerSkillAnalyticsPage from "../../pages/mentor/LearnerSkillAnalyticsPage";
import TestDataPage from "../../pages/mentor/TestDataPage";
import SkillHealthSnapshotPage from "../../pages/mentor/SkillHealthSnapshotPage";
import PublishAssessmentPage from "../../pages/mentor/PublishAssessmentPage";
import MentorRecommendationPage from "../../pages/mentor/MentorRecommendationPage";
import MentorSidebar from "../../layout/mentor/MentorSidebar";

function MentorRoutes() {
  return (

    <div className="d-flex">
      <MentorSidebar />
      <div className="flex-grow-1 p-3">
        <Routes>

          <Route path="/" element={<MentorDataPage />} />
          <Route path="dashboard" element={<MentorDataPage />} />
          <Route path="learner-skill-analytics" element={<LearnerSkillAnalyticsPage />} />
          <Route path="test-data" element={<TestDataPage />} />
          <Route path="skill-health-snapshot" element={<SkillHealthSnapshotPage />} />
          <Route path="publish-assessment" element={<PublishAssessmentPage />} />
          <Route path="mentor-recommendation" element={<MentorRecommendationPage />} />

        </Routes>
      </div>
    </div>
  );
}

export default MentorRoutes;
