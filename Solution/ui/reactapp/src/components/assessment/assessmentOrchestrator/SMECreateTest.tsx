import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import availableQuestionsFromFile from "./data/availablequestions.json";
type Concept = {
  id: number,
  name: string;
};

type Question = {
  questionId: number;
  description: string;
  type: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  conceptId: number;
  options?: string[];
  correctIndex?: number;
}



const SMECreateTest = () => {

  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);

  // Default hardcoded MCQs (5 questions, each with 4 options)
  // Load default MCQs from local JSON file
  const defaultMCQs: Question[] = availableQuestionsFromFile as Question[];

  // State for API data
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch concepts and questions on component mount
  useEffect(() => {
   const fetchConcept=async ()=>{
    try{
      const response = await fetch(`${WEBAPI_DOTNET_URL}/technologies/concepts`,{
        method:"GET",
      });
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data:Concept[]=await response.json();
      setConcepts(Array.isArray(data)? data:[]);
      setLoading(false);
    }catch(err){
      setError("Failed to fetch concepts. Please check the API endpoint.");
      setLoading(false);
      console.error("Error loading concepts:", err);
    }
  };
   void fetchConcept();
  }, []);

  useEffect(()=>{
    if(!selectedConcept?.id) return;
    
    const fetchQuestions=async ()=>{
      try{
        setError(null);
        setLoadingQuestions(true);
        const response=await fetch(`${WEBAPI_DOTNET_URL}/questions/concepts/${selectedConcept.id}/questions`,{
          method:"GET",
        });
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data:Question[]=await response.json();
        console.log("Questions fetched:", data);
        setAvailableQuestions(Array.isArray(data)?data:[]);
        setLoadingQuestions(false);
      }catch(error){
        console.error("Error loading questions:", error);
        setError("Failed to load questions. Please try again.");
        setLoadingQuestions(false);
      }
    };
    void fetchQuestions();
  },[selectedConcept?.id])
  // Filtered questions are directly from API based on selected concept
  const filteredQuestions = availableQuestions;

  const toggleQuestion = (questionId: number) => {
    setSelectedQuestions((prev) => prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId]
    );
  };

  const removeQuestion = (questionId: number) => {
    setSelectedQuestions((prev) => prev.filter((id) => id !== questionId));
  };

  // Combine API-provided questions with our local default MCQs so selectedQuestions can refer to either source
  const allQuestions = [...availableQuestions, ...defaultMCQs];

  const selectedQuestionsData = allQuestions.filter((q) => selectedQuestions.includes(q.questionId));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ testName, description, duration, selectedQuestions: selectedQuestionsData });
  };

  const submitTest = () => {
    fetch(`${WEBAPI_DOTNET_URL}/CreateTest/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ testName, description, duration, selectedQuestions: selectedQuestionsData })
    });
  }
  
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Test</CardTitle>
          <CardDescription>Add test details and select questions from your preferred concepts</CardDescription>
        </CardHeader>
        <CardContent>
          {loading && (
            <div className="flex justify-center py-12">
              <p className="text-muted-foreground">Loading concepts and questions...</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
              <p className="text-destructive font-medium">Error: {error}</p>
              <p className="text-destructive/80 text-sm mt-1">Please make sure the API endpoints are available.</p>
            </div>
          )}

          {!loading && !error && (
            <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Test Name */}
            <div className="space-y-2">
              <Label htmlFor="testName">Test Name</Label>
              <Input 
                id="testName" 
                placeholder="Enter test name"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                required 
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea 
                id="description" 
                placeholder="Enter test description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required 
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
              />
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input 
                type="number" 
                id="duration" 
                placeholder="Enter duration in minutes"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required 
              />
            </div>

            {/* Questions list (including default MCQs) */}
            <div className="space-y-2">
              <Label>Available Questions (Local + Concept)</Label>
              <div className="space-y-4 max-h-80 overflow-auto p-2 border rounded-md bg-muted/5">
                {allQuestions.length === 0 && (
                  <p className="text-sm text-muted-foreground">No questions available.</p>
                )}
                {allQuestions.map((q) => (
                  <div key={q.questionId} className="p-3 bg-background border rounded-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{q.description}</p>
                        <div className="mt-2 grid grid-cols-1 gap-2">
                          {q.options?.map((opt, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={`q-${q.questionId}`}
                                disabled
                                checked={false}
                                className="w-4 h-4"
                                readOnly
                              />
                              <span className="text-sm">{opt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4">
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={selectedQuestions.includes(q.questionId)}
                            onChange={() => toggleQuestion(q.questionId)}
                            className="w-4 h-4"
                          />
                          <span>Include</span>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            {/* Submit Button */}
            <div className="flex gap-3 pt-6 border-t">
              <Button
                type="submit"
                className="flex-1"
                variant="default"
                // onClick={}
              >
                Create Test
              </Button>
              <Button
                type="reset"
                variant="outline"
                className="flex-1"
              >
                Clear
              </Button>
            </div>
          </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
    
}
export default SMECreateTest;
