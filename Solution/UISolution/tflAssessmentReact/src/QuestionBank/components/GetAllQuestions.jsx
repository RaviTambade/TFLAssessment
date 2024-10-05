import React, { useState, useEffect } from 'react';
import QuestionService from '../services/questionbankservice';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await QuestionService.getAllQuestions();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Question List</h3>
      <ul>
        {questions.map(q => (
          <li key={q.id}>{q.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
