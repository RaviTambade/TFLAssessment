import MentorData from "./components/MentorData";
import TestData from "./components/TestData";
import SkillHealthSnapshot from "./components/SkillHealthSnapshot";
import MentorRecommendation from "./components/MentorRecommendation";

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
      <h2>Mentor Recommendation</h2>
      <div>
        <MentorRecommendation/>
      </div>
      </>    
  );
}

export default App;
