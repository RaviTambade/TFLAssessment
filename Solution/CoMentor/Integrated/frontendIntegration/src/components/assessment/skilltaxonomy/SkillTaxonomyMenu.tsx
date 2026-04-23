import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SkillTaxonomyMenu = () => {
    const { ref, isVisible } = useScrollAnimation();
    const navigate = useNavigate();

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Skill Taxonomy Menu
                      
                    </h2>

                </div>

                {/* Card */}
                <div className="max-w-6xl mx-auto">
                    <Card
                        ref={ref}
                        className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="bg-gradient-hero p-6 sm:p-8">
                            <CardContent>
                   <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/skilltaxonomy/AddRuntime")
                    }
                  >
                   add Runtime
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/skilltaxonomy/AddConcept")
                    }
                  >
                   concept view/add
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                            </CardContent>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default SkillTaxonomyMenu;
