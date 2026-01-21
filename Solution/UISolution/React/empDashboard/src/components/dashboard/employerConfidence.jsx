import React, {useState, useEffect } from "react";


function EmployerConfidence(){
    const [parameter,setParameter]=useState([null]);

    useEffect(() => {
        fetch("http://localhost:8080/dashboard/employerconfidence")
          .then(response => response.json())        
            .then(data => {
                setParameter(data);
            })
            .catch(error => {
                console.error("Error fetching employer confidence data:", error);
            });
    }, []);

    if (parameter.length===0 || parameter[0]===null) {
        return <div>Loading employer confidence data...</div>;
    }
    return(
        <div className="container ">  
            <div className="card shadow p-4" style={{ width: "520px" }}>
                <h5 className="text-center mb-3">
                     Evidence Log
                </h5>
                <hr/>
            <div className="mb-3">
                <ul>{parameter[0]}</ul>                              
                <ul>{parameter[1]}</ul>                                           
                <ul>{parameter[2]}</ul>                                     
                <ul>{parameter[3]}</ul>
            </div>
            </div>
        </div>

    )
};

export default EmployerConfidence;