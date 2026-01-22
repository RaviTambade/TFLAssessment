import { useEffect, useState } from "react";
import { getMentorData } from "../../services/mentor/MentorDataService";

function MentorRecommendation() {
    const [mentorData, setMentorData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMentorData().then((data) => {
            setMentorData(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!mentorData) return <p>No data available</p>;

    return (
        <div className="card mb-3">
            <div className="card-header bg-dark text-white">
                {MentorRecommendation.title}
            </div>
            <div className="card-body">
                <strong> Suggested Actions:   </strong>

                <ul>
                    {MentorRecommendation.SuggestedActions.map((action, index) =>
                        <li key={index}> {action}</li>
                    )}
                </ul>
            </div>
            <div className="mentor-buttons">
                {MentorRecommendation.buttons.map((label, index) => (
                    <button key={index} className="btn btn-outline-primary me-2">{label}</button>
                ))}
            </div>
        </div>
    )
}
export default MentorRecommendation;