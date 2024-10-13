import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuestionsWithSubjectAndCriteria } from '../redux/questionActions';

const UpdateQuestionsDetails = () => {
  const dispatch = useDispatch();
  const { questionList, loading, error } = useSelector((state) => state.questions);

  // Fetch all questions
  const handleGetQuestionsDetails = () => {
    dispatch(fetchAllQuestionsWithSubjectAndCriteria());
  };

  return (
    <div>
      <h3>All Questions</h3>
      <button onClick={handleGetQuestionsDetails}>Get Questions Details</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {questionList.length && (
        <ul>
          {questionList.map((question) => (
            <li key={question.id}>
              {question.id}: {question.subject}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpdateQuestionsDetails;
