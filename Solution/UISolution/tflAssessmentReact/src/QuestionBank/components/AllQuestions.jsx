import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuestions, fetchQuestionById } from '../redux/questionActions'; 

const GetAllQuestions = () => {
  const dispatch = useDispatch();

  const { questionList, loading, error, questionDetails } = useSelector((state) => state.questions);

  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleGetAllQuestions = () => {
    dispatch(fetchAllQuestions());
  };

 
  const handleQuestionClick = (id) => {
    setSelectedQuestionId(id);
    dispatch(fetchQuestionById(id)); 
  };

  return (
    <div>
      <h3>All Questions</h3>
      <button onClick={handleGetAllQuestions}>Get All Questions</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {questionList.length > 0 && (
        <ul>
          {questionList.map((question) => (
            <li key={question.id} onClick={() => handleQuestionClick(question.id)}>
              {question.id}: {question.title}
            </li>
          ))}
        </ul>
      )}

      {selectedQuestionId && loading && <p>Loading question details...</p>}

 
      {questionDetails && questionDetails.id === selectedQuestionId && (
        <div>
          <h4>Question Details</h4>
          <p><strong>ID:</strong> {questionDetails.id}</p>
          <p><strong>Subject ID:</strong> {questionDetails.subjectId}</p>
          <p><strong>Title:</strong> {questionDetails.title}</p>
          <p><strong>A:</strong> {questionDetails.a}</p>
          <p><strong>B:</strong> {questionDetails.b}</p>
          <p><strong>C:</strong> {questionDetails.c}</p>
          <p><strong>D:</strong> {questionDetails.d}</p>
          <p><strong>Answer Key:</strong> {questionDetails.answerKey}</p>
          <p><strong>Evaluation Criteria ID:</strong> {questionDetails.evaluationCriteriaId}</p>
        </div>
      )}

      {error && selectedQuestionId && <p>Error fetching question details: {error}</p>}
    </div>
  );
};

export default GetAllQuestions;
