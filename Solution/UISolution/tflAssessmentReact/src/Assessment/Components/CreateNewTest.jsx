import React, { useState } from 'react';
import AssessmentService from '../Service/AssessmentService';

const CreateTestComponent = ({ createTest }) => {
  const [testDetails, setTestDetails] = useState({
    SubjectId: '',
    Duration: '',  // Duration in 'HH:mm:ss' format
    SubjectExpertId: '',
    CreationDate: '',
    ModificationDate: '',
    ScheduledDate: '',
    PassingLevel: ''
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestDetails({
      ...testDetails,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await AssessmentService.createTest(testDetails);
      if (result) {
        console.log("Test created successfully:", result);
        // Reset form fields after successful submission
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
        console.error("Test creation failed");
      }
    } catch (error) {
      console.error("Error creating test:", error);
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

      <button type="submit">Create Test</button>
    </form>
  );
};

export default CreateTestComponent;
