import MentorData from "./components/MentorData";
import TestData from "./components/TestData";
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
      <h2>MENTOR ACTION DATA</h2>
      <div>
        <MentorRecommendation/>
      </div>
      </>
    
  );
}

export default App;
