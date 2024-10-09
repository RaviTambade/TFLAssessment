import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TestService from "../Service/TestService";
import Question from "./Question";
import Navigation from "./Navigation";

const TestAppear = () => {
  const [testId, setTestId] = useState("");
  const [candidateId, setCandidateId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  let { currentval } = useParams();

  const fetchQuestions = async () => {
    try {
      const fetchedQuestions = await TestService.fetchQuestions(testId);
      const updatedQuestions = fetchedQuestions.map((question) => ({
        ...question,
        answer: "No",
      }));
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleStartTest = async () => {
    if (candidateId && testId) {
      setTestStarted(true);
      const startTime = getCurrentDateTime();
      await TestService.startTime(candidateId, testId, startTime);
      fetchQuestions();
    } else {
      alert("Please enter both Candidate ID and Test ID to start the test.");
    }
  };

  const handleSubmit = async () => {
    try {
      const finalCandidateAnswers = questions.map((question) => ({
        TestQuestionId: question.id,
        AnswerKey: question.answer,
      }));
      await TestService.submitAnswers(candidateId, finalCandidateAnswers);
      const endTime = getCurrentDateTime();
      await TestService.endTime(candidateId, testId, endTime);
      alert("Answers submitted successfully");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const handleResult = async () => {
    try {
      const result = await TestService.fetchResult(candidateId, testId);
      setScore(result);
    } catch (error) {
      console.error("Error fetching result:", error);
    }
  };

  const getCurrentDateTime = () => {
    const d = new Date();
    return {
      month: d.getMonth(),
      year: d.getFullYear(),
      day: d.getDate(),
      hour: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
    };
  };

  if (!testStarted) {
    return (
      <div>
        <h3>Transflower Learning Private Limited</h3>
        <div>
          <label>Candidate ID:</label>
          <input type="text" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} />
        </div>
        <div>
          <label>Test ID:</label>
          <input type="text" value={testId} onChange={(e) => setTestId(e.target.value)} />
        </div>
        <br />
        <button onClick={handleStartTest}>Start Test</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Transflower Learning Private Limited</h3>
      <hr />
      <Question
        questions={questions}
        currentval={currentval}
        setQuestions={setQuestions}
      />
      <Navigation/>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleResult}>Show Result</button>
        {score !== null && <div>Your Score is: {score}</div>}
      </div>
    </div>
  );
};

export default TestAppear;
