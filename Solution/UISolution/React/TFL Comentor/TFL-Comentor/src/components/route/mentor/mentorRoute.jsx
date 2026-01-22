import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MentorSidebar from "../../layout/mentor/MentorSidebar";

import MentorDataPage from "../../pages/mentor/MentorDataPage";
import TestDataPage from "../../pages/mentor/TestDataPage";
import SkillHealthSnapshotPage from "../../pages/mentor/SkillHealthSnapshotPage";
import PublishAssessmentPage from "../../pages/mentor/PublishAssessmentPage";
import MentorRecommendationPage from "../../pages/mentor/MentorRecommendationPage";
import LearnerSkillAnalyticsPage from "../../pages/mentor/LearnerSkillAnalyticsPage";

function MentorRoutes() {
    return (
        <div className="d-flex">
            <MentorSidebar />

            <div className="flex-grow-1 p-3">
                <Routes>
                    <Route path="/mentor" element={<Navigate to="/mentor/dashboard" replace />} />
                    <Route path="/mentor/dashboard" element={<MentorDataPage />} />
                    <Route path="/mentor/learner-skill-analytics" element={<LearnerSkillAnalyticsPage />} />
                    <Route path="/mentor/test-data" element={<TestDataPage />} />
                    <Route path="/mentor/skill-health-snapshot" element={<SkillHealthSnapshotPage />} />
                    <Route path="/mentor/publish-assessment" element={<PublishAssessmentPage />} />
                    <Route path="/mentor/mentor-recommendation" element={<MentorRecommendationPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default MentorRoutes;
