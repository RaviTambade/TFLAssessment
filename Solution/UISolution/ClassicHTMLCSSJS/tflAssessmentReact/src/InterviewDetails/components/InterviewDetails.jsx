import { useEffect, useState } from "react";
import InterviewService from "../services/InterviewService";

const InterviewDetails = () => {
    const [interviewDetails, setInterviewDetails] = useState(null);
    const [error, setError] = useState(null);
    const [interviewId, setInterviewId] = useState('');
    const [submittedInterviewId, setSubmittedInterviewId] = useState(null);

    useEffect(() => {
        const fetchInterviewDetails = async () => {
            if (!submittedInterviewId) return;
            try {
                const data = await InterviewService.getInterviewDetails(submittedInterviewId);
                console.log(data);
                setInterviewDetails(data);
            } catch (err) {
                setError('Failed to fetch interview candidates');
            }
        };

        fetchInterviewDetails();
    }, [submittedInterviewId]);

    const handleInputChange = (e) => {
        setInterviewId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (interviewId) {
            setSubmittedInterviewId(interviewId);
            setError(null);
            setInterviewDetails(null);
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

            {interviewDetails ? (
                <div>
                    <h2>Interview Details</h2>
                    <ul>
                        <li>ID: {interviewDetails.id}</li>
                        <li>Interview Date: {interviewDetails.interviewDate}</li>
                        <li>Interview Time: {interviewDetails.interviewTime}</li>
                        <li>SME Name: {interviewDetails.smeName}</li>
                        <li>Candidate Name: {interviewDetails.candidateName}</li>
                        <li>Subject: {interviewDetails.subject}</li>
                        <li> Criterias:{interviewDetails.criterias?.join(', ') ?? 'No criteria available'}</li>
                    </ul>
                </div>
            ) : (
                <p>No interview details found for this candidate.</p>
            )}
        </>
    );
};

export default InterviewDetails;
