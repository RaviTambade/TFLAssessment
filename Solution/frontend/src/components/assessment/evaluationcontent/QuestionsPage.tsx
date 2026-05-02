import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";


const QuestionsPage = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [question, setQuestion] = useState<any>(null);

  const [questionId, setQuestionId] = useState("");
  const [error, setError] = useState("");

  const [mode, setMode] = useState<"list" | "fetch" | null>(null);

  // ✅ Fetch all questions
  const fetchQuestions = () => {
    setMode("list");
    setQuestion(null);
    setError("");

    fetch(`${WEBAPI_JAVA_URL}/questions`)
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then((data) => {
        setQuestions(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error(err));
  };

  // ✅ Fetch question by ID
  const fetchQuestion = async () => {
    if (!questionId) {
      setError("Please enter Question ID");
      return;
    }

    try {
      setError("");
      setQuestion(null);

      const res = await fetch(
        `${WEBAPI_JAVA_URL}/questions/${questionId}`
      );

      if (!res.ok) throw new Error("Not found");

      const data = await res.json();

      // 👇 IMPORTANT (handles both API formats)
      const result = data.data ? data.data : data;

      setQuestion(result);
    } catch (err) {
      setError("Question not found");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Questions
          </h2>
        </div>

        {/* 🔥 Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <Button variant="hero" onClick={fetchQuestions}>
            List Of Questions
          </Button>

          <Button variant="hero" onClick={() => setMode("fetch")}>
            Fetch Question
          </Button>
        </div>

        {/* ✅ FETCH UI (your screenshot style) */}
        {mode === "fetch" && (
          <div className="bg-muted/40 rounded-xl p-10 max-w-4xl mx-auto mb-10">
            <div className="flex justify-center gap-4">
              <input
                type="number"
                placeholder="Enter Question ID"
                value={questionId}
                onChange={(e) => setQuestionId(e.target.value)}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button variant="hero" onClick={fetchQuestion}>
                Fetch Question
              </Button>
            </div>
          </div>
        )}

        {/* ✅ TABLE */}
        {mode === "list" && (
          <Card className="border-0 shadow-elegant overflow-hidden mb-16">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">

                  <thead className="bg-gradient-hero text-white">
                    <tr>
                      <th className="p-4 text-primary font-semibold">
                        Description
                      </th>
                      <th className="p-4 text-primary font-semibold">
                        Question Type
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {questions.map((q, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-primary/5 transition"
                      >
                        <td className="p-4 text-foreground">
                          {q.description}
                        </td>
                        <td className="p-4 text-foreground">
                          {q.questionType}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ✅ RESULT (FIXED ISSUE HERE) */}
        {mode === "fetch" && question && (
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-elegant overflow-hidden">
              <div className="bg-gradient-hero p-8 sm:p-10">
                <CardContent className="bg-white rounded-xl p-6 text-left">

                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Question Details
                  </h3>

                  <p className="mb-2">
                    <strong>ID:</strong> {question.questionId}
                  </p>

                  <p className="mb-2">
                    <strong>Description:</strong> {question.description}
                  </p>

                  <p className="mb-2">
                    <strong>Type:</strong> {question.questionType}
                  </p>

                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* ✅ ERROR */}
        {error && (
          <p className="text-center text-red-500 font-semibold mt-4">
            {error}
          </p>
        )}

      </div>
    </section>
  );
};

export default QuestionsPage;