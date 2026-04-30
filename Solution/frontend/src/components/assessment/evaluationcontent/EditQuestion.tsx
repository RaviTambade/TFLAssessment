import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EditQuestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const BASE_URL = "http://localhost:8080/api/questions";

    const [loading, setLoading] = useState(true);

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
        if (!id) return;

        fetch(`${BASE_URL}/details/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("API DATA:", data);

                setFormData({
                    description: data.description || "",
                    questionType: data.questionType || "MCQ",
                    difficultyLevel: data.difficultyLevel || "",

                    optionA: data.optionA || "",
                    optionB: data.optionB || "",
                    optionC: data.optionC || "",
                    optionD: data.optionD || "",

                    correctAnswer: data.correctAnswer || ""
                });

                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                alert("Error loading data ❌");
                setLoading(false);
            });
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

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted p-6">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-foreground">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Update Question
                        </span>
                    </h1>
                </div>

                <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">

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
                                className="w-full mt-1 p-3 border rounded-lg"
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
                                    className="w-full mt-1 p-3 border rounded-lg"
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
                                    className="w-full mt-1 p-3 border rounded-lg"
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

                                <input
                                    name="correctAnswer"
                                    value={formData.correctAnswer}
                                    onChange={handleChange}
                                    placeholder="Correct Answer (A/B/C/D or full value)"
                                    className="w-full p-3 border rounded-lg border-primary"
                                />
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 pt-4">
                            <Button
                                variant="outline"
                                onClick={() => navigate("/models/evaluationcontent/reviewquestion")}
                            >
                                Cancel
                            </Button>

                            <Button onClick={handleUpdate}>
                                Update Question
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default EditQuestion;