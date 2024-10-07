import { useEffect, useState } from "react"
import TestApperService from "../Service/TestAppearService";
import TestAppearService from "../Service/TestAppearService";

const TestAppear = () => {
  const [assessmentId, setAssessmentId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(null);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setAssessmentId(event.target.value);
  };

  const fetchAssessmentDetails = async () => {
    try {
      const data = await TestApperService.getTestQuetions(assessmentId);
      setQuestions(data);
      console.log(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch assessment details.');
      setDetails(null);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchAssessmentDetails();
  };
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

  const candidateId = 4;
  const handleSubmit = async () => {
    try {
      const finalCandidateAnswers = questions.map((question) => ({
        TestQuestionId: question.id,
        AnswerKey: question.answer,
      }));
      await TestAppearService.submitAnswers(candidateId, finalCandidateAnswers);
      alert("Answers submitted successfully");
      setIsTestSubmitted(true);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const testId = assessmentId;
  const handleShowResult = async () => {
    try {
      const result = await TestAppearService.fetchResult(candidateId, testId);
      setScore(result);
    } catch (error) {
      console.error("Error fetching result:", error);
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
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="assessmentIdInput">Assessment ID:</label>
        <input
          id="assessmentIdInput"
          type="text"
          value={assessmentId}
          onChange={handleInputChange}
          placeholder="Enter Assessment ID"
        /><br />
        <button type="submit">Get Test</button>
      </form>
      {error && <p>{error}</p>}
      {questions && (
        <div>
          {showQuestion(current)}
          <div className="mt-4 d-flex justify-content-between">
            <div>
              <button className="btn btn-primary me-2" onClick={handleFirst} disabled={!isTestStarted || isTestSubmitted}> First</button>
              <button className="btn btn-primary me-2" onClick={handlePrevious} disabled={!isTestStarted || isTestSubmitted || current === 0}> Previous</button>
              <button className="btn btn-primary me-2" onClick={handleNext} disabled={!isTestStarted || isTestSubmitted || current === questions.length - 1}>Next</button>
              <button className="btn btn-primary me-2" onClick={handleLast} disabled={!isTestStarted || isTestSubmitted}> Last</button>
            </div>

            <div>
              {!isTestStarted && !isTestSubmitted && (
                <button className="btn btn-success me-2" onClick={handleStart} disabled={isTestStarted}> Start</button>
              )}
              {isTestStarted && !isTestSubmitted && (
                <button className="btn btn-danger me-2" onClick={handleSubmit}>Submit</button>
              )}
              <button className="btn btn-info" onClick={handleShowResult}>Show Result </button>
            </div>
          </div>
          {score !== null && (
            <div className="mt-4">
              <h5>Your Score is: {score}/{questions.length}</h5>
            </div>
          )}

        </div>
      )}
    </>
  )

}

export default TestAppear;