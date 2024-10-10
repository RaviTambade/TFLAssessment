
const TestService = {
   
  fetchQuestions: async (testId) => {
    try {
      const questionUrl = `http://localhost:5172/api/questionbank/questions/tests/${testId}`;
      const response = await fetch(questionUrl);
      if (!response.ok) {
        throw new Error("Error fetching questions");
      }
      return response.json();
    } catch (error) {
      console.error("Error:", error); 
      throw error; 
    }
  },

    submitAnswers: async (candidateId, finalCandidateAnswers) => {
      const candidateAnswersUrl = `http://localhost:5299/api/candidateanswer/assessmentanswers/candidates/${candidateId}`;
      const response = await fetch(candidateAnswersUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalCandidateAnswers),
      });
  
      if (!response.ok) {
        throw new Error("Error submitting answers");
      }
      return response.json();
    },
  
    fetchResult: async (candidateId, testId) => {
      const scoreUrl = `http://localhost:5235/api/result/candidates/${candidateId}/tests/${testId}/score`;
      const response = await fetch(scoreUrl);
      if (!response.ok) {
        throw new Error("Error fetching result");
      }
      return response.json();
    },
    startTime: async (candidateId, testId, time) => {
      const startTimeUrl = `http://localhost:5235/api/result/setstarttime/${candidateId}/tests/${testId}`;
      const response = await fetch(startTimeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(time),
      });
  
      if (!response.ok) {
        throw new Error("Error submitting time");
      }
      return response.json();
    },
    endTime: async (candidateId, testId, time) => {
      const endTimeUrl = `http://localhost:5235/api/result/setendtime/${candidateId}/tests/${testId}`;
      const response = await fetch(endTimeUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(time),
      });
  
      if (!response.ok) {
        throw new Error("Error submitting time");
      }
      return response.json();
    }
  };
  

  export default TestService;
  