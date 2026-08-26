interface InterviewFeedbackModel  {
  interviewId: number;
  smeId: number;
  startTime: string;
  endTime: string;
  communicationRating: number;
  problemSolvingRating: number;
  strengths: string;
  feedbackComment: string;
  recommendation: string;
};
export default InterviewFeedbackModel;