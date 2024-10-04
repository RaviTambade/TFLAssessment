
import { useEffect, useState } from "react";
import AssessmentService from "../Service/AssessmentService";

const AssessmentList=()=>{

    const [assessments, setAssessment] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchAssessments = async () => {
            try {
                const data = await AssessmentService.getAllAssessments();
                setAssessment(data);
            } catch (err) {
                setError('Failed to fetch assessments');
            }
        };

        fetchAssessments();
    },[]);

    if (error) return <p>{error}</p>;

    return(
        <>
             <h1>Assessments</h1>
        <ul>
            {
                assessments.map(assessment => (
                <li key={assessment.id}>{assessment.subjectId} | {assessment.status} | {assessment.subjectExpertId} | {assessment.creationDate} | {assessment.scheduledDate}</li>
            ))}
        </ul>
        </>
    );
}

export default AssessmentList;