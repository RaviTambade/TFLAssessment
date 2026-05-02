import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Bell, Users, Lock, TrendingUp, CheckCircle, AlertCircle, Shield, Settings } from "lucide-react";
<<<<<<< HEAD
import { WEBAPI_NODE_URL } from "@/lib/utils";
=======
import UserActivity from "./UserActivity";
import { useNavigate } from "react-router-dom";

>>>>>>> 8b702a610507a57d0248010da9855f428d2334fb
interface AdminNotification {
  id: number;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: string;
  read: boolean;
}

interface Member {
  id: number;
  name: string;
  email: string;
  role: "admin" | "mentor" | "sme" | "employer" | "student";
  status: "active" | "inactive" | "suspended" | "pending";
  joinDate: string;
  lastLoginDate: string;
  department: string;
}

interface RolePermission {
  id: number;
  roleName: string;
  memberCount: number;
  permissions: string[];
  createdDate: string;
  status: "active" | "inactive";
  description: string;
}

interface MemberActivity {
  id: number;
  memberName: string;
  role: string;
  activityType: "login" | "profile_update" | "role_change" | "permission_grant" | "system_access";
  description: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
}

//function component for Admin Dashboard - Transflower Membership & Roles Management
const DashboardAdmin = () => {
    //parts
    // State for admin user data
    // Data members for member management
    // Helper functions for role management
    // Render functions for admin features

    //data members
   const[adminName, setAdminName] = useState<string>("Admin User");
   const[organization, setOrganization] = useState<string>("Transflower");
   const[profilePicture, setProfilePicture] = useState<string>("https://avatars.githubusercontent.com/u/12345678?v=4");
   const navigate=useNavigate();

  // Admin System Notifications
  const adminNotifications: AdminNotification[] = [
    {
      id: 1,
      title: "New Member Pending Approval",
      message: "5 new members awaiting admin approval for Mentor and Student roles",
      type: "info",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Suspicious Activity Detected",
      message: "Multiple failed login attempts detected from 3 accounts. Review security alerts",
      type: "warning",
      timestamp: "1 day ago",
      read: false,
    },
    {
      id: 3,
      title: "Role Permission Updated",
      message: "SME role permissions successfully updated. 12 members affected",
      type: "success",
      timestamp: "3 days ago",
      read: true,
    },
    {
      id: 4,
      title: "User Deactivation",
      message: "3 inactive members (no login for 90 days) automatically deactivated",
      type: "info",
      timestamp: "5 days ago",
      read: true,
    },
  ];

  // Member Directory - Organization Membership
  const members: Member[] = [
    {
      id: 1,
      name: "Ravi Tambade",
      email: "ravi.tambade@transflower.in",
      role: "admin",
      status: "active",
      joinDate: "2025-06-01",
      lastLoginDate: "2026-05-01",
      department: "Administration",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@transflower.in",
      role: "student",
      status: "active",
      joinDate: "2026-01-15",
      lastLoginDate: "2026-04-30",
      department: "Engineering",
    },
    {
      id: 3,
      name: "Arjun Patel",
      email: "arjun.patel@transflower.in",
      role: "mentor",
      status: "active",
      joinDate: "2025-11-20",
      lastLoginDate: "2026-04-28",
      department: "Mentorship",
    },
    {
      id: 4,
      name: "Ananya Desai",
      email: "ananya.desai@transflower.in",
      role: "sme",
      status: "active",
      joinDate: "2025-09-10",
      lastLoginDate: "2026-04-25",
      department: "Assessment",
    },
    {
      id: 5,
      name: "Rohit Kumar",
      email: "rohit.kumar@transflower.in",
      role: "employer",
      status: "pending",
      joinDate: "2026-04-28",
      lastLoginDate: "2026-04-28",
      department: "Recruiting",
    },
  ];

  // Role Definitions and Permissions
  const rolePermissions: RolePermission[] = [
    {
      id: 1,
      roleName: "Admin",
      memberCount: 1,
      permissions: ["manage_users", "manage_roles", "view_analytics", "system_settings", "audit_logs", "manage_assessments"],
      createdDate: "2025-06-01",
      status: "active",
      description: "Full system access with membership and role management",
    },
    {
      id: 2,
      roleName: "Mentor",
      memberCount: 12,
      permissions: ["view_mentees", "manage_mentorship", "view_progress", "provide_feedback"],
      createdDate: "2025-08-15",
      status: "active",
      description: "Mentor program management and mentee guidance",
    },
    {
      id: 3,
      roleName: "Subject Matter Expert",
      memberCount: 8,
      permissions: ["create_assessments", "review_assessments", "analyze_results", "identify_gaps"],
      createdDate: "2025-09-01",
      status: "active",
      description: "Assessment creation and evaluation responsibilities",
    },
    {
      id: 4,
      roleName: "Employer",
      memberCount: 6,
      permissions: ["view_candidates", "create_job_openings", "manage_recruitment", "interview_candidates"],
      createdDate: "2025-10-05",
      status: "active",
      description: "Recruitment and hiring pipeline management",
    },
    {
      id: 5,
      roleName: "Student",
      memberCount: 45,
      permissions: ["take_assessments", "view_progress", "access_resources", "submit_assignments"],
      createdDate: "2025-12-01",
      status: "active",
      description: "Student learning and assessment participation",
    },
  ];

  // Member Activity Log
  const memberActivities: MemberActivity[] = [
    {
      id: 1,
      memberName: "Priya Sharma",
      role: "Student",
      activityType: "login",
      description: "Logged in to assessment portal",
      timestamp: "2 hours ago",
      status: "completed",
    },
    {
      id: 2,
      memberName: "Arjun Patel",
      role: "Mentor",
      activityType: "profile_update",
      description: "Updated profile information",
      timestamp: "1 day ago",
      status: "completed",
    },
    {
      id: 3,
      memberName: "Rohit Kumar",
      role: "Employer",
      activityType: "role_change",
      description: "Role assignment pending approval",
      timestamp: "2 days ago",
      status: "pending",
    },
    {
      id: 4,
      memberName: "Ananya Desai",
      role: "SME",
      activityType: "permission_grant",
      description: "New assessment creation permission granted",
      timestamp: "3 days ago",
      status: "completed",
    },
  ];

  useEffect(() => {
    const apiURL = `${WEBAPI_NODE_URL}/admin/profile`;
        fetch(apiURL).then((response) => response.json()).then((data) => {
          setAdminName(data.adminName);
          setOrganization(data.organization);
          setProfilePicture(data.profilePicture);
        });


  }, []);

  // Render the Admin Management dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Control Panel</h1>
          <h3 className="text-xl text-gray-700 mb-4">Welcome, {adminName} | {organization} Administration</h3>
          <p className="text-gray-600">Manage membership, roles, permissions, and system access for Transflower organization.</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between" onClick={()=>{navigate("/models/membership/ManageUsers")}}>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Members</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">72</p>
                </div>
                <Users className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Roles</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">5</p>
                </div>
                <Shield className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Pending Approvals</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">5</p>
                </div>
                <AlertCircle className="w-12 h-12 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between" onClick={()=>{navigate("/models/membership/UserActivity")}}>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Sessions</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">28</p>
                </div>
                <TrendingUp className="w-12 h-12 text-purple-500 opacity-20" />
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
                  <Bell className="w-5 h-5" />
                  System Alerts & Administration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {adminNotifications.map((notification) => (
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

            {/* Role Permissions Management Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
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
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        role.status === "active" ? "bg-green-100 text-green-800" :
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
                  <Users className="w-5 h-5" />
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
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                      ) : (
                        <Lock className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className={`font-bold px-2 py-0.5 rounded ${
                        member.role === "admin" ? "bg-red-100 text-red-800" :
                        member.role === "mentor" ? "bg-blue-100 text-blue-800" :
                        member.role === "sme" ? "bg-purple-100 text-purple-800" :
                        member.role === "employer" ? "bg-green-100 text-green-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {member.role}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        member.status === "active" ? "bg-green-100 text-green-800" :
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
                  <Settings className="w-5 h-5" />
                  Member Activity Log
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {memberActivities.map((activity) => (
                  <div key={activity.id} className="p-3 border rounded-lg text-sm">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{activity.memberName}</p>
                        <p className="text-xs text-gray-600">{activity.description}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        activity.status === "completed" ? "bg-green-100 text-green-800" :
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