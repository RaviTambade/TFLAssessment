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
        .then((data) => setEmployeeDetails(data))
        .catch((error) =>
          console.error("Error fetching employee details:", error)
        );
    }
  }, [candidateId]);

  if (!employeeDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-xl">Loading profile details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Candidate Profile
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <p className="text-gray-600">
          <strong>ID:</strong> {employeeDetails.userId}
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {employeeDetails.email}
        </p>
        <p className="text-gray-600">
          <strong>Contact:</strong> {employeeDetails.contact}
        </p>
        <p className="text-gray-600">
          <strong>Role:</strong> {employeeDetails.role}
        </p>
      </div>
    </div>
  );
}

export default CandidateProfile;
