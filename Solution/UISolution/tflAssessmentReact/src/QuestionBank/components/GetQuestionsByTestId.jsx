import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionsByTestId } from '../redux/questionActions';

const GetQuestionsByTestId = () => {
  const dispatch = useDispatch();
  const { questionList, loading, error } = useSelector((state) => state.questions);

  const [testId, setTestId] = useState('');

  // Fetch questions by Test ID
  const handleGetQuestionsByTestId = () => {
    dispatch(fetchQuestionsByTestId(Number(testId)));
    setTestId(''); 
  };

  return (
    <div>
      <h3>Get Questions by Test ID</h3>
      <input type="number" value={testId} onChange={(e) => setTestId(e.target.value)} placeholder="Enter Test ID"/>
      <button onClick={handleGetQuestionsByTestId}>Get Questions</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {questionList.length > 0 && (
        <ul>
          {questionList.map((question) => (
            <li key={question.id}>
              {question.id}: {question.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetQuestionsByTestId;
