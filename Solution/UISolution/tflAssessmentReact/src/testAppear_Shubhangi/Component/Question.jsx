import React from "react";

const QuestionComponent = ({ questions, currentval, setQuestions }) => {
  const handleAnswerSelection = (selectedOption) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentval].answer = selectedOption;
    setQuestions(updatedQuestions);
  };

  if (!questions.length) return <div>Loading questions...</div>;

  return (
    <div>
      <h5>{questions[currentval].title}</h5>
      <form>
        <div>
          <input type="radio" name="answer"id="a"checked={questions[currentval].answer === "a"}onChange={() => handleAnswerSelection("a")}/>
          <label>{questions[currentval].a}</label>
        </div>
        <div>
          <input
            type="radio"name="answer"id="b"checked={questions[currentval].answer === "b"}onChange={() => handleAnswerSelection("b")}/>
          <label>{questions[currentval].b}</label>
        </div>
        <div>
          <input type="radio" name="answer" id="c" checked={questions[currentval].answer === "c"} onChange={() => handleAnswerSelection("c")}/>
          <label>{questions[currentval].c}</label>
        </div>
        <div>
          <input type="radio" name="answer" id="d" checked={questions[currentval].answer === "d"} onChange={() => handleAnswerSelection("d")}/>
          <label>{questions[currentval].d}</label>
        </div>
      </form>
    </div>
  );
};

export default QuestionComponent;
