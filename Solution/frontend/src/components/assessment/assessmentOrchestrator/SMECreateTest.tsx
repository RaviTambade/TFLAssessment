import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
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
}



const SMECreateTest = () => {

  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);

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

  const selectedQuestionsData = availableQuestions.filter((q) =>selectedQuestions.includes(q.questionId)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ testName, description,duration,selectedQuestions: selectedQuestionsData   });
  };

  const submitTest=()=>{
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

            {/* Concept Selection */}
            <div className="space-y-4 border-t pt-6">
              <div>
                <Label className="text-base font-semibold">Filter Questions by Concept</Label>
                <p className="text-sm text-muted-foreground mt-1">Select a concept to view available questions</p>
              </div>
              <RadioGroup value={selectedConcept?.id.toString() || ""}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {concepts.map((concept) => (
                    <div key={concept.id} className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value={concept.id.toString()} 
                        id={`concept-${concept.id}`}
                        onClick={() => setSelectedConcept(concept)}
                      />
                      <Label 
                        htmlFor={`concept-${concept.id}`} 
                        className="cursor-pointer font-normal"
                      >
                        {concept.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              <p className="text-xs text-muted-foreground mt-2">
                Showing {filteredQuestions.length} question(s) for "{selectedConcept?.name || 'Select a concept'}"
              </p>
            </div>

            {/* Questions Selection */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <Label className="text-base font-semibold">Select Questions</Label>
                  <p className="text-sm text-muted-foreground mt-1">Choose questions to include in your test</p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowQuestionList(!showQuestionList)}
                >
                  {showQuestionList ? "Hide" : "Browse"} Questions
                </Button>
              </div>

              {/* Available Questions List */}
              {showQuestionList && (
                <Card className="bg-card">
                  <CardContent className="pt-6 max-h-96 overflow-y-auto">
                    {loadingQuestions ? (
                      <p className="text-center py-8 text-muted-foreground">Loading questions...</p>
                    ) : filteredQuestions.length > 0 ? (
                      <>
                        <div className="mb-4 p-2 bg-muted rounded text-xs text-muted-foreground">
                          Debug: {filteredQuestions.length} questions loaded
                        </div>
                        <div className="space-y-3">
                          {filteredQuestions.map((question) => (
                            <div key={question.questionId} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted transition-colors">
                              <Checkbox 
                                id={`question-${question.questionId}`}
                                checked={selectedQuestions.includes(question.questionId)}
                                onCheckedChange={() => toggleQuestion(question.questionId)}
                                className="mt-1"
                              />
                              <div className="flex-1 min-w-0">
                                <label 
                                  htmlFor={`question-${question.questionId}`}
                                  className="cursor-pointer block"
                                >
                                  <div className="font-medium text-foreground break-words">{question.description}</div>
                                  <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{question.type}</span>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                                      question.difficulty === "BEGINNER" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
                                      question.difficulty === "INTERMEDIATE" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" :
                                      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                                    }`}>
                                      {question.difficulty}
                                    </span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="text-center py-8 text-muted-foreground">
                        {selectedConcept ? "No questions available for this concept." : "Please select a concept first."}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Selected Questions */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">
                  Selected Questions ({selectedQuestions.length})
                </Label>
                {selectedQuestionsData.length > 0 ? (
                  <div className="space-y-2">
                    {selectedQuestionsData.map((question) => (
                      <div
                        key={question.questionId}
                        className="flex items-start justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground break-words">{question.description}</div>
                          <div className="text-sm text-muted-foreground mt-1">{question.type} • {question.difficulty}</div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeQuestion(question.questionId)}
                          className="ml-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">No questions selected yet. Click "Browse Questions" to add questions.</p>
                )}
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
