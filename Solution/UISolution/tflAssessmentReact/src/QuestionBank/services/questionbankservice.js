import { endpoints } from "../config/apiEndpoints";


const handleResponse = async (response) => {
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || "Something went wrong");
  }
  return await response.json();
};

const QuestionBankService = {
  getAllQuestions: async () => {
    const response = await fetch(endpoints.questionBank.getAllQuestions);
    return await handleResponse(response);
  },

  getQuestionById: async (questionId) => {
    const response = await fetch(endpoints.questionBank.getQuestionById(questionId));
    return await handleResponse(response);
  },

  getQuestionsByTestId: async (testId) => {
    const response = await fetch(endpoints.questionBank.getQuestionsByTestId(testId));
    return await handleResponse(response);
  },

  getSubjects: async () => {
    const response = await fetch(endpoints.assessment.getSubjects);
    return await handleResponse(response);
  },

  getCriteriaBySubject: async (subjectId) => {
    const response = await fetch(endpoints.assessment.getCriteriaBySubject(subjectId));
    return await handleResponse(response);
  },

  getQuestionsBySubjectAndCriteria: async (subjectId, criteriaId) => {
    const response = await fetch(endpoints.questionBank.getQuestionsBySubjectAndCriteria(subjectId, criteriaId));
    return await handleResponse(response);
  },
};

export default QuestionBankService;
