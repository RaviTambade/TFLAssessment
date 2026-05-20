import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Brain, Check } from "lucide-react";
import { WEBAPI_JAVA_URL } from "@/lib/utils";

type Question = {
    questionId: number;
    description: string;
    questionType: string;
};

const QuestionsByConcept = () => {
    const [concepts, setConcepts] = useState<string[]>([]);
    const [selectedConcepts, setSelectedConcepts] = useState<string[]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);

    // ✅ Load Concepts
    useEffect(() => {
        fetch(`${WEBAPI_JAVA_URL}/questions/concepts`)
            .then((res) => res.json())
            .then((data) => setConcepts(data))
            .catch((err) => console.error(err));
    }, []);

    // ✅ Multiple Concept Selection
    const handleConceptClick = async (concept: string) => {
        let updatedConcepts: string[];

        // Remove if already selected
        if (selectedConcepts.includes(concept)) {
            updatedConcepts = selectedConcepts.filter(
                (c) => c !== concept
            );
        } else {
            updatedConcepts = [...selectedConcepts, concept];
        }

        setSelectedConcepts(updatedConcepts);

        // No concepts selected
        if (updatedConcepts.length === 0) {
            setQuestions([]);
            return;
        }

        setLoading(true);

        try {
            let allQuestions: Question[] = [];

            // Fetch questions for all selected concepts
            for (const item of updatedConcepts) {
                const response = await fetch(
                    `${WEBAPI_JAVA_URL}/questions/concepts/${item}`
                );

                const data = await response.json();

                if (Array.isArray(data)) {
                    allQuestions = [...allQuestions, ...data];
                }
            }

            // ✅ Keep duplicate questions also
            setQuestions(allQuestions);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen py-16 bg-background">
            <div className="container mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-14">

                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Questions By{" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Concept
                        </span>
                    </h2>
                </div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-4 gap-8">

                    {/* LEFT SIDE - CONCEPTS */}
                    <Card className="border-0 shadow-elegant rounded-3xl h-fit">
                        <CardContent className="p-6">

                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Concepts
                            </h3>

                            <div className="space-y-3">

                                {concepts.map((concept, index) => {
                                    const isSelected =
                                        selectedConcepts.includes(concept);

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleConceptClick(concept)}
                                            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${isSelected
                                                    ? "bg-gradient-primary text-white shadow-lg"
                                                    : "bg-muted hover:bg-primary/10 text-foreground"
                                                }`}
                                        >
                                            <span>{concept}</span>

                                            {isSelected && (
                                                <Check className="w-5 h-5" />
                                            )}
                                        </button>
                                    );
                                })}

                            </div>

                        </CardContent>
                    </Card>

                    {/* RIGHT SIDE - QUESTIONS */}
                    <div className="lg:col-span-3">

                        <Card className="border-0 shadow-elegant rounded-3xl min-h-[500px]">
                            <CardContent className="p-8">

                                {/* SHOW ONLY AFTER CLICK */}
                                {selectedConcepts.length > 0 && (
                                    <div className="mb-8">

                                        <h3 className="text-3xl font-bold text-foreground mb-4">
                                            Selected Concepts
                                        </h3>

                                        <div className="flex flex-wrap gap-3">
                                            {selectedConcepts.map((concept, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                                                >
                                                    {concept}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                )}

                                {/* LOADING */}
                                {loading && (
                                    <div className="flex justify-center items-center py-20">
                                        <Loader2 className="w-10 h-10 animate-spin text-primary" />
                                    </div>
                                )}

                                {/* QUESTIONS */}
                                {!loading && questions.length > 0 && (
                                    <div className="space-y-5">

                                        {questions.map((question, index) => (
                                            <Card
                                                key={index}
                                                className="border border-border rounded-2xl hover:shadow-md transition-all"
                                            >
                                                <CardContent className="p-6">

                                                    <div className="flex items-start justify-between gap-4">

                                                        <div className="flex-1">

                                                            <h4 className="text-lg font-semibold text-foreground mb-3">
                                                                Question {index + 1}
                                                            </h4>

                                                            <p className="text-muted-foreground leading-relaxed">
                                                                {question.description}
                                                            </p>

                                                        </div>

                                                        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
                                                            {question.questionType}
                                                        </span>

                                                    </div>

                                                </CardContent>
                                            </Card>
                                        ))}

                                    </div>
                                )}

                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionsByConcept;