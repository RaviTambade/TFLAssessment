
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface QuestionDto {
    questionId: number;
    description: string;
    questionType: string;
    difficultyLevel: string;
    status: boolean;
}

// ✅ Centralized Base URL
const BASE_URL = "http://localhost:8082/api";

const UpdateQuestion = () => {
    const [questions, setQuestions] = useState<QuestionDto[]>([]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editData, setEditData] = useState<Partial<QuestionDto>>({});
    const [mode, setMode] = useState<"ALL" | "BY_ID" | null>(null);
    const [inputId, setInputId] = useState<number | "">("");
    const [loading, setLoading] = useState(false);

    // ✅ Fetch All
    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/questions`);
            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            const safeData = Array.isArray(data) ? data : [];

            setQuestions(safeData);
        } catch (err) {
            console.error(err);
            alert("❌ Failed to fetch questions");
            setQuestions([]);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Fetch By ID
    const fetchById = async () => {
        if (!inputId) return alert("Enter ID");

        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/questions/${inputId}`);
            if (!res.ok) throw new Error("Not found");

            const data = await res.json();
            setQuestions(data ? [data] : []);
        } catch (err) {
            console.error(err);
            alert("❌ Question not found");
            setQuestions([]);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Handle Input Change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        setEditData({
            ...editData,
            [name]: type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value
        });
    };

    // ✅ Save Update
    const handleSave = async (id: number) => {
        try {
            const res = await fetch(`${BASE_URL}/questions/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editData),
            });

            if (!res.ok) throw new Error("Update failed");

            alert("✅ Updated successfully");

            if (mode === "ALL") {
                fetchQuestions();
            } else if (mode === "BY_ID") {
                fetchById();
            }

            setEditingId(null);
            setEditData({});
        } catch (err) {
            console.error(err);
            alert("❌ Update failed");
        }
    };

    return (
        <section className="bg-background w-full m-0 p-0">
            <div className="w-full">

                {/* TITLE */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">
                        Update{" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                </div>

                {/* BUTTONS */}
                <div className="flex justify-center gap-4 mb-6 flex-wrap">
                    <Button onClick={() => {
                        setMode("ALL");
                        fetchQuestions();
                    }}>
                        Show All
                    </Button>

                    <Button onClick={() => {
                        setMode("BY_ID");
                        setQuestions([]);
                    }}>
                        Update By ID
                    </Button>
                </div>

                {/* INPUT */}
                {mode === "BY_ID" && (
                    <div className="flex justify-center gap-2 mb-6 flex-wrap">
                        <input
                            type="number"
                            placeholder="Enter Question ID"
                            value={inputId}
                            onChange={(e) =>
                                setInputId(e.target.value ? Number(e.target.value) : "")
                            }
                            className="border px-3 py-2 rounded"
                        />
                        <Button onClick={fetchById}>Fetch</Button>
                    </div>
                )}

                {/* LOADING */}
                {loading && (
                    <p className="text-center text-blue-500 mb-4">Loading...</p>
                )}

                {/* COUNT */}
                <p className="text-center mb-4">
                    Total Questions: {questions.length}
                </p>

                {/* TABLE */}
                {questions.length > 0 ? (
                    <div className="w-full overflow-x-auto">
                        <Card>
                            <CardContent className="bg-white text-black p-0">
                                <table className="w-full border text-sm">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-2 py-2">ID</th>
                                            <th className="px-2 py-2">Description</th>
                                            <th className="px-2 py-2">Type</th>
                                            <th className="px-2 py-2">Difficulty</th>
                                            <th className="px-2 py-2">Status</th>
                                            <th className="px-2 py-2">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {questions.map((q) => (
                                            <tr key={q.questionId} className="border-t">

                                                <td className="px-2 py-2">{q.questionId}</td>

                                                <td className="px-2 py-2">
                                                    {editingId === q.questionId ? (
                                                        <input
                                                            name="description"
                                                            value={editData.description ?? q.description}
                                                            onChange={handleChange}
                                                            className="border px-2 py-1 w-full"
                                                        />
                                                    ) : (
                                                        q.description
                                                    )}
                                                </td>

                                                <td className="px-2 py-2">
                                                    {editingId === q.questionId ? (
                                                        <select
                                                            name="questionType"
                                                            value={editData.questionType ?? q.questionType}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="MCQ">MCQ</option>
                                                            <option value="PROBLEM_STATEMENT">Problem</option>
                                                            <option value="HANDS_ON">Hands On</option>
                                                        </select>
                                                    ) : q.questionType}
                                                </td>

                                                <td className="px-2 py-2">
                                                    {editingId === q.questionId ? (
                                                        <select
                                                            name="difficultyLevel"
                                                            value={editData.difficultyLevel ?? q.difficultyLevel}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="BEGINNER">Beginner</option>
                                                            <option value="INTERMEDIATE">Intermediate</option>
                                                            <option value="ADVANCE">Advance</option>
                                                        </select>
                                                    ) : q.difficultyLevel}
                                                </td>

                                                <td className="px-2 py-2 text-center">
                                                    {editingId === q.questionId ? (
                                                        <input
                                                            type="checkbox"
                                                            name="status"
                                                            checked={
                                                                editData.status !== undefined
                                                                    ? editData.status
                                                                    : q.status
                                                            }
                                                            onChange={handleChange}
                                                        />
                                                    ) : q.status ? "Active" : "Inactive"}
                                                </td>

                                                <td className="px-2 py-2 text-center">
                                                    {editingId === q.questionId ? (
                                                        <div className="flex gap-2 justify-center">
                                                            <Button onClick={() => handleSave(q.questionId)}>
                                                                Save
                                                            </Button>
                                                            <Button onClick={() => setEditingId(null)}>
                                                                Cancel
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <Button onClick={() => {
                                                            setEditingId(q.questionId);
                                                            setEditData(q);
                                                        }}>
                                                            Edit
                                                        </Button>
                                                    )}
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground mt-6">
                        No questions found
                    </p>
                )}
            </div>
        </section>
    );
};

export default UpdateQuestion;
