import "./Design.css";

function TestData(){

    const testData = {
        ActiveTest:6,
        PendingReview:12,
        SkillGap:18,
        Alert:3
    }

    return(
        
        <div className="MentorData-container">
            <div className="MentorData-info">
                <p><strong>Active Tests : </strong>{testData.ActiveTest}</p>
                <p><strong>Pending Review : </strong>{testData.PendingReview}</p>
                <p><strong>Skill Gap : </strong>{testData.SkillGap}</p>
                <p><strong>Alert : </strong>{testData.Alert}</p>
            </div>
        </div>
        
    );

}
export default TestData