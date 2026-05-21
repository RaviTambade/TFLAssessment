import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WEBAPI_JAVA_URL } from "@/lib/utils";

import QuestionDto from "../assessmentOrchestrator/entities/QuestionDetails";

const UPDATE_QUESTION_PATH = "/models/evaluationcontent/updatequestion";

const UpdateQuestion = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<QuestionDto[]>([]);
  const [mode, setMode] = useState<"ALL" | "BY_ID" | null>("ALL");
  const [inputId, setInputId] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  // ================= FETCH ALL =================
  const fetchQuestions = useCallback(async () => {
    setLoading(true);

    try {
      const currentUser = JSON.parse(sessionStorage.getItem("current") || "{}");
      const userId = currentUser.userid;
      const roleId = currentUser.role_id;
      const res = await fetch(`${WEBAPI_JAVA_URL}/filter/questions/${userId}/${roleId}`);

      if (!res.ok) {
        throw new Error("Failed to fetch questions");
      }

      const data = await res.json();

      setQuestions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch questions");
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchQuestions();
  }, [fetchQuestions]);

  const fetchById = async () => {
    if (!inputId) {
      alert("Please enter Question ID");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${WEBAPI_JAVA_URL}/questions/${inputId}`);

      if (!res.ok) {
        throw new Error("Question not found");
      }

      const data = await res.json();

      setQuestions(data ? [data] : []);
    } catch (err) {
      console.error(err);
      alert("Question not found");
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  const goToFullEditor = (questionId: number) => {
    navigate(`/models/evaluationcontent/edit/${questionId}`, {
      state: { from: UPDATE_QUESTION_PATH },
    });
  };

  return (
    <section className="bg-background w-full py-6">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Update{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button
            onClick={() => {
              setMode("ALL");
              fetchQuestions();
            }}
          >
            Show All
          </Button>

          <Button
            onClick={() => {
              setMode("BY_ID");
              setQuestions([]);
            }}
          >
            Update By ID
          </Button>
        </div>

        {/* FETCH BY ID */}
        {mode === "BY_ID" && (
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            <input
              type="number"
              placeholder="Enter Question ID"
              value={inputId}
              onChange={(e) =>
                setInputId(e.target.value ? Number(e.target.value) : "")
              }
              className="border px-3 py-2 rounded"
            />

            <Button onClick={fetchById}>Fetch</Button>
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <p className="text-center text-blue-500 mb-4">Loading...</p>
        )}

        {/* COUNT */}
        <p className="text-center mb-6 text-sm text-gray-600">
          Total Questions: {questions.length}
        </p>

        {/* TABLE */}
        {questions.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <Card>
              <CardContent className="bg-white text-black p-0">
                <table className="w-full border text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-3">ID</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Type</th>
                      <th className="px-4 py-3">Difficulty</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {questions.map((q) => (
                      <tr key={q.questionId} className="border-t">
                        <td className="px-4 py-3">{q.questionId}</td>
                        <td className="px-4 py-3">{q.description}</td>
                        <td className="px-4 py-3">{q.questionType}</td>
                        <td className="px-4 py-3">{q.difficultyLevel}</td>
                        <td className="px-4 py-3">{q.status}</td>
                        <td className="px-4 py-3">
                          <Button
                            size="sm"
                            onClick={() => goToFullEditor(q.questionId)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        ) : (
          !loading && (
            <p className="text-center text-muted-foreground mt-6">
              No questions found
            </p>
          )
        )}
      </div>
    </section>
  );
};

export default UpdateQuestion;
