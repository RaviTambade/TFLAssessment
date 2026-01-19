
function TestData(){

    const testData = {
        ActiveTest:6,
        PendingReview:12,
        SkillGap:18,
        Alert:3
    }

    return(
        
        <div className="card mb-3">
            <div className="card-header">Test Data</div>
            <div className="card-body">
                <p><strong>Active Tests : </strong>{testData.ActiveTest}</p>
                <p><strong>Pending Review : </strong>{testData.PendingReview}</p>
                <p><strong>Skill Gap : </strong>{testData.SkillGap}</p>
                <p><strong>Alert : </strong>{testData.Alert}</p>
            </div>
        </div>
        
    );

}
export default TestData