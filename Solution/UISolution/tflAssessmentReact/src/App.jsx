// import React from 'react';
// import TestAppear from './Assessment/Components/TestAppear';


// function App() {

//   return (
//     <>
//       <TestAppear/>

//     </>
//   )
// }

// export default App;




// // import React from 'react';
// // import { Provider } from 'react-redux';
// // import store from './QuestionBank/redux/store';
// // //import SubjectCriteriaQuestions from './QuestionBank/components/SubjectCriteriaQuestions';
// // import GetAllQuestions from './QuestionBank/components/AllQuestions';
//  import GetQuestionsByTestId from './QuestionBank/components/QuestionsByTestId';
// import UpdateCriteriaSubject from './QuestionBank/components/UpdateCriteriaSubject';
//  import Login from './authentication/Components/Login';
//import AssessmentDetails from './Assessment/Components/AssessmentDetails';
// import SubjectsList from './Assessment/Components/SubjectsList';
// import AssessmentList from './Assessment/Components/AssessmentList';
//import CreateTestComponent from './Assessment/Components/CreateNewAssesment';
// import EmployeesList from './Assessment/Components/EmployeesList';
// import TestAppear from './Assessment/Components/TestAppear';
// import CandidateDetails from './CandidateResultDetails/components/CandidateDetails';
// import GetAllQuestions from './QuestionBank/components/AllQuestions';
// import GetQuestionById from './QuestionBank/components/GetQuestionById';
// import GetAllQuestions from './QuestionBank/components/GetAllQuestions';
// import GetQuestionsByTestId from './QuestionBank/components/GetQuestionsByTestId';
// import QuestionList from './QuestionBank/components/GetQuestions';
// import InterviewSubjects from './InterviewDetails/components/GetInterviewedCandidatesSubjects';
//  import InterviewList from './InterviewDetails/components/AllInterviewCandidates';
// import InterviewDeatils from './InterviewDetails/components/InterviewDetails';
// import GetCandidateResults from './AssementIntellegence/Components/GetCandidateResult';
// import InsertCriteria from './EvaluationCriteria/Component/Crud/InsertCriteria';
// import QuestionBankList from './testAppear_Shubhangi/Component/AppearTest';
// import ChangeInterviewerComponent from './InterviewDetails/components/ChangeInterviewer';
// import CancelInterviewComponent from './InterviewDetails/components/CancelInterview';
// import InsertCriteria from './EvaluationCriteria/Component/Crud/InsertCriteria';
// import SubjectMatterExpertDetails from './Assessment/Components/GetAllBySME';
// import CreateTestComponent from './Assessment/Components/CreateNewTest';
// import TestAppear from './Assessment/Components/TestAppear';
// import CandidateDetails from './CandidateResultDetails/components/CandidateDetails';
// import CandidatesList from './CandidateResultDetails/components/CandidatesByTest';
// import EvaluationCriteriaComponent from './Assessment/Components/GetEvaluationCreteriaBySubject';


// // function App() {
// //   return (
// //     <>
// //       <Provider store={store}>
// //         <GetAllQuestions />
// //         {/* <SubjectCriteriaQuestions/> */}
// //         {/* <GetQuestionsByTestId/> */}
// //         {/* <UpdateCriteriaSubject/> */}
// //       </Provider>
// //     </>
// //   );
// // }

// // export default App;


// {/* <AssessmentList/> */}
//       {/*<GetCandidateResults/>*/}
//       {/* <InsertCriteria/> */}
//       {/* <QuestionBankList/> */}
//       {/*<CandidateDetails/> */}
//       {/* <CandidatesList/> */}
//       {/* <CreateTestComponent/>  */}
//       {/* <EmployeesList/> */}
//       {/* <AssessmentDetails /> */}
// {/* <AssessmentList/> */ }
// {/* <InterviewList/>
//       {/* <InterviewDeatils/> */}
// {/*<GetCandidateResults/>*/ }
// {/* <InsertCriteria/> */ }
// {/* <QuestionBankList/> */ }
// {/*<CandidateDetails/> */ }
// {/* <CandidatesList/> */ }
// {/* <CreateTestComponent/>  */ }
// {/* <EmployeesList/> */ }
// {/* <AssessmentDetails /> */ }
//  {/* <AssessmentList /> */}
//      {/* <AssessmentDetails />  */}
//      {/* <TestAppear/> */}
//      {/* <CandidateDetails/> */}
//      {/* <InterviewDeatils/>  */}
//     {/* <InterviewList/>  */}
//       {/* <AssessmentList />  */}
//       {/* <AssessmentDetails />  */}
//       {/* <TestAppear/> */}
//       {/* <CandidateDetails/> */}
//       {/* <EvaluationCriteriaComponent /> */}
//       {/* <EmployeesList/> */}
//       {/* <SubjectsList /> */}

// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './authentication/Components/Login';
import CandidateProfile from './CandidateProfile/Component/CandidateProfile';
import TestAppear from './Assessment/Components/TestAppear';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<CandidateProfile />} />
      <Route path="/profile/testAppear" element={<TestAppear />}/>
    </Routes>
  );
}

export default App;

