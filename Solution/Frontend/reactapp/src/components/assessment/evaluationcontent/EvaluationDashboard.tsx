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
        description: "Edit and manage existing interview questions easily.",
        icon: Pencil,
        path: "/update-questions",
        color: "from-red-500 to-orange-500",
        bg: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        title: "All Questions",
        description: "Browse and manage all questions in the repository.",
        icon: FileText,
        path: "/questions",
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        title: "Questions by Concept",
        description: "Explore questions grouped by concepts and topics.",
        icon: Brain,
        path: "/questions-concept",
        color: "from-green-500 to-emerald-500",
        bg: "bg-green-50",
        iconColor: "text-green-500",
    },
    {
        title: "SME Insert Question",
        description: "Add new questions created by subject experts.",
        icon: PlusCircle,
        path: "/insert-question",
        color: "from-orange-500 to-amber-500",
        bg: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        title: "Questions by Status",
        description: "Filter questions based on current status.",
        icon: BarChart3,
        path: "/questions-status",
        color: "from-violet-500 to-purple-500",
        bg: "bg-violet-50",
        iconColor: "text-violet-500",
    },
    {
        title: "Questions by Type",
        description: "View questions categorized by type.",
        icon: Tags,
        path: "/questions-type",
        color: "from-cyan-500 to-sky-500",
        bg: "bg-cyan-50",
        iconColor: "text-cyan-500",
    },
    {
        title: "Questions by Difficulty",
        description: "Analyze questions based on difficulty level.",
        icon: Star,
        path: "/questions-difficulty",
        color: "from-pink-500 to-rose-500",
        bg: "bg-pink-50",
        iconColor: "text-pink-500",
    },
    {
        title: "Questions by Date",
        description: "Search and filter questions using dates.",
        icon: CalendarDays,
        path: "/questions-date",
        color: "from-indigo-500 to-blue-500",
        bg: "bg-indigo-50",
        iconColor: "text-indigo-500",
    },
];

const EvaluationDashboard = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="py-16 sm:py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Evaluation Content{" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Dashboard
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Manage and organize evaluation questions efficiently with a
                        modern and professional dashboard.
                    </p>
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
                                <CardContent className="p-8 text-center h-full flex flex-col">

                                    {/* ICON */}
                                    <div
                                        className={`w-24 h-24 mx-auto rounded-3xl ${item.bg} flex items-center justify-center mb-6`}
                                    >
                                        <Icon className={`w-12 h-12 ${item.iconColor}`} />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-2xl font-bold text-foreground mb-4">
                                        {item.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                        {item.description}
                                    </p>

                                    {/* BUTTON */}
                                    <Link to={item.path}>
                                        <Button
                                            className={`w-full bg-gradient-to-r ${item.color} text-white border-0 group rounded-xl`}
                                        >
                                            Open Module
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