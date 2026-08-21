import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import Question from "./entities/Question";


import { WEBAPI_JAVA_URL } from "@/lib/utils";

const QuestionsByLanguage = () => {
    const navigate = useNavigate();

    const [language, setLanguage] = useState("Java");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchQuestions(language);
    }, [language]);

    const handleQuestionClick = (id: number) => { navigate(`/models/evaluationcontent/questiondetails/${id}`); };
    const fetchQuestions = async (selectedLanguage: string) => {
        setLoading(true);
        try {
            const currentUser = JSON.parse(
                sessionStorage.getItem("current") || "{}"
            );
            const userId = currentUser.userid;
            const roleId = currentUser.role_id;
            const response = await fetch(
                `${WEBAPI_JAVA_URL}/filter/questions/${userId}/${roleId}?language=${encodeURIComponent(
                    selectedLanguage
                )}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch questions");
            }
            const data = await response.json();
            setQuestions(data);
        }
        catch (err) {
            console.error(err);
            setQuestions([]);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Questions By Language</CardTitle>
                    <Select value={language} onValueChange={(value) => setLanguage(value)} >
                        <SelectTrigger className="w-56">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Java">Java</SelectItem>
                            <SelectItem value="C#">C#</SelectItem>
                            <SelectItem value="Node.js">Node.js</SelectItem>
                            <SelectItem value="React">React</SelectItem>
                            <SelectItem value="MySQL">MySQL</SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>

                <CardContent>
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="h-10 w-10 animate-spin" />
                        </div>) : questions.length === 0 ? (
                            <div className="text-center py-20 text-muted-foreground">
                                No Questions Found
                            </div>
                        ) : (
                        <div className="overflow-x-auto rounded-lg border">
                            <table className="w-full">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="p-4 text-left">ID</th>
                                        <th className="p-4 text-left">Question</th>
                                        <th className="p-4 text-left">Type</th>
                                        <th className="p-4 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questions.map((question) => (
                                        <tr key={question.questionId} className="border-t hover:bg-muted/40 transition" >
                                            <td className="p-4 font-medium">{question.questionId}</td>
                                            <td className="p-4 cursor-pointer" onClick={() => handleQuestionClick(question.questionId)} >
                                                {question.description}
                                            </td>
                                            <td className="p-4">{question.questionType}</td>
                                            <td className="p-4 text-center">
                                                <Button size="sm" className="gap-2" onClick={() => navigate(`/models/evaluationcontent/edit/${question.questionId}`)}><Pencil className="w-4 h-4" />
                                                    Update
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
export default QuestionsByLanguage;