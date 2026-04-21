import { Card, CardContent } from "../../ui/card";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Add <span className="bg-gradient-primary bg-clip-text text-transparent">Question</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <Card
          ref={ref}
          className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-hero p-8 sm:p-10">
            <CardContent className="text-center">
              <p className="mb-6 text-lg font-semibold text-foreground">Select Question Type</p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" className="group" onClick={() => navigate("/models/evaluationcontent/mcq")}>
                  MCQ
                </Button>

                <Button
                  variant="hero"
                  className="group"
                  onClick={() =>
                    navigate("/models/evaluationcontent/code-snippet")
                  }
                >
                  Code Snippet
                </Button>
                <Button variant="hero" className="group" onClick={() => navigate("/models/evaluationcontent/problem-statement")}>
                  Problem Statement
                </Button>
                <Button variant="hero" className="group" onClick={() => navigate("/models/evaluationcontent/mini-project")}>
                  Mini Project
                </Button>
                <Button variant="hero" className="group" onClick={() => navigate("/models/evaluationcontent/mock-question")}>
                  Mock Question
                </Button>             
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddQuestion;
