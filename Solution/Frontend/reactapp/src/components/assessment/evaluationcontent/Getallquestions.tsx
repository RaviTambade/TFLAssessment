import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type Question = {
    id: number;
    title?: string;
    description: string;
    questionType: string;
    difficultyLevel: string;
    status: string;
    language?: string;
    layer?: string;
    framework?: string;
    concept?: string;
};

const Getallquestions = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    const { ref, isVisible } = useScrollAnimation();

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetch(
                `${WEBAPI_JAVA_URL}/questions`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch questions");
            }

            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            ref={ref}
            className="py-16 sm:py-20 bg-background min-h-screen"
        >
            <div className="container mx-auto px-2">
                {/* Heading */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        All Questions
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Browse all available interview and technical questions.
                    </p>
                </div>

                {/* Loader */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="h-10 w-10 animate-spin" />
                    </div>
                ) : questions.length === 0 ? (
                    <div className="text-center text-muted-foreground text-lg">
                        No Questions Found
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {questions.map((question, index) => (
                            <Card
                                key={index}
                                className={`border border-border shadow-md hover:shadow-xl transition-all duration-500 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                    }`}
                            >
                                <CardContent className="p-6 space-y-4">
                                    {/* Question Description */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            {question.title || "Question"}
                                        </h3>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {question.description}
                                        </p>
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-3">
                                        <Badge variant="secondary">
                                            {question.questionType}
                                        </Badge>

                                        <Badge variant="outline">
                                            {question.difficultyLevel}
                                        </Badge>

                                        <Badge>{question.status}</Badge>

                                        {question.language && (
                                            <Badge variant="secondary">
                                                {question.language}
                                            </Badge>
                                        )}

                                        {question.layer && (
                                            <Badge variant="outline">
                                                {question.layer}
                                            </Badge>
                                        )}

                                        {question.framework && (
                                            <Badge>
                                                {question.framework}
                                            </Badge>
                                        )}

                                        {question.concept && (
                                            <Badge variant="secondary">
                                                {question.concept}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Getallquestions;