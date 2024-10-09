import { useEffect, useState } from "react";
import CandidateDetailsService from "../services/CandidateDetailsService";

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);
  const [testId, setTestId] = useState('');
  const [error, setError] = useState(null);

  const fetchCandidates = async () => {
    if (testId) { // Ensure testId is provided
      try {
        const data = await CandidateDetailsService.getCandidatesByTestId(testId);
        setCandidates(data);
        setError(null); 
      } catch (error) {
        setError('Failed to fetch candidates');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    fetchCandidates();  // Fetch candidates on submit
  };

  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Candidates According to Test</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Test ID: </label>
          <input 
            type="text" 
            value={testId} 
            onChange={(e) => setTestId(e.target.value)}  
            placeholder="Enter Test ID"  
            required 
          />
        </div>
        <button type="submit">Submit</button> {/* Submit button */}
      </form>

      {candidates.length > 0 ? (
        <ol>
          {candidates.map((candidate) => (
            <li key={candidate.id}>
              {candidate.firstName} {candidate.lastName}
            </li>
          ))}
        </ol>
      ) : (
        <p>No candidates found</p>
      )}
    </>
  );
};

export default CandidatesList;
