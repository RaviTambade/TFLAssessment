import {useState,useEffect} from 'react';
import {Label} from '../ui/label';
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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

type Concept = {
  id: number;
  name: string;
  description: string;
};

const baseUrl="http://localhost:9595/concepts";

const US_SME_51 =()=>{

  const [runtimes,setRuntime]=useState<Runtime[]>([]);
  const [languages,setLanguage]=useState<Language[]>([]);
  const [layers,setLayer]=useState<Layer[]>([]);
  const [frameworks,setFramework]=useState<Framework[]>([]);
  const [concepts,setConcept]=useState<Concept[]>([]);

  const [selectedRuntime,setSelectedRuntime]=useState<Runtime>();
  const [selectedLanguage,setSelectedLanguage]=useState<Language>();
  const [selectedLayer,setSelectedLayer]=useState<Layer>();
  const [selectedFramework,setSelectedFramework]=useState<Framework>();

  useEffect(()=>{
    const fetchRuntime= async ()=>{
      try{
        const response=await fetch(`${baseUrl}/get/runtime`,{
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
        const response=await fetch(`${baseUrl}/get/languages/${selectedRuntime?.id}`,{
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
        const response=await fetch(`${baseUrl}/get/layers`,{
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
        const response=await fetch(`${baseUrl}/get/frameworks/${selectedLanguage?.id}/${selectedLayer?.id}`,{
          method:"GET",
        });
        const data:Framework[]=await response.json();
        setFramework(Array.isArray(data)?data:[]);
      }catch(error){
        console.log(error);
      }
    }
  },[]);

  return(
    <>
    <div>
      <div>
        <Label>1.Select Runtime</Label>
        <RadioGroup 
          value={selectedRuntime?.id.toString()??""}
          onValueChange={(value)=>{
            const runtime=runtimes.find((r)=>r.id.toString()===value);
            setSelectedRuntime(runtime??null);
          }}
        >
          <div>
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
            <div>
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
            <div>
              {layers.map((layer)=>(
                <div key={layer.id}>
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
            <div>
              {frameworks.map((framework)=>(
                <div key={framework.id}>
                  <RadioGroupItem value={framework.id.toString()} id={`framework-${framework.id}`}/>
                  <Label htmlFor={`layer-${framework.id}`}>
                  {framework.frameworkName}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
      </div>
      </div>
    </>
  );
}
export default US_SME_51;