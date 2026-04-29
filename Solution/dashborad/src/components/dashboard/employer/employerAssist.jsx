import React from "react";
// Interview Preparation View (Employer Assit

const EmployerAssist=()=>{
    
    return(

        <div className="conatiner ">  
            <div className="card shadow p-4" style={{ width: "520px" }}>
                <h5 className="text-center mb-3">
                    Interview Preparation - Sahil Kamble
                </h5>
                <hr/>
            <div className="mb-3">
                <h6 className="fw-bold">
                    Strength Areas
                </h6>
                <div>
                    <h6> ✔ API Design</h6>
                    <h6> ✔ C# OOP </h6>
                </div>
                <h6 className="fw-bold">
                    Suggested Questions
                </h6>
                <div>
                   <li>          
                        How would you handle API versioning?                           
                   </li>
                   <li>Explain async/await with real scenario</li>
                </div>
                <h6 className="fw-bold">
                     Risk Areas
                </h6>
                <div>
                    <li>                     
                            Azure Monitoring 
                    </li>
                </div>

            </div>
            </div>
        </div>
        




    )
};

export default EmployerAssist;


 