// src/components/ObjectiveTest.js

import React, { useState, useEffect } from 'react';
import TestService from '../Service/TestService';

const TestAppear = () => {
  // State Variables
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(null);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);

  const testId = 2;
  const candidateId = 4;

  // Initialize Questions (Fetch from Service)
  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await TestService.getQuestions();
      setQuestions(fetchedQuestions);
    };
    fetchQuestions();
  }, []);

  
  // Handlers
  const handleStart = () => {
    setIsTestStarted(true);
  };

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, index) =>
        index === current ? { ...q, answer: selectedOption } : q
      )
    );
  };

  const handleFirst = () => setCurrent(0);

  const handlePrevious = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
  };

  const handleLast = () => setCurrent(questions.length - 1);

  const handleSubmit = async () => {
    setIsTestStarted(false);
    setIsTestSubmitted(true);


    // Submit Answers via Service
    const submissionResponse = await TestService.submitAnswers(
      candidateId,
      testId,
      questions.map((q) => ({
        TestQuestionId: q.id,
        Answer: q.answer,
      }))
    );

    if (submissionResponse.success) {
      console.log('Answers successfully submitted.');
    }

    // Calculate Score via Service
    const calculatedScore = await TestService.getScore(
      candidateId,
      testId,
      questions
    );
    setScore(calculatedScore);
  };

  const handleShowResult = () => {
    if (isTestSubmitted) {
      alert(`Your Score is: ${score}/${questions.length}`);
    } else {
      alert('Please submit the test first.');
    }
  };


  const showQuestion = (index) => {
    if (questions.length === 0) return null;
    const q = questions[index];
    return (
      <div>
        <h5>{`${index + 1}. ${q.title}`}</h5>
        {['a', 'b', 'c', 'd'].map((option) => (
          <div className="form-check" key={option}>
            <input
              className="form-check-input"
              type="radio"
              name="answer"
              id={`${option}-${q.id}`}
              value={option}
              checked={q.answer === option}
              onChange={handleOptionChange}
              disabled={!isTestStarted || isTestSubmitted}
            />
            <label className="form-check-label" htmlFor={`${option}-${q.id}`}>
              {q[option]} 
            </label>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="container mt-5">
      <h3>Transflower Learning Private Limited</h3>
      <hr />
      <div className="jumbotron p-4">
        {showQuestion(current)}
        <div className="mt-4 d-flex justify-content-between">
          <div>
            <button className="btn btn-primary me-2" onClick={handleFirst} disabled={!isTestStarted || isTestSubmitted}> First</button>
            <button className="btn btn-primary me-2" onClick={handlePrevious} disabled={ !isTestStarted || isTestSubmitted || current === 0}> Previous</button>
            <button className="btn btn-primary me-2" onClick={handleNext} disabled={ !isTestStarted || isTestSubmitted || current === questions.length - 1}>Next</button>
            <button className="btn btn-primary me-2" onClick={handleLast} disabled={!isTestStarted || isTestSubmitted}> Last</button>
          </div>
          
          <div>
            {!isTestStarted && !isTestSubmitted && (
              <button className="btn btn-success me-2"onClick={handleStart} disabled={isTestStarted}> Start</button>
            )}
            {isTestStarted && !isTestSubmitted && (
              <button className="btn btn-danger me-2" onClick={handleSubmit}>Submit</button>
            )}
            <button className="btn btn-info"onClick={handleShowResult}>Show Result </button>
          </div>
        </div>
        {score !== null && (
          <div className="mt-4">
            <h5>Your Score is: {score}/{questions.length}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestAppear;
