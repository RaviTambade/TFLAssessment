import MentorData from "./components/MentorData";
import TestData from "./components/TestData";
import SkillHealthSnapshot from "./components/SkillHealthSnapshot";
import PublishAssessment from "./components/PublishAssessment";

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

      <h2>SKILL HEALTH SNAPSHOT</h2>
      <div>
        <SkillHealthSnapshot/>
      </div>

      <h2>PUBLISH ASSESSMENT</h2>
      <PublishAssessment />
      </>    
  );
}

export default App;
