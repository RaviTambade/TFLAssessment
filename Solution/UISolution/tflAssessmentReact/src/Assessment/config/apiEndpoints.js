
const API_BASE_URL_RESULT = import.meta.env.VITE_API_BASE_URL1;
const API_BASE_URL_QUESTIONBANK = import.meta.env.VITE_API_BASE_URL2
const API_BASE_URL_ASSESSMENT = import.meta.env.VITE_API_BASE_URL3;  
const API_BASE_URL_CANDIDATEANSWER = import.meta.env.VITE_API_BASE_URL4;




const endpoints = {

  // Assessment endpoints
  assessment: {
    getAllSubjects: `${API_BASE_URL_ASSESSMENT}/assessment/subjects`,
    getAllAssessments: `${API_BASE_URL_ASSESSMENT}/assessment/assessments`,
    getAllEmployees: `${API_BASE_URL_ASSESSMENT}/assessment/employees`,
    getAssessmentDetails:(id) => `${API_BASE_URL_ASSESSMENT}/assessment/${id}`,
    getCriteriaBySubject: (subjectId) => `${API_BASE_URL_ASSESSMENT}/assessment/criterias/subjects/${subjectId}`,
    CreateTestComponent: `${API_BASE_URL_ASSESSMENT}/assessment/createtest`,
    RescheduleAssessment: `${API_BASE_URL_ASSESSMENT}/Assessment/{assessmentId}/reschedule/{date}`,
    ChangeDuration: `${API_BASE_URL_ASSESSMENT}/Assessment/{assessmentId}/duration/{duration}`,
    
    // const questionUrl = `http://localhost:5172/api/questionbank/questions/tests/${testId}`;
    // const candidateAnswersUrl = `http://localhost:5299/api/candidateanswer/assessmentanswers/candidates/${candidateId}`;
    // const scoreUrl = `http://localhost:5235/api/result/candidates/${candidateId}/tests/${testId}/score`;
    // const startTimeUrl = `http://localhost:5235/api/result/setstarttime/${candidateId}/tests/${testId}`;
    // const endTimeUrl = `http://localhost:5235/api/result/setendtime/${candidateId}/tests/${testId}`;
    //  VITE_API_BASE_URL4=http://localhost:5299/api
    // VITE_API_BASE_URL1=http://localhost:5235/api
  }
};

export { API_BASE_URL_ASSESSMENT, endpoints };
