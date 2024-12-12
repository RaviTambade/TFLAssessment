import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CandidateService from "../services/CandidateDetailsService";

const CandidateTestList = () => {
  const location = useLocation();
  const { candidateId } = location.state || {}; 
  const [testDetails, setTestDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (candidateId) {
      fetchTestDetails(candidateId);
    } else {
      setErrorMessage("Candidate ID not provided. Please try again.");
    }
  }, [candidateId]);

  const fetchTestDetails = async (id) => {
    try {
      setErrorMessage(""); 
      const response = await CandidateService.getTestList(id);

      if (Array.isArray(response) && response.length > 0) {
        const validTestDetails = response.filter(
          (test) => test.score !== undefined && test.testId !== undefined
        );
        setTestDetails(validTestDetails);

        if (validTestDetails.length === 0) {
          setErrorMessage("No valid test details found for this candidate.");
        }
      } else {
        setTestDetails([]);
        setErrorMessage("No test details found for this candidate.");
      }
    } catch (error) {
      console.error("Error fetching test details:", error);
      setErrorMessage("Failed to fetch test details. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Candidate Test Results</h1>
      {errorMessage && (
        <p className="text-center text-red-500 mb-4">{errorMessage}</p>
      )}
      {testDetails.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Test Results</h2>
          <ul className="space-y-4">
            {testDetails.map((test, index) => (
              <li
                key={index}
                className="p-4 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100"
              >
                <p className="text-gray-700">
                  <strong>Test ID:</strong> {test.testId}
                </p>
                <p className="text-gray-700">
                  <strong>Test Name:</strong> {test.testName}
                </p>
                <p className="text-gray-700">
                  <strong>Score:</strong> {test.score}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CandidateTestList;
