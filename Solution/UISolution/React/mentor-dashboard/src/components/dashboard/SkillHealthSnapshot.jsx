
function SkillHealthSnapshot(){

    //hard coded list data
    const skillHealth={
        strong:"Programming Basics",
        average: "Web Architecture",
        weak: "Dependency Injection, LINQ" 

    };

    return (
        <div className="SkillHealth-container">
        
        <div className="SkillHealth-title">
             📊 Skill Health Snapshot
            </div>

        <div className="SkillHealth-list">
            <div className="skill strong">
            • <strong>Strong:</strong> {skillHealth.strong}
        </div>

        <div className="skill average">
           • <strong>Average:</strong>{skillHealth.average}
            </div>

            <div className="skill Weak">
           • <strong>Weak:</strong>{skillHealth.weak}
            </div>

        </div>
        </div>
            
    );
}
export default SkillHealthSnapshot;
            
    