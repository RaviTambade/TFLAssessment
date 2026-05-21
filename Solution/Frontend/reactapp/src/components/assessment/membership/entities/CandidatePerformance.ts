interface CandidatePerformance {
  id: number;
  candidateName: string;
  email: string;
  skillLevel: string;
  assessmentsTaken: number;
  averageScore: number;
  lastAssessmentDate: string;
  status: "excellent" | "good" | "average" | "needsImprovement";
}
export default CandidatePerformance;