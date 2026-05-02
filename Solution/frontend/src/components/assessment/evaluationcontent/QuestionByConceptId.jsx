import {useState,useEffect} from 'react';
import { Button } from "../../ui/button";


import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";
const QuestionByConceptId = ()=>{

  
    const [conceptId,setConceptId] = useState('');
    const [questions,setQuestions] = useState([]);
   
    const fetchConcept = async () => {
        if(!conceptId || conceptId === '0') return;
        try{
            const response = await fetch(`${WEBAPI_JAVA_URL}/concepts/${conceptId}/questions`,
                {
                    method: 'GET',
                });
            if(!response.ok) throw new Error(`API error: ${response.status}`);
            const data = await response.json();
            setQuestions(data);
            console.log('Fetched Questions:', data);
        }catch(error){
            console.error('Error fetching concept:', error);
            setQuestions([]);
        }
    };

    return(
        <div>
            <input 
                type="number" 
                value={conceptId} 
                onChange={(e)=>setConceptId(e.target.value)}
                placeholder="Enter concept ID"
            />
            <Button onClick={fetchConcept}>Fetch Questions</Button>
            <div>
                {questions.length > 0 && (
                    <ul>
                        {questions.map((q, idx) => (
                            <li key={idx}>{JSON.stringify(q)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
export default QuestionByConceptId;