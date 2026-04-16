import { Card, CardContent } from "../../ui/card";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const QuestionType = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
      <div className="container mx-auto px-4">
          
    
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Add{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Type
          </span>
        </h2>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto">
        <Card
          ref={ref}
          className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-hero p-8 sm:p-10">
                <CardContent className="text-center">
        
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="hero"
                  className="group"
                  onClick={() => navigate("/models/evaluationcontent/add-questiontype")}
                >
                  Add questionType
                </Button>

                <Button
                  variant="hero"
                  className="group"
                  onClick={() =>
                    navigate("/models/evaluationcontent/update-questiontype")
                  }
                >
                  update questionType
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuestionType;

