import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CandidateService from "../services/CandidateDetailsService";

const CandidateTestList = () => {
  const [testId, setTestId] = useState("");
  const [testDetails, setTestDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const { userId, candidateId } = location.state || {}; 
  const [currentCandidateId, setCurrentCandidateId] = useState(candidateId || ""); 

  useEffect(() => {
    
    if (candidateId) {
      fetchDetails(candidateId);
    }
  }, [candidateId]);

  const fetchDetails = async (idToFetch) => {
    try {
      const id = idToFetch || currentCandidateId || testId;
      if (!id) {
        setErrorMessage("Please provide a candidate ID.");
        return;
      }

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
        setErrorMessage("No test details found for this candidate.");
        setTestDetails([]);
      }
    } catch (error) {
      console.error("Error fetching test details:", error);
      setErrorMessage("Failed to fetch test details. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Candidate Test Results</h1>
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
