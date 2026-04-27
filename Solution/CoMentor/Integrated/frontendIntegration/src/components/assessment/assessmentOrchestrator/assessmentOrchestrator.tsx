import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AssessmentOrchestrator = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-elegant overflow-hidden">
          <div className="bg-gradient-hero p-6 sm:p-8">
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => navigate("/upcoming-assessment")}
                >
                  Upcoming Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                 <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => navigate("/delete-assessment")}
                >
                  All Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => navigate("/models/create-test")}
                >
                  Create Test
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentOrchestrator;

