import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuestions, fetchQuestionById, fetchQuestionsByTestId } from '../redux/questionsActions';

const QuestionComponent = () => {
  const dispatch = useDispatch();
  const { questionList, questionDetails, loading, error } = useSelector((state) => state.questions);

  // Local state for inputs
  const [questionId, setQuestionId] = useState('');
  const [testId, setTestId] = useState('');

  // Fetch all questions
  const handleGetAllQuestions = () => {
    dispatch(fetchAllQuestions());
  };

  // Fetch question by question ID
  const handleGetQuestionById = () => {
    dispatch(fetchQuestionById(Number(questionId)));
    setQuestionId(''); 
  };

  // Fetch questions by test ID
  const handleGetQuestionsByTestId = () => {
    dispatch(fetchQuestionsByTestId(Number(testId)));
    setTestId(''); 
  };

  return (
    <div>
      <h1>Question Management</h1>

      <button onClick={handleGetAllQuestions}>Get All Questions</button>

      <div>
        <h3>Get Question by ID</h3>
        <input type="number" value={questionId} onChange={(e) => setQuestionId(e.target.value)} placeholder="Enter Question ID"/>
        <button onClick={handleGetQuestionById}>Get Question</button>
      </div>

      <div>
        <h3>Get Questions by Test ID</h3>
        <input type="number" value={testId} onChange={(e) => setTestId(e.target.value)} placeholder="Enter Test ID"/>
        <button onClick={handleGetQuestionsByTestId}>Get Questions</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {questionList.length > 0 && (
        <div>
          <h3>All Questions</h3>
          <ul>
            {questionList.map((question) => (
              <li key={question.id}>
                {question.id}: {question.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {questionDetails && questionDetails.id && (
        <div>
          <h3>Question Details</h3>
          <p>ID: {questionDetails.id}</p>
          <p>Title: {questionDetails.title}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
