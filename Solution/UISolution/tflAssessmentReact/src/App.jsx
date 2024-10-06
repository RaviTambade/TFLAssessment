import React from 'react';
import './App.css'
//import InterviewSubjects from './InterviewDetails/components/GetInterviewedCandidatesSubjects';
//import InterviewList from './InterviewDetails/components/GetAllInterviewCandidates';
//import InterviewDeatils from './InterviewDetails/components/GetInterviewDetails';
//import GetCandidateResults from './AssementIntellegence/Components/GetCandidateResult';
import InsertCriteria from './EvaluationCriteria/Component/Crud/InsertCriteria';
import SubjectMatterExpertDetails from './Assessment/Components/GetAllBySME';
import CreateTestComponent from './Assessment/Components/CreateNewTest';
function App() {
  

  return (
    <>
    {/* <AssessmentList/> */}
    {/* <InterviewList/> */}
    {/* <InterviewSubjects/> */}
    {/* <InterviewDeatils/> */}
    {/*<GetCandidateResults/>*/}

    <CreateTestComponent/>
    </>
  )
}

export default App;
//<AssessmentList/>