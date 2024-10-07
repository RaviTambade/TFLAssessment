import { useEffect, useState } from "react";
import InterviewService from "../services/InterviewService";

const InterviewDeatils = () => {
    const [interviewDetails, setInterviewDetails] = useState(null); // Changed to store a single interview detail object
    const [error, setError] = useState(null);
    const [interviewId, setInterviewId] = useState('');
    const [submittedInterviewId, setSubmittedInterviewId] = useState(null);

    useEffect(() => {
        const fetchInterviewDetails = async () => {
            // Only fetch when a interview ID is submitted
            if (!submittedInterviewId) return; 
            try {
                const data = await InterviewService.getInterviewDetails(submittedInterviewId);
                console.log(data);
                setInterviewDetails(data); // Store the details of the single interview
            } catch (err) {
                setError('Failed to fetch interview candidates');
            }
        };

        fetchInterviewDetails();
        // Re-run effect when submitted interview ID changes
    }, [submittedInterviewId]); 

    const handleInputChange = (e) => {
        // Update interview ID as the user types
        setInterviewId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (interviewId) {
            setSubmittedInterviewId(interviewId); // Set the submitted ID for fetching
            setError(null); // Reset any previous error
            setInterviewDetails(null); // Clear previous results
        } else {
            setError('Please enter a valid Interview ID');
        }
    };

    return (
        <>
            <h1>Interview Candidates</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={interviewId} onChange={handleInputChange} placeholder="Enter Interview ID" />
                <button type="submit">Show Details</button>
            </form>

            {error && <p>{error}</p>}

            {interviewDetails ? ( // Check if interviewDetails has data
                <div>
                    <h2>Interview Details</h2>
                    <ul>
                        <li>ID: {interviewDetails.id}</li>
                        <li>Interview Date: {interviewDetails.interviewDate}</li>
                        <li>Interview Time: {interviewDetails.interviewTime}</li>
                        <li>SME Name: {interviewDetails.smeName}</li>
                        <li>Candidate Name: {interviewDetails.candidateName}</li>
                        <li>Subject: {interviewDetails.subject}</li>
                        <li>Criterias: {interviewDetails.criterias.join(', ')}</li>
                    </ul>
                </div>
            ) : (
                <p>No interview details found for this candidate.</p>
            )}
        </>
    );
};

export default InterviewDeatils;
