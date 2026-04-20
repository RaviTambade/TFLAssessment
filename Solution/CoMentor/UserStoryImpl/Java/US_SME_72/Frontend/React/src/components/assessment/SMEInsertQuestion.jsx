import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const SMEInsertQuestion = () => {
  const [formData, setFormData] = useState({
    description: "",
    questionType: "MCQ",
    difficultyLevel: "BEGINNER",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: ""
  });

  const BASE_URL = "http://localhost:8080/api/questions";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    alert("Question Saved ✅");

    setFormData({
      description: "",
      questionType: "MCQ",
      difficultyLevel: "BEGINNER",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
      >
        <h2 className="text-lg sm:text-xl font-bold text-primary hidden sm:block mb-4 text-center ">
          Create Question ✍️
        </h2>

    
        <input
          type="text"
          name="description"
          placeholder="Enter Question"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />

        <select
          name="questionType"
          value={formData.questionType}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
        >
          <option value="MCQ">MCQ</option>
          <option value="PROBLEM_STATEMENT">Problem Statement</option>
        </select>

        <select
          name="difficultyLevel"
          value={formData.difficultyLevel}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
        >
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="ADVANCE">Advance</option>
        </select>

        {/* MCQ Options */}
        {formData.questionType === "MCQ" && (
          <>
            <input name="optionA" placeholder="Option A" value={formData.optionA} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
            <input name="optionB" placeholder="Option B" value={formData.optionB} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
            <input name="optionC" placeholder="Option C" value={formData.optionC} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
            <input name="optionD" placeholder="Option D" value={formData.optionD} onChange={handleChange} className="w-full p-2 border rounded mb-2" />

            <select
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            >
              <option value="">Select Correct Answer</option>
              <option value="A">Correct: A</option>
              <option value="B">Correct: B</option>
              <option value="C">Correct: C</option>
              <option value="D">Correct: D</option>
            </select>
          </>
        )}

        <Button className="text-center mb-6 w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded">
          Submit 🚀
        </Button>
      </form>
    </div>
  );
};

export default SMEInsertQuestion;