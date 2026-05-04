import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Bell, Users, Zap, TrendingUp, CheckCircle, AlertCircle, BookOpen, MessageSquare } from "lucide-react";
import { WEBAPI_NODE_URL } from "@/lib/utils";

interface MentorNotification {
  id: number;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: string;
  read: boolean;
}

interface Mentee {
  id: number;
  name: string;
  email: string;
  careerGoal: string;
  joinDate: string;
  progress: number;
  lastMeetingDate: string;
  status: "onTrack" | "needsSupport" | "exceeding" | "atRisk";
}

interface MentorshipActivity {
  id: number;
  menteeName: string;
  activityType: "session" | "feedback" | "assignment" | "guidance";
  description: string;
  date: string;
  completionStatus: "completed" | "pending" | "in-progress";
}

interface MenteeGrowth {
  menteeName: string;
  skillName: string;
  improvementPercentage: number;
  currentLevel: "beginner" | "intermediate" | "advanced";
  recommendedFocus: string;
}

//function component for Mentor Dashboard - Transflower
const DashboardMentor = () => {
    //parts
    // State for mentor user data
    // Data members for mentee insights
    // Helper functions for tracking progress
    // Render functions for mentorship features

    //data members
   const[mentorName, setMentorName] = useState<string>("Ravi Tambade");
   const[organization, setOrganization] = useState<string>("Transflower");
   const[profilePicture, setProfilePicture] = useState<string>("https://avatars.githubusercontent.com/u/12345678?v=4");

  // Mentor-specific Notifications
  const mentorNotifications: MentorNotification[] = [
    {
      id: 1,
      title: "Mentee Milestone Achieved",
      message: "Priya Sharma completed her first full-stack project and is now ready for advanced training",
      type: "success",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Support Needed",
      message: "Arjun Patel is struggling with cloud architecture concepts. Schedule a mentoring session",
      type: "warning",
      timestamp: "1 day ago",
      read: false,
    },
    {
      id: 3,
      title: "Career Milestone",
      message: "Ananya Desai is interview-ready. Start preparing for employer matching process",
      type: "info",
      timestamp: "3 days ago",
      read: true,
    },
    {
      id: 4,
      title: "Session Reminder",
      message: "You have a mentorship session scheduled with 3 mentees this week",
      type: "info",
      timestamp: "5 days ago",
      read: true,
    },
  ];

  // Mentee Overview - Individual Development Tracking
  const mentees: Mentee[] = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@transflower.in",
      careerGoal: "Full-Stack Developer",
      joinDate: "2026-01-15",
      progress: 85,
      lastMeetingDate: "2026-04-25",
      status: "exceeding",
    },
    {
      id: 2,
      name: "Arjun Patel",
      email: "arjun.patel@transflower.in",
      careerGoal: "Cloud Architect",
      joinDate: "2026-02-10",
      progress: 55,
      lastMeetingDate: "2026-04-20",
      status: "needsSupport",
    },
    {
      id: 3,
      name: "Ananya Desai",
      email: "ananya.desai@transflower.in",
      careerGoal: "Backend Engineer",
      joinDate: "2025-12-01",
      progress: 92,
      lastMeetingDate: "2026-04-22",
      status: "exceeding",
    },
    {
      id: 4,
      name: "Rohit Kumar",
      email: "rohit.kumar@transflower.in",
      careerGoal: "DevOps Engineer",
      joinDate: "2026-03-05",
      progress: 70,
      lastMeetingDate: "2026-04-15",
      status: "onTrack",
    },
  ];

  // Mentorship Activities
  const mentorshipActivities: MentorshipActivity[] = [
    {
      id: 1,
      menteeName: "Priya Sharma",
      activityType: "session",
      description: "1-on-1 Technical Mentoring: React Advanced Patterns Discussion",
      date: "2026-04-25",
      completionStatus: "completed",
    },
    {
      id: 2,
      menteeName: "Arjun Patel",
      activityType: "feedback",
      description: "Code Review & Feedback: AWS Lambda Implementation",
      date: "2026-04-24",
      completionStatus: "in-progress",
    },
    {
      id: 3,
      menteeName: "Ananya Desai",
      activityType: "guidance",
      description: "Career Development Guidance: Interview Preparation",
      date: "2026-04-28",
      completionStatus: "pending",
    },
    {
      id: 4,
      menteeName: "Rohit Kumar",
      activityType: "assignment",
      description: "Practical Assignment: Set up CI/CD Pipeline",
      date: "2026-04-20",
      completionStatus: "completed",
    },
  ];

  // Mentee Growth Tracking
  const menteeGrowth: MenteeGrowth[] = [
    {
      menteeName: "Priya Sharma",
      skillName: "React Development",
      improvementPercentage: 45,
      currentLevel: "advanced",
      recommendedFocus: "Performance optimization and testing",
    },
    {
      menteeName: "Arjun Patel",
      skillName: "Cloud Architecture",
      improvementPercentage: 20,
      currentLevel: "beginner",
      recommendedFocus: "AWS fundamentals and hands-on practice",
    },
    {
      menteeName: "Ananya Desai",
      skillName: "Backend Development",
      improvementPercentage: 50,
      currentLevel: "advanced",
      recommendedFocus: "System design and scalability",
    },
    {
      menteeName: "Rohit Kumar",
      skillName: "DevOps & Infrastructure",
      improvementPercentage: 35,
      currentLevel: "intermediate",
      recommendedFocus: "Kubernetes and containerization",
    },
  ];

  useEffect(() => {
    const apiURL = `${WEBAPI_NODE_URL}/mentor/profile`;
        fetch(apiURL).then((response) => response.json()).then((data) => {
          setMentorName(data.name);
          setOrganization(data.organization);
          setProfilePicture(data.profilePicture);
        });


  }, []);

  // Render the Mentor dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mentor Dashboard</h1>
          <h3 className="text-xl text-gray-700 mb-4">Welcome, {mentorName} | {organization}</h3>
          <p className="text-gray-600">Track mentee progress, manage mentorship activities, and guide career development at Transflower.</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Mentees</p>
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
                  <p className="text-gray-600 text-sm font-medium">Avg Mentee Progress</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">75.5%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Pending Activities</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
                </div>
                <MessageSquare className="w-12 h-12 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Career Ready</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
                </div>
                <Zap className="w-12 h-12 text-yellow-500 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Mentor Notifications and Activities */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mentor Notifications Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Mentorship Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mentorNotifications.map((notification) => (
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

            {/* Mentorship Activities Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Recent Mentorship Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mentorshipActivities.map((activity) => (
                  <div key={activity.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{activity.menteeName}</p>
                        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            {activity.activityType}
                          </span>
                          <span>{activity.date}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.completionStatus === "completed" ? "bg-green-100 text-green-800" :
                        activity.completionStatus === "in-progress" ? "bg-yellow-100 text-yellow-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {activity.completionStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Mentee Progress and Growth Tracking */}
          <div className="space-y-8">
            {/* Mentee Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Mentee Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mentees.slice(0, 3).map((mentee) => (
                  <div key={mentee.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{mentee.name}</p>
                        <p className="text-xs text-gray-600">{mentee.careerGoal}</p>
                      </div>
                      {mentee.status === "exceeding" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : mentee.status === "atRisk" ? (
                        <AlertCircle className="w-4 h-4 text-red-600" />
                      ) : (
                        <Zap className="w-4 h-4 text-yellow-600" />
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          mentee.status === "exceeding" ? "bg-green-500" :
                          mentee.status === "onTrack" ? "bg-blue-500" :
                          mentee.status === "needsSupport" ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${mentee.progress}%` }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-900">
                      Progress: {mentee.progress}% | Last: {mentee.lastMeetingDate}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mentee Growth & Skills Focus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Growth & Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {menteeGrowth.map((growth, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-xs font-medium text-gray-600">{growth.menteeName}</p>
                        <p className="text-sm font-semibold text-gray-900">{growth.skillName}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        growth.currentLevel === "advanced" ? "bg-green-100 text-green-800" :
                        growth.currentLevel === "intermediate" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {growth.currentLevel}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                        style={{ width: `${growth.improvementPercentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600">
                      {growth.improvementPercentage}% improvement • <span className="font-semibold">{growth.recommendedFocus}</span>
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

export default DashboardMentor;