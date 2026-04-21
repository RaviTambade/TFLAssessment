import React, { useState, useEffect } from "react";

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
  const [questionId, setQuestionId] = useState("1"); // ✅ starts from 1
  const [data, setData] = useState<QuestionDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDetails = async () => {
    // ✅ validation
    if (!questionId || isNaN(Number(questionId)) || Number(questionId) < 1) {
      setError("Please enter valid Question ID (>= 1)");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setData(null);

      const res = await fetch(
        `http://localhost:5201/api/QuestionDetails/${questionId}`
      );

      if (!res.ok) {
        throw new Error("API failed");
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data. Check API or DB connection.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ optional: auto load question 1 on page load
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Question Details With Answer
        </h2>

        {/* Input Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex gap-3">
            <input
              type="text" // ✅ no arrows
              value={questionId}
              placeholder="Enter Question ID"
              onChange={(e) => setQuestionId(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              onClick={fetchDetails}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Get Details
            </button>
          </div>

          {error && (
            <p className="text-red-500 mt-3 text-sm">{error}</p>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-600">Loading...</p>
        )}

        {/* Data Card */}
        {data && (
          <div className="bg-white rounded-xl shadow p-6 space-y-3">
            <p><b>ID:</b> {data.questionId}</p>
            <p><b>Description:</b> {data.description}</p>
            <p><b>Type:</b> {data.questionType}</p>
            <p><b>Difficulty:</b> {data.difficultyLevel}</p>
            <p><b>Status:</b> {data.status}</p>

            {data.frameworkName && (
              <p><b>Framework:</b> {data.frameworkName}</p>
            )}

            {data.conceptName && (
              <p><b>Concept:</b> {data.conceptName}</p>
            )}

            {/* MCQ */}
            {data.questionType === "MCQ" && (
              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold mb-2">Options</h3>
                {data.optionA && <p>A: {data.optionA}</p>}
                {data.optionB && <p>B: {data.optionB}</p>}
                {data.optionC && <p>C: {data.optionC}</p>}
                {data.optionD && <p>D: {data.optionD}</p>}
                <p className="mt-2 font-semibold">
                  Correct: {data.correctAnswer}
                </p>
              </div>
            )}

            {/* Problem Statement */}
            {data.questionType === "PROBLEM_STATEMENT" && (
              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold mb-2">Answer</h3>
                <p>{data.problemAnswer}</p>
              </div>
            )}

            {/* Hands-on */}
            {data.questionType === "HANDS_ON" && (
              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold mb-2">Hands-on Task</h3>
                <p>No predefined answer. Solve practically.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionDetailsWithAns;