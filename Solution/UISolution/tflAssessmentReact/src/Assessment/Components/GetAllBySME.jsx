import React, { useState } from 'react';
import AssessmentService from '../Service/AssessmentService';

const SubjectMatterExpertDetails = () => {
    const [id, setId] = useState('');
    const [details, setDetails] = useState(null);
    const [error, setError] = useState('');

    const handleFetchDetails = async () => {
        setError('');
        try {
            const data = await AssessmentService.getAllBySubjectMatterExpert(id);
            console.log(data);
            setDetails(data);
        } catch (err) {
            setError(err.message);
            setDetails(null);
        }
    };

    return (
        <div>
            <h1>Subject Matter Expert Details</h1>
            
            {/* Input field to enter ID */}
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter Subject Matter Expert ID"
            />
            
            {/* Button to fetch details */}
            <button onClick={handleFetchDetails}>Get Details</button>
            
            {/* Displaying details */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {details && (
                <div>
                    <h2>Details</h2>
                    <pre>{JSON.stringify(details, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default SubjectMatterExpertDetails;
