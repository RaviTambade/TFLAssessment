import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  CalendarDays,
  User,
  Video,
  GraduationCap,
  FileText,
} from "lucide-react";

type ScheduleInterview = {
  scheduleAt: string;
  mode: string;
  title: string;
  createdAt: string;
  interviewer: number;
  studentId: number;
};

const ScheduleInterview = () => {
  const [formData, setFormData] = useState<ScheduleInterview>({
    scheduleAt: "",
    mode: "",
    title: "",
    createdAt: "",
    interviewer: 0,
    studentId: 0,
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Schedule Interview Component Loaded");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "interviewer" || name === "studentId"
          ? Number(value)
          : value,
    }));
  };

  const scheduleInterview = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/interview/schedule",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("Interview Scheduled Successfully");

        setFormData({
          scheduleAt: "",
          mode: "",
          title: "",
          createdAt: "",
          interviewer: 0,
          studentId: 0,
        });
      } else {
        setMessage("Failed To Schedule Interview");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something Went Wrong");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scheduleInterview();
  };

  return (
    <section className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Schedule{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Interview
            </span>
          </h1>
        </div>

        {/* Card */}
        <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-8">
            <CardContent>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Title */}
                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Interview Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter Interview Title"
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Schedule Date */}
                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    Schedule Date & Time
                  </label>

                  <input
                    type="datetime-local"
                    name="scheduleAt"
                    value={formData.scheduleAt}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Mode */}
                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Interview Mode
                  </label>

                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Mode</option>
                    <option value="ONLINE">ONLINE</option>
                    <option value="OFFLINE">OFFLINE</option>
                  </select>
                </div>

                {/* Interviewer */}
                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Interviewer ID
                  </label>

                  <input
                    type="number"
                    name="interviewer"
                    value={formData.interviewer}
                    onChange={handleChange}
                    placeholder="Enter Interviewer ID"
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Student */}
                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Student ID
                  </label>

                  <input
                    type="number"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Enter Student ID"
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                {/* Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full rounded-xl py-6 text-lg font-semibold"
                  >
                    Schedule Interview
                  </Button>
                </div>

                {/* Message */}
                {message && (
                  <div className="text-center">
                    <p className="text-primary font-medium">
                      {message}
                    </p>
                  </div>
                )}

              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ScheduleInterview;