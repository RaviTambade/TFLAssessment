import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { WEBAPI_JAVA_URL } from "@/lib/utils";

type QuestionFormData = {
  description: string;
  questionType: string;
  difficultyLevel: string;
  status: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
};

const RTUpdateQuestion = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] =
    useState<QuestionFormData>({
      description: "",
      questionType: "MCQ",
      difficultyLevel: "BEGINNER",
      status: "DRAFT",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    });

  // =====================================
  // FETCH QUESTION DETAILS
  // =====================================
  useEffect(() => {
    const fetchQuestionDetails = async () => {
      try {
        // ==========================
        // FETCH QUESTION
        // ==========================
        const questionRes = await fetch(
          `${WEBAPI_JAVA_URL}/questions/details/${id}`
        );

        if (!questionRes.ok) {
          throw new Error("Failed to fetch question");
        }

        const questionData = await questionRes.json();

        console.log(
          "QUESTION DATA:",
          questionData
        );

        // ==========================
        // FETCH OPTIONS
        // ==========================
        let options: any[] = [];

        const optionRes = await fetch(
          `${WEBAPI_JAVA_URL}/questions/${id}/options`
        );

        if (optionRes.ok) {
          options = await optionRes.json();
        }

        console.log("OPTIONS:", options);

        // ==========================
        // SET FORM DATA
        // ==========================
        setFormData({
          description:
            questionData.description || "",

          questionType:
            questionData.questionType || "MCQ",

          difficultyLevel:
            questionData.difficultyLevel ||
            "BEGINNER",

          status:
            questionData.status || "DRAFT",

          optionA:
            options[0]?.optionText || "",

          optionB:
            options[1]?.optionText || "",

          optionC:
            options[2]?.optionText || "",

          optionD:
            options[3]?.optionText || "",

          correctAnswer:
            questionData.correctAnswer || "",
        });
      } catch (err) {
        console.error(err);

        alert("Failed to load question");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionDetails();
  }, [id]);

  // =====================================
  // HANDLE INPUT CHANGE
  // =====================================
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================
  // UPDATE QUESTION
  // =====================================
  const handleUpdate = async () => {
    try {
      const payload = {
        description: formData.description,

        questionType: formData.questionType,

        difficultyLevel:
          formData.difficultyLevel,

        status: formData.status,

        optionA: formData.optionA,

        optionB: formData.optionB,

        optionC: formData.optionC,

        optionD: formData.optionD,

        correctAnswer:
          formData.correctAnswer,
      };

      console.log(
        "UPDATE PAYLOAD:",
        payload
      );

      // ==========================
      // FIXED FETCH URL
      // ==========================
      const res = await fetch(
        `${WEBAPI_JAVA_URL}/questions/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorText =
          await res.text();

        console.error(
          "Backend Error:",
          errorText
        );

        throw new Error(
          `Update failed (${res.status})`
        );
      }

      alert(
        "Question Updated Successfully"
      );

      navigate(
        "/models/evaluationcontent/reviewquestion"
      );
    } catch (err) {
      console.error(err);

      alert(
        err instanceof Error
          ? err.message
          : "Update Failed"
      );
    }
  };

  // =====================================
  // LOADING
  // =====================================
  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card>
          {/* HEADER */}
          <div className="bg-blue-600 text-white p-5 text-xl font-bold rounded-t-lg">
            Update Question
          </div>

          <CardContent className="space-y-5 p-6">
            {/* QUESTION ID */}
            <div>
              <label className="font-medium block mb-2">
                Question ID
              </label>

              <input
                value={id}
                disabled
                className="w-full border p-3 rounded bg-gray-100"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="font-medium block mb-2">
                Description
              </label>

              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
            </div>

            {/* QUESTION TYPE */}
            <div>
              <label className="font-medium block mb-2">
                Question Type
              </label>

              <select
                name="questionType"
                value={formData.questionType}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              >
                <option value="MCQ">
                  MCQ
                </option>

                <option value="PROBLEM_STATEMENT">
                  PROBLEM_STATEMENT
                </option>

                <option value="HANDS_ON">
                  HANDS_ON
                </option>
              </select>
            </div>

            {/* DIFFICULTY */}
            <div>
              <label className="font-medium block mb-2">
                Difficulty Level
              </label>

              <select
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleChange}
                className="w-full border p-3 rounded"
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
            </div>

            {/* STATUS */}
            <div>
              <label className="font-medium block mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-3 rounded"
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
            </div>

            {/* MCQ OPTIONS */}
            {formData.questionType ===
              "MCQ" && (
              <div className="space-y-3"> 
                <input
                  type="text"
                  name="optionA"
                  placeholder="Option A"
                  value={formData.optionA}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />

                <input
                  type="text"
                  name="optionB"
                  placeholder="Option B"
                  value={formData.optionB}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />

                <input
                  type="text"
                  name="optionC"
                  placeholder="Option C"
                  value={formData.optionC}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />

                <input
                  type="text"
                  name="optionD"
                  placeholder="Option D"
                  value={formData.optionD}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />

                <select
                  name="correctAnswer"
                  value={formData.correctAnswer}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                >
                  <option value="">
                    Select Correct Answer
                  </option>

                  <option value="A">
                    A
                  </option>

                  <option value="B">
                    B
                  </option>

                  <option value="C">
                    C
                  </option>

                  <option value="D">
                    D
                  </option>
                </select>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex justify-end gap-4 pt-5">
              <Button
                variant="outline"
                onClick={() =>
                  navigate(
                    "/models/evaluationcontent/reviewquestion"
                  )
                }
              >
                Cancel
              </Button>

              <Button
                onClick={handleUpdate}
              >
                Update Question
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RTUpdateQuestion;