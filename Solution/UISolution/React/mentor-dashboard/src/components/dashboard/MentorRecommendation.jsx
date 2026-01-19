 function MentorRecommendation() {

    const MentorRecommendation = {
        title: "Mentor Action Recommendations",
        SuggestedActions: [
            "Assign DI-focused micro-assessment",
            "Pair with peer for code walkthrough ",
            "Recommend Layer 3 reinforcement module "

        ],

        buttons: [
            " Assign Assessment",
            "Schedule Mentoring Session"
        ]
    };

    return (
        <div className="mentor-container">
            <div className="mentor-title">
                {MentorRecommendation.title}
                
            </div>
            <div className="mentor-body">
                <strong> suggested Actions:   </strong>

                <ul>
                    {MentorRecommendation.SuggestedActions.map((action, index) =>
                        <li key={index}> {action}</li>
                    )}
                </ul>
            </div>
            <div className="mentor-buttons">
                {MentorRecommendation.buttons.map((label, index) => (
                    <button key={index}>{label}</button>
                ))}


            </div>


        </div>
    )
}
export default MentorRecommendation;