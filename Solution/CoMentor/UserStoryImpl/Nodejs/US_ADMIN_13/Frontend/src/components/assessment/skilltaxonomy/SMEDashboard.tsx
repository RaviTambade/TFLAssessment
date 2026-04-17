import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";

const SMEDashboard = () => {
    const { ref, isVisible } = useScrollAnimation();
    const navigate = useNavigate();

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        SME Dashboard
                    </h2>
                </div>

                {/* Main Card */}
                <div className="max-w-6xl mx-auto">
                    <Card
                        ref={ref}
                        className={`border-0 shadow-elegant transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="bg-gradient-hero p-6 sm:p-8">
                            <CardContent className="space-y-10">

                                {/* Stats Section */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                                    <div className="bg-background/70 rounded-2xl p-6 text-center shadow">
                                        <FileText className="mx-auto mb-3 h-6 w-6 text-primary" />
                                        <p className="text-sm text-muted-foreground">
                                            Assigned Languages
                                        </p>
                                        <h3 className="text-3xl font-bold text-foreground">
                                            4
                                        </h3>
                                    </div>

                                    <div className="bg-background/70 rounded-2xl p-6 text-center shadow">
                                        <CheckCircle className="mx-auto mb-3 h-6 w-6 text-primary" />
                                        <p className="text-sm text-muted-foreground">
                                            Approved Concepts
                                        </p>
                                        <h3 className="text-3xl font-bold text-foreground">
                                            82
                                        </h3>
                                    </div>

                                </div>

                                {/* Language List */}
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-4">
                                        Your Languages
                                    </h3>

                                    <div className="space-y-4">

                                        {/* Java */}
                                        <div
                                            onClick={() => navigate("/sme/language/java")}
                                            className="cursor-pointer bg-background/80 hover:shadow-md transition rounded-xl p-5 flex justify-between items-center"
                                        >
                                            <span className="text-lg font-medium text-foreground">
                                                Java Runtime
                                            </span>

                                            <span className="flex items-center text-primary font-semibold">
                                                18 Concepts
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                        </div>

                                        {/* Node */}
                                        <div
                                            onClick={() => navigate("/sme/language/node")}
                                            className="cursor-pointer bg-background/80 hover:shadow-md transition rounded-xl p-5 flex justify-between items-center"
                                        >
                                            <span className="text-lg font-medium text-foreground">
                                                Node.js Runtime
                                            </span>

                                            <span className="flex items-center text-primary font-semibold">
                                                12 Concepts
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                        </div>

                                        {/* Python */}
                                        <div
                                            onClick={() => navigate("/sme/language/python")}
                                            className="cursor-pointer bg-background/80 hover:shadow-md transition rounded-xl p-5 flex justify-between items-center"
                                        >
                                            <span className="text-lg font-medium text-foreground">
                                                Python Runtime
                                            </span>

                                            <span className="flex items-center text-primary font-semibold">
                                                10 Concepts
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="pt-6 border-t">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">
                                        Quick Actions
                                    </h3>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            variant="hero"
                                            size="lg"
                                            onClick={() =>
                                                navigate("/models/evaluationcontent/content-analysis")
                                            }
                                        >
                                            Review Concepts
                                        </Button>

                                        <Button variant="outline" size="lg">
                                            Generate Report
                                        </Button>
                                    </div>
                                </div>

                            </CardContent>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default SMEDashboard;