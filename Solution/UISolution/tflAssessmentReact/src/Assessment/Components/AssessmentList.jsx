import { useEffect, useState } from "react";
import AssessmentService from "../Service/AssessmentService";

const AssessmentList = () => {

    const [assessments, setAssessment] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssessments = async () => {
            try {
                const data = await AssessmentService.getAllAssessments();
                setAssessment(data);
            } catch (err) {
                setError('Failed to fetch assessments');
            }
        };

        fetchAssessments();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <>
            <h1>Assessments</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Subject ID</th>
                        <th>Test Name</th>
                        <th>Subject Name</th>
                        <th>Status</th>
                        <th>SME ID</th>
                        <th>FirstName</th>
                        <th>LastName </th>
                        <th>Creation Date</th>
                        <th>Scheduled Date</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        assessments.map(assessment => (
                            <tr key={assessment.id}>
                                <td>{assessment.subjectId}</td>
                                <td>{assessment.testName}</td>
                                <td>{assessment.subject}</td>
                                <td>{assessment.status}</td>
                                <td>{assessment.subjectExpertId}</td>
                                <td>{assessment.firstName}</td>
                                <td>{assessment.lastName}</td>
                                <td>{new Date(assessment.creationDate).toLocaleDateString()}</td>
                                <td>{new Date(assessment.scheduledDate).toLocaleDateString()}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default AssessmentList;
