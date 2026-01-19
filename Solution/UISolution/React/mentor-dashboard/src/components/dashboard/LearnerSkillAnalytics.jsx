
import "./Design.css";

function LearnerSkillAnalytics(){

 const learnerData= {
      LearnerName: "sanika kulkarni",
      Layer: "3 - System Understending",

     Skills: [
        {skillName:"Programming Basics",mastery:"85%",status:"strong"},
        {skillName:"MVC Flow",mastery:"78%",status:"stable"},
        {skillName:"Dependency injection",mastery:"42%",status:"⚠ Needs support"},
        {skillName:"LINQ",mastery:"35%",status:"⚠ week"},
        {skillName:"Asynchronous programming",mastery:"25%",status:"⚠ at risk"}
         
      ],

      insights:[
        "Conceptual clarity is good",
        "struggles with lifetime selection ",
         "needs scenario-based practice"
      ]

 };

 return(
    <div ClassName="LearnerSkillAnalytics-Container">
        <div ClassName="LearnerAnalytics-title">Learner Skill Analytics</div>
    

    <div ClassName="LearnerAnalytics-Info">
        <div>
            <strong>Learner</strong>:{learnerData.LearnerName}
        </div>
        <div>
            <strong>Layer</strong>:{learnerData.Layer}
        </div>

    </div>

    <div ClassName="LearnerAnalytics-Table">
        <table>
            <thread>
                <tr>
                    <th>Skill</th>
                    <th>Mastery</th>
                    <th>Status</th>
                </tr>
            </thread>
            <tbody>
                {learnerData.Skills.map((skill,index)=>(
                    <tr>
                        <td>  {skill.skillName}</td>
                        <td>  {skill.mastery}</td>
                        <td>  {skill.status}</td>
                    </tr>   


                ))}
            </tbody>
        </table>

    </div>

    <div ClassName="LearnerAnalytics-insights">
        <strong>AI Insights:</strong>
        <ul>{learnerData.insights.map((point , index) =>
        <li key={index}>{point}</li>
        
        )}
        
        </ul>
    </div>

    </div>
 );
}
export default LearnerSkillAnalytics;