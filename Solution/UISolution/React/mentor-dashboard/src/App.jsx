import MentorData from "./components/MentorData";
import TestData from "./components/TestData";
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
      
      <h2>PUBLISH ASSESSMENT</h2>
      <PublishAssessment />
      
      
      </>


     
  );
}

export default App;
