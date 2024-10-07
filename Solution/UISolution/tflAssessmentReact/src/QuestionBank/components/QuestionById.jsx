import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionById } from '../redux/questionActions';

const GetQuestionById = () => {
  const dispatch = useDispatch();
  const { questionDetails, loading, error } = useSelector((state) => state.questions);

  const [questionId, setQuestionId] = useState('');

  // Fetch question by ID
  const handleGetQuestionById = () => {
    dispatch(fetchQuestionById(Number(questionId)));
    setQuestionId(''); 
  };

  return (
    <div>
      <h3>Get Question by ID</h3>
      <input type="number"value={questionId} onChange={(e) => setQuestionId(e.target.value)} placeholder="Enter Question ID"/>
      <button onClick={handleGetQuestionById}>Get Question</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {questionDetails && questionDetails.id && (
        <div>
          <h4>Question Details</h4>
          <p>ID: {questionDetails.id}</p>
          <p>Title: {questionDetails.title}</p>
        </div>
      )}
    </div>
  );
};

export default GetQuestionById;
