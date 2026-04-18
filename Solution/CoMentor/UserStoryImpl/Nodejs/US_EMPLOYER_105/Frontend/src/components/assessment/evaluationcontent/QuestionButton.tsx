import React from "react";
import { Card } from "../../ui/card";

const QuestionButton: React.FC = () => {
  const buttons = [
    { label: "MCQ Questions", count: 200 },
    { label: "Coding", count: 60 },
    { label: "Problem Statement", count: 130 },
    { label: "Mock Questions", count: 150 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {buttons.map((item, index) => (
            <Card
              key={index}
              className="cursor-pointer border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-gradient-primary text-white"
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">
                  {item.label}
                </h3>
                <div className="inline-block bg-white text-primary font-bold px-4 py-2 rounded-full">
                  {item.count}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionButton;