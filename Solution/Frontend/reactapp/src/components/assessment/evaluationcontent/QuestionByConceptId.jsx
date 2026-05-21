import {useState,useEffect} from 'react';
import { Button } from "../../ui/button";


import {  WEBAPI_JAVA_URL} from "@/lib/utils";
const QuestionByConceptId = ()=>{

  
    const [conceptId,setConcept] = useState('');
    const [questions,setQuestions] = useState([]);
   
    const fetchConcept = async () => {
        if(!concept || concept === null) return;
        try{
            const response = await fetch(`${WEBAPI_JAVA_URL}/questions/concepts/${concept}`,
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
                type="text" 
                value={concept} 
                onChange={(e)=>setConcept(e.target.value)}
                placeholder="Enter concept name"
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