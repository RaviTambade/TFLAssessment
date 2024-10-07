import React, { useState } from 'react';
import AssessmentService from '../Service/AssessmentService';

const CreateTestComponent = ({ createTest }) => {
  const [testDetails, setTestDetails] = useState({
    SubjectId: '',
    Duration: '',
    SubjectExpertId: '',
    CreationDate: '',
    ModificationDate: '',
    ScheduledDate: '',
    PassingLevel: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestDetails({
      ...testDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    // Basic validation for dates
    if (new Date(testDetails.ScheduledDate) < new Date(testDetails.CreationDate)) {
      setErrorMessage("Scheduled date cannot be before creation date.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await AssessmentService.createTest(testDetails);
      if (result) {
        setSuccessMessage("Test created successfully!");
        setTestDetails({
          SubjectId: '',
          Duration: '',
          SubjectExpertId: '',
          CreationDate: '',
          ModificationDate: '',
          ScheduledDate: '',
          PassingLevel: ''
        });
      } else {
        setErrorMessage("Test creation failed.");
      }
    } catch (error) {
      setErrorMessage("Error creating test: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Subject ID: </label>
        <input
          type="text"
          name="SubjectId"
          value={testDetails.SubjectId}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Duration (HH:mm:ss): </label>
        <input
          type="text"
          name="Duration"
          value={testDetails.Duration}
          onChange={handleChange}
          placeholder="e.g., 01:30:00"
          required
        />
      </div>

      <div>
        <label>Subject Expert ID: </label>
        <input
          type="number"
          name="SubjectExpertId"
          value={testDetails.SubjectExpertId}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Creation Date: </label>
        <input
          type="date"
          name="CreationDate"
          value={testDetails.CreationDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Modification Date: </label>
        <input
          type="date"
          name="ModificationDate"
          value={testDetails.ModificationDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Scheduled Date: </label>
        <input
          type="date"
          name="ScheduledDate"
          value={testDetails.ScheduledDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Passing Level: </label>
        <input
          type="number"
          name="PassingLevel"
          value={testDetails.PassingLevel}
          onChange={handleChange}
          required
        />
      </div>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Create Test'}
      </button>
    </form>
  );
};

export default CreateTestComponent;
