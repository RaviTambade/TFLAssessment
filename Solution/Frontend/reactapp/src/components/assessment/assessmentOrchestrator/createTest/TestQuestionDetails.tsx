import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft, Loader2, AlertCircle } from "lucide-react";

export default function TestQuestionDetails() {
  const { testId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!testId) return;

    const controller = new AbortController();

    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `http://localhost:5201/api/Questions/GetQuestionsByTestId/${testId}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data = await res.json();
        setQuestions(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
    return () => controller.abort();
  }, [testId]);

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-extrabold text-gray-900">
            <BookOpen className="h-7 w-7 text-red-600" />
            Test Questions
          </h1>
          <p className="mt-1 text-gray-500">
            Viewing all questions for Test ID: {testId}
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back 
        </button>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-4">
        {loading && (
          <div className="flex items-center justify-center gap-2 py-16 text-gray-500">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Loading questions...</span>
          </div>
        )}

        {!loading && error && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>Couldn't load questions: {error}</span>
          </div>
        )}

        {!loading && !error && questions.length === 0 && (
          <p className="py-8 text-center text-sm text-gray-500">
            No questions found for this test.
          </p>
        )}

        {!loading &&
          !error &&
          questions.map((q, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:border-red-100 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-gray-900">
                  {idx + 1}. {q.description}
                </p>
                <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {q.questionType}
                </span>
              </div>
              <div className="mt-3 flex gap-6 text-xs text-gray-500">
                <span>
                  <span className="uppercase tracking-wide text-gray-400">Language: </span>
                  {q.language}
                </span>
                <span>
                  <span className="uppercase tracking-wide text-gray-400">Framework: </span>
                  {q.framework}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
