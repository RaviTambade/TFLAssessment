import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCriteria } from '../redux/questionActions';

const GetCriteria = () => {
  const dispatch = useDispatch();
  const { criteriaList, loading, error } = useSelector((state) => state.questions);
  
  const [subject, setSubject] = useState('');
  const [questionId, setQuestionId] = useState('');

  const handleGetCriteria = () => {
    if (subject && questionId) {
      dispatch(fetchCriteria({ subject, questionId: Number(questionId) }));
    }
  };

  return (
    <div>
      <h3>Get Criteria for Subject and Question ID</h3>
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject"/>
      <input type="number" value={questionId} onChange={(e) => setQuestionId(e.target.value)} placeholder="Enter Question ID"/>
      <button onClick={handleGetCriteria}>Get Criteria</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {criteriaList && criteriaList.criteria ? (
        <div>
          <h4>Criteria</h4>
          <p>{criteriaList.criteria}</p>
        </div>
      ) : (
        !loading && <p>No criteria available.</p>
      )}
    </div>
  );
};

export default GetCriteria;
