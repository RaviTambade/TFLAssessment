import React, { useState } from 'react';
import InterviewService from '../services/InterviewService'; 

const CancelInterviewComponent = () => {
    const [interviewId, setInterviewId] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleCancelInterview = async () => {
        try {
            const result = await InterviewService.cancelInterview(interviewId); 
            
            if (result) {
                setStatusMessage('Interviewer cancel successfully!');
            } else {
                setStatusMessage('Failed to change interviewer.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('An error occurred while cancelling the interviewer.');
        }
    };
    return (
        <div>
            <h2>Cancel Interview</h2>
            <label>Interview ID:
                <input type="text" value={interviewId} onChange={(e) => setInterviewId(e.target.value)} />
            </label>
            <br />
            <button onClick={handleCancelInterview}>Cancel Interview</button>
            <p>{statusMessage}</p>
        </div>
    );
};

export default CancelInterviewComponent;
