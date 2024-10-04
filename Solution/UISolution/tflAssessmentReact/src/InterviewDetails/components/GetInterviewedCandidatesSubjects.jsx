import { useEffect, useState } from "react";
import InterviewService from "../services/InterviewService";

const InterviewSubjects = () => {
    const [interviews, setInterviews] = useState([]);
    const [error, setError] = useState(null);
    const [candidateId, setCandidateId] = useState(''); // State to store candidate ID
    const [submittedCandidateId, setSubmittedCandidateId] = useState(null); // State for submitted candidate ID

    useEffect(() => {
        const fetchInterviews = async () => {
            if (!submittedCandidateId) return; // Only fetch when a candidate ID is submitted
            try {
                const data = await InterviewService.GetInterviewedCandidatesSubjects(submittedCandidateId);
                console.log(data);
                setInterviews(data);
            } catch (err) {
                setError('Failed to fetch interview candidates');
            }
        };

        fetchInterviews();
    }, [submittedCandidateId]); // Re-run effect when submitted candidate ID changes

    const handleInputChange = (e) => {
        setCandidateId(e.target.value); // Update candidate ID as the user types
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
