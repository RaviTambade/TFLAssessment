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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">All Questions</h3>
        <button
          onClick={handleGetAllQuestions}
          className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400"
        >
          Get All Questions
        </button>

        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {questionList.length > 0 && (
          <ul className="space-y-2">
            {questionList.map((question) => (
              <li
                key={question.id}
                onClick={() => handleQuestionClick(question.id)}
                className="p-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer"
              >
                <strong>{question.id}:</strong> {question.title}
              </li>
            ))}
          </ul>
        )}

        {selectedQuestionId && loading && (
          <p className="text-blue-500 mt-4">Loading question details...</p>
        )}

        {questionDetails && questionDetails.id === selectedQuestionId && (
          <div className="mt-6 p-4 bg-gray-50 border rounded-lg">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Question Details
            </h4>
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

        {error && selectedQuestionId && (
          <p className="text-red-500 mt-4">
            Error fetching question details: {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default GetAllQuestions;
