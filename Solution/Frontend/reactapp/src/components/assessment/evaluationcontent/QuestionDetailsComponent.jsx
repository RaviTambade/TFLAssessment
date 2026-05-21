import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";

const QuestionDetailsComponent = ({ question, language }) => {
  const [questionDetails, setQuestionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (question) {
      fetchQuestionDetails();
    }
  }, [question]);

  const fetchQuestionDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      setSelectedAnswer(null);
      setSubmitted(false);

      // Replace with your actual API endpoint
      const questionId = question.id || question.questionId;
      const response = await fetch(`/api/questions/${questionId}`); // Update with your backend URL
      if (!response.ok) {
        throw new Error("Failed to fetch question details");
      }
      const data = await response.json();
      setQuestionDetails(data.question || data);
    } catch (err) {
      setError(err.message || "Error fetching question details");
      console.error("Error fetching question details:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      setSubmitted(true);
      // You can add additional logic here to save the answer
      console.log("Answer submitted:", selectedAnswer);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="animate-spin text-blue-600 mb-3" size={40} />
        <p className="text-slate-600">Loading question details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg flex items-center gap-4">
        <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
        <div>
          <p className="text-red-900 font-semibold">Error Loading Question Details</p>
          <p className="text-red-700">{error}</p>
          <Button
            onClick={fetchQuestionDetails}
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

  const details = questionDetails || question;

  return (
    <div className="space-y-6">
      {/* Question Title Card */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900">
            {details.title || details.questionText || "Question"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6">
            <div>
              <p className="text-xs text-blue-700 font-semibold">LANGUAGE</p>
              <p className="text-lg font-semibold text-blue-900">
                {language.name || language.languageName}
              </p>
            </div>
            <div>
              <p className="text-xs text-blue-700 font-semibold">DIFFICULTY</p>
              <p className="text-lg font-semibold text-blue-900">
                {details.difficulty || "Medium"}
              </p>
            </div>
            <div>
              <p className="text-xs text-blue-700 font-semibold">POINTS</p>
              <p className="text-lg font-semibold text-blue-900">
                {details.points || "10"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Full Question Description */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Question</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {details.fullQuestion || details.description || details.questionText}
          </p>

          {details.codeSnippet && (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <pre className="font-mono text-sm">{details.codeSnippet}</pre>
            </div>
          )}

          {details.imageUrl && (
            <div className="my-4">
              <img
                src={details.imageUrl}
                alt="Question illustration"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Answer Options */}
      {details.options && details.options.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Choose an Answer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {details.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => setSelectedAnswer(index)}
                  className="mt-1"
                  disabled={submitted}
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">
                    {option.text || option}
                  </p>
                  {option.explanation && (
                    <p className="text-sm text-slate-600 mt-1">
                      {option.explanation}
                    </p>
                  )}
                </div>
              </label>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Submission Status */}
      {submitted && (
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" size={24} />
              <div>
                <p className="font-semibold text-green-900">Answer Submitted</p>
                <p className="text-sm text-green-700">
                  Your answer has been recorded successfully.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submit Button */}
      {!submitted && (
        <div className="flex gap-4">
          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="flex-1"
            size="lg"
          >
            Submit Answer
          </Button>
        </div>
      )}

      {/* Additional Information */}
      {details.hints && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Hints</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {Array.isArray(details.hints) ? (
                details.hints.map((hint, index) => (
                  <li key={index} className="text-slate-700">
                    {hint}
                  </li>
                ))
              ) : (
                <li className="text-slate-700">{details.hints}</li>
              )}
            </ul>
          </CardContent>
        </Card>
      )}

      {details.resources && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Related Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {Array.isArray(details.resources) &&
                details.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {resource.title || resource.url}
                    </a>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuestionDetailsComponent;
