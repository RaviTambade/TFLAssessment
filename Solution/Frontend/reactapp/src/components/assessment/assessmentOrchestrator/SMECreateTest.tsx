import { useEffect, useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import CreateTest from "./createTest/createTest";
//import SMEExpertiseForm from "./createTest/SMEExpertiseForm";
 import SMEExpertiseForm from "./createTest/smeExpertiseForm";

type Concept = {
  concept: string;
};

type Question = {
  questionId: number;
  description: string;
  type: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  conceptId: number;
  options?: string[];
  correctIndex?: number;
};
 

const SMECreateTest = () => {

  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [selectedConcept, setSelectedConcept] = useState<string>("");
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>([]);

  const [loading, setLoading] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [error, setError] = useState<string | null>(null);



  // ==========================
  // FETCH CONCEPTS
  // ==========================
  useEffect(() => {
    const fetchConcepts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Save SME ID
        const userData = sessionStorage.getItem("current");

        if (userData) {
          const user = JSON.parse(userData);

          localStorage.setItem("smeId",String(user.userid || user.id)   );
        }

       

        const response = await fetch(`${WEBAPI_DOTNET_URL}/Questions/concepts` );
        if (!response.ok) {
          const errorText = await response.text();
          console.log("Concept API Error:", errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const concepts: Concept[] = await response.json();

        console.log("Concepts:", concepts);

        setConcepts(Array.isArray(concepts) ? concepts : []);
        if (concepts.length > 0) {
          setSelectedConcept(concepts[0].concept);
        }
      } catch (err) {
        console.error(
          "Error loading concepts:",
          err
        );

        setError("Failed to load concepts.");
      } finally {
        setLoading(false);
      }
    };

    void fetchConcepts();
  }, []);


  // ======================================================================================================
  // FETCH QUESTIONS
  // =====================================================================================================
  useEffect(() => {
    if (!selectedConcept) return;

    const fetchQuestions = async () => {
      try {
        setLoadingQuestions(true);
        setError(null);

        const response = await fetch(
          `${WEBAPI_DOTNET_URL}/questions/concepts/${selectedConcept}/questions`
        );

        console.log("Question API Status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();

          console.log("Question API Error:", errorText);

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Question[] = await response.json();

        console.log("Questions:", data);

        setAvailableQuestions(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error loading questions:", err);
        setError("Failed to load questions.");
      } finally {
        setLoadingQuestions(false);
      }
    };

    void fetchQuestions();
  }, [selectedConcept]);

  // =============================================================================================================================
  // TOGGLE QUESTION
  // ==========================================================================================================================
  const toggleQuestion = (questionId: number) => {
    setSelectedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div>
        {/* <CreateTest />  */}
      <SMEExpertiseForm /> 

    
    
    </div>
  );
};

export default SMECreateTest;