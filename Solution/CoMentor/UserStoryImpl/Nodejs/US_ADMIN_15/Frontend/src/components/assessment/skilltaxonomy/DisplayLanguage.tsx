import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { Eye, Edit, Trash2 } from "lucide-react";

const DisplayLanguages = () => {
    const { ref, isVisible } = useScrollAnimation();
    const navigate = useNavigate();

    const languages = [
        { id: 1, name: "Java", status: "Active" },
        { id: 2, name: "Python", status: "Active" },
        { id: 3, name: "NodeJS", status: "Inactive" },
    ];

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Display Languages
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Card
                        ref={ref}
                        className={`border-0 shadow-elegant transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="bg-gradient-hero p-8">
                            <CardContent className="space-y-6">

                                {languages.map((language) => (
                                    <div
                                        key={language.id}
                                        className="bg-background rounded-xl p-5 shadow flex justify-between items-center"
                                    >
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {language.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Status: {language.status}
                                            </p>
                                        </div>

                                        <div className="flex gap-3">
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                onClick={() => navigate(`/models/skilltaxonomy/languages/display/${language.id}`)}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>

                                            <Button
                                                size="icon"
                                                variant="outline"
                                                onClick={() => navigate(`/models/skilltaxonomy/languages/edit/${language.id}`)}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </Button>

                                            <Button
                                                size="icon"
                                                variant="destructive"
                                                onClick={() => navigate(`/models/skilltaxonomy/languages/delete/${language.id}`)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                            </CardContent>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default DisplayLanguages;