import React, { useState, useEffect } from "react";
import AssessmentService from "../Service/AssessmentService";

const ChangeDuration = () => {
  const [assessments, setAssessments] = useState([]);
  const [selectedTest, setSelectedTest] = useState(""); 
  const [duration, setDuration] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const result = await AssessmentService.getAllAssessments(); 
        setAssessments(result);
      } catch (error) {
        setMessage("Failed to fetch assessments.");
      }
    };

    fetchAssessments();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Reset message on new submission

    try {
      // Use the selected assessment ID and new duration to update the duration
      const result = await AssessmentService.changeDuration(selectedTest, duration);
      if (result) {
        setMessage("Duration changed successfully.");
      } else {
        setMessage("Failed to change duration.");
      }
    } catch (error) {
      setMessage(error.message || "An error occurred while changing the duration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Change Assessment Duration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Test:</label>
          <select
            value={selectedTest}
            onChange={(e) => setSelectedTest(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select a Test</option>
            {assessments.map((assessment) => (
              <option key={assessment.id} value={assessment.id}>
                {assessment.testName} 
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">New Duration (minutes):</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter New Duration"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Changing..." : "Change Duration"}
          </button>
        </div>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-md text-center ${message.includes("successfully") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default ChangeDuration;
