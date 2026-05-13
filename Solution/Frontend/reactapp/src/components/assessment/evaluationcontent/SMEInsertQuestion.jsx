import React from "react";
import { useEffect,useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";
import { Layer } from "recharts";



const SMEInsertQuestion = () => {

  const [formData, setFormData] = useState({
    description: "",
    questionType: "MCQ",
    difficultyLevel: "BEGINNER",
    language:"JAVA",
    layer:"Backend",
    framework:"",
    concept:"",
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
        alert("Error ❌: " + errorText);
        return;
      }

    alert("Question Saved ✅");

    setFormData({
      description: "",
      questionType: "MCQ",
      difficultyLevel: "BEGINNER",
      language: "JAVA",
      layer: "Backend",
      framework: "",
      concept: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: ""
    });

    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }
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

        <input
          type="text"
          name="language"
          placeholder="Enter Language"
          value={formData.language}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />

        <input
          type="text"
          name="layer"
          placeholder="Enter Layer"
          value={formData.layer}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />

        <input
          type="text"
          name="framework"
          placeholder="Enter Framework"
          value={formData.frameworks}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />
        <input
          type="text"
          name="concept"
          placeholder="Enter Concept"
          value={formData.concept}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          required
        />
        

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