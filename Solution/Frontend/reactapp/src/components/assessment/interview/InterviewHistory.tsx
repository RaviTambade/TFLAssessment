import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type InterviewHistory = {
  interviewId: number;
  title: string;
};

const InterviewHistory = () => {
  const [history, setHistory] = useState<InterviewHistory[]>([]);

  const storedUser = sessionStorage.getItem("current");
  const user = storedUser ? JSON.parse(storedUser) : {};

  useEffect(() => {
    fetchInterviewHistory();
  }, []);

  const fetchInterviewHistory = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/interview/history/${user.userid}/role/${user.role_id}`
      );

      const data = await response.json();

      setHistory(data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interview{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              History
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View all your previous interview records.
          </p>
        </div>

        {/* History List */}
        <div className="max-w-4xl mx-auto space-y-4">

          {history.length > 0 ? (
            history.map((item) => (
              <Card
                key={item.interviewId}
                className="border-0 shadow-elegant overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <div className="bg-gradient-hero p-5">
                  <CardContent className="p-0">

                    <div className="flex items-center justify-between">

                      {/* Title */}
                      <div>

                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>

                    </div>

                  </CardContent>
                </div>
              </Card>
            ))
          ) : (
            <Card className="border-0 shadow-elegant">
              <div className="bg-gradient-hero p-6 text-center">
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-lg">
                    No interview history found.
                  </p>
                </CardContent>
              </div>
            </Card>
          )}

        </div>
      </div>
    </section>
  );
};

export default InterviewHistory;