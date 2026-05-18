import React, { useState } from "react";
import { Linkedin, Facebook, Youtube, Search } from "lucide-react";

interface Question {
    questionId: number;
    description: string;
    questionType: string;
    createdAt: string;
}

const GetQuestionsByDate: React.FC = () => {

    const [fromDate, setFromDate] = useState<string>("");
    const [toDate, setToDate] = useState<string>("");
    const [questions, setQuestions] = useState<Question[]>([]);

    // Fetch Questions API
    const fetchQuestions = async () => {

        try {

            const response = await fetch(
                `http://localhost:8080/api/questions/recent?fromDate=${fromDate}&toDate=${toDate}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch questions");
            }

            const data: Question[] = await response.json();

            setQuestions(data);

        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">

            {/* Header */}
            <div className="bg-card border-b border-border shadow-sm">

                <div className="container mx-auto px-4 py-6">

                    <div className="flex items-center justify-center space-x-3">

                        <div>
                            <h1 className="text-3xl font-bold text-primary">
                                Recent Questions
                            </h1>


                        </div>

                    </div>

                </div>

            </div>

            {/* Main Content */}
            <div className="flex-1 container mx-auto px-4 py-10">

                {/* Search Card */}
                <div className="bg-card border border-border rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* From Date */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                From Date
                            </label>

                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* To Date */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                To Date
                            </label>

                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                    </div>

                    {/* Button */}
                    <div className="mt-8 text-center">

                        <button
                            onClick={fetchQuestions}
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all"
                        >
                            <Search className="w-5 h-5" />
                            Get Questions
                        </button>

                    </div>

                </div>

                {/* Table */}
                <div className="mt-10 bg-card border border-border rounded-2xl shadow-lg overflow-hidden">

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-primary text-white">

                                <tr>
                                    <th className="px-6 py-4 text-left">Question ID</th>
                                    <th className="px-6 py-4 text-left">Description</th>
                                    <th className="px-6 py-4 text-left">Question Type</th>
                                    <th className="px-6 py-4 text-left">Created On</th>
                                </tr>

                            </thead>

                            <tbody>

                                {questions.length > 0 ? (

                                    questions.map((question) => (

                                        <tr
                                            key={question.questionId}
                                            className="border-b border-border hover:bg-muted/40 transition-all"
                                        >

                                            <td className="px-6 py-4">
                                                {question.questionId}
                                            </td>

                                            <td className="px-6 py-4">
                                                {question.description}
                                            </td>

                                            <td className="px-6 py-4">
                                                {question.questionType}
                                            </td>

                                            <td className="px-6 py-4">
                                                {question.createdAt}
                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan={4}
                                            className="text-center py-10 text-muted-foreground"
                                        >
                                            No Questions Found
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default GetQuestionsByDate;