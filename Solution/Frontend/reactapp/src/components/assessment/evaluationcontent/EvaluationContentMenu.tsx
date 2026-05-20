import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const EvaluationContentMenu = () => {

  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();
  const storedUser = sessionStorage.getItem("current");

  const user = storedUser ? JSON.parse(storedUser) : {};

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Evaluation Content Menu
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-6xl mx-auto">
          <Card ref={ref} className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* SME */}
              {user.role_id === 4 && (
                <>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/updatequestion")
                    }
                  >
                    Update Questions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/viewquestion")
                    }
                  >
                    Questions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbyconcept")
                    }
                  >
                    Questions by Concept
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/insertquestion")
                    }
                  >
                    SME Insert Question
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbystatus")
                    }
                  >
                    View Questions by Status
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbytype")
                    }
                  >
                    View Questions by Type
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionsbyconceptid")
                    }
                  >
                    View Questions by Concept
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbydifficulty")
                    }
                  >
                    Question by Difficulty
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/GetQuestionsByDate")
                    }
                  >
                    Get Questions by Date
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </>
              )}

              {/* MENTOR */}
              {user.role_id === 3 && (
                <>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/updatequestion")
                    }
                  >
                    Update Questions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/viewquestion")
                    }
                  >
                    Questions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbyconcept")
                    }
                  >
                    Questions by Concept
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/insertquestion")
                    }
                  >
                    SME Insert Question
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbystatus")
                    }
                  >
                    View Questions by Status
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbytype")
                    }
                  >
                    View Questions by Type
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionsbyconceptid")
                    }
                  >
                    View Questions by Concept
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/questionbydifficulty")
                    }
                  >
                    Question by Difficulty
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/GetQuestionsByDate")
                    }
                  >
                    Get Questions by Date
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/ProjectByMentee")
                    }
                  >
                    Project by Mentee
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() =>
                      navigate("/models/evaluationcontent/ViewProjectInfo")
                    }
                  >
                    Project Info
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </>
              )}

            </div>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default EvaluationContentMenu;
