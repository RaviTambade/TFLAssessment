import "../Styles/CandidateSkill.css"

const skills=[
    {name:"c#",value:78},
    { name: "OOP", value: 85 },
    { name: "REST API", value: 72 },
    { name: "SQL", value: 60, warning: true },
    { name: "Git", value: 70 },
    { name: "Problem Solv.", value: 88 }
];

const CandidateSkills=()=>{
    return(
        <div className="profile-card ">
            <h2 className="title">Sahil Kamble - Skill Profile</h2>

            <div className="skills">
                {skills.map((skill,index)=>(
                    <div className="skill-row" key={index}>
                    <span className="skill-name">{skill.name}</span>

                    <div className="bar-wrapper">
                        <div
                        className="bar-fill"
                        style={{width:`${skill.value}%`}}>
                        </div>
                    </div>

                    <span className="skill-value">
                        {skill.value}%
                        {skill.warning && <span className="warning"></span>}
                    </span>
                    </div>
                ))}
            </div>

            <div className="footer">
                <span>Projects: <b>2</b></span>
                <span>Consistency: <b>High</b></span>
                <span>Risk: <b>Low</b></span>
                <span>Recommendation: <b>Hire</b></span>
            </div>

        </div>
    )
}

export default CandidateSkills;