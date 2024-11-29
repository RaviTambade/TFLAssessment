import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function CandidateProfile() {
  const location = useLocation();
  const { candidateId } = location.state || {}; 

  const [employeeDetails, setEmployeeDetails] = useState(null);

  useEffect(() => {
    if (candidateId) { 
      fetch(`http://localhost:5151/api/assessment/employee/${candidateId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt_token")}` },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setEmployeeDetails(data);  
          } else {
            console.error("No employee data found");
          }
        })
        .catch((error) => {
          console.error("Error fetching employee details:", error);
        });
    }
  }, [candidateId]);  

  if (!employeeDetails) {
    return <p className="text-center text-gray-700 dark:text-gray-300">Loading...</p>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center flex-1">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">
            {employeeDetails.firstName} {employeeDetails.lastName}
          </h2>
          <hr className="my-4" />

          <div>
            <p className="text-gray-700 dark:text-gray-300">ID: {employeeDetails.userId}</p>
            <p className="text-gray-700 dark:text-gray-300">Email: {employeeDetails.email}</p>
            <p className="text-gray-700 dark:text-gray-300">Contact: {employeeDetails.contact}</p>
            <p className="text-gray-700 dark:text-gray-300">Role: {employeeDetails.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
