import { useEffect, useState } from "react";
import InterviewService from "../services/InterviewService";

const InterviewList = () => {
    const [interviews, setInterviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const data = await InterviewService.getAllInterviewCandidates();
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
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {interviews.map(interview => (
                        <tr key={interview.CandidateId}>
                            <td>{interview.firstName}</td>
                            <td>{interview.lastName}</td>
                            <td>{interview.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default InterviewList;
