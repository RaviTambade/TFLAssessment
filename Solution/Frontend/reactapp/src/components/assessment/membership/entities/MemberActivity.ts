interface MemberActivity {
  id: number;
  memberName: string;
  role: string;
  activityType: "login" | "profile_update" | "role_change" | "permission_grant" | "system_access";
  description: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
}
export default MemberActivity;