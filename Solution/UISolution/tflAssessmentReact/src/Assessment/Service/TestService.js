const TestService = {
  fetchQuestions: async (testId) => {
    try {
      const questionUrl = `http://localhost:5172/api/questionbank/questions/tests/${testId}`;
      console.log(`Fetching questions from: ${questionUrl}`);
      
      const response = await fetch(questionUrl);

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error fetching questions:", errorDetails);
        throw new Error(`Error fetching questions: ${errorDetails}`);
      }

      const data = await response.json();
      console.log("Questions fetched successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in fetchQuestions:", error);
      throw error;
    }
  },

  submitAnswers: async (candidateId, finalCandidateAnswers) => {
    try {
      const candidateAnswersUrl = `http://localhost:5299/api/candidateanswer/assessmentanswers/candidates/${candidateId}`;
      console.log(`Submitting answers for candidate ${candidateId} to: ${candidateAnswersUrl}`);
      
      const response = await fetch(candidateAnswersUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalCandidateAnswers),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error submitting answers:", errorDetails);
        throw new Error(`Error submitting answers: ${errorDetails}`);
      }

      const data = await response.json();
      console.log("Answers submitted successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in submitAnswers:", error);
      throw error;
    }
  },

  fetchResult: async (candidateId, testId) => {
    try {
      const scoreUrl = `http://localhost:5235/api/result/candidates/${candidateId}/tests/${testId}/score`;
      console.log(`Fetching result for candidate ${candidateId}, test ${testId} from: ${scoreUrl}`);

      const response = await fetch(scoreUrl);

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error fetching result:", errorDetails);
        throw new Error(`Error fetching result: ${errorDetails}`);
      }

      const data = await response.json();
      console.log("Result fetched successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in fetchResult:", error);
      throw error;
    }
  },

  startTime: async (candidateId, testId, time) => {
    try {
      const startTimeUrl = `http://localhost:5235/api/result/setstarttime/${candidateId}/tests/${testId}`;
      console.log(`Starting test time for candidate ${candidateId}, test ${testId} at ${time} to: ${startTimeUrl}`);

      const response = await fetch(startTimeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(time),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error submitting start time:", errorDetails);
        throw new Error(`Error submitting start time: ${errorDetails}`);
      }

      const data = await response.json();
      console.log("Start time submitted successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in startTime:", error);
      throw error;
    }
  },

  endTime: async (candidateId, testId, time) => {
    try {
      const endTimeUrl = `http://localhost:5235/api/result/setendtime/${candidateId}/tests/${testId}`;
      console.log(`Ending test time for candidate ${candidateId}, test ${testId} at ${time} to: ${endTimeUrl}`);

      const response = await fetch(endTimeUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(time),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error submitting end time:", errorDetails);
        throw new Error(`Error submitting end time: ${errorDetails}`);
      }

      const data = await response.json();
      console.log("End time submitted successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in endTime:", error);
      throw error;
    }
  },

  fetchAssessments: async () => {
    try {
      const assessmentsUrl = `http://localhost:5151/api/Assessment/assessments`;
      console.log(`Fetching assessments from: ${assessmentsUrl}`);

      const response = await fetch(assessmentsUrl);

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error fetching assessments:", errorDetails);
        throw new Error(`Error fetching assessments: ${errorDetails}`);
      }

      const data = await response.json();
      console.log("Assessments fetched successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in fetchAssessments:", error);
      throw error;
    }
  },

  insertQuestionsForTest: async (assessmentId, questionIds) => {
    try {
      const insertUrl = `http://localhost:5151/api/Assessment/addmultiplequestions/assessments/${assessmentId}`;
      
      const requestBody = {
        questions: questionIds.map((id) => ({
          QuestionBankId: id, // This assumes that the backend needs the QuestionBankId for each question
        })),
      };
  
      console.log(`Sending data to backend: ${JSON.stringify(requestBody)}`);
      
      const response = await fetch(insertUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error from backend:", errorDetails);
        throw new Error(`Error inserting questions for test: ${JSON.stringify(errorDetails.errors)}`);
      }
  
      const data = await response.json();
      console.log("Questions inserted successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in insertQuestionsForTest:", error);
      throw error;
    }
  }, 
};

export default TestService;
