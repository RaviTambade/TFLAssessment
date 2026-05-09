import { useState, useEffect } from "react";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import axios from "axios";

type Props = {
  concept?: string;
  difficulty_level?: string;
  question_type?: string;
  status?: string;
  language?: string;
  layer?: string;
  framework?: string;
};

type Question = {
  questionId: number;
  description: string;
  questionType: string;
  difficultyLevel: string;
  createdAt: string;
  status: string;
  language: string;
  layer: string;
  framework: string;
  concept: string;
};

const GetQuestionSme = ({
  concept,
  difficulty_level,
  question_type,
  status,
  language,
  layer,
  framework,
}: Props) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const params: Record<string, string> = {};

        if (concept) params.concept = concept;
        if (difficulty_level) params.difficulty_level = difficulty_level;
        if (question_type) params.question_type = question_type;
        if (status) params.status = status;
        if (language) params.language = language;
        if (layer) params.layer = layer;
        if (framework) params.framework = framework;

        console.log("Sending params:", params);

        const response = await axios.get(
          `${WEBAPI_JAVA_URL}/filter/questions`,
          { params },
        );
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    void fetchQuestions();
  }, [
    concept,
    difficulty_level,
    question_type,
    status,
    language,
    layer,
    framework,
  ]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Questions</h2>
      {questions.map((question, index) => (
        <div key={index} className="border rounded p-4 mb-4 bg-white">
          <p className="font-semibold">{question.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GetQuestionSme;
