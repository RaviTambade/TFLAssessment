export default interface AssessmentAnswerDetail {
    questionId: number;
    questionDescription: string;
    optionA?: string;
    optionB?: string;
    optionC?: string;
    optionD?: string;
    correctAnswer?: string;
    selectedOption?: string;
    isCorrect: boolean;
}