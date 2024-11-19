import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CandidateProfile() {
  const location = useLocation();
  const { userId } = location.state || {}; // Extract userId from location state
  const { candidateId } = location.state || {}; // Extract candidateId from location state

  const [employeeDetails, setEmployeeDetails] = useState(null); 
  const [score, setScore] = useState(null);  // Add state for storing candidate's score

  useEffect(() => {
    if (userId) {
      // Fetch employee details
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

      // Fetch candidate's test score (if candidateId is available)
      if (candidateId) {
        fetch(`http://localhost:5151/api/assessment/testscore/${candidateId}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` },
        })
          .then(response => response.json())
          .then(data => {
            if (data && data.score !== undefined) {
              setScore(data.score); // Set the score data
            } else {
              console.error("No score data found");
            }
          })
          .catch(error => {
            console.error("Error fetching candidate score:", error);
          });
      }
    }
  }, [userId, candidateId]); // Run effect when userId or candidateId changes

  let navigate = useNavigate(); 

  const routeTest = () =>{ 
    let path = `testAppear`; 
    navigate(path, { state: { userId } });
  };

  const routeList = () => {
    let path = `testList`;
    navigate(path, { state: { candidateId } });
  };

  if (!employeeDetails) {
    return <p className="text-center text-gray-700 dark:text-gray-300">Loading...</p>; 
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">
          {employeeDetails.firstName} {employeeDetails.lastName}
        </h2>
        <hr className="my-4" />
        
        <div>
          <p className="text-gray-700 dark:text-gray-300">ID: {employeeDetails.userId}</p>
          <p className="text-gray-700 dark:text-gray-300">Email: {employeeDetails.email}</p>
          <p className="text-gray-700 dark:text-gray-300">Contact: {employeeDetails.contact}</p>
          <p className="text-gray-700 dark:text-gray-300">
            
          </p>
        </div>

        <button
          onClick={routeTest}
          className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
        >
          Start Test
        </button>

        <button 
          onClick={routeList}
          className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Show Test List
        </button>
      </div>
    </div>
  );
}

export default CandidateProfile;
