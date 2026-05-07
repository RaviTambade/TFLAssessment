import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, AlertCircle } from "lucide-react";
import QuestionsComponent from "./QuestionsComponent";
import QuestionDetailsComponent from "./QuestionDetailsComponent";
import { Bell, Users, Target, TrendingUp, CheckCircle, AlertCircle, BarChart3, FileText } from "lucide-react";


const baseURL = "http://localhost:8080/api";

type ConceptCount={
    concept:string;
    question_count:number;
};

const EvaluationContentSme = () => {
 
    const [conceptQuestionCount, setConceptQuestionCount] = useState([]);
   

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

   return(
    <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
                <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Evaluation Content</h1>
                <h3 className="text-xl text-gray-700 mb-4">Manage evaluation content.</h3>
                <br />
            </div>
        </div>
      {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

             {conceptQuestionCount.map((item)  => (
            
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{item.concept}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">{item.question_count}</p>
                    </div>
                    <FileText className="w-12 h-12 text-green-500 opacity-20" />
                  </div>
                </CardContent>
              </Card>  ))
            }

          </div>
    </div>
   );
};

export default EvaluationContentSme;