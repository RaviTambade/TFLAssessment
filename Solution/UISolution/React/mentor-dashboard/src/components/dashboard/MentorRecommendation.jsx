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