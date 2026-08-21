interface Question {
    questionId: number;
    description: string;
    questionType: string;
    createdAt: string;
    difficultyLevel: string;
    status?: string;
}

export default Question;
