import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { WEBAPI_JAVA_URL } from "@/lib/utils";

type Concept = {
    id: number;
    name: string;
};

type Question = {
    description: string;
    questionType: string;
};

const QuestionsByConcept = () => {
    const [concepts, setConcepts] = useState<Concept[]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [selectedConcept, setSelectedConcept] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    // ✅ Load all concepts
    useEffect(() => {
        fetch(`${WEBAPI_JAVA_URL}/technologies/concepts`)
            .then((res) => res.json())
            .then((data) => setConcepts(data))
            .catch((err) => console.error(err));
    }, []);

    // ✅ Load questions by concept
    const loadQuestions = (id: number) => {
        setSelectedConcept(id);
        setLoading(true);
        setQuestions([]);

        fetch(`${WEBAPI_JAVA_URL}//concepts/${id}/questions`)
            .then((res) => res.json())
            .then((data) => setQuestions(Array.isArray(data) ? data : []))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    };

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Concepts & Questions
                    </h2>
                </div>

                {/* Concepts Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {concepts.map((c) => (
                        <Button
                            key={c.id}
                            variant={selectedConcept === c.id ? "default" : "outline"}
                            onClick={() => loadQuestions(c.id)}
                            className="transition-all"
                        >
                            {c.name}
                        </Button>
                    ))}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center py-10">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}

                {/* Questions Table */}
                {!loading && questions.length > 0 && (
                    <div className="max-w-5xl mx-auto">
                        <Card className="shadow-lg border-0">
                            <CardContent className="p-6 overflow-x-auto">

                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-muted text-left">
                                            <th className="p-3">Description</th>
                                            <th className="p-3">Question Type</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {questions.map((q, index) => (
                                            <tr
                                                key={index}
                                                className="border-b hover:bg-muted/50 transition"
                                            >
                                                <td className="p-3">{q.description}</td>
                                                <td className="p-3">{q.questionType}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </CardContent>
                        </Card>
                    </div>
                )}

            </div>
        </section>
    );
};

export default QuestionsByConcept;
