import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import TestAppear from '../../Assessment/Components/TestAppear';



function CandidateProfile() {
  const location = useLocation();
  const { userId } = location.state || {};

  const [employeeDetails, setEmployeeDetails] = useState(null); 

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5151/api/assessment/employee/${userId}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` },
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            setEmployeeDetails(data); 
          } else {
            console.error("No employee data found");
          }
        })
        .catch(error => {
          console.error("Error fetching employee details:", error);
        });
    }
  }, [userId]);

  let navigate = useNavigate(); 
  const routeTest = () =>{ 
    let path = `testAppear`; 
    navigate(path,{state:{userId}});
  }
  const routeScore = () =>{ 
    let path = `scorebytestid`; 
    navigate(path,{state:{userId}});
  }
  if (!employeeDetails) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h2>{employeeDetails.firstName} {employeeDetails.lastName}</h2>
      <p>Id: {employeeDetails.userId}</p>
      <p>Email: {employeeDetails.email}</p>
      <p>Contact: {employeeDetails.contact}</p>
      <button onClick={routeTest}>Start Test</button>
      <button onClick={routeScore}>Show Score</button>
    </div>

   
  );
}

export default CandidateProfile;

