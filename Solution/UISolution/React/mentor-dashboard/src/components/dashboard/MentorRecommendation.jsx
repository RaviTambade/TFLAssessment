import { useEffect, useState } from "react";
import { getMentorRecommendation } from "../../service/MentorRecommendationService";

function MentorRecommendation() {

    const [mentorRecommendation,setMentorRecommendation]=useState(null);
    

    useEffect(()=>{
        getMentorRecommendation().then((data)=>{
            setMentorRecommendation(data);
        });
    },[]);

    if(!mentorRecommendation) return <p>No data available</p>

    return (
        <div className="card mb-3">
            <div className="card-header bg-dark text-white">
                {mentorRecommendation.title}
            </div>
            <div className="card-body">
                <strong> Suggested Actions:   </strong>

                <ul>
                    {mentorRecommendation.SuggestedActions.map((action, index) =>
                        <li key={index}> {action}</li>
                    )}
                </ul>
            </div>
            <div className="mentor-buttons">
                {mentorRecommendation.buttons.map((label, index) => (
                    <button key={index} className="btn btn-outline-primary me-2">{label}</button>
                ))}
            </div>
        </div>
    )
}
export default MentorRecommendation;