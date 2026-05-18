import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

type InterviewList = {
  interviewId:number;
  interviewer: number;
  title: string;
};

const UpcomingInterviews = () => {

  const [interviews, setInterviews] = useState<InterviewList[]>([]);

  const storedUser = sessionStorage.getItem("current");

  const user = storedUser ? JSON.parse(storedUser) : {};

  const navigate = useNavigate();
  useEffect(() => {
    fetchUpcomingInterviews();
  }, []);

  const fetchUpcomingInterviews = async () => {

    try {

      const response = await fetch(
        `http://localhost:8080/api/interview/upcoming/${user.userid}`
      );

      const data = await response.json();

      console.log(data);

      setInterviews(data);

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <section className="py-10 sm:py-14 bg-background min-h-screen">

      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">

            Upcoming{" "}

            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Interviews
            </span>

          </h2>

        </div>

        {/* Interview List */}
        <div className="max-w-3xl mx-auto space-y-3">

          {interviews.map((interview, index) => (

            <Card onClick={() =>
              navigate(`/models/interview/show-details-student/${interview.interviewId}`)
            }
              key={index}
              className="border-0 shadow-elegant overflow-hidden"
            >

              <div className="bg-gradient-hero p-3">

                <CardContent className="p-0">

                  <h3 className="text-sm font-medium text-foreground leading-relaxed">

                    {interview.title}

                  </h3>

                </CardContent>

              </div>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
};

export default UpcomingInterviews;