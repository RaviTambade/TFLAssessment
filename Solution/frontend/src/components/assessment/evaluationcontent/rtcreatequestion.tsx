import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RTCreateQuestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const BASE_URL = "http://localhost:8080/api/questions";
    const CONCEPTS_URL = "http://localhost:8080/api/concepts";

    const [loading, setLoading] = useState(id ? true : false);
    const [concepts, setConcepts] = useState<any[]>([]);
    const [questionsList, setQuestionsList] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        description: "",
        questionType: "MCQ",
        difficultyLevel: "BEGINNER",
        selectedConcept: "",
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
                    selectedConcept: data.selectedConcept || "",
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

    // Fetch concepts on component mount
    useEffect(() => {
        fetch(CONCEPTS_URL)
            .then(res => res.json())
            .then(data => {
                console.log("CONCEPTS DATA:", data);
                setConcepts(Array.isArray(data) ? data : data.data || []);
            })
            .catch(err => {
                console.error("Error loading concepts:", err);
                setConcepts([]);
            });
    }, []);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (!formData.description.trim()) {
            alert("Please enter question description ❌");
            return false;
        }
        if (!formData.selectedConcept) {
            alert("Please select a concept ❌");
            return false;
        }
        if (!formData.questionType) {
            alert("Please select question type ❌");
            return false;
        }
        if (!formData.difficultyLevel) {
            alert("Please select difficulty level ❌");
            return false;
        }
        if (formData.questionType === "MCQ") {
            if (!formData.optionA.trim() || !formData.optionB.trim() || !formData.optionC.trim() || !formData.optionD.trim()) {
                alert("Please fill all options ❌");
                return false;
            }
            if (!formData.correctAnswer.trim()) {
                alert("Please specify correct answer ❌");
                return false;
            }
        }
        return true;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        // Add question to list
        const newQuestion = {
            id: questionsList.length + 1,
            ...formData
        };

        setQuestionsList([...questionsList, newQuestion]);
        alert("Question Added Successfully ✅");

        // Reset form
        setFormData({
            description: "",
            questionType: "MCQ",
            difficultyLevel: "BEGINNER",
            selectedConcept: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        });
    };

    const handleUpdate = async () => {
        if (!validateForm()) return;

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

    const removeQuestion = (questionId: number) => {
        setQuestionsList(questionsList.filter(q => q.id !== questionId));
        alert("Question Removed ✅");
    };

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    const isEditMode = !!id;

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted p-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-foreground">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            {isEditMode ? "Update Question" : "Create Question"}
                        </span>
                    </h1>
                </div>

                <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden mb-8">

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

                        {/* Concept Selection */}
                        <div>
                            <label className="text-sm font-medium">Select Concept *</label>
                            <select
                                name="selectedConcept"
                                value={formData.selectedConcept}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg"
                            >
                                <option value="">-- Choose a Concept --</option>
                                {concepts.map((concept) => (
                                    <option key={concept.id} value={concept.id}>
                                        {concept.name || concept.title}
                                    </option>
                                ))}
                            </select>
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
                                onClick={() => isEditMode ? navigate("/models/evaluationcontent/reviewquestion") : setFormData({
                                    description: "",
                                    questionType: "MCQ",
                                    difficultyLevel: "BEGINNER",
                                    selectedConcept: "",
                                    optionA: "",
                                    optionB: "",
                                    optionC: "",
                                    optionD: "",
                                    correctAnswer: ""
                                })}
                            >
                                {isEditMode ? "Cancel" : "Clear"}
                            </Button>

                            <Button onClick={isEditMode ? handleUpdate : handleSubmit}>
                                {isEditMode ? "Update Question" : "Add Question"}
                            </Button>
                        </div>

                    </CardContent>
                </Card>

                {/* Questions List */}
                {!isEditMode && questionsList.length > 0 && (
                    <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                        <div className="bg-gradient-primary p-5 text-white text-lg font-semibold">
                            Added Questions ({questionsList.length})
                        </div>

                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {questionsList.map((question, index) => (
                                    <div key={question.id} className="border rounded-lg p-4 bg-muted/30 hover:bg-muted/50 transition">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="font-semibold text-foreground text-lg">
                                                Question {index + 1}
                                            </h3>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => removeQuestion(question.id)}
                                            >
                                                Remove
                                            </Button>
                                        </div>

                                        <div className="space-y-2 text-sm">
                                            <p><span className="font-medium">Description:</span> {question.description}</p>
                                            <p><span className="font-medium">Concept:</span> {concepts.find(c => c.id === question.selectedConcept)?.name || question.selectedConcept || "N/A"}</p>
                                            <p><span className="font-medium">Type:</span> {question.questionType}</p>
                                            <p><span className="font-medium">Difficulty:</span> {question.difficultyLevel}</p>

                                            {question.questionType === "MCQ" && (
                                                <div>
                                                    <span className="font-medium">Options:</span>
                                                    <ul className="list-disc list-inside ml-2">
                                                        <li>A: {question.optionA}</li>
                                                        <li>B: {question.optionB}</li>
                                                        <li>C: {question.optionC}</li>
                                                        <li>D: {question.optionD}</li>
                                                    </ul>
                                                    <p><span className="font-medium">Correct Answer:</span> {question.correctAnswer}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end gap-4 mt-6 pt-4 border-t">
                                <Button
                                    variant="outline"
                                    onClick={() => navigate("/models/evaluationcontent/reviewquestion")}
                                >
                                    Cancel All
                                </Button>

                                <Button
                                    onClick={() => {
                                        console.log("Submitting questions:", questionsList);
                                        alert(`${questionsList.length} questions submitted! ✅`);
                                        // Here you can add API call to submit all questions
                                    }}
                                >
                                    Submit All Questions
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default RTCreateQuestion;