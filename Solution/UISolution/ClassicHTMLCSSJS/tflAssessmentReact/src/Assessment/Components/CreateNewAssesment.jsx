import React, { useEffect, useState } from 'react';
import AssessmentService from '../Service/AssessmentService';

const CreateTestComponent = () => {
  const [testDetails, setTestDetails] = useState({
    Name: '',
    SubjectId: '',
    Duration: '',
    SubjectExpertId: '',
    CreationDate: '',
    ModificationDate: '',
    ScheduledDate: '',
    PassingLevel: ''
  });

  const [subjects, setSubjects] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const subjectData = await AssessmentService.getAllSubjects();
        const assessmentData = await AssessmentService.getAllAssessments();
        setSubjects(subjectData);
        setAssessments(assessmentData);
      } catch (error) {
        setErrorMessage('Failed to fetch dropdown data: ' + error.message);
      }
    };

    fetchDropdownData();
  }, []);

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
      setErrorMessage('Scheduled date cannot be before creation date.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await AssessmentService.createTest(testDetails);
      if (result) {
        setSuccessMessage('Test created successfully!');
        setTestDetails({
          Name: '',
          SubjectId: '',
          Duration: '',
          SubjectExpertId: '',
          CreationDate: '',
          ModificationDate: '',
          ScheduledDate: '',
          PassingLevel: ''
        });
      } else {
        setErrorMessage('Test creation failed.');
      }
    } catch (error) {
      setErrorMessage('Error creating test: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 w-full max-w-4xl p-8 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <h1 className="col-span-2 text-3xl font-semibold text-center text-gray-900 dark:text-white">
          Create Test
        </h1>
        <hr className="col-span-2" />

        {/* Test Name Dropdown */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Test Name:</label>
          <select
            name="Name"
            value={testDetails.Name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select Test Name
            </option>
            {assessments.map((assessment) => (
              <option key={assessment.id} value={assessment.name}>
                {assessment.testName}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Name Dropdown */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Subject Name:</label>
          <select
            name="SubjectId"
            value={testDetails.SubjectId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select Subject Name
            </option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.title}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Duration (HH:mm:ss):</label>
          <input
            type="text"
            name="Duration"
            value={testDetails.Duration}
            onChange={handleChange}
            required
            placeholder="e.g., 01:30:00"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Subject Expert ID */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Subject Expert ID:</label>
          <input
            type="number"
            name="SubjectExpertId"
            value={testDetails.SubjectExpertId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Dates */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Creation Date:</label>
          <input
            type="date"
            name="CreationDate"
            value={testDetails.CreationDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">Modification Date:</label>
          <input
            type="date"
            name="ModificationDate"
            value={testDetails.ModificationDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">Scheduled Date:</label>
          <input
            type="date"
            name="ScheduledDate"
            value={testDetails.ScheduledDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">Passing Level:</label>
          <input
            type="number"
            name="PassingLevel"
            value={testDetails.PassingLevel}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Messages */}
        <div className="col-span-2">
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {successMessage && <p className="text-green-600">{successMessage}</p>}
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
          >
            {isSubmitting ? 'Submitting...' : 'Create Test'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTestComponent;
