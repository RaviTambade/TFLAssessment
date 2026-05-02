import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";


const actions = [
  {
    label: "Upcoming Assessment",
    path: "/models/upcoming-assessment",
    roles: ["Mentor", "Student"],
  },
  {
    label: "All Assessment",
    path: "/models/delete-assessment",
    roles: ["Admin"],
  },
  {
    label: "Create Test",
    path: "/models/create-test",
    roles: ["SME"],
  },
  {
    label: "Assign Assessment",
    path: "/models/assign-assessment",
    roles: ["Admin"],
  },
  {
    label: "Applying Assessment",
    path: "/models/apply-assessment",
    roles: ["Student"],
  },
];

const AssessmentOrchestrator = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setRole(user.rolename);
    }
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-elegant overflow-hidden">
          <div className="bg-gradient-hero p-6 sm:p-8">
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => navigate("/models/upcoming-assessment")}
                >
                  Upcoming Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                 <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => navigate("/models/all-assessment")}
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
                
                 <Button
                variant="hero"
                  size="lg"
                  className="group"

                  onClick={() => navigate("/models/assign-assessment")}
                >
                  Assign Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                

                <Button
                variant="hero"
                  size="lg"
                  className="group"

                  onClick={() => navigate("/models/apply-assessment")}
                >
                  Applying Assessment
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
