// src/components/QuestionComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuestions, fetchQuestionById, fetchQuestionsByTestId } from '../store/questionActions';

const GetQuestion = () => {
  const dispatch = useDispatch();
  const { questionList, questionDetails, loading, error } = useSelector((state) => state.questions);

  // Fetch all questions
  const handleGetAllQuestions = () => {
    dispatch(fetchAllQuestions());
  };

  // Fetch question by question ID
  const handleGetQuestionById = (id) => {
    dispatch(fetchQuestionById(id));
  };

  // Fetch questions by test ID
  const handleGetQuestionsByTestId = (testId) => {
    dispatch(fetchQuestionsByTestId(testId));
  };

  return (
    <div>
      <h1>Question Management</h1>

      <button onClick={handleGetAllQuestions}>Get All Questions</button>
      <button onClick={() => handleGetQuestionById(1)}>Get Question by ID (1)</button>
      <button onClick={() => handleGetQuestionsByTestId(101)}>Get Questions by Test ID (101)</button>

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

export default GetQuestion;
