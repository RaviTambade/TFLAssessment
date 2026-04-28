import {useState,useEffect} from 'react';
import {Label} from '../../ui/label';
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Button} from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from '../../ui/input';

type Runtime={
    id:number;
    runtimeName:string;
};

type Language={
    id:number;
    languageName:string;
    runtimeId:number;
};

type Layer = {
  id: number;
  layerName: string;
};

type Framework = {
  id: number;
  frameworkName: string;
};

type Concept={
  id:number;
  name:string;
  description:string;
  status:number;
};
const baseUrl="http://localhost:8080/api";

const AddConcept =()=>{

  const [runtimes,setRuntime]=useState<Runtime[]>([]);
  const [languages,setLanguage]=useState<Language[]>([]);
  const [layers,setLayer]=useState<Layer[]>([]);
  const [frameworks,setFramework]=useState<Framework[]>([]);
  const [concepts,setConcepts]=useState<Concept[]>([]);

  const [selectedRuntime,setSelectedRuntime]=useState<Runtime>();
  const [selectedLanguage,setSelectedLanguage]=useState<Language>();
  const [selectedLayer,setSelectedLayer]=useState<Layer>();
  const [selectedFramework,setSelectedFramework]=useState<Framework>();

  const [showConceptForm, setShowConceptForm]=useState(false);
  const [conceptName, setConceptName] = useState("");
  const [conceptDescription, setConceptDescription] = useState("");
  const [conceptStatus, setConceptStatus] = useState<number>(0);

  useEffect(()=>{
    const fetchRuntime= async ()=>{
      try{
        const response=await fetch(`${baseUrl}/runtimes`,{
          method:"GET",
        });
        const data:Runtime[]=await response.json();
        setRuntime(Array.isArray(data) ? data:[]);
      }catch(error){
        console.log(error);
      }
    };
    void fetchRuntime();
  },[]);


  useEffect(()=>{
    const fetchLanguage=async ()=>{
      try{
           if (!selectedRuntime?.id) return;
          const response=await fetch(`${baseUrl}/sme/languages/runtime/${selectedRuntime?.id}`,{
          method:"GET",
        });
        const data:Language[]=await response.json();
        setLanguage(Array.isArray(data)?data:[]);
      }catch(error){
        console.log(error);
      }
    };
    void fetchLanguage();
  },[selectedRuntime]);

  useEffect(()=>{
    const fetchLayer=async()=>{
      try{
        //  if (!selectedLanguage?.id) return;
         const response=await fetch(`${baseUrl}/layers`,{
          method:"GET",
        });
        const data:Layer[]=await response.json();
        setLayer(Array.isArray(data)?data:[]);
      }catch(error){
        console.log(error);
      }
    };
    void fetchLayer();
  },[]);

  useEffect(()=>{
    const fetchFramework=async()=>{
      try{
        //  if (!selectedLanguage?.id || !selectedLayer?.id) return;
         const response=await fetch(`${baseUrl}/frameworks/languages/${selectedLanguage?.id}/layers/${selectedLayer?.id}`,{
          method:"GET",
        });
        const data:Framework[]=await response.json();
        setFramework(Array.isArray(data)?data:[]);
      }catch(error){
        console.log(error);
      }
    };
    void fetchFramework();
  },[selectedLanguage,selectedLayer]);


  

  useEffect(()=>{
    const fetchConcept=async ()=>{
      try{
         if (!selectedFramework?.id) return;
          const response=await fetch(`${baseUrl}/concepts/frameworks/${selectedFramework?.id}`,{
          method:"GET",
        });
        const data:Concept[]=await response.json();
        setConcepts(Array.isArray(data)?data:[]);
      }catch(error){
        console.log(error);
      }
    };
    void fetchConcept();
  },[selectedFramework]);


  const createConcept=()=>{
   setShowConceptForm(true);
  };


  const handleSubmit=async()=>{
    const payload={
      name:conceptName,
      description:conceptDescription,
      status: conceptStatus,
    };

    try{
      console.log("Submitting concept with payload:", payload);
      const response1 = await fetch(`${baseUrl}/add/concept`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response Status:", response1.status);
      console.log("Response OK:", response1.ok);

      if (!response1.ok) {
        const errorText = await response1.text();
        console.log("Error Response Text:", errorText);
        throw new Error(`HTTP ${response1.status}: ${errorText}`);
      }

      // Check if backend returns JSON or just status code
      const contentType = response1.headers.get('content-type');
      const isJson = contentType && contentType.includes('application/json');
      
      if (isJson) {
        const data1 = await response1.json();
        console.log("Saved:", data1);
        const conceptId = data1.id; // Assuming backend returns the new concept's ID

        // Now associate the concept with the selected framework,/map/concept/framework/{conceptId}/{frameworkId}
        const response2 = await fetch(`${baseUrl}/map/concept/framework/${conceptId}/${selectedFramework?.id}`, {
          method: "POST",
          body: JSON.stringify({ conceptId, frameworkId: selectedFramework?.id }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if(!response2.ok){
          const errorText = await response2.text();
          console.log("Error Mapping Concept to Framework:", errorText);
          throw new Error(`HTTP ${response2.status}: ${errorText}`);
        }
        console.log("Concept mapped to framework successfully");

        alert("Concept added and mapped to framework successfully!");
      }
      
      // Success - clear form and refresh concepts
      setConceptName("");
      setConceptDescription("");
      setConceptStatus(0);
      setShowConceptForm(false);
      
      alert("Concept added successfully!");
    }
    catch(error){
      console.error("Error adding concept:", error);
      alert(`Failed to add concept: ${error.message}`);
    }
  };


  return(
    <>
     <section className="container mx-auto px-4 py-8">
       <Card className="border-border/70">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Add New Concept
          </CardTitle>
          
        </CardHeader>

      <CardContent className="space-y-6">
        <div>
        <Label>1.Select Runtime</Label>
        <RadioGroup 
          value={selectedRuntime?.id.toString()??""}
          onValueChange={(value)=>{
            const runtime=runtimes.find((r)=>r.id.toString()===value);
            setSelectedRuntime(runtime??null);
          }}
        >
          <div className="flex flex-wrap gap-6">
            {runtimes.map((runtime)=>(
              <div key={runtime.id}>
                <RadioGroupItem value={runtime.id.toString()} id={`runtime-${runtime.id}`}/>
                <Label htmlFor={`runtime-${runtime.id}`}>
                  {runtime.runtimeName}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        </div>

      <div>
          <Label>2.Select Language</Label>
          <RadioGroup
            value={selectedLanguage?.id.toString()??""}
            onValueChange={(value)=>{
              const language=languages.find((l)=>l.id.toString()===value);
              setSelectedLanguage(language??null);
            }}
            >
            <div className="flex flex-wrap gap-6">
              {languages.map((language)=>(
                <div key={language.id}>
                  <RadioGroupItem value={language.id.toString()} id={`language-${language.id}`}/>
                  <Label htmlFor={`language-${language.id}`}>
                    {language.languageName}
                  </Label>
                </div>  
              ))}
            </div>
            </RadioGroup>
      </div>

      <div>
        <Label>3.Select Layer</Label>
        <RadioGroup
          value={selectedLayer?.id.toString()??""}
          onValueChange={(value)=>{
            const layer=layers.find((l)=>l.id.toString()===value);
            setSelectedLayer(layer??null);
          }}
          >
            <div className="flex flex-wrap gap-6">
              {layers.map((layer)=>(
                <div key={layer.id} >
                  <RadioGroupItem value={layer.id.toString()} id={`layer-${layer.id}`}/>
                  <Label htmlFor={`layer-${layer.id}`}>
                    {layer.layerName}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
      </div>

      <div>
        <Label>4.Select Framework</Label>
        <RadioGroup
          value={selectedFramework?.id.toString()??""}
          onValueChange={(value)=>{
            const framework=frameworks.find((f)=>f.id.toString()===value);
            setSelectedFramework(framework??null);
          }}
          >
            <div className="flex flex-wrap gap-6">
              {frameworks.map((framework)=>(
                <div key={framework.id}>
                  <RadioGroupItem value={framework.id.toString()} id={`framework-${framework.id}`}/>
                  <Label htmlFor={`framework-${framework.id}`}>
                  {framework.frameworkName}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
      </div>

      <br/><br/>

      <div>
       <Button onClick={createConcept}>Add Concept</Button>
      </div>
      {
        showConceptForm && (
          <Card className="mt-8 border-primary/20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Create New Concept</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="concept-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Concept Name
                </Label>
                <Input 
                  id="concept-name"
                  type='text' 
                  placeholder="Enter concept name"
                  value={conceptName}
                  onChange={(e)=>setConceptName(e.target.value)}
                  className="border-slate-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="concept-description" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Concept Description
                </Label>
                <Input 
                  id="concept-description"
                  type='text' 
                  placeholder="Enter concept description"
                  value={conceptDescription}
                  onChange={(e)=>setConceptDescription(e.target.value)}
                  className="border-slate-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="concept-status" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Concept Status
                </Label>
                <Input 
                  id="concept-status"
                  type='number' 
                  placeholder="Enter concept status"
                  value={conceptStatus}
                  onChange={(e)=>setConceptStatus(Number(e.target.value))}
                  className="border-slate-300 focus:border-primary focus:ring-primary"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button onClick={() => setShowConceptForm(false)}>
                  Close
                </Button>
                <Button onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        </CardContent>
        </Card>

         {/* Concepts Display */}
          {selectedFramework && (
            <div className="rounded-md border border-border p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Concepts</h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {concepts.map((concept) => (
                    <Card key={`${concept.id}-${concept.name}`} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-base">{concept.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {concept.description || "No description available."}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          )}
      </section>
    </>
  )
}

export default AddConcept;