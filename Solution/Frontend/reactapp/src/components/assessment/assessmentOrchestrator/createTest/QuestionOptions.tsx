import { useState, useEffect } from "react";
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
import SMEInsertQuestion from "../../evaluationcontent/SMEInsertQuestion";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import {
  CREATE_TEST_DRAFT_STORAGE_KEY,
  type CreateTestDraftPayload,
  isCreateTestDraftPayload,
  readCreateTestDraftFromSession,
} from "./createTestDraftStorage";

type QuestionOptionsLocationState = {
  testId?: number | string;
  test?: CreateTestDraftPayload;
};
 
type ApiQuestion = {
  questionId: number;
  description: string;
  questionType: string;
  difficultyLevel: string;
  status: string;
};
 
const QuestionOptions = () => {
  const location = useLocation();
  const routeState = (location.state as QuestionOptionsLocationState | null) ?? {};
  const testId = routeState.testId;

  const [testDraft, setTestDraft] = useState<CreateTestDraftPayload | null>(null);
 
  const [questionType, setQuestionType] = useState("");
  const [status, setStatus] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
 
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [showInsertQuestion, setShowInsertQuestion] = useState(false);
 
  const [questions, setQuestions] = useState<ApiQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCreatingTest, setIsCreatingTest] = useState(false);
 
  // Prefer router state from Create Test (reliable in-SPA); mirror to session for refresh.
  useEffect(() => {
    const state = location.state as QuestionOptionsLocationState | null;
    const fromNavigate = state?.test;

    if (isCreateTestDraftPayload(fromNavigate)) {
      setTestDraft(fromNavigate);
      try {
        sessionStorage.setItem(
          CREATE_TEST_DRAFT_STORAGE_KEY,
          JSON.stringify(fromNavigate)
        );
      } catch {
        /* storage may be blocked; in-memory testDraft is enough until refresh */
      }
      return;
    }

    setTestDraft(readCreateTestDraftFromSession());
  }, [location.key]);

  // ✅ FETCH QUESTIONS
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("current") || "{}");
    const userId = Number(
      userData.userid ||
        userData.id ||
        // localStorage.getItem("smeId") ||
        0
    );
 
    if (!userId) {
      setError("User Id not found in session storage");
      return;
    }
 
    setLoading(true);
 
    fetch(`${WEBAPI_DOTNET_URL}/CreateTest/questions/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch questions");
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
 
  // ✅ CLIENT SIDE FILTERING
  const filteredQuestions = questions.filter(
    (q) =>
      q.questionType?.toLowerCase() === questionType.toLowerCase() &&
      q.status?.toLowerCase() === status.toLowerCase() &&
      q.difficultyLevel?.toLowerCase() === skillLevel.toLowerCase()
  );
 
  const showActions = questionType && status && skillLevel;
 
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
 
  const readResponse = async (response: Response) => {
    const text = await response.text();
 
    if (!text) {
      return null;
    }
 
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };
 
  const getApiErrorMessage = (data: unknown) => {
    if (typeof data === "string") {
      return data || "Failed to create test.";
    }
 
    if (!data || typeof data !== "object") {
      return "Failed to create test.";
    }
 
    const record = data as Record<string, unknown>;
 
    if (typeof record.message === "string") {
      return record.message;
    }
 
    if (typeof record.error === "string") {
      return record.error;
    }
 
    if (record.errors && typeof record.errors === "object") {
      const errors = Object.values(record.errors as Record<string, unknown>)
        .flatMap((value) => (Array.isArray(value) ? value : [value]))
        .filter((value): value is string => typeof value === "string");
 
      if (errors.length > 0) {
        return `Validation failed: ${errors.join("; ")}`;
      }
    }
 
    return "Failed to create test.";
  };
 
  // ✅ CREATE TEST API
  const handleCreateTest = async () => {
    if (isCreatingTest) {
      return;
    }
 
    setError(null);
 
    if (selectedQuestions.length === 0) {
      setError("Please select at least one question.");
      return;
    }
 
    const fromLocation = (location.state as QuestionOptionsLocationState | null)?.test;
    const storedTestData =
      testDraft ??
      readCreateTestDraftFromSession() ??
      (isCreateTestDraftPayload(fromLocation) ? fromLocation : null);

    if (!storedTestData) {
      setError("Test details not found. Please go back and fill the test information.");
      return;
    }

    try {
      setIsCreatingTest(true);

      const userData = JSON.parse(sessionStorage.getItem("current") || "{}");
 
      const currentUserId = Number(
        userData.userid || userData.id || 0
      );
      // const smeId = Number(storedTestData.smeId || currentUserId);
      const duration = Number(storedTestData.duration);
 
      if (!currentUserId || currentUserId <= 0) {
        throw new Error("User ID not found. Please log in again.");
      }
 
      // if (!smeId || smeId <= 0) {
      //   throw new Error("SME ID is invalid. Please create the test again.");
      // }
 
      if (!duration || duration <= 0) {
        throw new Error("Test duration is invalid. Please enter a valid duration.");
      }
 
      const payload = {
        userId: currentUserId,
        title: storedTestData.title || "Untitled Test",
        description: storedTestData.description || "",
        duration,
        difficulty: storedTestData.difficulty,
        questionIds: selectedQuestions,
      };
 
      console.log("FINAL PAYLOAD:", payload);
 
      const response = await fetch(`${WEBAPI_DOTNET_URL}/CreateTest/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
 
      const data = await readResponse(response);
 
      if (!response.ok) {
        throw new Error(getApiErrorMessage(data));
      }
 
      if (
        data &&
        typeof data === "object" &&
        "success" in data &&
        (data as { success?: boolean }).success === false
      ) {
        throw new Error(getApiErrorMessage(data));
      }
 
      alert("Test created successfully");
 
      setSelectedQuestions([]);
      setShowQuestions(false);
      setQuestionType("");
      setStatus("");
      setSkillLevel("");
      sessionStorage.removeItem(CREATE_TEST_DRAFT_STORAGE_KEY);
      setTestDraft(null);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while creating the test.";
 
      console.error("Create test error:", err);
      setError(message);
      alert(message);
    } finally {
      setIsCreatingTest(false);
    }
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
          {testDraft && (
            <p className="text-sm text-slate-600">
              Test: <span className="font-medium text-slate-800">{testDraft.title}</span>
              {" · "}
              {testDraft.duration} min
            </p>
          )}
        </CardHeader>
 
        <CardContent className="p-8 space-y-8">
          {/* FILTERS */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <Label>Question Type</Label>
              <Select value={questionType} onValueChange={setQuestionType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select question type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MCQ">MCQ</SelectItem>
                  <SelectItem value="PROBLEM_STATEMENT">
                    Problem Statement
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
 
            <div className="space-y-2">
              <Label>Skill Level</Label>
              <Select value={skillLevel} onValueChange={setSkillLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select skill level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BEGINNER">Beginner</SelectItem>
                  <SelectItem value="INTERMEDIATE">Intermediate</SelectItem>
                  <SelectItem value="ADVANCE">Advance</SelectItem>
                </SelectContent>
              </Select>
            </div>
 
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="APPROVED">Approved</SelectItem>
                  <SelectItem value="DRAFT">Draft</SelectItem>
                  <SelectItem value="REJECTED">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
 
          {/* ACTION BUTTONS */}
          {showActions && (
            <div className="pt-6 border-t flex gap-4">
              <Button
                className="flex-1 bg-red-600 text-white"
                onClick={() => {
                  setShowInsertQuestion(true);
                  setShowQuestions(false);
                }}
              >
                Add Questions
              </Button>
 
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setShowQuestions(true);
                  setShowInsertQuestion(false);
                }}
              >
                Select Questions
              </Button>
            </div>
          )}
 
          {/* QUESTIONS LIST */}
          {showQuestions && !showInsertQuestion && (
            <div className="pt-6 space-y-4">
              <h2 className="text-lg font-bold">Questions</h2>
 
              {loading && <p>Loading questions...</p>}
              {error && <p className="text-red-500">{error}</p>}
 
              {!loading && filteredQuestions.length > 0 ? (
                filteredQuestions.map((q) => (
                  <label
                    key={q.questionId}
                    className="flex gap-3 p-4 border rounded-xl"
                  >
                    <input
                      type="checkbox"
                      checked={selectedQuestions.includes(q.questionId)}
                      onChange={() => toggleQuestion(q.questionId)}
                    />
                    <div>
                      <p className="font-semibold">
                        Question ID: {q.questionId}
                      </p>
                      <p className="text-sm">{q.description}</p>
                    </div>
                  </label>
                ))
              ) : (
                !loading && <p>No questions found.</p>
              )}
 
              {/* ACTIONS */}
              <div className="flex gap-4 pt-4">
                <Button
                  className="bg-red-600 text-white flex-1"
                  disabled={selectedQuestions.length === 0}
                  onClick={handleCreateTest}
                >
                  Create Test
                </Button>
 
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
 
          {/* INSERT QUESTION */}
          {showInsertQuestion && !showQuestions && (
            <SMEInsertQuestion
              onClose={() => setShowInsertQuestion(false)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};
 
export default QuestionOptions;