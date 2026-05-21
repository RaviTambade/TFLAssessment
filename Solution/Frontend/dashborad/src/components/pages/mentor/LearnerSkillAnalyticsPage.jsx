import React from 'react';
import Header from '../../layout/mentor/MentorHeader';
// import MentorRecommendation from '../components/dashboard/ment/LearnerSkillAnalytics';
import LearnerSkillAnalytics from '../../dashboard/mentor/LearnerSkillAnalytics';

function LearnerSkillAnalyticsPage() {
    return (
        <div>
            <Header />
            <LearnerSkillAnalytics />
        </div>
    );
}
export default LearnerSkillAnalyticsPage;
