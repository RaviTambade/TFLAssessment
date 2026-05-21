import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";

type Question = {
    questionId: number;
    title?: string;
    description: string;
    questionType: string;
            // difficultyLevel: string;
            // status: string;

};

const Getallquestions = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    const { ref, isVisible } = useScrollAnimation();
    const navigate = useNavigate();

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleQuestionClick = (id: number) => {
        navigate(`/models/evaluationcontent/questiondetails/${id}`);
    };

    const fetchQuestions = async () => {

        
        try {
            const currentUser = JSON.parse(
                sessionStorage.getItem("current") || "{}"
            );
            console.log(currentUser);
            const userId = currentUser.userid;
            const roleId = currentUser.role_id;
            if (!roleId) {
            console.error("User Role Id not found");
            return;
        }
            const response = await fetch(
                `${WEBAPI_JAVA_URL}/filter/questions/${userId}/${roleId}`
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
            className="py-0 bg-background min-h-screen"
        >
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div
                    className={`text-center mb-6 transition-all duration-1000 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-2xl font-bold">
                        Questions
                    </h2>
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
                    <div
                        className={`overflow-x-auto rounded-xl border shadow-md transition-all duration-1000 ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <table className="w-full border-collapse">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="p-4 text-left">ID</th>
                                    <th className="p-4 text-left">Question</th>
                                    <th className="p-4 text-left">Type</th>
                                    {/* <th className="p-4 text-left">Difficulty</th>
                                    <th className="p-4 text-left">Status</th> */}

                                </tr>
                            </thead>

                            <tbody>
                                {questions.map((question, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => handleQuestionClick(question.questionId)}
                                        className="border-t hover:bg-muted/50 transition"
                                    >
                                        <td className="p-4">
                                            {question.questionId}
                                        </td>

                                        <td className="p-4 min-w-[300px]">


                                            <div className="p-4">
                                                {question.description}
                                            </div>
                                        </td>

                                        <td className="p-4">
                                            {question.questionType}
                                        </td>

                                        {/* <td className="p-4">
                                            {question.difficultyLevel}
                                        </td>

                                        <td className="p-4">
                                            {question.status}
                                        </td> */}


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Getallquestions;