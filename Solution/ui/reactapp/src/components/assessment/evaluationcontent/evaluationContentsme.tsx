import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2} from "lucide-react";
import QuestionsComponent from "./QuestionsComponent";
import QuestionDetailsComponent from "./QuestionDetailsComponent";
import { Bell, Users, Target, TrendingUp, CheckCircle, AlertCircle, BarChart3, FileText } from "lucide-react";
import GetQuestionSme from "./getQuestionsme";


const baseURL = "http://localhost:8080/api";

type ConceptCount={
    concept:string;
    question_count:number;
};

type DifficultyCount={
    difficulty:string;
    count:number;
};

const EvaluationContentSme = () => {
 
    const navigate=useNavigate();
    
    const [conceptQuestionCount, setConceptQuestionCount] = useState([]);
    const [difficultyQuestionCount,setDifficultyQuestionCount]=useState([]);
    const [selectedFilter,setSelectedFilter]=useState({ concept: "",difficultyLevel: "",language: "",framework: "",layer: ""});

  useEffect(()=>{
    const fetchConceptCount=async()=>{
      try{
        const response=await fetch(`${baseURL}/technologies/concepts/question-count`,{
          method:"GET",
        });
        const data:ConceptCount[]=await response.json();
        setConceptQuestionCount(Array.isArray(data)?data:[]);
      }catch(error){
        console.log(error);
      }
    };
    void fetchConceptCount();
  },[]);

  useEffect(()=>{
  const fetchDifficultyCount=async()=>{
    try{
      const response=await fetch(`${baseURL}/technologies/difficulty/question-count`,{
        method:"GET",
      });
      const data:DifficultyCount[]=await response.json();
      setDifficultyQuestionCount(Array.isArray(data)?data:[]);
    }catch(error){
      console.log(error);
    }
  };
  void fetchDifficultyCount();
 },[]);

    console.log(selectedFilter);
    
   return (
  <div className="min-h-screen bg-gray-50 p-8">
    {/* Wrapper */}
    <div className="max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Evaluation Content
        </h1>
        <h3 className="text-lg text-gray-600 mt-2">
          Manage evaluation content
        </h3>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Concept Section */}
        <div className="col-span-full">
          <h5 className="text-lg font-semibold text-gray-800 mb-4">
            Questions by Concept
          </h5>
        </div>
        {conceptQuestionCount.map((item) => (
          <Card
            key={item.concept}
            onClick={() =>
              setSelectedFilter({
                concept: item.concept,
                difficultyLevel: "",
                language: "",
                framework: "",
                layer: "",
              })
            }
            className="cursor-pointer transition transform hover:scale-105 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.concept}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {item.question_count}
                  </p>
                </div>
                <FileText className="w-12 h-12 text-green-500 opacity-30" />
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Difficulty Section */}
        <div className="col-span-full mt-8">
          <h5 className="text-lg font-semibold text-gray-800 mb-4">
            Questions by Difficulty
          </h5>
        </div>
        {difficultyQuestionCount.map((item) => (
          <Card
            key={item.difficulty}
            onClick={() =>
              setSelectedFilter({
                concept: "",
                difficultyLevel: item.difficulty,
                language: "",
                framework: "",
                layer: "",
              })
            }
            className="cursor-pointer transition transform hover:scale-105 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.difficulty}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {item.count}
                  </p>
                </div>
                <FileText className="w-12 h-12 text-green-500 opacity-30" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Questions Component */}
      <div className="mt-10">
        <GetQuestionSme
          concept={selectedFilter.concept}
          difficulty_level={selectedFilter.difficultyLevel}
        />
      </div>
    </div>
  </div>
);
}

export default EvaluationContentSme;