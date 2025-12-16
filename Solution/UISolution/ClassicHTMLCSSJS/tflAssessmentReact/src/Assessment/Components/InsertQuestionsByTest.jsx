import React, { useState, useEffect } from 'react';
import AssessmentService from '../Service/AssessmentService';
import QuestionBankService from '../../QuestionBank/Services/QuestionBankService';
import TestService from '../Service/TestService';

const ManageQuestionsWithTest = () => {
  const [assessments, setAssessments] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedTestId, setSelectedTestId] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([AssessmentService.getAllAssessments(), QuestionBankService.getAllQuestions()])
      .then(([testData, questionData]) => {
        setAssessments(testData);
        setQuestions(questionData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleTestSelection = (event) => {
    setSelectedTestId(event.target.value);
    setError(null);
    setSuccess(null);
  };

  const handleCheckboxChange = (questionId) => {
    setSelectedQuestions((prevSelected) =>
      prevSelected.includes(questionId)
        ? prevSelected.filter((id) => id !== questionId)
        : [...prevSelected, questionId]
    );
    setError(null);
    setSuccess(null);
  };

  const handleInsertQuestions = async () => {
    if (!selectedTestId) {
      setError('Please select a test');
      return;
    }
  
    if (selectedQuestions.length === 0) {
      setError('No questions selected');
      return;
    }
  
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const requestData = selectedQuestions.map((questionId) => ({
        QuestionBankId: questionId, 
      }));
  
      const response = await TestService.insertQuestionsForTest(selectedTestId, requestData);
      if (response) {
        setSuccess('Questions inserted successfully');
        setSelectedQuestions([]);
      } else {
        setError('Failed to insert questions');
      }
    } catch (err) {
      console.error('Error inserting questions:', err);
      setError('Error inserting questions');
    } finally {
      setLoading(false);
    }
  
    console.log('Selected Test ID:', selectedTestId);
    console.log('Selected Questions:', selectedQuestions);
  };
  


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Manage Questions for Test</h2>
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-600"></div>
            <span className="ml-2 text-indigo-600">Loading...</span>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select Test:</label>
          <select
            className="w-full p-2 border rounded-lg"
            value={selectedTestId}
            onChange={handleTestSelection}
          >
            <option value="" disabled>
              {assessments.length ? 'Select a Test' : 'Loading...'}
            </option>
            {assessments.map((assessment) => (
              <option value={assessment.id} key={assessment.id}>
                {assessment.testName}
              </option>
            ))}
          </select>
        </div>

        {!loading && questions.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Questions</h3>
            <ul className="space-y-4">
              {questions.map((question) => (
                <li key={question.id} className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
                  <input
                    type="checkbox"
                    id={`question-${question.id}`}
                    className="mr-4 h-5 w-5"
                    checked={selectedQuestions.includes(question.id)}
                    onChange={() => handleCheckboxChange(question.id)}
                  />
                  <label htmlFor={`question-${question.id}`} className="flex-1">
                    <strong>{question.title}</strong>
                  </label>
                </li>
              ))}
            </ul>

            <button
              onClick={handleInsertQuestions}
              className={`mt-6 px-6 py-2 rounded-lg text-white ${
                !selectedTestId || selectedQuestions.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500 focus:ring focus:ring-indigo-300'
              }`}
              disabled={!selectedTestId || selectedQuestions.length === 0}
            >
              Insert Selected Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQuestionsWithTest;
