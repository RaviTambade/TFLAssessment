import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";

const QuestionsComponent = ({ language, onQuestionSelect }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (language) {
      fetchQuestions();
    }
  }, [language]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      // Replace with your actual API endpoint
      const languageId = language.id || language.languageId;
      const response = await fetch(`/api/questions?languageId=${languageId}`); // Update with your backend URL
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const data = await response.json();
      setQuestions(data.questions || []);
    } catch (err) {
      setError(err.message || "Error fetching questions");
      console.error("Error fetching questions:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="animate-spin text-blue-600 mb-3" size={40} />
        <p className="text-slate-600">Loading questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg flex items-center gap-4">
        <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
        <div>
          <p className="text-red-900 font-semibold">Error Loading Questions</p>
          <p className="text-red-700">{error}</p>
          <Button
            onClick={fetchQuestions}
            variant="outline"
            size="sm"
            className="mt-2"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 text-lg">No questions available for this language.</p>
        <Button onClick={fetchQuestions} variant="outline" className="mt-4">
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((question, index) => (
          <Card
            key={question.id || index}
            className="cursor-pointer hover:shadow-lg hover:border-blue-500 transition-all flex flex-col"
            onClick={() => onQuestionSelect(question)}
          >
            <CardHeader>
              <CardTitle className="text-lg flex items-start justify-between gap-4">
                <span className="flex-1">
                  {question.title || `Question ${index + 1}`}
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded flex-shrink-0">
                  Q{index + 1}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-slate-600 text-sm mb-4 flex-1">
                {question.description || question.questionText || "Click to view details"}
              </p>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuestionSelect(question);
                }}
                className="w-full mt-auto"
                variant="default"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuestionsComponent;
