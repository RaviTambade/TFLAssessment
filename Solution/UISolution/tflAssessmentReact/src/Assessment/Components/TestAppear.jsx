import React, { useState, useEffect } from "react";
import TestService from "../Service/TestService"; 

const TestAppear = () => {
  const testId = "1"; 
  const candidateId = "2";

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchedQuestions = await TestService.fetchQuestions(testId);
        const updatedQuestions = fetchedQuestions.map((question) => ({
          ...question,
          answer: "No", // Initialize each question with no answer selected
        }));
        setQuestions(updatedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [testId]);


  const handleAnswerSelection = (selectedOption) => {
    const updatedQuestions = [...questions];
    updatedQuestions[current].answer = selectedOption;
    setQuestions(updatedQuestions);
  };

  const handleFirst = () => setCurrent(0);
  const handlePrevious = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setCurrent((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
  const handleLast = () => setCurrent(questions.length - 1);

  const handleSubmit = async () => {
    try {
      const finalCandidateAnswers = questions.map((question) => ({
        TestQuestionId: question.id,
        AnswerKey: question.answer,
      }));
      await TestService.submitAnswers(candidateId, finalCandidateAnswers);
      alert("Answers submitted successfully");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  // Function to fetch and display the result
  const handleResult = async () => {
    try {
      const result = await TestService.fetchResult(candidateId, testId);
      setScore(result);
    } catch (error) {
      console.error("Error fetching result:", error);
    }
  };

  if (!questions.length) return <div>Loading questions...</div>;

  return (
    <div>
      <h3>Transflower Learning Private Limited</h3>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5>{questions[current].title}</h5>
            <form>
              <div>
                <input type="radio" name="answer"id="a"
                  checked={questions[current].answer === "a"}
                  onChange={() => handleAnswerSelection("a")}
                />
                <label>{questions[current].a}</label>
              </div>
              <div>
                <input type="radio" name="answer" id="b"
                  checked={questions[current].answer === "b"}
                  onChange={() => handleAnswerSelection("b")}
                />
                <label>{questions[current].b}</label>
              </div>
              <div>
                <input type="radio" name="answer" id="c"
                  checked={questions[current].answer === "c"}
                  onChange={() => handleAnswerSelection("c")}
                />
                <label>{questions[current].c}</label>
              </div>
              <div>
                <input type="radio" name="answer" id="d"
                  checked={questions[current].answer === "d"}
                  onChange={() => handleAnswerSelection("d")}
                />
                <label>{questions[current].d}</label>
              </div>
            </form>

            <div className="btn-group">
              <button onClick={handleFirst} disabled={current === 0}>First</button>
              <button onClick={handlePrevious} disabled={current === 0}>Previous</button>
              <button onClick={handleNext} disabled={current === questions.length - 1}>Next</button>
              <button onClick={handleLast} disabled={current === questions.length - 1}>Last</button>
            </div>

            <div className="mt-3">
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
