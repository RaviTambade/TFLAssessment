import { useEffect, useState } from "react";
import InterviewService from "../services/InterviewService";

const InterviewList = () => {
    const [interviews, setInterviews] = useState([]); 
    const [error, setError] = useState(null);          

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const data = await InterviewService.getAllInterviewCandidates();
                console.log(data);
                setInterviews(data);  
            } catch (err) {
                setError('Failed to fetch interview candidates');
            }
        };

        fetchInterviews();  
    }, []); 

    if (error) return <p>{error}</p>; 

    return (
        <>
            <h1>Interview Candidates</h1>
            <ul>
                {interviews.map(interview => (
                    <li key={interview.CandidateId}>
                        Candidate: {interview.firstName} {interview.lastName} | Title: {interview.title}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default InterviewList;
