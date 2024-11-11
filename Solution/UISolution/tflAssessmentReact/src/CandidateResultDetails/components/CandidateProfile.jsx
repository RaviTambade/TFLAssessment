
// CandidateProfile Component
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CandidateProfile() {
    const location = useLocation();
    const { userId } = location.state;

    const [employeeDetails, setEmployeeDetails] = useState({});

    useEffect(() => {
        if (userId) {
            fetch(`http://localhost:5151/api/assessment/employees/${userId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` }
            })
                .then(response => response.json())
                .then(data => setEmployeeDetails(data))
                .catch(error => console.error("Error fetching employee details:", error));
        }
    }, [userId]);

    return (
        <div>
            <h2>{employeeDetails.firstname} {employeeDetails.lastname}</h2>
            <p>Email: {employeeDetails.email}</p>
            <p>Contact: {employeeDetails.contact}</p>
            {employeeDetails.department && <p>Department: {employeeDetails.department}</p>}
            {/* Render additional fields if present */}
        </div>
    );
}

export default CandidateProfile;