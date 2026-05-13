interface Candidate {
  id: number;
  name: string;
  email: string;
  appliedPosition: string;
  skillsMatch: number;
  experienceLevel: "fresher" | "junior" | "mid-level" | "senior";
  assessmentScore: number;
  interviewStatus: "pending" | "scheduled" | "completed" | "rejected";
  applicationDate: string;
}
export default Candidate;
