import { useEffect, useMemo, useState } from "react";
import { fetchQuestionsByStatus } from "@/api/questions";
import type { Question } from "@/types/question";

const QUESTION_STATUSES = [
  "ACTIVE",
  "INACTIVE",
  "DRAFT",
];
const QuestionByStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState(QUESTION_STATUSES[0]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEmpty = useMemo(
    () => !loading && questions.length === 0,
    [loading, questions]
  );

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchQuestionsByStatus(selectedStatus);
        if (isMounted) {
          setQuestions(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load questions"
          );
          setQuestions([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, [selectedStatus]);

  return (
    <section className="py-12 bg-gradient-to-b from-orange-50/40 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            View Questions By Status
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Select a status to load questions.
          </p>
        </div>

        {/* Radio Buttons */}
        <div className="mb-8">
          <label className="text-sm font-semibold text-foreground mb-3 block">
            Question Status
          </label>

          <div className="flex flex-wrap gap-4">
            {QUESTION_STATUSES.map((status) => (
              <label
                key={status}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition
                  ${
                    selectedStatus === status ? "border-orange-400 bg-orange-100 text-orange-600" : "border-border hover:border-orange-300"
                  }`}
              >
                <input
                  type="radio"
                  name="questionStatus"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={() => setSelectedStatus(status)}
                  className="accent-orange-500"
                />
                <span className="text-sm font-medium">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* States */}
        {loading && (
          <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground animate-pulse shadow-sm">
            Loading questions...
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive shadow-sm">
            {error}
          </div>
        )}

        {isEmpty && !error && (
          <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground shadow-sm">
            No questions found.
          </div>
        )}

        {/* Questions */}
        {questions.length > 0 && (
          <div className="group rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
             {selectedStatus.replaceAll("_", " ")} Questions
            </h2>

            <ul className="space-y-3">
              {questions.map((question) => (
                <li
                  key={question.questionId}
                  className="rounded-lg border border-border bg-background p-3"
                >
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {question.questionText}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionByStatus;
                      