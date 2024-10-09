import { useEffect, useState } from "react"
import AssessmentService from "../Service/AssessmentService";


const AssessmentDetails = () => {
    const [assessmentId, setAssessmentId] = useState('');
    const [details, setDetails] = useState([]);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setAssessmentId(event.target.value);
    };

    const fetchAssessmentDetails = async () => {
        try {
            const data = await AssessmentService.getAssessmentDetails(assessmentId);
            setDetails(data);
            
            setError(null); 
        } catch (error) {
            setError('Failed to fetch assessment details.');
            setDetails(null);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchAssessmentDetails();
    };

    return (
    <>
        <h3>Assessment Details ...</h3>
        <form onSubmit={handleFormSubmit}>
                <label htmlFor="assessmentIdInput">Assessment ID:</label>
                <input
                    id="assessmentIdInput"
                    type="text"
                    value={assessmentId}
                    onChange={handleInputChange}
                    placeholder="Enter Assessment ID"
                />
                <button type="submit">Get Details</button>
            </form>
            {error && <p>{error}</p>}
            {details && (
                <div>
                    <h4>Assessment Details:</h4>
                    <p><strong>ID:</strong> {details.id}</p>
                    <p><strong>Subject Id:</strong> {details.subjectId}</p>
                    <p><strong>Passing marks:</strong> {details.passingLevel}</p>
                    
                </div>
            )}
    </>
    )

}

export default AssessmentDetails;