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
    path: "/models/all-assessment",
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
    const userData = sessionStorage.getItem("current");
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
              <div className="grid grid-cols-1 gap-6">
                {actions
                  .filter((action) => role && action.roles.includes(role))
                  .map((action) => (
                    <Button
                      key={action.label}
                      variant="hero"
                      size="lg"
                      className="group"
                      onClick={() => navigate(action.path)}
                    >
                      {action.label}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ))}
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentOrchestrator;
