import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CandidateService from "../services/CandidateDetailsService"; // Ensure the import is correct

const CandidateTestList = () => {
  const [testId, setTestId] = useState("");
  const [testDetails, setTestDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const { userId } = location.state || {}; // Get userId from the location state
  const [candidateId, setCandidateId] = useState(userId || ""); // Set candidateId (can be passed from state or manually input)

  // Function to fetch test details
  const fetchDetails = async () => {
    try {
      const idToFetch = candidateId || testId; // Use candidateId first, fallback to testId
      if (!idToFetch) {
        setErrorMessage("Please provide a candidate ID.");
        return;
      }

      setErrorMessage(""); // Clear previous error messages
      console.log("Fetching details for Candidate ID:", idToFetch);

      // Correctly call CandidateService.getTestList
      const response = await CandidateService.getTestList(idToFetch);

      // Log the response to check the data structure
      console.log("API Response:", response);

      // Check if response is valid and has test data
      if (Array.isArray(response) && response.length > 0) {
        // Filter the tests to ensure each test has a score and testId
        const validTestDetails = response.filter((test) => test.score !== undefined && test.testId !== undefined);
        setTestDetails(validTestDetails);

        if (validTestDetails.length === 0) {
          setErrorMessage("No valid test details found for this candidate.");
        }
      } else {
        setErrorMessage("No test details found for this candidate.");
        setTestDetails([]); // Clear previous details
      }
    } catch (error) {
      console.error("API Call Error:", error.message);
      setErrorMessage(
        "Failed to fetch test details. Please try again or check the candidate ID."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Candidate Details</h1>

      <div className="mb-4">
        {/* Input field for candidate ID */}
        <input
          type="text"
          placeholder="Enter candidate ID"
          value={testId}
          onChange={(e) => setTestId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        onClick={fetchDetails} // Fetch details on button click
        className="w-full p-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Show Result
      </button>

      {/* Display error message */}
      {errorMessage && (
        <p className="mt-4 text-red-600 text-center text-sm">{errorMessage}</p>
      )}

      {/* Display fetched test details */}
      {testDetails.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Test Results</h2>
          <ul className="space-y-3">
            {testDetails.map((test, index) => (
              <li
                key={index}
                className="p-3 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition duration-200"
              >
                <div className="text-sm text-gray-700">
                  <strong>Test ID:</strong> {test.testId}
                </div>
                <div className="text-sm text-gray-700 mt-1">
                  <strong>Score:</strong> {test.score !== undefined ? test.score : "N/A"}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CandidateTestList;
