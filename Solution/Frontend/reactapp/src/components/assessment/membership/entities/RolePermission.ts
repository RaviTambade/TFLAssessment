interface RolePermission {
  id: number;
  roleName: string;
  memberCount: number;
  permissions: string[];
  createdDate: string;
  status: "active" | "inactive";
  description: string;
}
export default RolePermission;