import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";


const QuestionDetails = () => {
    const { question_id } = useParams();
    const [q, setQ] = useState(null);
    const navigate = useNavigate();
//questions`;

    useEffect(() => {
        fetch(`${WEBAPI_JAVA_URL}/questions/${question_id}/details`)
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
    }, [question_id]);

    

    const edit = () => {
        navigate(`/models/evaluationcontent/edit/${question_id}`);
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
                   <p><b>Language:</b> {q.language}</p>
                <p><b>Layer:</b> {q.layer}</p>
                <p><b>Framework:</b> {q.framework}</p>
                <p><b>Concept:</b> {q.concept}</p>
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
                    <Button variant="outline" onClick={edit}>Edit</Button>
                </div>

            </div>
        </div>
    );
};

export default QuestionDetails;