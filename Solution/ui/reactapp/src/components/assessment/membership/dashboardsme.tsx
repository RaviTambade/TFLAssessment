import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Bell, Users, Target, TrendingUp, CheckCircle, AlertCircle, BarChart3, FileText } from "lucide-react";
import { WEBAPI_NODE_URL } from "@/lib/utils";
import AssessmentMetrics from "./entities/AssessmentMetrics";
import CandidatePerformance from "./entities/CandidatePerformance";
import SkillGapAnalysis from "./entities/SkillGapAnalysis";
import SMENotification from "./entities/SMENotification";
import SmeNotifications from "./data/smeNotifications.json";
import CandidatePerformances from "./data/candidatePerformance.json";
import AssessmentMetric from "./data/assessmentMetrics.json";
import SkillGapAnalyse from "./data/SkillGapAnalysis.json";

//function component for SME Dashboard
const DashboardSME = () => {
    //parts
    // State for SME user data
    // Data members for candidate insights
    // Helper functions for analytics
    // Render functions for SME features

    //data members
   const[smeName, setSMEName] = useState<string>("Ravi Tambade");
   const[department, setDepartment] = useState<string>("Chief Mentor");
   const[profilePicture, setProfilePicture] = useState<string>("https://avatars.githubusercontent.com/u/12345678?v=4");

  // SME-specific Notifications
  const smeNotifications: SMENotification[] = SmeNotifications as SMENotification[];

  // Candidate Performance Overview
  const candidatePerformance: CandidatePerformance[] =CandidatePerformances as CandidatePerformance[] ;

  // Assessment Metrics
  const assessmentMetrics: AssessmentMetrics[] = AssessmentMetric as AssessmentMetrics[];

  // Skill Gap Analysis
  const skillGapAnalysis: SkillGapAnalysis[] = SkillGapAnalyse as SkillGapAnalysis[] ;

  useEffect(() => {
    const apiURL = `${WEBAPI_NODE_URL}/sme/profile`;
        fetch(apiURL).then((response) => response.json()).then((data) => {
          setSMEName(data.name);
          setDepartment(data.department);
          setProfilePicture(data.profilePicture);
        });


  }, []);

  // Render the SME dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">SME Dashboard</h1>
          <h3 className="text-xl text-gray-700 mb-4">Welcome, {smeName} ({department})</h3>
          <p className="text-gray-600">Manage assessments, monitor candidate performance, and identify skill gaps across your cohort.</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Candidates</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">48</p>
                </div>
                <Users className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Assessments Created</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">12</p>
                </div>
                <FileText className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Avg Cohort Score</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">75.8%</p>
                </div>
                <Target className="w-12 h-12 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Skill Gaps Identified</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
                </div>
                <BarChart3 className="w-12 h-12 text-red-500 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: SME Notifications and Assessment Metrics */}
          <div className="lg:col-span-2 space-y-8">
            {/* SME Notifications Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  SME Alerts & Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {smeNotifications.map((notification) => (
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

            {/* Assessment Metrics Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Assessment Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {assessmentMetrics.map((assessment) => (
                  <div key={assessment.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{assessment.assessmentName}</p>
                        <p className="text-sm text-gray-600 mt-1">Subject: {assessment.subject}</p>
                        <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                          <div>
                            <p className="text-gray-500 text-xs">Candidates</p>
                            <p className="font-bold text-gray-900">{assessment.totalCandidates}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Avg Score</p>
                            <p className="font-bold text-gray-900">{assessment.averageScore}%</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Pass Rate</p>
                            <p className="font-bold text-green-600">{assessment.passRate}%</p>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        assessment.difficultyLevel === "beginner" ? "bg-green-100 text-green-800" :
                        assessment.difficultyLevel === "intermediate" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {assessment.difficultyLevel}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Candidate Performance and Skill Gaps */}
          <div className="space-y-8">
            {/* Top Performer Candidates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Candidate Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {candidatePerformance.slice(0, 3).map((candidate) => (
                  <div key={candidate.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{candidate.candidateName}</p>
                        <p className="text-xs text-gray-600">{candidate.email}</p>
                      </div>
                      {candidate.status === "excellent" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : candidate.status === "needsImprovement" ? (
                        <AlertCircle className="w-4 h-4 text-red-600" />
                      ) : (
                        <Target className="w-4 h-4 text-yellow-600" />
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          candidate.status === "excellent" ? "bg-green-500" :
                          candidate.status === "good" ? "bg-blue-500" :
                          candidate.status === "average" ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${candidate.averageScore}%` }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-900">
                      Avg Score: {candidate.averageScore}% ({candidate.assessmentsTaken} completed)
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skill Gap Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Priority Skill Gaps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {skillGapAnalysis.map((gap, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-900">{gap.skill}</p>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        gap.priority === "high" ? "bg-red-100 text-red-800" :
                        gap.priority === "medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {gap.priority}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span>{gap.candidatesLacking} candidates affected</span>
                      <span>Avg: {gap.averagePerformance}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${
                          gap.priority === "high" ? "bg-red-500" :
                          gap.priority === "medium" ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${gap.averagePerformance}%` }}
                      />
                    </div>
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

export default DashboardSME;