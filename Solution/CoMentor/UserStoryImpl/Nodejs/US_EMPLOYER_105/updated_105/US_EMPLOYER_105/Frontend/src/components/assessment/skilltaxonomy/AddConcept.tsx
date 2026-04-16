import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

const AddConcept = () => {
    const navigate = useNavigate();
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">

                <Card
                    ref={ref}
                    className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="bg-gradient-hero p-6 sm:p-10">

                        <CardContent className="space-y-6">

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                    Add New Concept
                                </h2>
                            </div>

                            {/* Concept Name */}
                            <div className="space-y-2">
                                <Label>Concept Name</Label>
                                <Input placeholder="Enter concept name" />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter description"
                                    className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4 pt-4">
                                <Button variant="outline" onClick={() => navigate(-1)}>
                                    Cancel
                                </Button>

                                <Button variant="hero">
                                    Save Concept
                                </Button>
                            </div>

                        </CardContent>
                    </div>
                </Card>

            </div>
        </section>
    );
};

export default AddConcept;