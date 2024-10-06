import React, { useState } from 'react';
import InterviewService from '../services/InterviewService'; 

const RescheduleInterview = () => {
    const [interviewId, setInterviewId] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        // Validate inputs
        if (!interviewId || !time || !date) {
            setError('Please fill in all fields');
            return;
        }
        // Create a date object from the input value
        const interviewDate = new Date(date);

        try {
            const result = await InterviewService.rescheduleInterview(interviewId, time, interviewDate);
            if (result) {
                setSuccess(true);
            } else {
                setError('Failed to reschedule interview');
            }
        } catch (err) {
            setError('Error rescheduling interview: ' + err.message);
        }
    };

    return (
        <div>
            <h1>Reschedule Interview</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Interview ID:</label>
                    <input type="number"value={interviewId} onChange={(e) => setInterviewId(e.target.value)}placeholder="Enter Interview ID"/>
                </div>
                <div>
                    <label>Time:</label>
                    <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Enter Time (e.g. 10:30 AM)" />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <button type="submit">Reschedule</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Interview rescheduled successfully!</p>}
        </div>
    );
};

export default RescheduleInterview;
