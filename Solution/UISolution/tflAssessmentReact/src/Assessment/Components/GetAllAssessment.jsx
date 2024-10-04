
<<<<<<< HEAD:Solution/UISolution/tflAssessmentReact/src/Assessment/Components/GetAllAssessment.jsx
import { useEffect, useState } from "react";
import AssessmentService from "../Service/AssessmentService";
=======
// import { useEffect, useState } from "react";
// import TflAssessmentServiceFetch from "../../services/TflAssessmentServiceFetch";
>>>>>>> 938c158d3fe7e09b64b1c8e0256bcc96cc0694a0:Solution/UISolution/tflAssessmentReact/src/components/TflAssessment/GetAllAssessment.jsx

// const AssessmentList=()=>{

//     const [assessments, setAssessment] = useState([]);
//     const [error, setError] = useState(null);

<<<<<<< HEAD:Solution/UISolution/tflAssessmentReact/src/Assessment/Components/GetAllAssessment.jsx
    useEffect(()=>{
        const fetchAssessments = async () => {
            try {
                const data = await AssessmentService.getAllAssessments();
                setAssessment(data);
            } catch (err) {
                setError('Failed to fetch assessments');
            }
        };
=======
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
>>>>>>> 938c158d3fe7e09b64b1c8e0256bcc96cc0694a0:Solution/UISolution/tflAssessmentReact/src/components/TflAssessment/GetAllAssessment.jsx

//         fetchAssessments();
//     },[]);

//     if (error) return <p>{error}</p>;

//     return(
//         <>
//              <h1>Assessments</h1>
//         <ul>
//             {
//                 assessments.map(assessment => (
//                 <li key={assessment.id}>{assessment.subjectId} | {assessment.status} | {assessment.subjectExpertId} | {assessment.creationDate} | {assessment.scheduledDate}</li>
//             ))}
//         </ul>
//         </>
//     );
// }

// export default AssessmentList;