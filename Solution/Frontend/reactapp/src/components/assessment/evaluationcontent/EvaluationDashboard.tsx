import {FileText,
    Pencil,
    Brain,
    PlusCircle,
    BarChart3,
    Tags,
    Star,
    CalendarDays,
    ArrowRight,
} from "lucide-react";

import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const dashboardItems = [
    {
        title: "Update Questions",
        icon: Pencil,
        path: "/models/evaluationcontent/updatequestion",
        color: "from-red-500 to-orange-500",
        bg: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        title: "All Questions",
        icon: FileText,
        path: "/models/evaluationcontent/viewquestion",
        color: "from-red-500 to-orange-500",
        bg: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        title: "Questions by Concept",
        icon: Brain,
        path: "/models/evaluationcontent/questionbyconcept",
        color: "from-red-500 to-orange-500",
        bg: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        title: "SME Insert Question",
        icon: PlusCircle,
        path: "/models/evaluationcontent/insertquestion",
        color: "from-red-500 to-orange-500",
        bg: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    
];

const EvaluationDashboard = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="py-6 sm:py-6 bg-background min-h-screen">
            <div className="container mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                        Evaluation Content{" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Dashboard
                        </span>
                    </h2>

                </div>

                {/* GRID */}
                <div
                    ref={ref}
                    className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                >
                    {dashboardItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Card
                                key={index}
                                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2"
                            >
                                <CardContent className="p-2 text-center h-full flex flex-col">

                                    {/* ICON */}
                                    <div
                                        className={`w-24 h-24 mx-auto rounded-3xl ${item.bg} flex items-center justify-center mb-6`}
                                    >
                                        <Icon className={`w-12 h-12 ${item.iconColor}`} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-1xl font-bold text-foreground mb-3">
                                        {item.title}
                                    </h3>

                                    

                                    {/* BUTTON */}
                                    <Link to={item.path}>
                                        <Button
                                            className={`w-full bg-gradient-to-r ${item.color} text-white border-0 group rounded-xl`}
                                        >
                                            View
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>

                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EvaluationDashboard;