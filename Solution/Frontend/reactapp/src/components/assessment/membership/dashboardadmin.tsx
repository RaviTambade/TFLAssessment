import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Bell, Users, Lock, TrendingUp, CheckCircle, AlertCircle, Shield, Settings } from "lucide-react";
import UserActivity from "./UserActivity";
import { UsersRound, ShieldCheck, Clock3, Activity, ClipboardList, ClipboardCheck, BellRing, History, Sparkles, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WEBAPI_NODE_URL } from "@/lib/utils";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";


import Notification from "./entities/Notification";
import Member from "./entities/Member";
import RolePermission from "./entities/RolePermission";
import MemberActivity from "./entities/MemberActivity";
import AdminNotifications from "./data/notifications/adminNotifications.json";
import Members from "./data/users/members.json";
import RolePermissions from "./data/rolePermissions.json";
import MemberActivities from "./data/memberActivities.json";

//function component for Admin Dashboard - Transflower Membership & Roles Management
const DashboardAdmin = () => {
  //parts
  // State for admin user data
  // Data members for member management
  // Helper functions for role management
  // Render functions for admin features



  //data members
  const [adminName, setAdminName] = useState<string>("Admin User");
  const [organization, setOrganization] = useState<string>("Transflower");
  const [profilePicture, setProfilePicture] = useState<string>("https://avatars.githubusercontent.com/u/12345678?v=4");
  const [activeRoles, setActiveRoles] = useState<number>(0);
  const [activeRolesList, setActiveRolesList] = useState<number>(0);
  const [assessmentCount, setAssessmentCount] = useState<number>(0);
   const [smeName, setSmeName] = useState<string>("");


  const navigate = useNavigate();

  // Admin System Notifications
  const adminNotifications: Notification[] = AdminNotifications as Notification[];

  // Member Directory - Organization Membership
  const members: Member[] = Members as Member[];

  // Role Definitions and Permissions
  const rolePermissions: RolePermission[] = RolePermissions as RolePermission[];

  // Member Activity Log
  // const memberActivities: MemberActivity[] = MemberActivities as MemberActivity[];

useEffect(() => {
    const currentUser = sessionStorage.getItem("current");

    if (currentUser) {
      const user = JSON.parse(currentUser);

      setSmeName(`${user.firstname} ${user.lastname}`);
      setOrganization("Transflower");
    }
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

    const apiURL = `${WEBAPI_NODE_URL}/admin/profile`;

    fetch(apiURL).then((response) => response.json()).then((data) => {
      setAdminName(data.adminName);
      setOrganization(data.organization);
      setProfilePicture(data.profilePicture);
    });

    fetch(`${WEBAPI_DOTNET_URL}/Roles/active/_roles/count`)
      .then((response) => response.json())
      .then((data) => {
        setActiveRoles(data);
      })
      .catch((error) => console.error(error));

  }, []);

  // Render the Admin Management dashboard UI
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            SME Dashboard
          </h1>

          <p className="text-2xl text-primary mt-3 font-bold">
            Welcome, <span className="font-bold">{smeName}</span>
          </p>

          <p className="text-slate-500 mt-3 text-lg">
            Manage membership, roles, permissions, and system access for Transflower organization.
          </p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card className="group cursor-pointer border border-border rounded-2xl shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <CardContent className="p-7">
              <div className="flex items-center justify-between" onClick={() => { navigate("/models/membership/ManageUsers") }}>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Members</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">72</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer border border-border rounded-2xl shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <CardContent className="p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => navigate("/models/membership/active-roles")}
              >
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Active Roles
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {activeRoles}
                  </p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition">

                  <Shield className="w-8 h-8 text-primary" />

                </div>

              </div>
            </CardContent>
          </Card >
          <Card className="group cursor-pointer border border-border rounded-2xl shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Pending Approvals</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">5</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition">
                <AlertCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer border border-border rounded-2xl shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between" onClick={() => { navigate("/models/membership/UserActivity") }}>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Sessions</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">28</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition">
                <Activity className="w-8 h-8 text-primary" />
              </div>
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

          <Card className="group cursor-pointer border border-border rounded-2xl shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between" onClick={() => { navigate("/models/assign-assessment") }}>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Assign Assessment</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{assessmentCount}</p>
                </div>
                 <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Admin Alerts and Member Management */}
          <div className="lg:col-span-2 space-y-8">
            {/* Admin System Notifications Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BellRing className="w-5 h-5" />
                  System Alerts & Administration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {adminNotifications.map((notification) => (
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

            {/* Role Permissions Management Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Role Definitions & Permissions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {rolePermissions.map((role) => (
                  <div key={role.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{role.roleName}</p>
                        <p className="text-sm text-gray-600 mt-1">{role.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {role.permissions.map((perm, idx) => (
                            <span key={idx} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {perm.replace(/_/g, " ")}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Created: {role.createdDate} • Members: {role.memberCount}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${role.status === "active" ? "bg-green-100 text-green-800" :
                        "bg-gray-100 text-gray-800"
                        }`}>
                        {role.status}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Member Directory and Activity */}
          <div className="space-y-8">
            {/* Member Directory */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UsersRound className="w-5 h-5" />
                  Member Directory
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {members.slice(0, 4).map((member) => (
                  <div key={member.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{member.name}</p>
                        <p className="text-xs text-gray-600">{member.email}</p>
                      </div>
                      {member.status === "active" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : member.status === "pending" ? (
                        <Clock3 className="w-4 h-4 text-yellow-600" />
                      ) : (
                        <Lock className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className={`font-bold px-2 py-0.5 rounded ${member.role === "admin" ? "bg-red-100 text-red-800" :
                        member.role === "mentor" ? "bg-blue-100 text-blue-800" :
                          member.role === "sme" ? "bg-purple-100 text-purple-800" :
                            member.role === "employer" ? "bg-green-100 text-green-800" :
                              "bg-gray-100 text-gray-800"
                        }`}>
                        {member.role}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-bold ${member.status === "active" ? "bg-green-100 text-green-800" :
                        member.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                        {member.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Joined: {member.joinDate} • Last: {member.lastLoginDate}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Member Activity Log */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Member Activity Log
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {MemberActivities.map((activity) => (
                  <div key={activity.id} className="p-3 border rounded-lg text-sm">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{activity.memberName}</p>
                        <p className="text-xs text-gray-600">{activity.description}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${activity.status === "completed" ? "bg-green-100 text-green-800" :
                        activity.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                        {activity.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span className="bg-gray-100 px-2 py-0.5 rounded">
                        {activity.activityType.replace(/_/g, " ")}
                      </span>
                      <span>{activity.timestamp}</span>
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

export default DashboardAdmin;
