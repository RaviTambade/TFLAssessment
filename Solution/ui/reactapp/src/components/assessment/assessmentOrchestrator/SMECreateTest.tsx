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

  // State for API data
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  // Fetch concepts and questions on component mount
  useEffect(() => {
    // Get SME ID from session storage (Authentication)
    const userData = sessionStorage.getItem("current");
    if (userData) {
      const user = JSON.parse(userData);
      // Assuming the user object has a property 'userid' or 'id'
      localStorage.setItem("smeId", user.userid || user.id);
    }

    const fetchAllQuestions = async () => {
      try {
        setLoadingQuestions(true);
        const response = await fetch(`${WEBAPI_DOTNET_URL}/createTest/20questions`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Question[] = await response.json();
        setAvailableQuestions(Array.isArray(data) ? data : []);
        setLoadingQuestions(false);
      } catch (err) {
        setError("Failed to fetch questions.");
        setLoadingQuestions(false);
        console.error("Error loading questions:", err);
      }
    };

    void fetchAllQuestions();

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
  const allQuestions = availableQuestions;

  const selectedQuestionsData = allQuestions.filter((q) => selectedQuestions.includes(q.questionId));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitSuccess(null);
    console.log({ testName, description, duration, selectedQuestions: selectedQuestionsData });

    try {
      await submitTest();
    } catch (err) {
      console.error('submitTest failed:', err);
      setError('Failed to submit test. See console for details.');
    }
  };

  const submitTest = async () => {
    const questionIds = selectedQuestionsData.map(q => q.questionId);
    const loggedInSmeId = localStorage.getItem("smeId");

    const payload = {
      SmeId: Number(loggedInSmeId || 0),
      Title: testName,
      Duration: Number(duration || 0),
      SkillLevel: undefined, // optional: set if you have a skill level
      QuestionIds: selectedQuestions,
      Description: description,
      selectedQuestions: questionIds
    };

    console.log("Submitting test with payload:", payload);
    setSubmitLoading(true);
    try {
      const res = await fetch(`${WEBAPI_DOTNET_URL}/CreateTest/create`, {
        method: "POST",         
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const contentType = res.headers.get('content-type') || '';
  let body: unknown = null;
      if (contentType.includes('application/json')) {
        body = await res.json();
      } else {
        body = await res.text();
      }

      if (!res.ok) {
        console.error('CreateTest API error', res.status, body);
        setError(`Server returned ${res.status}: ${typeof body === 'string' ? body : JSON.stringify(body)}`);
        throw new Error('API error');
      }

      console.log('CreateTest response:', res.status, body);

      // Extract created test id from response (support object { id } or plain numeric)
      let createdTestId = 0;
      if (typeof body === 'object' && body !== null && 'id' in (body as Record<string, unknown>)) {
        createdTestId = Number((body as Record<string, unknown>)['id']);
      } else if (typeof body === 'number') {
        createdTestId = Number(body);
      } else if (typeof body === 'string' && !isNaN(Number(body))) {
        createdTestId = Number(body);
      }

      setSubmitSuccess('Test created successfully');
      alert('Test created successfully!');

      // If we have selected questions and a created test id, call add-questions API
      if (createdTestId > 0 && Array.isArray(selectedQuestions) && selectedQuestions.length > 0) {
        try {
          const addPayload = { QuestionIds: selectedQuestions };

          console.log("questions to add:", selectedQuestions);
          const addRes = await fetch(`${WEBAPI_DOTNET_URL}/CreateTest/add-questions?testId=${createdTestId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addPayload)
          });

          let addBody: unknown = null;
          const addContentType = addRes.headers.get('content-type') || '';
          if (addContentType.includes('application/json')) addBody = await addRes.json(); else addBody = await addRes.text();

          if (!addRes.ok) {
            console.error('AddQuestions API error', addRes.status, addBody);
            setError(`AddQuestions failed ${addRes.status}: ${typeof addBody === 'string' ? addBody : JSON.stringify(addBody)}`);
          } else {
            console.log('AddQuestions response:', addRes.status, addBody);
          }
        } catch (err) {
          console.error('Error calling add-questions:', err);
          setError('Failed to add selected questions to the created test.');
        }
      }
    } catch (err) {
      console.error('submitTest caught error:', err);
      throw err;
    } finally {
      setSubmitLoading(false);
    }
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
              <Label>Available Questions </Label>
              <div className="space-y-4 max-h-80 overflow-auto p-2 border rounded-md bg-muted/5">
                {allQuestions.length === 0 && (
                  <p className="text-sm text-muted-foreground">No questions available.</p>
                )}
                {allQuestions.map((q) => (
                  <div key={q.questionId} className="p-3 bg-background border rounded-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{q.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Type: {q.type} | Difficulty: {q.difficulty}</p>
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
