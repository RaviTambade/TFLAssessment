import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuestions } from '../redux/questionActions';

const GetAllQuestions = () => {
  const dispatch = useDispatch();
  const { questionList, loading, error } = useSelector((state) => state.questions);

  // Fetch all questions
  const handleGetAllQuestions = () => {
    dispatch(fetchAllQuestions());
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
            <li key={question.id}>
              {question.id}: {question.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetAllQuestions;
