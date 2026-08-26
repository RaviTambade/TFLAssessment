interface AssignmentSummary {
  AssessmentIds: (number | string)[];
  TestName: string;
  Status: string;
  ScheduledAt: string;
  StudentNames: string[];
};
export default AssignmentSummary;