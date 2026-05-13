
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
export default Mentee;