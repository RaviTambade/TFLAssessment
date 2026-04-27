import { useEffect, useState } from "react";
import InterviewService from "../services/InterviewService";

const InterviewSubjects = () => {
    const [interviews, setInterviews] = useState([]);
    const [error, setError] = useState(null);
    const [candidateId, setCandidateId] = useState('');
    const [submittedCandidateId, setSubmittedCandidateId] = useState(null);

    useEffect(() => {
        const fetchInterviews = async () => {
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
    }, [submittedCandidateId]); 

    const handleInputChange = (e) => {
        setCandidateId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (candidateId) {
            setSubmittedCandidateId(candidateId); 
            setError(null); 
            setInterviews([]); 
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
