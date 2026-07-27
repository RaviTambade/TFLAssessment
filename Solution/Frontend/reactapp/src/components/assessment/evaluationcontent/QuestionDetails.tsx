import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code2, Layers3, Brain, Target, Pencil, CheckCircle2, } from "lucide-react";

const QuestionDetails = () => {
    const { question_id } = useParams();
    const navigate = useNavigate();
    const [q, setQ] = useState<any>(null);

    useEffect(() => {
        fetch(`${WEBAPI_JAVA_URL}/questions/${question_id}/details`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => setQ(data))
            .catch((err) => {
                console.log(err);
                alert("Error loading question");
            });
    }, [question_id]);

    const edit = () => {
        navigate(`/models/evaluationcontent/edit/${question_id}`);
    };
    if (!q) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-lg font-semibold animate-pulse text-primary">
                    Loading Question...
                </div>
            </div>
        );
    }

    const DetailCard = ({
        icon,
        label,
        value,
    }: {
        icon: React.ReactNode;
        label: string;
        value: string;
    }) => (
        <div className="flex items-center gap-3 rounded-lg border bg-card hover:border-primary/40 transition-all p-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {icon}
            </div>

            <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}
                </p>
                <p className="font-semibold text-sm">{value || "-"}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-gradient-to-br from-background via-muted/20 to-background px-5 py-4">
            <div className="max-w-7xl mx-auto">

                <Card className="shadow-xl border-0">
                    <div className="h-1.5 bg-gradient-primary rounded-t-xl" />

                    <CardContent className="p-5">

                        {/* Question */}
                        <div className="mb-5">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-base leading-7 font-medium">
                                    {q.description}
                                </p>
                                <Button
                                    onClick={edit}
                                    size="sm"
                                    className="bg-gradient-primary hover:opacity-90">
                                    <Pencil className="w-4 h-4 mr-2" />
                                    Edit Question
                                </Button>
                            </div>

                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                            <DetailCard
                                icon={<BookOpen size={18} />}
                                label="Type"
                                value={q.questionType}
                            />

                            <DetailCard
                                icon={<Code2 size={18} />}
                                label="Language"
                                value={q.language}
                            />

                            <DetailCard
                                icon={<Layers3 size={18} />}
                                label="Layer"
                                value={q.layer}
                            />

                            <DetailCard
                                icon={<Brain size={18} />}
                                label="Framework"
                                value={q.framework}
                            />

                            <DetailCard
                                icon={<BookOpen size={18} />}
                                label="Concept"
                                value={q.concept}
                            />

                            <DetailCard
                                icon={<Target size={18} />}
                                label="Difficulty"
                                value={q.difficultyLevel}
                            />
                        </div>

                        {/* MCQ */}
                        {q.questionType === "MCQ" && (
                            <>
                                <div className="flex items-center gap-2 mb-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <h2 className="text-lg font-bold">Options</h2>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { key: "A", value: q.optionA },
                                        { key: "B", value: q.optionB },
                                        { key: "C", value: q.optionC },
                                        { key: "D", value: q.optionD },
                                    ].map((option) => {
                                        const correct = option.key === q.correctAnswer;

                                        return (
                                            <div
                                                key={option.key}
                                                className={`rounded-xl border p-3 transition-all ${correct
                                                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                                                    : "hover:border-primary hover:bg-primary/5"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`h-9 w-9 rounded-full flex items-center justify-center font-bold ${correct
                                                            ? "bg-green-500 text-white"
                                                            : "bg-primary text-primary-foreground"
                                                            }`}
                                                    >
                                                        {option.key}
                                                    </div>

                                                    <p className="font-medium text-sm">
                                                        {option.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-4 rounded-lg border border-green-300 bg-green-50 dark:bg-green-950/20 px-4 py-3">
                                    <span className="font-semibold text-green-700 dark:text-green-400">
                                        Correct Answer:
                                    </span>{" "}
                                    {q.correctAnswer}
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>


            </div>
        </div>
    );
};

export default QuestionDetails;