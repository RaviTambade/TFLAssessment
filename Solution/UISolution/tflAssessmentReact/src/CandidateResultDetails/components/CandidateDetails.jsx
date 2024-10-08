import React, { useState } from "react";
import CandidateService from "../services/CandidateDetailsService";

const CandidateDetails = () => {
    const [candidateId, setCandidateId] = useState('');
    const [testId, setTestId] = useState('');
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 
        setDetails(null); 

        try {
            const data = await CandidateService.getCandidateDetails(candidateId, testId);
            setDetails(data);
        } catch (err) {
            setError('Failed to fetch candidate details.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Fetch Candidate Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Candidate ID: </label>
                    <input type="text" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} required/>
                </div>
                <div>
                    <label>Test ID: </label>
                    <input type="text" value={testId} onChange={(e) => setTestId(e.target.value)} required/>
                </div>
                <button type="submit">Get Details</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {details && (
                <div>
                    <h3>Candidate Details</h3>
                    <p><strong>Candidate ID:</strong> {details.candidateId}</p>
                    <p><strong>Test ID:</strong> {details.testId}</p>
                    <p><strong>Correct Answers:</strong> {details.correctAnswers}</p>
                    <p><strong>Incorrect Answers:</strong> {details.incorrectAnswers}</p>
                    <p><strong>Skipped Questions:</strong> {details.skippedQuestions}</p>
                </div>
            )}
        </div>
    );
};

export default CandidateDetails;
