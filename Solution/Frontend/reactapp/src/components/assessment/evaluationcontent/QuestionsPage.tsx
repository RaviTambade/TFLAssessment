import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ArrowRight, BarChart3, CalendarDays, Star, Tags } from "lucide-react";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import QuestionByType from "./QuestionByType";
import QuestionByStatus from "./QuestionByStatus";
import QuestionByDifficulty from "./QuestionByDifficulty";
import GetQuestionsByDate from "./GetQuestionsByDate";
import Getallquestions from "./Getallquestions";

const dashboardItems = [
  {
    title: "Questions by Status",
    icon: BarChart3,
    color: "from-red-500 to-orange-500",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    title: "Questions by Type",
    icon: Tags,
    color: "from-red-500 to-orange-500",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    title: "Questions by Difficulty",
    icon: Star,
    color: "from-red-500 to-orange-500",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    title: "Questions by Date",
    icon: CalendarDays,
    color: "from-red-500 to-orange-500",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
];

const QuestionsPage = () => {

  const [selectedModule, setSelectedModule] = useState("");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section className="py-8 sm:py-8 bg-background min-h-screen">
        <div className="container mx-auto px-2">

          {/* HEADER */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Evaluation{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          {/* GRID */}
          <div
            ref={ref}
            className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {dashboardItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card
                  key={index}
                  onClick={() => setSelectedModule(item.title)}
                  className="group cursor-pointer border-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <CardContent className="p-2">

                    <div className="flex items-center justify-between mb-4">

                      <div>
                        <p className="text-gray-600 text-sm font-medium">
                          {item.title}
                        </p>

                      </div>

                      <Icon
                        className={`w-12 h-12 opacity-20 ${item.iconColor}`}
                      />
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${item.color} text-white border-0 rounded-xl mt-2`}
                    >
                      View
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* COMPONENTS DISPLAY BELOW */}

          <div className="mt-16">

            {selectedModule === "Questions by Status" && (
              <QuestionByStatus />
            )}

            {selectedModule === "Questions by Type" && (
              <QuestionByType />
            )}

            {selectedModule === "Questions by Difficulty" && (
              <QuestionByDifficulty />
            )}

            {selectedModule === "Questions by Date" && (
              <GetQuestionsByDate />
            )}

            <Getallquestions/>

          

          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionsPage;