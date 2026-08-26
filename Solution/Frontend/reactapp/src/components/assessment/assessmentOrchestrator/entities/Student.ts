interface Student {
  id: number;
  fullName: string;
  contact: string;
  status: StudentStatus;
}
export default Student;
export type StudentStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

