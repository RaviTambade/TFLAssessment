import { endpoints } from "../config/appConfig";


// Centralized response handler
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || "Something went wrong");
  }
  return await response.json();
};

const QuestionBankService = {
  getAllQuestions: async () => {
    try {
      const response = await fetch(endpoints.getAllQuestions);
      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching all questions:', error);
      throw error;
    }
  },

  getQuestionById: async (questionId) => {
    try {
      const response = await fetch(endpoints.getQuestionById(questionId));
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching question by ID ${questionId}:`, error);
      throw error;
    }
  },


  getQuestionsByTestId: async (testId) => {
    try {
      const response = await fetch(endpoints.getQuestionsByTestId(testId));
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching questions by test ID ${testId}:`, error);
      throw error;
    }
  },

  getCriteria: async (subject, questionId) => {
    const response = await fetch(endpoints.getCriteria(subject, questionId));
    if (!response.ok) {
      throw new Error('Failed to fetch criteria');
    }
    const data = await response.json();
    console.log('Data from API:', data); 
    return data;
  },
  
  getSubjects: async () => {
    const response = await fetch(endpoints.getSubjects);
    if (!response.ok) {
      throw new Error('Failed to fetch subjects');
    }
    return await response.json();
  },

  getCriteriaBySubject: async (subjectId) => {
    const response = await fetch(endpoints.getCriteriaBySubject(subjectId));
    if (!response.ok) {
      throw new Error('Failed to fetch criteria');
    }
    return await response.json();
  },

  getQuestionsBySubject: async (subjectId) => {
    const response = await fetch(endpoints.getQuestionsBySubject(subjectId));
    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }
    return await response.json();
  },

  getQuestionsBySubjectAndCriteria: async (subjectId, criteriaId) => {
    const response = await fetch(endpoints.getQuestionsBySubjectAndCriteria(subjectId, criteriaId));
    if (!response.ok) {
      throw new Error('Failed to fetch questions by criteria');
    }
    return await response.json();
  },
};

export default QuestionBankService;
