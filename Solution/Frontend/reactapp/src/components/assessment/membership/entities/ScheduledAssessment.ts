interface ScheduledAssessment {
  id: number;
  name: string;
  subject: string;
  scheduledDate: string;
  duration: number;
  totalQuestions: number;
  status: "upcoming" | "in-progress" | "completed";
}
export default ScheduledAssessment;