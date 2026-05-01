import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type QuestionType = {
  questionId: number;
  description: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
};

type SelectedAnswersType = {
  [key: number]: string;
};

const Question = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswersType>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(2.5 * 60); // Default 30 mins in seconds
  const [studentId, setStudentId] = useState<string>("");
  const [isStarted, setIsStarted] = useState<boolean>(false);

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);

        // Auto-submit when timer reaches zero
        const submitBtn = document.getElementById("submit-assessment-btn");
        if (submitBtn) submitBtn.click();

        return 0;
      }
      return prev - 1;
    });
  }, 1000);

      return () => clearInterval(timer);
}, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5201/api/Assessment/questions/4")
      .then((res) => res.json())
      .then((data: QuestionType[]) => {
        setQuestions(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  // ✅ Transform options
  const getOptions = (question: QuestionType) => {
    const opts: { key: string; value: string }[] = [];
    if (question.optionA) opts.push({ key: "A", value: question.optionA });
    if (question.optionB) opts.push({ key: "B", value: question.optionB });
    if (question.optionC) opts.push({ key: "C", value: question.optionC });
    if (question.optionD) opts.push({ key: "D", value: question.optionD });
    return opts;
  };

  const handleAnswerChange = (questionId: number, selectedKey: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedKey,
    }));
  };

  const handleFirst = () => setCurrentIndex(0);

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  const handleLast = () => setCurrentIndex(questions.length - 1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const answersArray = Object.entries(selectedAnswers).map(
      ([questionId, selectedOption]) => ({
        questionId: parseInt(questionId),
        selectedOption,
      })
    );

    const payload = {
      studentId: parseInt(studentId),
      assessmentId: 7,
      timeTakenMinutes: 30,
      answers: answersArray,
    };

    fetch("http://localhost:5201/api/Assessment/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Submission Response:", data);
        navigate("/models/result");
      })
      .catch((error) =>
        console.error("Error submitting answers:", error)
      );
  };

  if (!isStarted) {
    return (
      <div className="mx-auto max-w-md rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-200 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Enter Student Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1 text-left">
              Student ID
            </label>
            <input
              type="number"
              placeholder="Enter your ID (e.g. 1)"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>
          <button
            onClick={() => studentId && setIsStarted(true)}
            disabled={!studentId}
            className="w-full bg-[#dc2626] text-white py-2 rounded-lg font-semibold hover:bg-[#b91c1c] transition disabled:opacity-50"
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  if (loading)
    return (
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
        <p className="text-slate-700">Loading questions...</p>
      </div>
    );

  if (questions.length === 0)
    return (
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
        <p className="text-slate-700">No questions available</p>
      </div>
    );

  const currentQuestion = questions[currentIndex];
  const options = getOptions(currentQuestion);

  return (
    <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-950">
          Assessment
        </h1>
        <div className={`text-xl font-mono font-bold px-4 py-2 rounded-xl border-2 ${timeLeft < 30 ? 'text-red-600 border-red-600 animate-pulse' : 'text-slate-700 border-slate-200'}`}>
          Time Remaining: {formatTime(timeLeft)}
          
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-6 rounded-3xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold text-slate-900">
              Question {currentIndex + 1} of {questions.length}
            </h3>

            <span className="inline-flex rounded-full bg-[#fee2e2] px-4 py-2 text-sm font-semibold text-[#b91c1c]">
              #{currentQuestion.questionId}
            </span>
          </div>

          <p className="mt-4 text-base leading-7 text-slate-700">
            {currentQuestion.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {options.map((option) => (
              <label
                key={option.key}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:border-[#dc2626]"
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.questionId}`}
                  value={option.key}
                  checked={
                    selectedAnswers[currentQuestion.questionId] ===
                    option.key
                  }
                  onChange={() =>
                    handleAnswerChange(
                      currentQuestion.questionId,
                      option.key
                    )
                  }
                  className="h-4 w-4 accent-[#dc2626]"
                />

                <span className="text-slate-700 text-sm">
                  {option.key}. {option.value}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation and Submit Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <button 
              type="button" 
              onClick={handleFirst}
              disabled={currentIndex === 0}
              className="rounded-lg bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              First
            </button>
            <button 
              type="button" 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="rounded-lg bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <button 
              type="button" 
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="rounded-lg bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
            <button 
              type="button" 
              onClick={handleLast}
              disabled={currentIndex === questions.length - 1}
              className="rounded-lg bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Last
            </button>
          </div>

          <button 
            type="submit" 
            id="submit-assessment-btn"
            className="mx-auto rounded-lg bg-[#dc2626] px-8 py-2 font-semibold text-white hover:bg-[#b91c1c] transition"
          >
            Submit All Answers
          </button>
        </div>
      </form>
    </div>
  );
};

export default Question;