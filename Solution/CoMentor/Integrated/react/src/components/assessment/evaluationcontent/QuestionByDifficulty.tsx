import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

const QuestionsByDifficulty = () => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState([]); 

  const { ref, isVisible } = useScrollAnimation();

  // Fetch Data
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/questions");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Multi Filter Logic
  const filteredQuestions =
    filter.length === 0
      ? questions
      : questions.filter((q) =>
          filter.includes(q.difficultyLevel)
        );

  // Counts
  const beginner = questions.filter(
    (q) => q.difficultyLevel === "BEGINNER"
  ).length;

  const intermediate = questions.filter(
    (q) => q.difficultyLevel === "INTERMEDIATE"
  ).length;

  const advance = questions.filter(
    (q) => q.difficultyLevel === "ADVANCE"
  ).length;

  // Toggle Function
  const toggleFilter = (level) => {
    if (filter.includes(level)) {
      setFilter(filter.filter((f) => f !== level));
    } else {
      setFilter([...filter, level]);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Question <span className="text-red-600">Difficulty Analysis</span>
          </h2>
        </div>

        {/* Main Card */}
        <Card
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-6 sm:p-8">

            {/*  Clickable Multi-Select Cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8 text-center">

              {/* Beginner */}
              <div
                onClick={() => toggleFilter("BEGINNER")}
                className={`cursor-pointer rounded-xl p-4 shadow transition-all
                  ${
                    filter.includes("BEGINNER")
                      ? "bg-red-600 text-white scale-105"
                      : "bg-white/70 hover:bg-green-100"
                  }`}
              >
                <h3 className="font-semibold">Beginner</h3>
                <p className="text-2xl font-bold">{beginner}</p>
              </div>

              {/* Intermediate */}
              <div
                onClick={() => toggleFilter("INTERMEDIATE")}
                className={`cursor-pointer rounded-xl p-4 shadow transition-all
                  ${
                    filter.includes("INTERMEDIATE")
                      ? "bg-red-600 text-white scale-105"
                      : "bg-white/70 hover:bg-yellow-100"
                  }`}
              >
                <h3 className="font-semibold">Intermediate</h3>
                <p className="text-2xl font-bold">{intermediate}</p>
              </div>

              {/* Advanced */}
              <div
                onClick={() => toggleFilter("ADVANCE")}
                className={`cursor-pointer rounded-xl p-4 shadow transition-all
                  ${
                    filter.includes("ADVANCE")
                      ? "bg-red-600 text-white scale-105"
                      : "bg-white/70 hover:bg-red-100"
                  }`}
              >
                <h3 className="font-semibold">Advanced</h3>
                <p className="text-2xl font-bold">{advance}</p>
              </div>

            </div>

  
            

            {/* Table */}
            <Card className="bg-white/80 shadow-inner">
              <CardContent className="p-4 sm:p-6 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b text-gray-600">
                      <th className="p-2">ID</th>
                      <th className="p-2">Question</th>
                      <th className="p-2">Difficulty</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredQuestions.map((q) => (
                      <tr
                        key={q.question_id}
                        className="border-b hover:bg-gray-100 transition"
                      >
                        <td className="p-2">{q.question_id}</td>
                        <td className="p-2">{q.description}</td>
                        <td className="p-2 font-semibold">
                          {q.difficultyLevel}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

          </div>
        </Card>

      </div>
    </section>
  );
};

export default QuestionsByDifficulty;