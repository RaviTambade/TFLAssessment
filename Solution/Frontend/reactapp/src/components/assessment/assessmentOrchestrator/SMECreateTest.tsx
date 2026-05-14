import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

import { WEBAPI_DOTNET_URL } from "@/lib/utils";

type Concept = {
  id: number;
  name: string;
};

type Question = {
  questionId: number;
  description: string;
  type: string;
  difficulty: string;
  concept: string;
};

const SMECreateTest = () => {
  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [selectedConcept, setSelectedConcept] = useState("");

  const [availableQuestions, setAvailableQuestions] = useState<Question[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

  const [loading, setLoading] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // =========================================
  // FETCH CONCEPTS
  // =========================================
  useEffect(() => {
    const fetchConcepts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Save SME ID
        const userData = sessionStorage.getItem("current");

        if (userData) {
          const user = JSON.parse(userData);

          localStorage.setItem(
            "smeId",
            String(user.userid || user.id)
          );
        }

        // FETCH CONCEPTS
        const response = await fetch(`${ WEBAPI_DOTNET_URL }/questions/concepts`);


        if (!response.ok) {
          const errorText = await response.text();

          console.log("Concept API Error:", errorText);

          throw new Error(`HTTP Error ${response.status}`);
        }

        const data: Concept[] = await response.json();

        console.log("Concepts:", data);

        setConcepts(data);

        // SET FIRST CONCEPT AUTOMATICALLY
        if (data.length > 0) {
          setSelectedConcept(data[0].name);
        }
      } catch (err) {
        console.error("Error fetching concepts:", err);

        setError("Failed to load concepts");
      } finally {
        setLoading(false);
      }
    };

    void fetchConcepts();
  }, []);

  // =========================================
  // FETCH QUESTIONS BY CONCEPT
  // =========================================
  useEffect(() => {
    if (!selectedConcept) return;

    const fetchQuestions = async () => {
      try {
        setLoadingQuestions(true);
        setError(null);

        const response = await fetch(
          `${WEBAPI_DOTNET_URL}/questions/concepts/${selectedConcept}/questions`
        );

        console.log("Question API Status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();

          console.log("Question API Error:", errorText);

          throw new Error(`HTTP Error ${response.status}`);
        }

        const data: Question[] = await response.json();

        console.log("Questions:", data);

        setAvailableQuestions(data);
      } catch (err) {
        console.error("Error fetching questions:", err);

        setError("Failed to load questions");
      } finally {
        setLoadingQuestions(false);
      }
    };

    void fetchQuestions();
  }, [selectedConcept]);

  // =========================================
  // TOGGLE QUESTION
  // =========================================
  const toggleQuestion = (questionId: number) => {
    setSelectedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  // =========================================
  // SUBMIT TEST
  // =========================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(null);

      const smeId = Number(localStorage.getItem("smeId") || 0);

      const payload = {
        SmeId: smeId,
        Title: testName,
        Description: description,
        Duration: Number(duration),
        QuestionIds: selectedQuestions,
      };

      console.log("Submitting Payload:", payload);

      const response = await fetch(
        `${WEBAPI_DOTNET_URL}/CreateTest/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const contentType = response.headers.get("content-type");

      let data;

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log("Create Test Response:", data);

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      alert("Test Created Successfully");

      // CLEAR FORM
      setTestName("");
      setDescription("");
      setDuration("");
      setSelectedQuestions([]);
    } catch (err) {
      console.error("Submit Error:", err);

      setError("Failed to create test");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Test</CardTitle>

          <CardDescription>
            Add test details and select questions
          </CardDescription>
        </CardHeader>

        <CardContent>
          {loading && (
            <p className="text-center py-4">
              Loading concepts...
            </p>
          )}

          {error && (
            <div className="mb-4 p-4 border border-red-400 bg-red-100 rounded">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* TEST NAME */}
            <div className="space-y-2">
              <Label>Test Name</Label>

              <Input
                value={testName}
                onChange={(e) =>
                  setTestName(e.target.value)
                }
                placeholder="Enter test name"
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-2">
              <Label>Description</Label>

              <textarea
                className="w-full border rounded-md p-3"
                rows={4}
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Enter description"
                required
              />
            </div>

            {/* DURATION */}
            <div className="space-y-2">
              <Label>Duration (Minutes)</Label>

              <Input
                type="number"
                value={duration}
                onChange={(e) =>
                  setDuration(e.target.value)
                }
                placeholder="Enter duration"
                required
              />
            </div>

            {/* CONCEPT DROPDOWN */}
            <div className="space-y-2">
              <Label>Select Concept</Label>

              <select
                className="w-full border rounded-md p-2"
                value={selectedConcept}
                onChange={(e) =>
                  setSelectedConcept(e.target.value)
                }
              >
                {concepts.map((concept) => (
                  <option
                    key={concept.id}
                    value={concept.name}
                  >
                    {concept.name}
                  </option>
                ))}
              </select>
            </div>

            {/* QUESTIONS */}
            <div className="space-y-3">
              <Label>Available Questions</Label>

              {loadingQuestions ? (
                <p>Loading questions...</p>
              ) : availableQuestions.length === 0 ? (
                <p>No questions found.</p>
              ) : (
                <div className="max-h-96 overflow-auto border rounded-md p-4 space-y-3">
                  {availableQuestions.map((q) => (
                    <div
                      key={q.questionId}
                      className="border rounded-md p-3"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">
                            {q.description}
                          </p>

                          <p className="text-sm text-gray-500 mt-1">
                            Type: {q.type} | Difficulty:{" "}
                            {q.difficulty}
                          </p>
                        </div>

                        <input
                          type="checkbox"
                          checked={selectedQuestions.includes(
                            q.questionId
                          )}
                          onChange={() =>
                            toggleQuestion(q.questionId)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1"
              >
                Create Test
              </Button>

              <Button
                type="reset"
                variant="outline"
                className="flex-1"
              >
                Clear
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SMECreateTest;