
import React, { useState } from 'react';
import { getCandidateResults } from '../Sevices/AssementIntelligenceService'; 

const GetCandidateResults = () => {
    const [candidateId, setCandidateId] = useState('');
    const [year, setYear] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
        setYear(value);
    }
};


<input
    type="text" 
    placeholder="Year"
    value={year}
    onChange={handleYearChange}
/>


    const handleFetchResults = async () => {
        try {
            const data = await getCandidateResults(candidateId, year);
            setResults(data);
            setError(null); 
        } catch (err) {
            setError(err.message);
            setResults([]); 
        }
    };

    return (
        <div>
            <h1>Get Candidate Results</h1>
            <input
                type="number"
                placeholder="Candidate ID"
                value={candidateId}
                onChange={(e) => setCandidateId(e.target.value)}
            />
            <input
                type=""
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={handleFetchResults}>Fetch Results</button>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {results.length > 0 && (
                <div>
                    <h2>Results:</h2>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>{JSON.stringify(result)}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default GetCandidateResults;
