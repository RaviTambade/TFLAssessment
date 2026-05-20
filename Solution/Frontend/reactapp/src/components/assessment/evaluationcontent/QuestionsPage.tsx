import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ArrowRight, BarChart3, CalendarDays, Star, Tags } from "lucide-react";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import QuestionByType from "./QuestionByType";
import QuestionByStatus from "./QuestionByStatus";
import QuestionByDifficulty from "./QuestionByDifficulty";
import GetQuestionsByDate from "./GetQuestionsByDate";

const dashboardItems = [
  {
    title: "Questions by Status",
    description: "Filter questions based on current status.",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    iconColor: "text-violet-500",
  },
  {
    title: "Questions by Type",
    description: "View questions categorized by type.",
    icon: Tags,
    color: "from-cyan-500 to-sky-500",
    iconColor: "text-cyan-500",
  },
  {
    title: "Questions by Difficulty",
    description: "Analyze questions based on difficulty level.",
    icon: Star,
    color: "from-pink-500 to-rose-500",
    iconColor: "text-pink-500",
  },
  {
    title: "Questions by Date",
    description: "Search and filter questions using dates.",
    icon: CalendarDays,
    color: "from-indigo-500 to-blue-500",
    iconColor: "text-indigo-500",
  },
];

const QuestionsPage = () => {
  const [selectedModule, setSelectedModule] = useState("");

  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section className="py-16 sm:py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Evaluation{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage and organize evaluation questions efficiently.
            </p>
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
                  <CardContent className="p-6">

                    <div className="flex items-center justify-between mb-4">

                      <div>
                        <p className="text-gray-600 text-sm font-medium">
                          {item.title}
                        </p>

                        <p className="text-gray-500 text-xs mt-1 max-w-[140px]">
                          {item.description}
                        </p>
                      </div>

                      <Icon
                        className={`w-12 h-12 opacity-20 ${item.iconColor}`}
                      />
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${item.color} text-white border-0 rounded-xl mt-2`}
                    >
                      Open Module

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

          </div>

        </div>
      </section>
    </>
  );
};

export default QuestionsPage;