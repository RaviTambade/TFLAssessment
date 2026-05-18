import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Label } from "../../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

type QuestionOptionsState = {
  testId?: number | string;
};

type DummyQuestion = {
  id: number;
  title: string;
  description: string;
  type: "MCQ" | "ProblemStatements";
  status: "approved" | "drafted" | "rejected";
};

const dummyQuestions: DummyQuestion[] = [
  {
    id: 1,
    title: "JavaScript Closure",
    description: "Which statement best describes a closure in JavaScript?",
    type: "MCQ",
    status: "approved",
  },
  {
    id: 2,
    title: "React State Update",
    description: "What happens when setState is called in a React component?",
    type: "MCQ",
    status: "drafted",
  },
  {
    id: 3,
    title: "Array Deduplication",
    description: "Write a function to remove duplicate values from an array.",
    type: "ProblemStatements",
    status: "approved",
  },
  {
    id: 4,
    title: "API Response Parser",
    description: "Build a parser that normalizes nested API response data.",
    type: "ProblemStatements",
    status: "drafted",
  },
  {
    id: 5,
    title: "Promise Handling",
    description: "Which method handles both resolved and rejected promises?",
    type: "MCQ",
    status: "rejected",
  },
  {
    id: 6,
    title: "String Compression",
    description: "Create a method that compresses repeated characters in a string.",
    type: "ProblemStatements",
    status: "rejected",
  },
];

const QuestionOptions = () => {
  const location = useLocation();
  const { testId } = (location.state as QuestionOptionsState | null) ?? {};
  const [questionType, setQuestionType] = useState("");
  const [status, setStatus] = useState("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

  const showActions = questionType && status;
  const filteredQuestions = dummyQuestions.filter(
    (question) => question.type === questionType && question.status === status
  );

  const handleQuestionTypeChange = (value: string) => {
    setQuestionType(value);
    setShowQuestions(false);
    setSelectedQuestions([]);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setShowQuestions(false);
    setSelectedQuestions([]);
  };

  const toggleQuestion = (questionId: number) => {
    setSelectedQuestions((current) =>
      current.includes(questionId)
        ? current.filter((id) => id !== questionId)
        : [...current, questionId]
    );
  };

  const handleCancel = () => {
    setShowQuestions(false);
    setSelectedQuestions([]);
  };

  const handleCreateTest = () => {
    console.log("Selected Questions:", selectedQuestions);
    alert("Test questions selected successfully");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="border-0 shadow-soft ring-1 ring-slate-200">
        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
          <CardTitle className="text-2xl font-bold text-slate-900">
            Question Setup
          </CardTitle>
          {testId && (
            <p className="text-sm text-slate-600">Test ID: {testId}</p>
          )}
        </CardHeader>

        <CardContent className="p-8 space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Question Type
              </Label>
              <Select
                value={questionType}
                onValueChange={handleQuestionTypeChange}
              >
                <SelectTrigger className="h-12 rounded-xl border-slate-200">
                  <SelectValue placeholder="Select question type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MCQ">MCQ</SelectItem>
                  <SelectItem value="ProblemStatements">
                    Problem Statements
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Status
              </Label>
              <Select value={status} onValueChange={handleStatusChange}>
                <SelectTrigger className="h-12 rounded-xl border-slate-200">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="drafted">Drafted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {showActions && (
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4 sm:flex-row">
              <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-lg rounded-xl">
                Add Questions
              </Button>
              <Button
                variant="outline"
                className="flex-1 py-6 text-lg rounded-xl border-slate-200 hover:bg-slate-50"
                onClick={() => setShowQuestions(true)}
              >
                Select Questions
              </Button>
            </div>
          )}

          {showQuestions && (
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Dummy Questions
                </h2>
                <p className="text-sm text-slate-600">
                  {questionType} questions with {status} status
                </p>
              </div>

              <div className="space-y-3">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((question) => (
                    <label
                      key={question.id}
                      className={`flex gap-4 rounded-xl border p-4 cursor-pointer transition-all ${
                        selectedQuestions.includes(question.id)
                          ? "bg-red-50 border-red-200 ring-1 ring-red-200"
                          : "bg-white border-slate-200 hover:border-red-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedQuestions.includes(question.id)}
                        onChange={() => toggleQuestion(question.id)}
                        className="mt-1 h-4 w-4 accent-red-600"
                      />
                      <span>
                        <span className="block font-semibold text-slate-900">
                          {question.title}
                        </span>
                        <span className="block text-sm text-slate-600">
                          {question.description}
                        </span>
                      </span>
                    </label>
                  ))
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    No dummy questions found for this filter.
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-col gap-4 sm:flex-row">
                <Button
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-lg rounded-xl"
                  onClick={handleCreateTest}
                  disabled={selectedQuestions.length === 0}
                >
                  Create Test
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 py-6 text-lg rounded-xl border-slate-200 hover:bg-slate-50"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionOptions;
