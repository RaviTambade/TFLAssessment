import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { WEBAPI_JAVA_URL } from "@/lib/utils";

const SMEInsertQuestion = () => {
  const [formData, setFormData] = useState({
    description: "",
    questionType: "MCQ",
    difficultyLevel: "BEGINNER",
    status: "DRAFT",
    language: "Java",
    layer: "Backend",
    framework: "",
    concept: "",
    runtime: "JVM",

    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${WEBAPI_JAVA_URL}/questions/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert("Error ❌ : " + errorText);
        return;
      }

      alert("Question Saved Successfully ✅");

      setFormData({
        description: "",
        questionType: "MCQ",
        difficultyLevel: "BEGINNER",
        status: "DRAFT",
        language: "Java",
        layer: "Backend",
        framework: "",
        concept: "",
        runtime: "JVM",

        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="bg-card border-t border-border py-12 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl"
      >
        <h2 className=" text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent  text-center mb-6">
          Create Question ✍️
        </h2>

        {/* Question */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Description */}
          <div className="md:col-span-2">
            <input
              type="text"
              name="description"
              placeholder="Enter Question"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Question Type */}
          <select
            name="questionType"
            value={formData.questionType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="MCQ">MCQ</option>
            <option value="PROBLEM_STATEMENT">Problem Statement</option>
          </select>

          {/* Difficulty */}
          <select
            name="difficultyLevel"
            value={formData.difficultyLevel}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCE">Advance</option>
          </select>

          {/* Language */}
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={formData.language}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          {/* Layer */}
          <input
            type="text"
            name="layer"
            placeholder="Layer"
            value={formData.layer}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          {/* Framework */}
          <input
            type="text"
            name="framework"
            placeholder="Framework"
            value={formData.framework}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          {/* Concept */}
          <input
            type="text"
            name="concept"
            placeholder="Concept"
            value={formData.concept}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          {/* Runtime */}
          <select
            name="runtime"
            value={formData.runtime}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="JVM">JVM</option>
            <option value=".NET CLR">.NET CLR</option>
            <option value="Node.js">Node.js</option>
            <option value="Python Runtime">Python Runtime</option>
            <option value="Go">Go</option>
          </select>

          {/* Status */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="DRAFT">Draft</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>

        </div>

        {formData.questionType === "MCQ" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

            <input
              name="optionA"
              placeholder="Option A"
              value={formData.optionA}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />

            <input
              name="optionB"
              placeholder="Option B"
              value={formData.optionB}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />

            <input
              name="optionC"
              placeholder="Option C"
              value={formData.optionC}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />

            <input
              name="optionD"
              placeholder="Option D"
              value={formData.optionD}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />

            <div className="md:col-span-2">
              <select
                name="correctAnswer"
                value={formData.correctAnswer}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Correct Answer</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
            </div>

          </div>
        )}

        <Button
          type="submit"
          className="w-full text-white font-bold py-2"
        >
          Submit 🚀
        </Button>
      </form>
    </div>
  );
};

export default SMEInsertQuestion;