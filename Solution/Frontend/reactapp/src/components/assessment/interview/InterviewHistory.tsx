import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Item } from "@radix-ui/react-toggle-group";

type InterviewHistory = {
  interviewId: number;
  title: string;
};

const InterviewHistory = () => {
  const [history, setHistory] = useState<InterviewHistory[]>([]);
  const navigate=useNavigate();
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
        </div>

        {/* History List */}
       <div className="max-w-3xl mx-auto space-y-3">

          {history.length > 0 ? (
            history.map((item) => (
              <Card onClick={()=>navigate(`/models/interview/show-details-student/${item.interviewId}`)}
                key={item.interviewId}
                className="border-0 shadow-elegant overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <div className="bg-gradient-hero p-5">
                  <CardContent className="p-0">

                    <div className="flex items-center justify-between">

                      {/* Title */}
                      <div>

                        <h3 className="text-sm font-medium text-foreground leading-relaxed">

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