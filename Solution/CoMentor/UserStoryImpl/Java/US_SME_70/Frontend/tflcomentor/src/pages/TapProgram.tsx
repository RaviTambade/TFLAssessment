import { useEffect, useMemo, useState } from "react";
import { fetchQuestionsByType } from "@/api/questions";
import type { Question } from "@/types/question";

const QUESTION_TYPES = [
  "MCQ",
  "PROBLEM_STATEMENT",
  "HANDS_ON",
];

const QuestionByType = () => {
  const [selectedType, setSelectedType] = useState(QUESTION_TYPES[0]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEmpty = useMemo(() => !loading && questions.length === 0, [loading, questions]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchQuestionsByType(selectedType);
        if (isMounted) {
          setQuestions(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load questions");
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
  }, [selectedType]);

  return (
    <section className="py-12 bg-gradient-to-b from-orange-50/40 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            View Questions By Type
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Filter questions instantly based on category.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 bg-card border border-border rounded-xl p-4 shadow-sm">
          <label className="text-sm font-semibold text-foreground" htmlFor="questionType">
            Question Type
          </label>
          <select
            id="questionType"
            className="w-full sm:w-72 rounded-lg border border-orange-200 bg-background px-3 py-2 pr-10 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-300 transition-all duration-200 appearance-none bg-[linear-gradient(45deg,transparent_50%,#f97316_50%),linear-gradient(135deg,#f97316_50%,transparent_50%)] bg-[position:right_12px_center,right_6px_center] bg-[size:6px_6px,6px_6px] bg-no-repeat"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {QUESTION_TYPES.map((type) => (
              <option
                key={type}
                value={type}
                className="bg-background text-foreground"
              >
                {type}
              </option>
            ))}
          </select>
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
            No questions found for {selectedType}.
          </div>
        )}

        {/* Questions Grid */}
        {questions.length > 0 && (
          <div className="grid gap-5">
            {questions.map((question) => (
              <div
                key={question.questionId}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-orange-500 tracking-wide">
                    {question.questionType}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ID: {question.questionId}
                  </span>
                </div>

                <p className="mt-3 text-sm sm:text-base text-foreground leading-relaxed">
                  {question.questionText}
                </p>

                
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionByType;
