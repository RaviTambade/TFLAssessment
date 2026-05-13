interface AssessmentMetrics {
  id: number;
  assessmentName: string;
  subject: string;
  totalCandidates: number;
  averageScore: number;
  passRate: number;
  difficultyLevel: "beginner" | "intermediate" | "advanced";
  createdDate: string;
}

export default AssessmentMetrics;