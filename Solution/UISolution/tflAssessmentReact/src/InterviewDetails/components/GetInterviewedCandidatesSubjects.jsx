import { useEffect, useState } from "react";
import InterviewService from "../services/InterviewService";

const InterviewSubjects = () => {
    const [interviews, setInterviews] = useState([]);
    const [error, setError] = useState(null);
    const [candidateId, setCandidateId] = useState('');
    const [submittedCandidateId, setSubmittedCandidateId] = useState(null);

    useEffect(() => {
        const fetchInterviews = async () => {
            // Only fetch when a candidate ID is submitted
            if (!submittedCandidateId) return; 
            try {
                const data = await InterviewService.getInterviewedCandidatesSubjects(submittedCandidateId);
                console.log(data);
                setInterviews(data);
            } catch (err) {
                setError('Failed to fetch interview candidates');
            }
        };

        fetchInterviews();
        // Re-run effect when submitted candidate ID changes
    }, [submittedCandidateId]); 

    const handleInputChange = (e) => {
         // Update candidate ID as the user types
        setCandidateId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (candidateId) {
            setSubmittedCandidateId(candidateId); // Set the submitted ID for fetching
            setError(null); // Reset any previous error
            setInterviews([]); // Clear previous results
        } else {
            setError('Please enter a valid candidate ID');
        }
    };

    return (
        <>
            <h1>Interview Candidates</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={candidateId} onChange={handleInputChange} placeholder="Enter Candidate ID" />
                <button type="submit">Show Details</button>
            </form>

            {error && <p>{error}</p>}

            <ul>
                {interviews.length > 0 ? (
                    interviews.map(interview => (
                        <li key={interview.CandidateId}>
                            Candidate: {interview.firstName} {interview.lastName} | Title: {interview.title}
                        </li>
                    ))
                ) : (
                    <p>No interviews found for this candidate.</p>
                )}
            </ul>
        </>
    );
};

export default InterviewSubjects;
