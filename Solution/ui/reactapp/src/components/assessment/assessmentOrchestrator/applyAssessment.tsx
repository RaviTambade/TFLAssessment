import React, { useEffect, useState } from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import { WEBAPI_DOTNET_URL } from "@/lib/utils";

import QuestionType from "./entities/DisplayQuestion";

type SelectedAnswersType = {
  [key: number]: string;
};

const Question = () => {

  const navigate = useNavigate();

  const { assessmentId } = useParams();

  const [questions, setQuestions] =
    useState<QuestionType[]>([]);

  const [currentIndex, setCurrentIndex] =
    useState<number>(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState<SelectedAnswersType>({});

  const [loading, setLoading] =
    useState<boolean>(true);

  const [timeLeft, setTimeLeft] =
    useState<number>(2.5 * 60);

  const [examEnded, setExamEnded] =
  useState<boolean>(false);

  // TIMER
  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // AUTO SUBMIT
  useEffect(() => {

    if (timeLeft === 0) {

  setExamEnded(true);

  const submitBtn =
    document.getElementById(
      "submit-assessment-btn"
    ) as HTMLButtonElement;

  if (submitBtn) {

    submitBtn.click();
  }
}

  }, [timeLeft]);

  // FETCH QUESTIONS
  useEffect(() => {

    if (!assessmentId) return;

    fetch(
      `${WEBAPI_DOTNET_URL}/Assessment/${assessmentId}/questions`
    )
      .then((res) => res.json())

      .then((data: QuestionType[]) => {

        setQuestions(
          Array.isArray(data)
            ? data
            : []
        );

        setLoading(false);

      })

      .catch((error) => {

        console.error(
          "Error fetching questions:",
          error
        );

        setLoading(false);

      });

  }, [assessmentId]);

  // FORMAT TIMER
  const formatTime = (
    seconds: number
  ) => {

    const mins =
      Math.floor(seconds / 60);

    const secs =
      seconds % 60;

    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // OPTIONS
  const getOptions = (
    question: QuestionType
  ) => {

    const opts: {
      key: string;
      value: string;
    }[] = [];

    if (question.optionA)
      opts.push({
        key: "A",
        value: question.optionA
      });

    if (question.optionB)
      opts.push({
        key: "B",
        value: question.optionB
      });

    if (question.optionC)
      opts.push({
        key: "C",
        value: question.optionC
      });

    if (question.optionD)
      opts.push({
        key: "D",
        value: question.optionD
      });

    return opts;
  };

  // SELECT ANSWER
  const handleAnswerChange = (
    questionId: number,
    selectedKey: string
  ) => {

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedKey,
    }));
  };

  // NAVIGATION
  const handleFirst = () =>
    setCurrentIndex(0);

  const handlePrevious = () => {

    if (currentIndex > 0) {

      setCurrentIndex(
        currentIndex - 1
      );
    }
  };

  const handleNext = () => {

    if (
      currentIndex <
      questions.length - 1
    ) {

      setCurrentIndex(
        currentIndex + 1
      );
    }
  };

  const handleLast = () =>
    setCurrentIndex(
      questions.length - 1
    );

  // SUBMIT
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const answersArray =
      Object.entries(selectedAnswers).map(
        ([questionId, selectedOption]) => ({
          questionId:
            parseInt(questionId),

          selectedOption,
        })
      );

    const currentStudent = JSON.parse(
      sessionStorage.getItem("current") || "{}"
    );

    const payload = {

      studentId:
        currentStudent.userid || 0,

      assessmentId:
        parseInt(assessmentId || "0"),

      timeTakenMinutes: 2,

      answers: answersArray,
    };

    fetch(
      `${WEBAPI_DOTNET_URL}/Assessment/submit`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())

      .then(() => {

        navigate("/models/result");

      })

      .catch((error) =>
        console.error(
          "Error submitting answers:",
          error
        )
      );
  };

  // LOADING
  if (loading) {

    return (
      <div className="p-6">
        Loading questions...
      </div>
    );
  }

  // NO QUESTIONS
  if (questions.length === 0) {

    return (
      <div className="p-6">
        No questions available
      </div>
    );
  }

  const currentQuestion =
    questions[currentIndex];

  const options =
    getOptions(currentQuestion);

  return (

    <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200 relative">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-slate-950">
          Assessment
        </h1>

        <div className="text-xl font-mono font-bold px-4 py-2 rounded-xl border-2 text-slate-700 border-slate-200">

          Time Remaining:
          {" "}
          {formatTime(timeLeft)}

        </div>

      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>

        <div className="mt-6 rounded-3xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">

          {/* QUESTION HEADER */}
          <div className="flex justify-between border-b border-slate-200 pb-4">

            <h3 className="text-xl font-semibold text-slate-900">

              Question
              {" "}
              {currentIndex + 1}
              {" "}
              of
              {" "}
              {questions.length}

            </h3>

            <span className="inline-flex rounded-full bg-[#fee2e2] px-4 py-2 text-sm font-semibold text-[#b91c1c]">

              #
              {currentQuestion.questionId}

            </span>

          </div>

          {/* QUESTION */}
          <p className="mt-4 text-base leading-7 text-slate-700">

            {currentQuestion.description}

          </p>

          {/* OPTIONS */}
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
                    selectedAnswers[
                      currentQuestion.questionId
                    ] === option.key
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

                  {option.key}.
                  {" "}
                  {option.value}

                </span>

              </label>

            ))}

          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-4">

          <div className="flex justify-center gap-2">

            <button
              type="button"
              onClick={handleFirst}
              disabled={currentIndex === 0}
              className="rounded-lg bg-slate-200 px-3 py-1.5"
            >
              First
            </button>

            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="rounded-lg bg-slate-200 px-3 py-1.5"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={
                currentIndex ===
                questions.length - 1
              }
              className="rounded-lg bg-slate-200 px-3 py-1.5"
            >
              Next
            </button>

            <button
              type="button"
              onClick={handleLast}
              disabled={
                currentIndex ===
                questions.length - 1
              }
              className="rounded-lg bg-slate-200 px-3 py-1.5"
            >
              Last
            </button>

          </div>

          <button
            type="submit"
            id="submit-assessment-btn"
            className="mx-auto rounded-lg bg-[#dc2626] px-8 py-2 font-semibold text-white"
          >
            Submit All Answers
          </button>

        </div>

      </form>

    </div>
  );
};

export default Question;