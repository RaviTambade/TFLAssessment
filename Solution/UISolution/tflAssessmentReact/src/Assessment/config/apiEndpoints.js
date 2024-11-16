const API_BASE_URL_ASSESSMENT = import.meta.env.VITE_API_BASE_URL3;  



const endpoints = {

  // Assessment endpoints
  assessment: {
    getAllSubjects: `${API_BASE_URL_ASSESSMENT}/assessment/subjects`,
    getAllAssessments: `${API_BASE_URL_ASSESSMENT}/assessment/assessments`,
    getAllEmployees: `${API_BASE_URL_ASSESSMENT}/assessment/employees`,
    getAssessmentDetails:(id) => `${API_BASE_URL_ASSESSMENT}/assessment/${id}`,
    getCriteriaBySubject: (subjectId) => `${API_BASE_URL_ASSESSMENT}/assessment/criterias/subjects/${subjectId}`,
    CreateTestComponent: `${API_BASE_URL_ASSESSMENT}/assessment/createtest`,
    // const questionUrl = `http://localhost:5172/api/questionbank/questions/tests/${testId}`;
    // const candidateAnswersUrl = `http://localhost:5299/api/candidateanswer/assessmentanswers/candidates/${candidateId}`;
    // const scoreUrl = `http://localhost:5235/api/result/candidates/${candidateId}/tests/${testId}/score`;
    // const startTimeUrl = `http://localhost:5235/api/result/setstarttime/${candidateId}/tests/${testId}`;
    // const endTimeUrl = `http://localhost:5235/api/result/setendtime/${candidateId}/tests/${testId}`;
  }
};

export { API_BASE_URL_ASSESSMENT, endpoints };
