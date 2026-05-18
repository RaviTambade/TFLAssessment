import React, { useEffect, useState } from "react";
import axios from "axios";

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

const SMEInterviewDashboard = () => {

  const [interviewsData, setInterviewsData] =
    useState([]);

  const [selectedType, setSelectedType] =
    useState("");

  const [selectedInterview, setSelectedInterview] =
    useState(null);

  useEffect(() => {

    fetchInterviews();

  }, []);

  const fetchInterviews = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/interview"
      );

      setInterviewsData(response.data);

    } catch (error) {

      console.log(error);
    }
  };


  const totalInterviews =interviewsData.length;

  const upcomingInterviews =interviewsData.filter((item) => item.status === "SCHEDULED").length;

  const scheduledInterviews =interviewsData.filter((item) => item.status === "SCHEDULED").length;

  const completedInterviews =
    interviewsData.filter(
      (item) => item.status === "COMPLETED"
    ).length;

  const canceledInterviews =
    interviewsData.filter(
      (item) => item.status === "CANCELED"
    ).length;

  // =========================================
  // FILTER LOGIC
  // =========================================
  const getFilteredData = () => {

    switch (selectedType) {

      case "TOTAL":
        return interviewsData;

      case "UPCOMING":
        return interviewsData.filter(
          (item) =>
            item.status === "SCHEDULED"
        );

      case "SCHEDULED":
        return interviewsData.filter(
          (item) =>
            item.status === "SCHEDULED"
        );

      case "COMPLETED":
        return interviewsData.filter(
          (item) =>
            item.status === "COMPLETED"
        );

      case "CANCELED":
        return interviewsData.filter(
          (item) =>
            item.status === "CANCELED"
        );

      default:
        return [];
    }
  };

  const filteredData =
    getFilteredData();

  return (
    <section className="py-16 sm:py-20 bg-background min-h-screen">

      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">

            Interview{" "}

            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </span>

          </h2>
        </div>

        {/* TOP BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">

          {/* TOTAL */}
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

          {/* UPCOMING */}
          <button
            onClick={() => {
              setSelectedType("UPCOMING");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
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

          {/* SCHEDULED */}
          <button
            onClick={() => {
              setSelectedType("SCHEDULED");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
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

          {/* COMPLETED */}
          <button
            onClick={() => {
              setSelectedType("COMPLETED");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
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

          {/* CANCELED */}
          <button
            onClick={() => {
              setSelectedType("CANCELED");
              setSelectedInterview(null);
            }}
            className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl p-6 text-white shadow-elegant hover:scale-105 transition-all duration-300 text-left"
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

        {/* INTERVIEW CARDS */}
        {selectedType && (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {filteredData.map((item) => (

              <Card
                key={item.interviewId}
                className="border-0 rounded-3xl shadow-elegant overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >

                <div className="bg-gradient-hero p-6">

                  {/* HEADER */}
                  <div className="flex justify-between items-start mb-5">

                    <div>

                      <h3 className="text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mt-1">
                        Interview ID : {item.interviewId}
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

                  {/* INFO */}
                  <div className="space-y-4 text-muted-foreground">

                    <div className="flex items-center gap-3">

                      <CalendarDays className="h-5 w-5 text-primary" />

                      <span>
                        {item.scheduleDate}
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <Monitor className="h-5 w-5 text-primary" />

                      <span>
                        {item.mode}
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <User className="h-5 w-5 text-primary" />

                      <span>
                        {item.interviewer}
                      </span>

                    </div>

                  </div>

                  {/* BUTTON */}
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
            ))}
          </div>
        )}

        {/* DETAILS */}
        {selectedInterview && (

          <div className="mt-16">

            <Card className="border-0 rounded-3xl shadow-elegant overflow-hidden">

              <div className="bg-gradient-hero p-8">

                <div className="flex justify-between items-center mb-8">

                  <div>

                    <h2 className="text-3xl font-bold text-foreground">
                      Interview Details
                    </h2>

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

                {/* DETAILS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">

                      <p className="text-sm text-muted-foreground">
                        Interview ID
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.interviewId}
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
                        Schedule Date
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.scheduleDate}
                      </h3>

                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-0 shadow-md">
                    <CardContent className="p-5">

                      <p className="text-sm text-muted-foreground">
                        Interviewer
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {selectedInterview.interviewer}
                      </h3>

                    </CardContent>
                  </Card>

                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default SMEInterviewDashboard;