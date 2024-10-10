const API_BASE_URL_QUESTIONBANK = import.meta.env.VITE_API_BASE_URL2;
const API_BASE_URL_ASSESSMENT = import.meta.env.VITE_API_BASE_URL3;  

const endpoints = {
  
   // questionBank endpoints
  questionBank: {
    getAllQuestions: `${API_BASE_URL_QUESTIONBANK}/questionbank/questions`,
    getQuestionById: (questionId) => `${API_BASE_URL_QUESTIONBANK}/questionbank/questions/${questionId}`,
    getQuestionsByTestId: (testId) => `${API_BASE_URL_QUESTIONBANK}/questionbank/questions/tests/${testId}`,
    getQuestionsBySubject: (subjectId) => `${API_BASE_URL_QUESTIONBANK}/questionbank/questions/subjects/${subjectId}`,
    getQuestionsBySubjectAndCriteria: (subjectId, criteriaId) => 
      `${API_BASE_URL_QUESTIONBANK}/questionbank/questions/subjects/${subjectId}/criterias/${criteriaId}`,
    getCriteria: (subjectId, questionId) => 
      `${API_BASE_URL_QUESTIONBANK}/questionbank/questions/subjects/${subjectId}/questions/${questionId}`,
  },

  // Assessment endpoints
  assessment: {
    getSubjects: `${API_BASE_URL_ASSESSMENT}/assessment/subjects`,
    getCriteriaBySubject: (subjectId) => `${API_BASE_URL_ASSESSMENT}/assessment/criterias/subjects/${subjectId}`,
  }
};

export { API_BASE_URL_QUESTIONBANK, API_BASE_URL_ASSESSMENT, endpoints };
