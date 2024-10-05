const API_URL = "http://localhost:5172/api/questionbank";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return await response.json();
};

const QuestionService = {
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

  // Fetch questions by subject ID
  getQuestionsBySubject: async (subjectId) => {
    try {
      const response = await fetch(`${API_URL}/questions/subject/${subjectId}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching questions by subject ${subjectId}:`, error);
      throw error;
    }
  },

  // Fetch questions by subject and criteria
  getQuestionsBySubjectAndCriteria: async (subjectId, criteriaId) => {
    try {
      const response = await fetch(`${API_URL}/questions/subject/${subjectId}/criteria/${criteriaId}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching questions by subject ${subjectId} and criteria ${criteriaId}:`, error);
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

  // Fetch multiple questions (general API)
  getQuestions: async () => {
    try {
      const response = await fetch(`${API_URL}/questions`);
      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  },

  // Insert a new question
  insertQuestion: async (newQuestion) => {
    try {
      const response = await fetch(`${API_URL}/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Error inserting new question:', error);
      throw error;
    }
  },

  // Update the answer key for a specific question
  updateQuestionAnswer: async (questionId, answerKey) => {
    try {
      const response = await fetch(`${API_URL}/question/${questionId}/updateanswer/${answerKey}`, {
        method: 'PUT',
      });
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error updating answer for question ID ${questionId}:`, error);
      throw error;
    }
  },

  // Update question options
  updateQuestionOptions: async (questionId, updatedOptions) => {
    try {
      const response = await fetch(`${API_URL}/question/${questionId}/updateoptions`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedOptions),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error updating options for question ID ${questionId}:`, error);
      throw error;
    }
  },

  // Update subject and criteria for a question
  updateSubjectCriteria: async (questionId, subjectId, criteriaId) => {
    try {
      const response = await fetch(`${API_URL}/question/${questionId}/updatesubjectcriteria`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subjectId, criteriaId }),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error updating subject/criteria for question ID ${questionId}:`, error);
      throw error;
    }
  },

  // Fetch evaluation criteria
  getCriteria: async () => {
    try {
      const response = await fetch(`${API_URL}/criteria`);
      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching criteria:', error);
      throw error;
    }
  },
};

export default QuestionService;
