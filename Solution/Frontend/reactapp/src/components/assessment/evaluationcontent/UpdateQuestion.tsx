import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  WEBAPI_DOTNET_URL,
  WEBAPI_NODE_URL,
  WEBAPI_JAVA_URL,
} from "@/lib/utils";

import QuestionDto from "../assessmentOrchestrator/entities/QuestionDetails";

const UpdateQuestion = () => {
  const [questions, setQuestions] = useState<QuestionDto[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<QuestionDto>>({});
  const [mode, setMode] = useState<"ALL" | "BY_ID" | null>(null);
  const [inputId, setInputId] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  // ================= FETCH ALL =================
  const fetchQuestions = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${WEBAPI_JAVA_URL}/questions`);

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
  };

  // ================= FETCH BY ID =================
  const fetchById = async () => {
    if (!inputId) {
      alert("Please enter Question ID");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${WEBAPI_JAVA_URL}/questions/${inputId}`
      );

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

  // ================= HANDLE INPUT CHANGE =================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE SAVE =================
  const handleSave = async (id: number) => {
    try {
      const originalQuestion = questions.find(
        (q) => q.questionId === id
      );

      if (!originalQuestion) {
        alert("Question not found");
        return;
      }

      const updatePayload = {
        description:
          editData.description ?? originalQuestion.description,

        questionType:
          editData.questionType ?? originalQuestion.questionType,

        difficultyLevel:
          editData.difficultyLevel ??
          originalQuestion.difficultyLevel,

        status: editData.status ?? originalQuestion.status,
      };

      console.log("Update Payload:", updatePayload);

      const res = await fetch(
        `${WEBAPI_JAVA_URL}/questions/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatePayload),
        }
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({
          message: "Unknown error",
        }));

        console.error("Backend Error:", errorData);

        throw new Error(
          errorData.message || `Update failed (${res.status})`
        );
      }

      alert("Question updated successfully");

      // Refresh data
      if (mode === "ALL") {
        await fetchQuestions();
      } else if (mode === "BY_ID") {
        await fetchById();
      }

      // Reset edit mode
      setEditingId(null);
      setEditData({});
    } catch (err) {
      console.error(err);

      alert(
        "Update failed: " +
          (err instanceof Error ? err.message : "Unknown error")
      );
    }
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
                setInputId(
                  e.target.value ? Number(e.target.value) : ""
                )
              }
              className="border px-3 py-2 rounded"
            />

            <Button onClick={fetchById}>Fetch</Button>
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <p className="text-center text-blue-500 mb-4">
            Loading...
          </p>
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
                      <tr
                        key={q.questionId}
                        className="border-t"
                      >
                        {/* ID */}
                        <td className="px-4 py-3">
                          {q.questionId}
                        </td>

                        {/* DESCRIPTION */}
                        <td className="px-4 py-3">
                          {editingId === q.questionId ? (
                            <input
                              type="text"
                              name="description"
                              value={
                                editData.description ??
                                q.description
                              }
                              onChange={handleChange}
                              className="border px-2 py-1 w-full rounded"
                            />
                          ) : (
                            q.description
                          )}
                        </td>

                        {/* QUESTION TYPE */}
                        <td className="px-4 py-3">
                          {editingId === q.questionId ? (
                            <select
                              name="questionType"
                              value={
                                editData.questionType ??
                                q.questionType
                              }
                              onChange={handleChange}
                              className="border px-2 py-1 rounded"
                            >
                              <option value="MCQ">MCQ</option>
                              <option value="PROBLEM_STATEMENT">
                                PROBLEM_STATEMENT
                              </option>
                              <option value="HANDS_ON">
                                HANDS_ON
                              </option>
                            </select>
                          ) : (
                            q.questionType
                          )}
                        </td>

                        {/* DIFFICULTY */}
                        <td className="px-4 py-3">
                          {editingId === q.questionId ? (
                            <select
                              name="difficultyLevel"
                              value={
                                editData.difficultyLevel ??
                                q.difficultyLevel
                              }
                              onChange={handleChange}
                              className="border px-2 py-1 rounded"
                            >
                              <option value="BEGINNER">
                                BEGINNER
                              </option>
                              <option value="INTERMEDIATE">
                                INTERMEDIATE
                              </option>
                              <option value="ADVANCE">
                                ADVANCE
                              </option>
                            </select>
                          ) : (
                            q.difficultyLevel
                          )}
                        </td>

                        {/* STATUS */}
                        <td className="px-4 py-3">
                          {editingId === q.questionId ? (
                            <select
                              name="status"
                              value={
                                editData.status ?? q.status
                              }
                              onChange={handleChange}
                              className="border px-2 py-1 rounded"
                            >
                              <option value="DRAFT">
                                DRAFT
                              </option>
                              <option value="APPROVED">
                                APPROVED
                              </option>
                              <option value="REJECTED">
                                REJECTED
                              </option>
                            </select>
                          ) : (
                            q.status
                          )}
                        </td>

                        {/* ACTION */}
                        <td className="px-4 py-3">
                          {editingId === q.questionId ? (
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() =>
                                  handleSave(q.questionId)
                                }
                              >
                                Save
                              </Button>

                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingId(null);
                                  setEditData({});
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              onClick={() => {
                                setEditingId(q.questionId);
                                setEditData(q);
                              }}
                            >
                              Edit
                            </Button>
                          )}
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