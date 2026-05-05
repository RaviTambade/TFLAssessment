import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Bell, Users, Briefcase, TrendingUp, CheckCircle, AlertCircle, Calendar, Star } from "lucide-react";
import { WEBAPI_NODE_URL } from "@/lib/utils";
import RecruiterNotification from "./entities/RecruiterNotification";
import Candidate from "./entities/Candidate";
import JobOpening from "./entities/JobOpening";
import SkillRequirement from "./entities/SkillRequirement";

import  openings from "./data/jobopenings.json";
import  allCandidates from "./data/candidates.json";
import  allSkillRequirements from "./data/skillrequirements.json";

//function component for Employer Recruitment Dashboard - Transflower
const DashboardEmployer = () => {
    //parts
    // State for employer user data
    // Data members for recruitment pipeline
    // Helper functions for hiring metrics
    // Render functions for recruitment features

    //data members
   const[employerName, setEmployerName] = useState<string>("Tech Solutions Inc.");
   const[department, setDepartment] = useState<string>("Human Resources");
   const[profilePicture, setProfilePicture] = useState<string>("https://avatars.githubusercontent.com/u/12345678?v=4");

  // Recruiter Notifications
  const recruiterNotifications: RecruiterNotification[] = [
    {
      id: 1,
      title: "Top Candidate Available",
      message: "Priya Sharma (Full-Stack Developer) completed all assessments and is ready for interviews",
      type: "success",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Skill Gap Alert",
      message: "Limited candidates available with advanced DevOps expertise. Consider extending deadline",
      type: "warning",
      timestamp: "1 day ago",
      read: false,
    },
    {
      id: 3,
      title: "Interview Scheduled",
      message: "Ananya Desai scheduled for Backend Engineer position interview on May 5, 2026",
      type: "info",
      timestamp: "3 days ago",
      read: true,
    },
    {
      id: 4,
      title: "Offer Extended",
      message: "Rohit Kumar accepted offer for DevOps Engineer position. Onboarding to begin next week",
      type: "success",
      timestamp: "5 days ago",
      read: true,
    },
  ];

  // Candidate Pipeline - Recruitment Tracking
  const candidates: Candidate[] =allCandidates as Candidate[];

  // Job Openings and Hiring Pipeline
  const jobOpenings: JobOpening[] =openings as JobOpening[];

  // Skill Requirements and Coverage
  const skillRequirements: SkillRequirement[] =allSkillRequirements as SkillRequirement[];

  useEffect(() => {
    const apiURL = `${WEBAPI_NODE_URL}/employer/profile`;
        fetch(apiURL).then((response) => response.json()).then((data) => {
          setEmployerName(data.companyName);
          setDepartment(data.department);
          setProfilePicture(data.logo);
        });


  }, []);

  // Render the Employer Recruitment dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Recruitment Dashboard</h1>
          <h3 className="text-xl text-gray-700 mb-4">Welcome, {employerName} | {department}</h3>
          <p className="text-gray-600">Manage hiring pipeline, evaluate Transflower candidates, and build your technical team.</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Applications</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
                </div>
                <Users className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Open Positions</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">5</p>
                </div>
                <Briefcase className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Avg Skills Match</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">87.5%</p>
                </div>
                <Star className="w-12 h-12 text-yellow-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Offers Extended</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">3</p>
                </div>
                <TrendingUp className="w-12 h-12 text-red-500 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Recruiter Alerts and Job Openings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recruiter Notifications Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Recruitment Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recruiterNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      notification.type === "info"
                        ? "bg-blue-50 border-blue-400"
                        : notification.type === "success"
                        ? "bg-green-50 border-green-400"
                        : notification.type === "warning"
                        ? "bg-yellow-50 border-yellow-400"
                        : "bg-red-50 border-red-400"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-2 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Job Openings Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Active Job Openings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{job.jobTitle}</p>
                        <p className="text-sm text-gray-600 mt-1">Department: {job.department}</p>
                        <div className="grid grid-cols-4 gap-3 mt-3 text-sm">
                          <div>
                            <p className="text-gray-500 text-xs">Shortlisted</p>
                            <p className="font-bold text-gray-900">{job.candidatesShortlisted}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Interviewed</p>
                            <p className="font-bold text-gray-900">{job.candidatesInterviewed}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Offers</p>
                            <p className="font-bold text-green-600">{job.offersExtended}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Open Slots</p>
                            <p className="font-bold text-orange-600">{job.openPositions}</p>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.status === "active" ? "bg-green-100 text-green-800" :
                        job.status === "closed" ? "bg-gray-100 text-gray-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Candidate Profiles and Skill Coverage */}
          <div className="space-y-8">
            {/* Candidate Shortlist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Candidate Profiles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {candidates.slice(0, 3).map((candidate) => (
                  <div key={candidate.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{candidate.name}</p>
                        <p className="text-xs text-gray-600">{candidate.appliedPosition}</p>
                      </div>
                      {candidate.interviewStatus === "completed" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : candidate.interviewStatus === "pending" ? (
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                      ) : (
                        <Calendar className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          candidate.skillsMatch >= 90 ? "bg-green-500" :
                          candidate.skillsMatch >= 75 ? "bg-blue-500" :
                          "bg-yellow-500"
                        }`}
                        style={{ width: `${candidate.skillsMatch}%` }}
                      />
                    </div>
                    <div className="flex justify-between">
                      <p className="text-xs font-semibold text-gray-900">
                        Skills: {candidate.skillsMatch}% | Score: {candidate.assessmentScore}%
                      </p>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        candidate.interviewStatus === "completed" ? "bg-green-100 text-green-800" :
                        candidate.interviewStatus === "scheduled" ? "bg-blue-100 text-blue-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {candidate.interviewStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skill Requirements & Coverage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Skill Coverage Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {skillRequirements.map((skill, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{skill.skill}</p>
                        <p className="text-xs text-gray-600">{skill.requiredLevel} required</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        skill.fillPercentage >= 80 ? "bg-green-100 text-green-800" :
                        skill.fillPercentage >= 50 ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {skill.fillPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${
                          skill.fillPercentage >= 80 ? "bg-green-500" :
                          skill.fillPercentage >= 50 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${skill.fillPercentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {skill.candidatesCovered} of {skill.totalRequired} positions filled
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardEmployer;