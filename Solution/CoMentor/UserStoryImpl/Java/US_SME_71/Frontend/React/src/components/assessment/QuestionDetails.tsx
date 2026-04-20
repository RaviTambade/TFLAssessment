import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const QuestionDetails = () => {
    const { id } = useParams();
    const [q, setQ] = useState(null);
    const navigate = useNavigate();

    const BASE_URL = "http://localhost:8082/api/questions";

    useEffect(() => {
        fetch(`${BASE_URL}/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                return res.json();
            })
            .then(data => setQ(data))
            .catch(err => {
                console.log(err);
                alert("Error loading question ❌");
            });
    }, [id]);

    const approve = async () => {
        await fetch(`${BASE_URL}/${id}/approve`, { method: "PUT" });
        alert("Approved ✅");
        navigate("/models/evaluationcontent/reviewquestion");
    };

    const reject = async () => {
        await fetch(`${BASE_URL}/${id}/reject`, { method: "PUT" });
        alert("Rejected ❌");
        navigate("/models/evaluationcontent/reviewquestion");
    };

    const edit = () => {
        navigate(`/models/evaluationcontent/edit/${id}`);
    };

    if (!q) {
        return <div className="text-center mt-10">Loading Question...</div>;
    }

    return (

        <div className="min-h-screen bg-gray-100 p-6">
            <h2 className=" bg-gradient-primary bg-clip-text text-transparent text-4xl font-bold mb-8 text-center">Question Details</h2>

            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-bold mb-4">
                    {q.description}
                </h2>

                <p><b>Type:</b> {q.questionType}</p>
                <p><b>Difficulty:</b> {q.difficultyLevel}</p>

                {q.questionType === "MCQ" && (
                    <div className="mt-4">
                        <p>A: {q.optionA}</p>
                        <p>B: {q.optionB}</p>
                        <p>C: {q.optionC}</p>
                        <p>D: {q.optionD}</p>

                        <p className="mt-2 font-semibold">
                            Correct Answer: {q.correctAnswer}
                        </p>
                    </div>
                )}

                <div className="flex gap-4 mt-6">
                    <Button onClick={approve}>Approve</Button>
                    <Button onClick={reject}>Reject</Button>
                    <Button variant="outline" onClick={edit}>Edit</Button>
                </div>

            </div>
        </div>
    );
};

export default QuestionDetails;