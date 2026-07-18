import { useEffect, useState } from "react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, ClipboardList, BookOpen, User, ArrowLeft, Inbox, } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TestDetails from "./entities/TestDetails";



export default function TestList() {
    const navigate = useNavigate();

    const [tests, setTests] = useState<TestDetails[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch(
                    `${WEBAPI_DOTNET_URL}/CreateTest/testDetailsForMentor`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch tests");
                }

                const data = await response.json();
                setTests(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    return (
        <div className="min-h-screen bg-muted/30 p-6">
            <div className="w-full space-y-6">

                {/* Header */}

                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl text-primary mt-3 font-bold">
                        Tests
                        </h1>
                    </div>

                    <Button
                        variant="outline"onClick={() => navigate(-1)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </div>

                {/* Summary */}

                <div className="grid md:grid-cols-4 gap-10">
                    <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">
                        <CardContent className="p-2 flex justify-between items-center">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Total Tests
                                </p>
                                <p className="text-3xl font-bold mt-2">
                                    {tests.length}
                                </p>
                            </div>
                            <ClipboardList className="w-10 h-10 text-primary" />
                        </CardContent>
                    </Card>

                </div>

                {/* Table */}

                <Card className="border-0 shadow-elegant">

                    <CardHeader>
                        <CardTitle >
                            Created Tests
                        </CardTitle>
                    </CardHeader>

                    <CardContent>

                        {loading ? (
                            <div className="flex justify-center items-center py-20">
                                <Loader2 className="h-7 w-7 animate-spin text-primary" />
                            </div>
                        ) : tests.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20">

                                <Inbox className="w-12 h-12 text-muted-foreground mb-3" />

                                <p className="font-medium">
                                    No Tests Found
                                </p>

                            </div>
                        ) : (
                            <Table>

                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-xl text-primary mt-3 font-bold">ID</TableHead>
                                        <TableHead className="text-xl text-primary mt-3 font-bold">Test Name</TableHead>
                                        <TableHead className="text-xl text-primary mt-3 font-bold">Language</TableHead>
                                        <TableHead className="text-xl text-primary mt-3 font-bold">SME</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>

                                    {tests.map((test) => (
                                        <TableRow
                                            key={test.testId}
                                            className="hover:bg-muted/40"
                                        >
                                            <TableCell className="font-medium">
                                                {test.testId}
                                            </TableCell>

                                        <TableCell>
                                        <button
                                            onClick={() => navigate(`/models/tests/${test.testId}`)}
                                        >
                                            {test.testName}
                                        </button>
                                        </TableCell>

                                            <TableCell>
                                                {test.language}
                                            </TableCell>

                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <User className="w-4 h-4 text-primary" />
                                                    {test.smeName}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>

                            </Table>
                        )}

                    </CardContent>
                </Card>

            </div>
        </div>
    );
}