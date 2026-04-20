import { useState } from "react";
import { Card,CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(false);

  const fetchQuestions = () => {
    fetch("http://localhost:8080/api/questions")
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then((data) => {
        setQuestions(Array.isArray(data) ? data : []);
        setShow(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Center Button */}
        <div className="flex justify-center mb-10">
          <Button variant="hero" onClick={fetchQuestions}>
            List Questions
          </Button>
        </div>

        {/* Table inside Card */}
        {show && (
          <Card className="border-0 shadow-elegant overflow-hidden">
            <CardContent className="p-0">

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">

                  {/* Header */}
                  <thead className="bg-gradient-hero text-white">
                    <tr>
                      <th className="p-4 text-sm sm:text-base text-primary font-semibold">Description</th>
                      <th className="p-4 text-sm sm:text-base text-primary font-semibold">Question Type</th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody>
                    {questions.map((q, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-primary/5 transition"
                      >
                        <td className="p-4 text-sm sm:text-base text-foreground">
                          {q.description}
                        </td>
                        <td className="p-4 text-sm sm:text-base text-foreground">
                          {q.questionType}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </CardContent>
          </Card>
        )}

      </div>
    </section>
  );
};

export default QuestionList;