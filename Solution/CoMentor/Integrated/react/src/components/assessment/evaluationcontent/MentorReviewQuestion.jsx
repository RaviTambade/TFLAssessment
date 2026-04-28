import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const MentorReviewQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8080/api/questions";

  const fetchDraftQuestions = async () => {
    try {
      const res = await fetch(`${BASE_URL}/drafts`);
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRecent = async () => {
    try {
      const res = await fetch(`${BASE_URL}/recent`);
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDraftQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="bg-gradient-primary bg-clip-text text-transparent text-4xl font-bold mb-8 text-center">
          Review Questions
        </h2>

        <div className="mb-4 flex gap-3">
          <Button onClick={fetchRecent}>Recent Questions</Button>
          <Button variant="outline" onClick={fetchDraftQuestions}>
            Reset
          </Button>
        </div>
        <h1 className="text-2xl font-bold text-black mb-6 text-center ">Draft Questions</h1>
        <Card className="shadow-2xl rounded-2xl">
          <CardContent className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-primary p-5 text-white text-lg font-bold">
                  <th className="p-3">ID</th>
                  <th className="p-3">Question</th>
                </tr>
              </thead>
              <tbody>
                {questions.length === 0 ? (
                  <tr>
                    <td colSpan="2" className="text-center p-4 text-gray-500">
                      No Questions Found
                    </td>
                  </tr>
                ) : (
                  questions.map((q) => (
                    <tr
                      key={q.questionId}
                      className="border-b hover:bg-gray-100 cursor-pointer transition"
                      onClick={() =>
                        navigate(`/models/evaluationcontent/questiondetails/${q.questionId}`)
                      }>
                      <td className="p-3 font-medium">{q.questionId}</td>
                      <td className="p-3 text-blue-600 underline">
                        {q.description}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentorReviewQuestion;