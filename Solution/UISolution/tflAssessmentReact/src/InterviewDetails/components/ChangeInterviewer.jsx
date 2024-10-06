import React, { useState } from 'react';
import InterviewService from '../services/InterviewService'; 

const ChangeInterviewerComponent = () => {
    const [interviewId, setInterviewId] = useState('');
    const [smeId, setSmeId] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChangeInterviewer = async () => {
        try {
            const result = await InterviewService.changeInterviewer(interviewId, smeId); 
            
            if (result) {
                setStatusMessage('Interviewer changed successfully!');
            } else {
                setStatusMessage('Failed to change interviewer.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('An error occurred while changing the interviewer.');
        }
    };
    return (
        <div>
            <h2>Change Interviewer</h2>
            <label>Interview ID:
                <input type="text" value={interviewId} onChange={(e) => setInterviewId(e.target.value)} />
            </label>
            <br />
            <label>SME ID:
                <input type="text" value={smeId} onChange={(e) => setSmeId(e.target.value)} />
            </label>
            <br />
            <button onClick={handleChangeInterviewer}>Change Interviewer</button>
            <p>{statusMessage}</p>
        </div>
    );
};

export default ChangeInterviewerComponent;
