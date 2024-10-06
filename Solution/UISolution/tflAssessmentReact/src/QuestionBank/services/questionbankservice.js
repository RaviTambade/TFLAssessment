const API_URL = "http://localhost:5172/api/questionbank";

// Centralized response handler
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || "Something went wrong");
  }
  return await response.json();
};

const QuestionBankService = {
  // Fetch all questions
  getAllQuestions: async () => {
    try {
      const response = await fetch(`${API_URL}/questions`);
      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching all questions:', error);
      throw error;
    }
  },

  // Fetch a specific question by ID
  getQuestionById: async (questionId) => {
    try {
      const response = await fetch(`${API_URL}/questions/${questionId}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching question by ID ${questionId}:`, error);
      throw error;
    }
  },

  // Fetch questions by test ID
  getQuestionsByTestId: async (testId) => {
    try {
      const response = await fetch(`${API_URL}/questions/tests/${testId}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching questions by test ID ${testId}:`, error);
      throw error;
    }
  },

  // Fetch evaluation criteria
  getCriteria: async (subject, questionId) => {
    const response = await fetch(`${API_URL}/questions/subjects/${subject}/questions/${questionId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch criteria');
    }
    const data = await response.json();
    console.log('Data from API:', data); 
    return data;
  }
  
  
};


export default QuestionBankService;
