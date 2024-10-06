import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import QuestionComponent from './components/QuestionComponent';
//import QuestionList from './QuestionBank/components/GetQuestions';
//import InterviewSubjects from './InterviewDetails/components/GetInterviewedCandidatesSubjects';
//import InterviewList from './InterviewDetails/components/GetAllInterviewCandidates';
//import InterviewDeatils from './InterviewDetails/components/GetInterviewDetails';
//import GetCandidateResults from './AssementIntellegence/Components/GetCandidateResult';
//import InsertCriteria from './EvaluationCriteria/Component/Crud/InsertCriteria';
//import ChangeInterviewerComponent from './InterviewDetails/components/ChangeInterviewer';
//import CancelInterviewComponent from './InterviewDetails/components/CancelInterview';

function App() {
  
  return (
    <>
    <Provider store={store}>
      <div className="App">
        <QuestionComponent />
      </div>
    </Provider>
    {/* <AssessmentList/> */}
    {/* <InterviewList/> */}
    {/* <InterviewSubjects/> */}
    {/* <InterviewDeatils/> */}
    {/*<GetCandidateResults/>*/}
    {/* <InsertCriteria/> */}
    {/* <ChangeInterviewerComponent/> */}
     {/* <CancelInterviewComponent/> */}
     {/* <QuestionList/> */}
    </>
  )
}

export default App;
//<AssessmentList/>