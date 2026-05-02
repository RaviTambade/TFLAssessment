import { useEffect, useState } from "react";
import { Card,CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";


const QuestionsByConcept = () => {
    const [concepts, setConcepts] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [selectedConcept, setSelectedConcept] = useState(null);

    // ✅ Load all concepts
    useEffect(() => {
        fetch("http://localhost:8080/api/technologies/concepts")
            .then((res) => res.json())
            .then((data) => setConcepts(data))
            .catch((err) => console.error(err));
    }, []);

    // ✅ Load questions by concept
   const loadQuestions = (id: number) => {
    setSelectedConcept(id);

    fetch(`http://localhost:8080/api/concepts/${id}/questions`)
        .then((res) => res.json())
        .then((data) => setQuestions(data))
        .catch((err) => console.error(err));
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
                    {concepts.map((c: any) => (
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

                {/* Questions Table */}
                {questions.length > 0 && (
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
                                        {questions.map((q: any, index: number) => (
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