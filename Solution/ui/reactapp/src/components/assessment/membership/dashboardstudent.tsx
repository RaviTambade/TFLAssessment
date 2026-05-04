import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Bell, Calendar, Award, TrendingUp, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { WEBAPI_NODE_URL } from "@/lib/utils";
import Notification from "./entities/StudentNotifications";
import ScheduledAssessment from "./entities/ScheduledAssessment";
import Result from "./entities/StudentResults";
import LearningCurveData from "./entities/LearningCurveData";
import AllNotification from "./data/studentNotification.json";
import AllScheduledAssessments from "./data/scheduledassessment.json";
import StudentResults from "./data/studentresults.json";






//function component for dashboard
const DashboardStudent = () => {
    //parts
    // State 
    // helper functions
    // hook functions
    // render functions



    //data members
   const[name, setName] = useState<string>("Ravi Tambade");
   const[role, setRole] = useState<string>("Chief Mentor");

   const[profilePicture, setProfilePicture] = useState<string>("https://avatars.githubusercontent.com/u/12345678?v=4");
  // Hardcoded Notifications Data
  const notifications: Notification[] = AllNotification as Notification[];

  // Hardcoded Scheduled Assessments Data
  const scheduledAssessments: ScheduledAssessment[] = AllScheduledAssessments as ScheduledAssessment[]; 
   

  // Hardcoded Results Data
  const results: Result[] = StudentResults as Result[];

  // Hardcoded Learning Curve Data
  const learningCurveData: LearningCurveData[] = [
    { week: "Week 1", score: 65, assessmentCount: 2, averageTime: 45 },
    { week: "Week 2", score: 72, assessmentCount: 3, averageTime: 50 },
    { week: "Week 3", score: 78, assessmentCount: 3, averageTime: 48 },
    { week: "Week 4", score: 82, assessmentCount: 4, averageTime: 55 },
    { week: "Week 5", score: 85, assessmentCount: 3, averageTime: 52 },
    { week: "Current", score: 88, assessmentCount: 2, averageTime: 58 },
  ];


  useEffect(() => {
    const apiURl = `${WEBAPI_NODE_URL}/user/profile`;
        fetch(apiURl).then((response) => response.json()).then((data) => {
          setName(data.name);
          setRole(data.role);
          setProfilePicture(data.profilePicture);
        });


  }, []);

  // Render the dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <h3 className="text-xl text-gray-700 mb-4">Hello, {name} ({role})</h3>
          <p className="text-gray-600">Welcome back! Here's your learning progress and upcoming assessments.</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Assessments Completed</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
                </div>
                <Award className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Average Score</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">80.25%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Upcoming Assessments</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">3</p>
                </div>
                <Calendar className="w-12 h-12 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Unread Notifications</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
                </div>
                <Bell className="w-12 h-12 text-red-500 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Notifications and Scheduled Assessments */}
          <div className="lg:col-span-2 space-y-8">
            {/* Notifications Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
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

            {/* Scheduled Assessments Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Scheduled Assessments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {scheduledAssessments.map((assessment) => (
                  <div key={assessment.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{assessment.name}</p>
                        <p className="text-sm text-gray-600 mt-1">Subject: {assessment.subject}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {assessment.scheduledDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {assessment.duration} mins
                          </span>
                          <span>{assessment.totalQuestions} questions</span>
                        </div>
                      </div>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                        Upcoming
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Results and Learning Curve */}
          <div className="space-y-8">
            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Recent Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {results.slice(0, 3).map((result) => (
                  <div key={result.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-gray-900 text-sm">{result.assessmentName}</p>
                      {result.status === "pass" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{result.completedDate}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          result.status === "pass" ? "bg-green-500" : "bg-red-500"
                        }`}
                        style={{ width: `${result.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-900 mt-2">
                      {result.score}/{result.totalScore} ({result.percentage}%)
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Curve Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {learningCurveData.map((data, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{data.week}</p>
                        <p className="text-sm font-bold text-blue-600">{data.score}%</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all"
                          style={{ width: `${data.score}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500">
                        {data.assessmentCount} assessments • Avg {data.averageTime} mins
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStudent;