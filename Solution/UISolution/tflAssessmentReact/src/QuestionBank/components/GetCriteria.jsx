import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCriteria } from '../redux/questionsActions';

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
 // console.log('Criteria List:', criteriaList);

  return (
    <div>
      <h3>Get Criteria for Subject and Question ID</h3>
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject" />
      <input type="number" value={questionId} onChange={(e) => setQuestionId(e.target.value)} placeholder="Enter Question ID" />
      <button onClick={handleGetCriteria}>Get Criteria</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {criteriaList.length > 0 && (
        <div>
          <h4>Criteria</h4>
          <ul>
            {criteriaList.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetCriteria;
