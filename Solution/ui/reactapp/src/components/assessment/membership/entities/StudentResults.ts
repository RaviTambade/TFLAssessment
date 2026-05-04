interface Result {
  id: number;
  assessmentName: string;
  subject: string;
  score: number;
  totalScore: number;
  percentage: number;
  completedDate: string;
  status: "pass" | "fail";
}

export default Result;