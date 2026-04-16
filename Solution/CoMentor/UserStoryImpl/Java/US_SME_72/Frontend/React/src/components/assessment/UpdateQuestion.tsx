import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const UpdateQuestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const BASE_URL = "http://localhost:8082/api/questions";

    const [formData, setFormData] = useState({
        description: "",
        questionType: "",
        difficultyLevel: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    });

    useEffect(() => {
        fetch(`${BASE_URL}/${id}`)
            .then(res => res.json())
            .then(data => setFormData(data))
            .catch(() => alert("Error loading data ❌"));
    }, [id]);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async () => {
        try {
            await fetch(`${BASE_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            alert("Question Updated Successfully ✅");
            navigate("/models/evaluationcontent/reviewquestion");
        } catch {
            alert("Update Failed ❌");
        }
    };

    if (!formData.description) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted p-6">

            <div className="max-w-4xl mx-auto">

                {/* 🔥 Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-foreground">
                        <span className="bg-gradient-primary bg-clip-text text-transparent"> Update Question</span>
                    </h1>

                </div>

                {/* 🔥 Card */}
                <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">

                    {/* Gradient Header */}
                    <div className="bg-gradient-primary p-5 text-white text-lg font-semibold">
                        Question Details
                    </div>

                    <CardContent className="p-6 space-y-5">

                        {/* Description */}
                        <div>
                            <label className="text-sm font-medium">Description</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>

                        {/* Type + Difficulty */}
                        <div className="grid md:grid-cols-2 gap-4">

                            <div>
                                <label className="text-sm font-medium">Question Type</label>
                                <select
                                    name="questionType"
                                    value={formData.questionType}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                                >
                                    <option value="MCQ">MCQ</option>
                                    <option value="PROBLEM_STATEMENT">Problem Statement</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium">Difficulty Level</label>
                                <select
                                    name="difficultyLevel"
                                    value={formData.difficultyLevel}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                                >
                                    <option value="BEGINNER">BEGINNER</option>
                                    <option value="INTERMEDIATE">INTERMEDIATE</option>
                                    <option value="ADVANCE">ADVANCE</option>
                                </select>
                            </div>

                        </div>

                        {/* MCQ Section */}
                        {formData.questionType === "MCQ" && (
                            <div className="bg-muted/50 p-4 rounded-xl space-y-3">
                                <h3 className="font-semibold text-primary">Options</h3>

                                <input name="optionA" value={formData.optionA} onChange={handleChange} placeholder="Option A" className="w-full p-3 border rounded-lg" />
                                <input name="optionB" value={formData.optionB} onChange={handleChange} placeholder="Option B" className="w-full p-3 border rounded-lg" />
                                <input name="optionC" value={formData.optionC} onChange={handleChange} placeholder="Option C" className="w-full p-3 border rounded-lg" />
                                <input name="optionD" value={formData.optionD} onChange={handleChange} placeholder="Option D" className="w-full p-3 border rounded-lg" />
                                <input name="correctAnswer" value={formData.correctAnswer} onChange={handleChange} placeholder="Correct Answer" className="w-full p-3 border rounded-lg border-primary" />
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 pt-4">

                            <Button
                                variant="outline"
                                onClick={() => navigate("/models/evaluationcontent/reviewquestion")}
                                className="hover:scale-105 transition"
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={handleUpdate}
                                className="bg-gradient-primary text-white hover:scale-105 transition shadow-lg"
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

export default UpdateQuestion;