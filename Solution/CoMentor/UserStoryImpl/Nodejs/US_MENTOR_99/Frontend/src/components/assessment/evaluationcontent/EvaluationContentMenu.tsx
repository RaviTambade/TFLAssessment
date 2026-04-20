import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const EvaluationContentMenu = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Evaluation Content Menu
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-6xl mx-auto">
          <Card
            ref={ref}
            className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-hero p-6 sm:p-8">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/content-analysis")
                    }
                  >
                    Content Analysis
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/add-question")
                    }
                  >
                    Add Question
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/question-button")
                    }
                  >
                    Question Count
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() => navigate("/models/skilltaxonomy/languages")}
                  >
                    Languages
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/skilltaxonomy/questionbargraph")
                    }
                  >
                    Question Bar Graph
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/technology")
                    }
                  >
                    Technology
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/quick-statistics")
                    }
                  >
                    Overall Count
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button variant="hero" size="lg" className="group">
                    Assessment Reports
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/code-snippet")
                    }
                  >
                    code snippet
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questiontype")
                    }
                  >
                    Question Type
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

export default EvaluationContentMenu;
