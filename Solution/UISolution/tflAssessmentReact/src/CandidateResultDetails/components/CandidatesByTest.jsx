import { useEffect, useState } from "react";
import CandidateDetailsService from "../services/CandidateDetailsService";

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);
  const [testId, setTestId] = useState("");
  const [error, setError] = useState(null);

  const fetchCandidates = async () => {
    if (testId) {
      try {
        const data = await CandidateDetailsService.TestResultDetails(testId);
        setCandidates(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch candidates");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCandidates();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Candidates According to Test
      </h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label
            htmlFor="testId"
            className="block text-gray-700 font-medium mb-2"
          >
            Test ID:
          </label>
          <input
            type="text"
            id="testId"
            value={testId}
            onChange={(e) => setTestId(e.target.value)}
            placeholder="Enter Test ID"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-center font-medium mb-4">{error}</p>
      )}

      {candidates.length > 0 ? (
        <ol className="list-decimal pl-5 space-y-3">
          {candidates.map((candidate) => (
            <li
              key={candidate.id}
              className="p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <p className="font-bold text-lg text-gray-800">
                {candidate.testName}
              </p>
              <p className="text-gray-700">
                {candidate.firstName} {candidate.lastName}
              </p>
              <p className="text-gray-600 italic">{candidate.subject}</p>
              <p className="text-blue-600 font-medium">Score: {candidate.score}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-center text-gray-500">No candidates found</p>
      )}
    </div>
  );
};

export default CandidatesList;
