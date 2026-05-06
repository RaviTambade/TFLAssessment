import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const buttons = [
  { label: "Evaluation Content Management", path: "/models/evaluationcontent/componentmenu" },
  { label: "Question by Status", path: "/models/evaluationcontent/questionbystatus" },
];

const Assessment = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            System{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Assessment
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card
            ref={ref}
            className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-hero p-6 sm:p-8">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {buttons.map(({ label, path }) => (
                    <Button
                      key={path}
                      variant="hero"
                      size="lg"
                      className="group"
                      onClick={() => navigate(path)}
                    >
                      {label}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Assessment;