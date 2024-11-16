import { useEffect, useState } from "react"
import AssessmentService from "../Service/AssessmentService";

const SubjectsList = () => {
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchSubjects = async () =>{
            try{
                    const data = await AssessmentService.getAllSubjects();
                    setSubjects(data);
            }catch(error){
                    setError('failed to fetch subject..');
            }
        }
        fetchSubjects();
    },[]);
    if(error) return <p>{error}</p>
    return (
        <>
        <h3>Subjects</h3>
        <ol>
            {subjects.map(subject =>(
                <li key={subject.id}>{subject.title}</li>
            ))}
        </ol>
        </>
    )
}
export default SubjectsList;