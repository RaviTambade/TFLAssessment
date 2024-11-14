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
            <h3>Subject Matter Expert Details</h3>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter SME ID"/>
            
            <button onClick={handleFetchDetails}>Get Details</button>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {details && (
              <table>
              <thead>
                <tr>
                  <th>Subject ID</th>
                  <th>Status</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {details.map(d => (
                  <tr key={d.id}>
                    <td>{d.subjectId}</td>
                    <td>{d.status}</td>
                    <td>{d.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            )}
        </div>
    );
};

export default SubjectMatterExpertDetails;
