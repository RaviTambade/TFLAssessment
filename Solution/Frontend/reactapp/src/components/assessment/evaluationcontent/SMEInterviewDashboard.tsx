import React, { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

import {
  CalendarDays,
  Monitor,
  CheckCircle,
  Clock,
  Ban,
  Briefcase,
  User,
} from "lucide-react";

const interviewsData = [
  {
    interview_id: 101,
    scheduled_at: "2026-05-20 10:00 AM",
    mode: "Online",
    status: "SCHEDULED",
    title: "Frontend React Developer Interview",
    outcome: "Pending",
    created_at: "2026-05-15",
    interviewer: 501,
    student_id: 1001,
    description:
      "Technical interview for React developer role with coding round.",
  },
  {
    interview_id: 102,
    scheduled_at: "2026-05-18 02:30 PM",
    mode: "Offline",
    status: "COMPLETED",
    title: "Java Backend Technical Round",
    outcome: "Selected",
    created_at: "2026-05-10",
    interviewer: 502,
    student_id: 1002,
    description:
      "Interview based on Java, Spring Boot, REST API, and MySQL concepts.",
  },
  {
    interview_id: 103,
    scheduled_at: "2026-05-22 11:30 AM",
    mode: "Online",
    status: "CANCELED",
    title: "UI/UX Design Interview",
    outcome: "Canceled by HR",
    created_at: "2026-05-14",
    interviewer: 503,
    student_id: 1003,
    description:
      "Interview canceled due to interviewer availability issue.",
  },
  {
    interview_id: 104,
    scheduled_at: "2026-05-25 04:00 PM",
    mode: "Online",
    status: "SCHEDULED",
    title: "Full Stack Developer Interview",
    outcome: "Pending",
    created_at: "2026-05-16",
    interviewer: 504,
    student_id: 1004,
    description:
      "Full stack interview for MERN stack development role.",
  },
  {
    interview_id: 105,
    scheduled_at: "2026-05-12 09:00 AM",
    mode: "Offline",
    status: "COMPLETED",
    title: "Python Developer Interview",
    outcome: "Rejected",
    created_at: "2026-05-09",
    interviewer: 505,
    student_id: 1005,
    description:
      "Python interview including API and database questions.",
  },
];

const SMEInterviewDashboard = () => {
  const [selectedType, setSelectedType] =
    useState("");

  const [selectedInterview, setSelectedInterview] =
    useState(null);

  // Counts
  const totalInterviews = interviewsData.length;

  const upcomingInterviews = interviewsData.filter(
    (item) => item.status === "SCHEDULED"
  ).length;

  const scheduledInterviews = interviewsData.filter(
    (item) => item.status === "SCHEDULED"
  ).length;

  const completedInterviews = interviewsData.filter(
    (item) => item.status === "COMPLETED"
  ).length;

  const canceledInterviews = interviewsData.filter(
    (item) => item.status === "CANCELED"
  ).length;

  // Filter Logic
  const getFilteredData = () => {
    switch (selectedType) {
      case "TOTAL":
        return interviewsData;

      case "UPCOMING":
        return interviewsData.filter(
          (item) => item.status === "SCHEDULED"
        );

      case "SCHEDULED":
        return interviewsData.filter(
          (item) => item.status === "SCHEDULED"
        );

      case "COMPLETED":
        return interviewsData.filter(
          (item) => item.status === "COMPLETED"
        );

      case "CANCELED":
        return interviewsData.filter(
          (item) => item.status === "CANCELED"
        );

      default:
        return [];
    }
  };

  const filteredData = getFilteredData();

  return (
    <section className="py-16 sm:py-20 bg-background min-h-screen">

      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interview{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>

        </div>

        {/* Top Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">

          {/* Total */}
          <button
            onClick={() => {
              setSelectedType("TOTAL");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
          >
            <div className="flex justify-between items-start">

              <div>
                <p className="text-lg font-semibold opacity-90">
                  Total Interviews
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  {totalInterviews}
                </h2>
              </div>

              <Briefcase className="h-10 w-10 opacity-80" />
            </div>
          </button>

          {/* Upcoming */}
          <button
            onClick={() => {
              setSelectedType("UPCOMING");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-leftbg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
          >
            <div className="flex justify-between items-start">

              <div>
                <p className="text-lg font-semibold opacity-90">
                  Upcoming
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  {upcomingInterviews}
                </h2>
              </div>

              <Clock className="h-10 w-10 opacity-80" />
            </div>
          </button>

          {/* Scheduled */}
          <button
            onClick={() => {
              setSelectedType("SCHEDULED");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
          >
            <div className="flex justify-between items-start">

              <div>
                <p className="text-lg font-semibold opacity-90">
                  Scheduled
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  {scheduledInterviews}
                </h2>
              </div>

              <CalendarDays className="h-10 w-10 opacity-80" />
            </div>
          </button>

          {/* Completed */}
          <button
            onClick={() => {
              setSelectedType("COMPLETED");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
          >
            <div className="flex justify-between items-start">

              <div>
                <p className="text-lg font-semibold opacity-90">
                  Completed
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  {completedInterviews}
                </h2>
              </div>

              <CheckCircle className="h-10 w-10 opacity-80" />
            </div>
          </button>

          {/* Canceled */}
          <button
            onClick={() => {
              setSelectedType("CANCELED");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
          >
            <div className="flex justify-between items-start">

              <div>
                <p className="text-lg font-semibold opacity-90">
                  Canceled
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  {canceledInterviews}
                </h2>
              </div>

              <Ban className="h-10 w-10 opacity-80" />
            </div>
          </button>
        </div>

        {/* Interview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Card
                key={item.interview_id}
                className="border-0 rounded-3xl shadow-elegant overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                <div className="bg-gradient-hero p-6">

                  {/* Header */}
                  <div className="flex justify-between items-start mb-5">

                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mt-1">
                        Interview ID: {item.interview_id}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold text-white
                      ${
                        item.status === "COMPLETED"
                          ? "bg-green-500"
                          : item.status === "CANCELED"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-4 text-muted-foreground">

                    <div className="flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-primary" />
                      <span>{item.scheduled_at}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Monitor className="h-5 w-5 text-primary" />
                      <span>{item.mode}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item.outcome}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-primary" />
                      <span>
                        Interviewer ID: {item.interviewer}
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    variant="hero"
                    className="w-full mt-6 rounded-xl"
                    onClick={() =>
                      setSelectedInterview(item)
                    }
                  >
                    View Full Details
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              
            </div>
          )}
        </div>

        {/* Detailed View */}
        {selectedInterview && (
          <div className="mt-16">

            <Card className="border-0 rounded-3xl shadow-elegant overflow-hidden">

              <div className="bg-gradient-hero p-8">

                <div className="flex justify-between items-center mb-8">

                  <div>
                    <h2 className="text-3xl font-bold text-foreground">
                      Interview Details
                    </h2>

                    <p className="text-muted-foreground mt-2">
                      Detailed information about selected interview
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    onClick={() =>
                      setSelectedInterview(null)
                    }
                  >
                    Close
                  </Button>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground">
                        Interview ID
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.interview_id}
                      </h3>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground">
                        Title
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.title}
                      </h3>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground">
                        Status
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.status}
                      </h3>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground">
                        Mode
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.mode}
                      </h3>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground">
                        Scheduled At
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.scheduled_at}
                      </h3>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground">
                        Outcome
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.outcome}
                      </h3>
                    </CardContent>
                  </Card>
                </div>

                {/* Description */}
                <Card className="mt-8 rounded-3xl border-0 shadow-md">

                  <CardContent className="p-6">

                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Description
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {selectedInterview.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default SMEInterviewDashboard;