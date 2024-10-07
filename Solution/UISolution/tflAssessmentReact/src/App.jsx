import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './QuestionBank/redux/store';
//import GetCriteria from './QuestionBank/components/GetCriteria';
// import GetQuestionById from './QuestionBank/components/GetQuestionById';
// import GetAllQuestions from './QuestionBank/components/GetAllQuestions';
// import GetQuestionsByTestId from './QuestionBank/components/GetQuestionsByTestId';
//import QuestionList from './QuestionBank/components/GetQuestions';
//import InterviewSubjects from './InterviewDetails/components/GetInterviewedCandidatesSubjects';
//import InterviewList from './InterviewDetails/components/GetAllInterviewCandidates';
//import InterviewDeatils from './InterviewDetails/components/GetInterviewDetails';
//import GetCandidateResults from './AssementIntellegence/Components/GetCandidateResult';
//import InsertCriteria from './EvaluationCriteria/Component/Crud/InsertCriteria';
//import ChangeInterviewerComponent from './InterviewDetails/components/ChangeInterviewer';
//import CancelInterviewComponent from './InterviewDetails/components/CancelInterview';
// import InsertCriteria from './EvaluationCriteria/Component/Crud/InsertCriteria';
// import SubjectMatterExpertDetails from './Assessment/Components/GetAllBySME';
// import CreateTestComponent from './Assessment/Components/CreateNewTest';
import TestAppear from './Assessment/Components/TestAppear';
function App() {
  
  return (
    <>
    <Provider store={store}>
      <div className="App">
        {/* {/* <GetQuestionById /> */}
         {/* <GetAllQuestions/>  */}
        {/* <GetQuestionsByTestId/>  */}
        {/* <GetCriteria/> */}
        <TestAppear/>
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