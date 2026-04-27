import React, { useState } from 'react';
import QuestionBankService from '../QuestionBank/Services/QuestionBankService';

const GetAllQuestions = () => {
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [questionDetails, setQuestionDetails] = useState(null);

  const fetchAllQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await QuestionBankService.getAllQuestions();
      setQuestionList(data);
    } catch (err) {
      setError('Error fetching questions.');
    } finally {
      setLoading(false);
    }
  };

  const fetchQuestionById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await QuestionBankService.getQuestionById(id);
      setQuestionDetails(data);
    } catch (err) {
      setError('Error fetching question details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h3>All Questions</h3>
      <button onClick={fetchAllQuestions}>Fetch All Questions</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {questionList.map((question) => (
          <li key={question.id} onClick={() => fetchQuestionById(question.id)}>
            {question.title}
          </li>
        ))}
      </ul>
      {questionDetails && (
        <div>
          <h4>Question Details</h4>
          <p>ID: {questionDetails.id}</p>
          <p>Title: {questionDetails.title}</p>
          <p>Answer: {questionDetails.answerKey}</p>
        </div>
      )}
    </div>
  );
};

export default GetAllQuestions;
