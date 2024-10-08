
<<<<<<< HEAD
// import { useEffect, useState } from "react";
// import TflAssessmentServiceFetch from "../../services/TflAssessmentServiceFetch";
=======
import { useEffect, useState } from "react";
import AssessmentService from "../Service/AssessmentService";
>>>>>>> 2b27a7d3aebdf4cf4ea523bacc7b20e30153db5e

const AssessmentList = () => {

    const [assessments, setAssessment] = useState([]);
    const [error, setError] = useState(null);

<<<<<<< HEAD
//     useEffect(()=>{
//         const fetchAssessments = async () => {
//             try {
//                 const data = await TflAssessmentServiceFetch.getAllAssessments();
//                 console.log(data);
//                 setAssessment(data);
//             } catch (err) {
//                 setError('Failed to fetch assessments');
//             }
//         };
=======
    useEffect(() => {
        const fetchAssessments = async () => {
            try {
                const data = await AssessmentService.getAllAssessments();
                setAssessment(data);
            } catch (err) {
                setError('Failed to fetch assessments');
            }
        };
>>>>>>> 2b27a7d3aebdf4cf4ea523bacc7b20e30153db5e

        fetchAssessments();
    }, []);

    if (error) return <p>{error}</p>;

    return (
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