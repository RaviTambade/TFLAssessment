import React, { useEffect, useState } from "react";
import CandidateDetailsServicea from "../Services/CandidateDetailsService";

const TestResultDetails = ({ testId }) => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        setLoading(true);
        const results = await TestResultDetails(testId);
        setTestResults(results);
      } catch (err) {
        setError("Failed to load test results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, [testId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Test Results for Test ID: {testId}</h2>
      {testResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Candidate ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Subject</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map((result) => (
              <tr key={result.candidateId}>
                <td>{result.testName}</td>
                <td>{result.candidateId}</td>
                <td>{result.firstName}</td>
                <td>{result.lastName}</td>
                <td>{result.subject}</td>
                <td>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TestResultDetails;
