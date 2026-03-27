import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { Plus, Pencil, Trash2, List } from "lucide-react";

const Concept = () => {
    const { ref, isVisible } = useScrollAnimation();
    const navigate = useNavigate();

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Concept Management
                    </h2>
                   
                </div>

                {/* Card */}
                <div className="max-w-5xl mx-auto">
                    <Card
                        ref={ref}
                        className={`border-0 shadow-elegant transition-all duration-1000 ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="bg-gradient-hero p-8">
                            <CardContent>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                    <Button
                                        variant="hero"
                                        size="lg"
                                        className="group"
                                        onClick={() => navigate("/concept/add")}
                                    >
                                        <Plus className="mr-2 h-4 w-4" />
                                        Add Concept
                                    </Button>

                                    <Button
                                        variant="hero"
                                        size="lg"
                                        className="group"
                                        onClick={() => navigate("/concept/display")}
                                    >
                                        <List className="mr-2 h-4 w-4" />
                                        View Concepts
                                    </Button>

                                    <Button
                                        variant="hero"
                                        size="lg"
                                        className="group"
                                        onClick={() => navigate("/concept/update")}
                                    >
                                        <Pencil className="mr-2 h-4 w-4" />
                                        Update Concept
                                    </Button>

                                    <Button
                                        variant="hero"
                                        size="lg"
                                        className="group"
                                        onClick={() => navigate("/concept/delete")}
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Delete Concept
                                    </Button>

                                </div>

                            </CardContent>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default Concept;