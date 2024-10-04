import { useEffect, useState } from "react"
import AssessmentService from "../Service/AssessmentService";

const EvaluationCriteria = () => {
    const[criteria, setCriteria]=useState([]);
    const[error, setError]=useState(null);

    useEffect(()=>{
        const fetchCriteria = async()=>{
            try{
                const data = await AssessmentService.getEvaluationCriteria();
                setCriteria(data);

            }catch(error){
                setError('failed to fetch criteria...')
            }
        } 
        fetchCriteria();
    },[]);
    if(error) return <p>{error}</p>

    return(
        <>
        <h3>Evaluation Criteria</h3>

        <ol>
            {criteria.map(c =>(
                <li key={c.id}>{c.title}</li>
            ))}
        </ol>
        </>
    )
}
export default EvaluationCriteria;