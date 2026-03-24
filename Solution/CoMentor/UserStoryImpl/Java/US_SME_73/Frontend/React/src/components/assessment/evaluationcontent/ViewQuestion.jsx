import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

const ViewQuestion = () => {
    const { ref, isVisible } = useScrollAnimation();

    const [questionId, setQuestionId] = useState("");
    const [question, setQuestion] = useState(null);
    const [error, setError] = useState("");

    const fetchQuestion = async () => {
        try {
            setError("");
            setQuestion(null);

            const response = await fetch(
                `http://localhost:8081/api/sme/questions/${questionId}`
            );

            if (!response.ok) {
                throw new Error("Not found");
            }

            const data = await response.json();
            setQuestion(data);

        } catch (err) {
            setError("Question not found");
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    View{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                        Question
                    </span>
                </h2>
            </div>

            <div className="max-w-5xl mx-auto">
                <Card
                    ref={ref}
                    className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="bg-gradient-hero p-8 sm:p-10">
                        <CardContent className="text-center">

                            {/* Input */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
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

                            {/* Error */}
                            {error && (
                                <p className="text-red-500 font-semibold mb-4">{error}</p>
                            )}

                            {/* Result */}
                            {question && (
                                <div className="bg-white rounded-xl p-6 shadow-md text-left">
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
                                </div>
                            )}

                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ViewQuestion;