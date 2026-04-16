export interface Result {
  score: number;
  percentile: number;
  timeTakenMinutes: number;
}

export interface Assessment {
  assessmentId: number;
  testId: number;
  testTitle: string;
  studentId: number;
  studentName: string;
  status: string;
  assignedAt: string;
  scheduledAt: string;
  result: Result | null;
}
