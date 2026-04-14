import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";


const MentorReviewQuestion = () => {
  const [questions, setQuestions] = useState([]);

  const BASE_URL = "http://localhost:8081/api/questions";

  const fetchDraftQuestions = async () => {
    const res = await fetch(`${BASE_URL}/draft`);
    const data = await res.json();
    setQuestions(data);
  };

  const fetchRecent = async () => {
    const res = await fetch(`${BASE_URL}/recent`);
    const data = await res.json();
    setQuestions(data);
  };



  useEffect(() => {
    fetchDraftQuestions();
  }, []);

  const approveQuestion = async (id) => {
    await fetch(`${BASE_URL}/approve/${id}`, { method: "PUT" });
    fetchDraftQuestions();
  };

  const rejectQuestion = async (id) => {
    await fetch(`${BASE_URL}/reject/${id}`,
      { method: "PUT" });
    fetchDraftQuestions();
  };

  const approveAll = async () => {
    await fetch(`${BASE_URL}/approve-all`,
      { method: "PUT" });
    fetchDraftQuestions();
  };

  const rejectAll = async () => {
    await fetch(`${BASE_URL}/reject-all`,
      { method: "PUT" });
    fetchDraftQuestions();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Mentor - Review Questions
        </h2>



        <Button onClick={fetchRecent} style={{ marginLeft: "10px" }}>
          Recent Questions
        </Button>

        <Button variant="outline" onClick={fetchDraftQuestions}>
          Reset
        </Button>
      </div>

      <Card className="shadow-2xl rounded-2xl">
        <CardContent className="p-6 overflow-x-auto">

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">ID</th>
                <th className="p-3">Description</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {questions.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No Questions Found
                  </td>
                </tr>
              ) : (
                questions.map((q) => (
                  <tr
                    key={q.questionId}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium">{q.questionId}</td>
                    <td className="p-3">{q.description}</td>

                    <td className="p-3">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700">
                        {q.status}
                      </span>
                    </td>

                    <td className="p-3">
                      <div className="flex justify-center gap-2">

                        <Button
                          onClick={() => approveQuestion(q.questionId)}
                        >
                          Approve
                        </Button>

                        <Button
                          onClick={() => rejectQuestion(q.questionId)}
                        > Reject
                        </Button>

                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="flex justify-end gap-4 mt-6">

            <Button
              onClick={approveAll}> Approve All
            </Button>

            <Button
              onClick={rejectAll}
            >
              Reject All
            </Button>

          </div>

        </CardContent>
      </Card>
    </div>

  );
};

export default MentorReviewQuestion;