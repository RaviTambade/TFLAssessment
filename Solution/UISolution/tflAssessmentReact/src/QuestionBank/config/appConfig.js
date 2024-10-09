const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const endpoints = {
  getAllQuestions: `${API_BASE_URL}/questionbank/questions`,
  getSubjects: `${API_BASE_URL}/assessment/subjects`,
  getQuestionById: (questionId) => `${API_BASE_URL}/questionbank/questions/${questionId}`,
  getQuestionsByTestId: (testId) => `${API_BASE_URL}/questionbank/questions/tests/${testId}`,
  getCriteria: (subject, questionId) => `${API_BASE_URL}/questionbank/questions/subjects/${subject}/questions/${questionId}`,
  getCriteriaBySubject: (subjectId) => `${API_BASE_URL}/assessment/criterias/subjects/${subjectId}`,
  getQuestionsBySubject: (subjectId) => `${API_BASE_URL}/questionbank/questions/subjects/${subjectId}`,
  getQuestionsBySubjectAndCriteria: (subjectId, criteriaId) => `${API_BASE_URL}/questionbank/questions/subjects/${subjectId}/criterias/${criteriaId}`,
};

export { API_BASE_URL, endpoints };

