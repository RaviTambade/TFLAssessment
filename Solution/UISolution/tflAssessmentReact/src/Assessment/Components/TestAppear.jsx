import React, { useState, useEffect } from "react";
import TestService from "../Service/TestService";
import { useLocation } from "react-router-dom";

const TestAppear = () => {
  const [testId, setTestId] = useState("");
  const location = useLocation();
  const { userId } = location.state || {};
  const [candidateId, setCandidateId] = useState(userId || "");
  const [assessments, setAssessments] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(null);
  const [testStarted, setTestStarted] = useState(false);

  var time = {};

  // Fetch assessments for the dropdown
  const fetchAssessments = async () => {
    try {
      const fetchedAssessments = await TestService.fetchAssessments();
      console.log("Fetched Assessments:", fetchedAssessments);
      setAssessments(fetchedAssessments);
    } catch (error) {
      console.error("Error fetching assessments:", error);
    }
  };

  useEffect(() => {
    fetchAssessments();
  }, []);

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
    updatedQuestions[current].answer = selectedOption;
    setQuestions(updatedQuestions);
  };

  const handleFirst = () => setCurrent(0);
  const handlePrevious = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setCurrent((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
  const handleLast = () => setCurrent(questions.length - 1);

  var getCurrentDateTime = () => {
    let d = new Date();
    time.month = d.getMonth();
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
      var endTime = getCurrentDateTime();
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

  const handleStartTest = async () => {
    if (candidateId && testId) {
      setTestStarted(true);
      var startTime = getCurrentDateTime();
      await TestService.startTime(candidateId, testId, startTime);
      fetchQuestions();
    } else {
      alert("Please enter both Candidate ID and select a Test to start the test.");
    }
  };

  if (!testStarted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">
            Transflower Learning Private Limited
          </h3>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Candidate ID:</label>
            <input
              type="text"
              value={candidateId}
              onChange={(e) => setCandidateId(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Select Test:</label>
            <select
              value={testId}
              onChange={(e) => setTestId(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="" disabled>
              {assessments.length ? "Select a Test" : "Loading..."}
              </option>
              {assessments.map((assessment) => (
                <option value={assessment.id} key={assessment.id}>
                  {assessment.testName}
                </option>
              ))}
            </select>

          </div>
          <button
            onClick={handleStartTest}
            className="w-full px-4 py-2 mt-4 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  if (!questions.length) return <div className="text-center">Loading questions...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">
          Transflower Learning Private Limited
        </h3>
        <hr className="my-4" />
        <div>
          <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{questions[current].title}</h5>
          <form>
            <div>
              <input
                type="radio"
                name="answer"
                id="a"
                checked={questions[current].answer === "a"}
                onChange={() => handleAnswerSelection("a")}
                className="mr-2"
              />
              <label className="text-gray-700 dark:text-gray-300">{questions[current].a}</label>
            </div>
            <div>
              <input
                type="radio"
                name="answer"
                id="b"
                checked={questions[current].answer === "b"}
                onChange={() => handleAnswerSelection("b")}
                className="mr-2"
              />
              <label className="text-gray-700 dark:text-gray-300">{questions[current].b}</label>
            </div>
            <div>
              <input
                type="radio"
                name="answer"
                id="c"
                checked={questions[current].answer === "c"}
                onChange={() => handleAnswerSelection("c")}
                className="mr-2"
              />
              <label className="text-gray-700 dark:text-gray-300">{questions[current].c}</label>
            </div>
            <div>
              <input
                type="radio"
                name="answer"
                id="d"
                checked={questions[current].answer === "d"}
                onChange={() => handleAnswerSelection("d")}
                className="mr-2"
              />
              <label className="text-gray-700 dark:text-gray-300">{questions[current].d}</label>
            </div>
          </form>
        </div>

        <div className="flex justify-between space-x-2 mt-4">
          <button
            onClick={handleFirst}
            disabled={current === 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:bg-gray-400"
          >
            First
          </button>
          <button
            onClick={handlePrevious}
            disabled={current === 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={current === questions.length - 1}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:bg-gray-400"
          >
            Next
          </button>
          <button
            onClick={handleLast}
            disabled={current === questions.length - 1}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:bg-gray-400"
          >
            Last
          </button>
        </div>

        <div className="flex justify-between space-x-2 mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
          >
            Submit
          </button>
          <button
            onClick={handleResult}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Show Result
          </button>
        </div>

        {score !== null && <div className="mt-4 text-center text-xl font-semibold">Your Score is: {score}</div>}
      </div>
    </div>
  );
};

export default TestAppear;
