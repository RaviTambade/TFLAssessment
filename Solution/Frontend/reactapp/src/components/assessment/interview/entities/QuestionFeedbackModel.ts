interface QuestionFeedbackModel{
    interviewId:number
    question:string;
    confidence:number;
    correctness:number;
    comment:string;
}
export default QuestionFeedbackModel;