import React, { useState } from "react";
import {useParams} from "react-router-dom";
import TestService from "../Service/TestService";
import NavigationComponent from "./Navigation";

const TestAppear = () => {
  const [testId, setTestId] = useState("");
  const [candidateId, setCandidateId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  var time = {};
  let{currentval}=useParams();
  console.log(currentval);
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

  const handleAnswerSelection = (selectedOption) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentval].answer = selectedOption;
    setQuestions(updatedQuestions);
  };

  

  var getCurrentDateTime = () => {
    let d = new Date();
    time.month = d.getMonth() ;
    time.year = d.getFullYear();
    time.day = d.getDate();
    time.hour = d.getHours();
    time.minutes = d.getMinutes();
    time.seconds = d.getSeconds();
    return time;
  };
  const handleSubmit = async () => {
    try {
      const finalCandidateAnswers = questions.map((question) => ({
        TestQuestionId: question.id,
        AnswerKey: question.answer,
      }));
      await TestService.submitAnswers(candidateId, finalCandidateAnswers);
      var endTime= getCurrentDateTime();
      await TestService.endTime(candidateId,testId, endTime);
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

  const handleStartTest = async () => {
    if (candidateId && testId) {
      setTestStarted(true);
      var startTime= getCurrentDateTime();
      await TestService.startTime(candidateId,testId, startTime);
      fetchQuestions();
    } else {
      alert("Please enter both Candidate ID and Test ID to start the test.");
    }
  };

  if (!testStarted) {
    return (
      <div>
        <h3>Transflower Learning Private Limited</h3>
        <div>
          <label>Candidate ID:</label>
          <input
            type="text"
            value={candidateId}
            onChange={(e) => setCandidateId(e.target.value)}
          />
        </div>
        <div>
          <label>Test ID:</label>
          <input
            type="text"
            value={testId}
            onChange={(e) => setTestId(e.target.value)}
          />
        </div><br/>
        <button onClick={handleStartTest}>Start Test</button>
      </div>
    );
  }

  if (!questions.length) return <div>Loading questions...</div>;

  return (
    <div>
      <h3>Transflower Learning Private Limited</h3>
      <hr />
      <div>
        <div>
          <div>
            <h5>{questions[currentval].title}</h5>
            <form>
              <div>
                <input
                  type="radio"
                  name="answer"
                  id="a"
                  checked={questions[currentval].answer === "a"}
                  onChange={() => handleAnswerSelection("a")}
                />
                <label>{questions[currentval].a}</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="answer"
                  id="b"
                  checked={questions[currentval].answer === "b"}
                  onChange={() => handleAnswerSelection("b")}
                />
                <label>{questions[currentval].b}</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="answer"
                  id="c"
                  checked={questions[currentval].answer === "c"}
                  onChange={() => handleAnswerSelection("c")}
                />
                <label>{questions[currentval].c}</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="answer"
                  id="d"
                  checked={questions[currentval].answer === "d"}
                  onChange={() => handleAnswerSelection("d")}
                />
                <label>{questions[currentval].d}</label>
              </div>
            </form>
            <NavigationComponent/>
            <div>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleResult}>Show Result</button>
            </div>

            {score !== null && <div>Your Score is: {score}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAppear;
