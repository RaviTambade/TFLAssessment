import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { MessageSquare, Star, User, Zap } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

type QuestionFeedback={
    interviewId:number
    question:string;
    confidence:number;
    correctness:number;
    comment:string;
}


const QuestionFeedback=()=>{

    const { id } = useParams();

    const [questionfeedback,setQuestionFeedback]=useState<QuestionFeedback>({ interviewId:Number(id),
                                                            question:"",
                                                            confidence:0,
                                                            correctness:0,
                                                            comment:""})

  
    
    const submitFeedback=async()=>{
        try{
        const response=await fetch(`${WEBAPI_JAVA_URL}/interview/question/feedback`,{
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify(questionfeedback),
        })

        if(response.ok){
           alert("Feedback submitted successfully!");
           setQuestionFeedback({interviewId:Number(id),
                                question:"",
                                confidence:0,
                                correctness:0,
                                comment:""

           });
        }else{
            alert("Failed to submit feedback. Please try again.");
        }
    }catch(error){
        console.log(error);
    }
    }

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFeedback();
    };

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setQuestionFeedback((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
        }));
    };

    
    return(
         <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Interview Feedback
          </h1>
        </div>

        <Card className="shadow-lg border border-orange-200 rounded-2xl overflow-hidden bg-white">
          <CardHeader className="bg-primary/100 px-8 py-6">
            <CardTitle className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-white/80" />
              Feedback Form
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-6 px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                 <div className="space-y-2">
                <Label
                  htmlFor="question"
                  className="flex items-center gap-1.5 text-orange-700 font-medium"
                >
                  <User className="h-4 w-4 text-orange-400" />
                  Question
                </Label>
                <Input
                  id="question"
                  type="text"
                  name="question"
                  value={questionfeedback.question}
                  onChange={handleChange}
                  required
                  className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confidence" className="flex items-center gap-1.5 text-orange-700 font-medium">
                    <Star className="h-4 w-4 text-orange-400" />
                    Confidence Rating
                  </Label>
                  <Input
                    id="confidence"
                    type="number"
                    name="confidence"
                    value={questionfeedback.confidence || ""}
                    onChange={handleChange}
                    placeholder="1 – 10"
                    min={1}
                    max={10}
                    required
                    className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="correctness"
                    className="flex items-center gap-1.5 text-orange-700 font-medium"
                  >
                    <Zap className="h-4 w-4 text-orange-400" />
                    Correctness Rating
                  </Label>
                  <Input
                    id="correctness"
                    type="number"
                    name="correctness"
                    value={questionfeedback.correctness || ""}
                    onChange={handleChange}
                    placeholder="1 – 10"
                    min={1}
                    max={10}
                    required
                    className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="comment"
                  className="flex items-center gap-1.5 text-orange-700 font-medium"
                >
                  <User className="h-4 w-4 text-orange-400" />
                  Comment
                </Label>
                <Input
                  id="comment"
                  type="text"
                  name="comment"
                  value={questionfeedback.comment}
                  onChange={handleChange}
                  required
                  className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                />
              </div>

             
              {/* Divider */}
              <div className="border-t border-orange-100 pt-2" />

              {/* Submit */}
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
    );
}
export default QuestionFeedback;