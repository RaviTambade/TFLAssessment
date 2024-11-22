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
  const [timeRemaining, setTimeRemaining] = useState(60); // 60 seconds for the test
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timerId, setTimerId] = useState(null);


  var time = {};

  // Timer logic
  useEffect(() => {
    if (testStarted && timeRemaining > 0) {
      const id = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
      setTimerId(id); // Store the timer ID
      return () => clearInterval(id);
    }
    if (timeRemaining === 0) {
      alert("Time's up! Submitting the test...");
      handleSubmit();
    }
  }, [testStarted, timeRemaining]);

  // Fetch assessments for the dropdown
  const fetchAssessments = async () => {
    try {
      const fetchedAssessments = await TestService.fetchAssessments();
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
    calculateProgress();
  };

  const calculateProgress = () => {
    const answeredCount = questions.filter((q) => q.answer !== "No").length;
    const total = questions.length;
    setProgress((answeredCount / total) * 100);
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
      if (timerId) {
        clearInterval(timerId); // Stop the timer
      }
      const finalCandidateAnswers = questions.map((question) => ({
        TestQuestionId: question.id,
        AnswerKey: question.answer,
      }));
      await TestService.submitAnswers(candidateId, finalCandidateAnswers);
      var endTime = getCurrentDateTime();
      await TestService.endTime(candidateId, testId, endTime);
      alert("Answers submitted successfully");
      setIsSubmitted(true); // Mark test as submitted
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
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none"
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
            className="w-full px-4 py-2 mt-4 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none"
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
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-indigo-600 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
              style={{ width: `${progress}%` }}
            >
              {progress.toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-xl text-gray-900 dark:text-white">
          Time Remaining: {timeRemaining}s
        </div>
        <hr className="my-4" />
        <div>
          <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{questions[current].title}</h5>
          <form>
            {["a", "b", "c", "d"].map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name="answer"
                  id={option}
                  checked={questions[current].answer === option}
                  onChange={() => handleAnswerSelection(option)}
                  className="mr-2"
                />
                <label className="text-gray-700 dark:text-gray-300">{questions[current][option]}</label>
              </div>
            ))}
          </form>
        </div>

        <div className="flex justify-between space-x-2 mt-4">
          {!isSubmitted && (
            <>
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
            </>
          )}
        </div>
        <div className="flex justify-between space-x-2 mt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitted} // Disable Submit button after submission
            className={`px-4 py-2 ${isSubmitted ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
              } text-white rounded-lg`}
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

        {isSubmitted && score !== null && (
          <div className="mt-4 text-center text-xl font-semibold">
            Your Score is: {score}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestAppear;
