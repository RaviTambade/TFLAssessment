import MentorData from "./components/MentorData";
import TestData from "./components/TestData";

import LearnerSkillAnalytics from "./components/LearnerSkillAnalytics";
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

    <h2>LEARNER SKILL ANALYTICS</h2>
    <div>
      <LearnerSkillAnalytics />
    </div>  
    
    </>


  );
}

export default App;
