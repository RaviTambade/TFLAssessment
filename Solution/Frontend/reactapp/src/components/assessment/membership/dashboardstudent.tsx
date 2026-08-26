import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Bell, Calendar, Award, TrendingUp, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { WEBAPI_DOTNET_URL,WEBAPI_JAVA_URL } from "@/lib/utils";
import Notification from "./entities/Notification";
import ScheduledAssessment from "./entities/ScheduledAssessment";
import UpcomingAssessmentApiResponse from "./entities/UpcomingAssessmentApiResponse";
import Result from "./entities/StudentResult";
import LearningCurveData from "./entities/LearningCurveData";

const DashboardStudent = () => {
   
  const navigate= useNavigate();
  
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [performance, setPerformance] = useState({totalCompletedAssessments: 0,averageScore: 0});
  const [results, setResultsData] = useState<Result[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [profilePicture, setProfilePicture] = useState<string>("https://avatars.githubusercontent.com/u/12345678?v=4");
  const [scheduledAssessments, setScheduledAssessments] = useState<ScheduledAssessment[]>([]);
  const [upcomingCount, setUpcomingCount] = useState<number>(0);
  const [learningCurveData, setLearningCurve] = useState<LearningCurveData[]>([]);

  useEffect(() => {
  const currentUser = sessionStorage.getItem("current");
  if (currentUser) {
    const user = JSON.parse(currentUser);
    console.log(user);
    const studentId = user.userid;

  fetch(`${WEBAPI_DOTNET_URL}/Students/performance/${studentId}`)
  .then((response) => response.json())
  .then((data) => {
  setPerformance(data);
  })
  .catch((error) => console.error(error));

  fetch(`${WEBAPI_DOTNET_URL}/Assessment/upcoming/${studentId}`)
  .then((response) => response.json())
  .then((data: UpcomingAssessmentApiResponse[]) => {
  const mappedAssessments: ScheduledAssessment[] = (data || []).map((item, index) => ({
        id: item.assessmentId ?? index + 1,
        name: item.assessmentName ?? "Assessment",
        subject: "Assessment",
        scheduledDate: item.scheduledAt ? new Date(item.scheduledAt).toLocaleDateString() : "TBD",
        duration: item.duration ?? 0,
        totalQuestions: 0,
        status: "upcoming",
  }));
  setScheduledAssessments(mappedAssessments);
  setUpcomingCount(mappedAssessments.length);
  })
  .catch((error) => console.error("Failed to fetch upcoming assessments", error));
  setName(`${user.firstname} ${user.lastname}`);
  setRole(user.rolename);
  }

  fetch(`${WEBAPI_JAVA_URL}/data/studentresults`)
  .then((response) => {
    console.log("Status:", response.status);
    console.log("Response OK:", response.ok);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
  })
  .then((data) => {
    console.log("RESULT DATA FROM API:", data);
    console.log("Is Array:", Array.isArray(data));
    setResultsData(data);
  })
  .catch((error) => {
    console.error("RESULT FETCH ERROR:", error);
  });

  fetch(`${WEBAPI_JAVA_URL}/data/studentNotification`)
  .then((response) => {
    console.log("Status:", response.status);
    console.log("Response OK:", response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("NOTIFICATION DATA FROM API:", data);
    console.log("Is Array:", Array.isArray(data));
    setNotifications(data);
  })
  .catch((error) => {
    console.error("NOTIFICATION FETCH ERROR:", error);
  });

  fetch(`${WEBAPI_JAVA_URL}/data/learningCurve`)
  .then((response) => {
    console.log("Status:", response.status);
    console.log("Response OK:", response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("LEARNING CURVE DATA FROM API:", data);
    console.log("Is Array:", Array.isArray(data));
    setLearningCurve(data);
  })
  .catch((error) => {
    console.error("LEARNING CURVE FETCH ERROR:", error);
  });
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <h3 className="text-xl text-gray-700 mb-4">Hello, {name} ({role})</h3>
          <p className="text-gray-600">Welcome back! Here's your learning progress and upcoming assessments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6" onClick={() => navigate("/models/assessmentorchestrator/completed-assessments")}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Assessments Completed</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{performance.totalCompletedAssessments}</p>
                </div>
                <Award className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6"
            onClick={() => navigate("/models/assessmentorchestrator/completed-assessments")}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Average Score</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{performance.averageScore}%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between"
              onClick={() => navigate("/models/upcoming-assessment")}>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Upcoming Assessments</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{upcomingCount}</p>
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
          <div className="lg:col-span-2 space-y-8">
            
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
                    }`}>
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
          </div>
          <div className="space-y-8">

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
                      <div className={`h-2 rounded-full transition-all ${result.status === "pass" ? "bg-green-500" : "bg-red-500"}`}
                        style={{ width: `${result.percentage}%`}}/>
                    </div>
                    <p className="text-xs font-semibold text-gray-900 mt-2">
                      {result.score}/{result.totalScore} ({result.percentage}%)
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

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
                        <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all"
                          style={{ width: `${data.score}%` }} />
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
