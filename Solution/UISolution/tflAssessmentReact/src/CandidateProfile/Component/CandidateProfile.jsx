import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
    navigate(path, { state: { userId } });
  }

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
        </div>

        <button
          onClick={routeTest}
          className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}

export default CandidateProfile;
