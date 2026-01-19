import MentorData from "./components/dashboard/MentorData";
import TestData from "./components/dashboard/TestData";
import SkillHealthSnapshot from "./components/dashboard/SkillHealthSnapshot";
import PublishAssessment from "./components/dashboard/PublishAssessment";
import MentorRecommendation from "./components/dashboard/MentorRecommendation";

import LearnerSkillAnalytics from "./components/dashboard/LearnerSkillAnalytics";
function App() {
  return (
    <>
      <h2>MENTOR DATA</h2>
      <div>
        <MentorData />
      </div>
      <h2>TEST DATA</h2>
      <div>
        <TestData />
      </div>
      <div>
        <h2>LEARNER SKILL ANALYTICS</h2>
        <div>
          <LearnerSkillAnalytics />
        </div>

        <h2>MENTOR ACTION DATA</h2>
        <div>
          <MentorRecommendation />
        </div>

        <h2>SKILL HEALTH SNAPSHOT</h2>
        <div>
          <SkillHealthSnapshot />
        </div>

        <h2>PUBLISH ASSESSMENT</h2>
        <PublishAssessment />
        <h2>Mentor Recommendation</h2>
        <div>
          <MentorRecommendation />
        </div>
      </div>
    </>
  );
}

export default App;
