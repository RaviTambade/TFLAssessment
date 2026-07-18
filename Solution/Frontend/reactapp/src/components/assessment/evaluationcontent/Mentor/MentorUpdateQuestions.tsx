import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  FilePenLine,
  BookOpen,
  Database,
  ClipboardList,
} from "lucide-react";

const MentorQuestionManagement = () => {
  const navigate = useNavigate();

  const menus = [
    {
      id: 1,
      title: "Question Bank",
      icon: Database,
      path: "/models/evaluationcontent/GetAllQuestions",
    },
    {
      id: 2,
      title: "Update Questions",
      icon: FilePenLine,
      path: "/models/evaluationcontent/updatequestion",
    },
    {
      id: 3,
      title: "Review Questions",
      icon: ClipboardList,
      path: "/mentor/review-questions",
    },
    {
      id: 4,
      title: "Questions by Concept",
      icon: BookOpen,
      path: "/models/evaluationcontent/questionbyconcept",
    },
  ];

  const handleQuestionClick = (id: number) => {
        navigate(`/models/evaluationcontent/questiondetails/${id}`);
    };

  return (
    <div className="min-h-screen bg-background py-2">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Mentor{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Question Management
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <Card
                key={menu.id}
                onClick={() => navigate(menu.path)}
                className="cursor-pointer border-0 shadow-elegant hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <CardContent className="flex flex-col items-center text-center p-10">

                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3">
                    {menu.title}
                  </h2>


                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default MentorQuestionManagement;