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
export default Member;