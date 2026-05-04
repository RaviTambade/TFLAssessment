
interface MentorshipActivity {
  id: number;
  menteeName: string;
  activityType: "session" | "feedback" | "assignment" | "guidance";
  description: string;
  date: string;
  completionStatus: "completed" | "pending" | "in-progress";
}
export default MentorshipActivity;  