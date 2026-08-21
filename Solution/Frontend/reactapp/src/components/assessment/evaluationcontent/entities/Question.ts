interface Question {
    questionId: number;
    description: string;
    questionType: string;
    language:string;
    createdAt: string;
    difficultyLevel: string;
    status?: string;

}

export default Question;

