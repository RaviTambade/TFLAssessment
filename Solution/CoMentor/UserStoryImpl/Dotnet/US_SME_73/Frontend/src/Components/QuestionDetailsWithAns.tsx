import React, { useState } from "react";
import "./QuestionDetailsWithAns.css";

interface QuestionDetails {
  questionId: number;
  description: string;
  questionType: string;
  difficultyLevel: string;
  status: string;
  frameworkName?: string;
  conceptName?: string;

  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  correctAnswer?: string;

  problemAnswer?: string;
}

const QuestionDetailsWithAns: React.FC = () => {
  const [questionId, setQuestionId] = useState("");
  const [data, setData] = useState<QuestionDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    if (!questionId) return;

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5201/api/QuestionDetails/${questionId}`
      );

      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="question-container">
      <div className="question-wrapper">
        <h2 className="question-title">Question Details With Answer</h2>

        <div className="input-card">
          <div className="input-wrapper">
            <input
              type="number"
              placeholder="Enter Question ID"
              value={questionId}
              onChange={(e) => setQuestionId(e.target.value)}
              className="question-input"
            />

            <button 
              onClick={fetchDetails}
              className="get-details-btn"
            >
              Get Details
            </button>
          </div>
        </div>

        {loading && <p className="loading-text">Loading...</p>}

        {data && (
          <div className="data-card">
            <div className="data-section">
              <p className="data-item"><b>ID:</b> {data.questionId}</p>
              <p className="data-item"><b>Description:</b> {data.description}</p>
              <p className="data-item"><b>Type:</b> {data.questionType}</p>
              <p className="data-item"><b>Difficulty:</b> {data.difficultyLevel}</p>
              <p className="data-item"><b>Status:</b> {data.status}</p>

              {data.frameworkName && (
                <p className="data-item"><b>Framework:</b> {data.frameworkName}</p>
              )}

              {data.conceptName && (
                <p className="data-item"><b>Concept:</b> {data.conceptName}</p>
              )}

              {/* ✅ MCQ */}
              {data.questionType === "MCQ" && (
                <div className="section-divider">
                  <h3 className="section-title">Options</h3>
                  <div className="options-list">
                    {data.optionA && <p className="option-item">A: {data.optionA}</p>}
                    {data.optionB && <p className="option-item">B: {data.optionB}</p>}
                    {data.optionC && <p className="option-item">C: {data.optionC}</p>}
                    {data.optionD && <p className="option-item">D: {data.optionD}</p>}
                  </div>
                  <p className="correct-answer"><b>Correct Answer:</b> {data.correctAnswer}</p>
                </div>
              )}

              {/* ✅ PROBLEM STATEMENT */}
              {data.questionType === "PROBLEM_STATEMENT" && (
                <div className="section-divider">
                  <h3 className="section-title">Answer</h3>
                  <p className="answer-text">{data.problemAnswer}</p>
                </div>
              )}

              {/* ✅ HANDS_ON */}
              {data.questionType === "HANDS_ON" && (
                <div className="section-divider">
                  <h3 className="section-title">Hands-on Task</h3>
                  <p className="answer-text">No predefined answer. Solve practically.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionDetailsWithAns;