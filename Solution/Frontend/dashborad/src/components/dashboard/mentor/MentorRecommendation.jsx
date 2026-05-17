import { useEffect, useState } from "react";
import { getMentorData } from "../../services/mentor/MentorDataService";

function MentorRecommendation() {
    const [mentorRecommendation, setMentorRecommendation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMentorData().then((data) => {
            setMentorRecommendation(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!mentorRecommendation) return <p>No data available</p>;

    return (
        <div className="card mb-3">
            <div className="card-header bg-dark text-white">
                {mentorRecommendation.title || "Mentor Recommendation"}
            </div>
            <div className="card-body">
                <strong>Suggested Actions:</strong>
                <ul>
                    {mentorRecommendation.SuggestedActions?.map((action, index) => (
                        <li key={index}>{action}</li>
                    )) || <li>No actions available</li>}
                </ul>
            </div>
            <div className="mentor-buttons">
                {mentorRecommendation.buttons?.map((label, index) => (
                    <button key={index} className="btn btn-outline-primary me-2">
                        {label}
                    </button>
                )) || null}
            </div>
        </div>
    );
}

export default MentorRecommendation;
