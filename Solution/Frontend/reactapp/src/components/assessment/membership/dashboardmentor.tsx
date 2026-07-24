import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { Bell, FolderKanban, Users, Zap, TrendingUp, CheckCircle, AlertCircle, BookOpen, MessageSquare, ClipboardList, } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { WEBAPI_NODE_URL, WEBAPI_DOTNET_URL } from "@/lib/utils";
import Notification from "./entities/Notification";
import MentorshipActivity from "./entities/MentorshipActivity";
import Mentee from "./entities/Mentee";
import MenteeGrowth from "./entities/MenteeGrowth";
import AllmentorNotifications from "./data/notifications/mentorNotifications.json";
import AllMenteeGrowth from "./data/menteeGrowths.json";
import AllMentee from "./data/users/mentees.json";
import Student from "../assessmentOrchestrator/entities/Student";
import TestDetails from "../assessmentOrchestrator/entities/TestDetails";


const DashboardMentor = () => {
  const navigate = useNavigate();
  //data members
  const [mentorName, setMentorName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("Transflower");;
  const [projectCount, setProjectCount] = useState<number>(0);
  const [students, setStudents] = useState<Student[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [testCount, setTestCount] = useState<number>(0);
  const mentorNotifications: Notification[] = AllmentorNotifications as Notification[];
  const mentees: Mentee[] = AllMentee as Mentee[];
  const [mentorshipActivities, setMentorshipActivities] = useState<MentorshipActivity[]>([]);
  const menteeGrowth: MenteeGrowth[] = AllMenteeGrowth as MenteeGrowth[];
  const [tests, setTests] = useState<TestDetails[]>([]);
  const [menteeCount, setMenteeCount] = useState(0);
  const [assessmentCount, setAssessmentCount] = useState<number>(0);



  useEffect(() => {
    const currentUser = sessionStorage.getItem("current");

    if (currentUser) {
      const user = JSON.parse(currentUser);

      setMentorName(`${user.firstname} ${user.lastname}`);
      setOrganization("Transflower");
    }
  }, []);


  useEffect(() => {
    const currentUser = sessionStorage.getItem("current");

    if (!currentUser) return;

    const user = JSON.parse(currentUser);
    const userId = user.userid;

    const getMenteeCount = async () => {
      try {
        const response = await fetch(
          `http://localhost:5201/api/CreateTest/mentee/Count/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch mentee count");
        }

        const data = await response.json();
        setMenteeCount(data);
      } catch (error) {
        console.error("Error fetching mentee count:", error);
      }
    };

    getMenteeCount();
  }, []);


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${WEBAPI_DOTNET_URL}/Students`);

        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${WEBAPI_JAVA_URL}/questions/count`);
        if (!response.ok) {
          throw new Error("Failed to fetch question count");
        }
        const data = await response.json();
        setQuestionCount(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch(`${WEBAPI_DOTNET_URL}/CreateTest/testCount`);
        if (!response.ok) {
          throw new Error("Failed to fetch tests count");
        }
        const data = await response.json();
        setTestCount(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTests();
  }, []);


  useEffect(() => {


     const currentUser = sessionStorage.getItem("current");

    if (!currentUser) return;

    const user = JSON.parse(currentUser);
    const mentor_id = user.userid;
    fetch(`${WEBAPI_JAVA_URL}/projects/mentee/${mentor_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjectCount(data.length);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await fetch(`${WEBAPI_DOTNET_URL}/Assessment/total`);

        if (!response.ok) {
          throw new Error("Failed to fetch assessment count");
        }

        const data = await response.json();

        console.log(data);

        setAssessmentCount(data.totalAssessment);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAssessments();
  }, []);




  useEffect(() => {
    console.log("Mentorship useEffect started");
    const currentUser = sessionStorage.getItem("current");
    console.log("Current User:", currentUser);
    if (!currentUser) return;
    const user = JSON.parse(currentUser);
    console.log("User ID:", user.id);
    console.log("User ID:", user.userid);
    fetch(`${WEBAPI_JAVA_URL}/projects/activities/${user.userid}`)
      .then((response) => {
        console.log("HTTP Status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        console.log("Is Array:", Array.isArray(data));
        setMentorshipActivities(data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log("State:", mentorshipActivities);

  // Render the Mentor dashboard UI
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Mentor Dashboard
          </h1>

          <p className="text-2xl text-primary mt-3 font-bold">
            Welcome, <span className="font-bold">{mentorName}</span>
          </p>

          <p className="text-slate-500 mt-3 text-lg">
            Track mentee progress, manage mentorship activities and monitor student performance.
          </p>
        </div>
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <Card className="group cursor-pointer border border-border overflow-hidden shadow-elegant hover:shadow-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            onClick={() => navigate("/models/evaluationcontent/ProjectByMentee")}>
            <CardContent className="p-7 border-0 shadow-elegant" >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Projects
                  </p>
                  <p className="text-4xl font-bold text-foreground mt-2">
                    {projectCount}
                  </p>
                </div>
                <div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all ">
                  <FolderKanban className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>


          <Card className="group cursor-pointer border border-border overflow-hidden shadow-elegant hover:shadow-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            onClick={() => navigate("/models/membership/Mentees")}>
            <CardContent className="p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Mentees
                  </p>
                  <div className="text-3xl font-bold">{menteeCount}</div>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all ">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer border border-border overflow-hidden shadow-elegant hover:shadow-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            onClick={() => navigate("/models/evaluationcontent/dashboard")}>
            <CardContent className="p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Question Bank
                  </p>
                  <div className="text-3xl font-bold">{questionCount}</div>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all ">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer border border-border overflow-hidden shadow-elegant hover:shadow-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            onClick={() => navigate("/models/students")}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>

                  <p className="text-gray-600 text-sm font-medium bold">
                    Total Students
                  </p>
                  <div className="text-3xl font-bold">{students.length}</div>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer border border-border overflow-hidden shadow-elegant hover:shadow-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            onClick={() => navigate("/models/Assessment/testList")}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Tests
                  </p>
                  <div className="text-3xl font-bold">{testCount}</div>
                </div>
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer border border-border rounded-2xl shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between" onClick={() => { navigate("/models/all-assessment") }}>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Assessments</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{assessmentCount}</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition">
                <ClipboardList className="w-8 h-8 text-primary" />
              </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer border border-border overflow-hidden shadow-elegant hover:shadow-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Career Ready
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
                </div>
                <Zap className="w-8 h-8 text-primary" />
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
                    className={`p-4 rounded-lg border-l-4 ${notification.type === "info"
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
                        <p className="font-semibold text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {notification.timestamp}
                        </p>
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
                  Mentorship Activities
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {mentorshipActivities.length > 0 ? (
                  mentorshipActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {activity.menteeName}
                          </p>

                          <p className="text-sm text-gray-600 mt-1">
                            {activity.activity}
                          </p>

                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              {activity.activityType}
                            </span>

                            <span>{activity.activityDate}</span>
                          </div>
                        </div>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${activity.status === "COMPLETED"
                            ? "bg-green-100 text-green-800"
                            : activity.status === "SCHEDULED"
                              ? "bg-yellow-100 text-yellow-800"
                              : activity.status === "CANCELLED"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No mentorship activities found.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>


          <div className="space-y-8">
            {/* Mentee Progress Overview */}
            <Card >
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
                        <p className="font-medium text-gray-900 text-sm">
                          {mentee.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {mentee.careerGoal}
                        </p>
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
                        className={`h-2 rounded-full transition-all ${mentee.status === "exceeding"
                          ? "bg-green-500"
                          : mentee.status === "onTrack"
                            ? "bg-blue-500"
                            : mentee.status === "needsSupport"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        style={{ width: `${mentee.progress}%` }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-900">
                      Progress: {mentee.progress}% | Last:{" "}
                      {mentee.lastMeetingDate}
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
                        <p className="text-xs font-medium text-gray-600">
                          {growth.menteeName}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {growth.skillName}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${growth.currentLevel === "advanced"
                          ? "bg-green-100 text-green-800"
                          : growth.currentLevel === "intermediate"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                          }`}
                      >
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
                      {growth.improvementPercentage}% improvement •{" "}
                      <span className="font-semibold">
                        {growth.recommendedFocus}
                      </span>
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
};

export default DashboardMentor;
