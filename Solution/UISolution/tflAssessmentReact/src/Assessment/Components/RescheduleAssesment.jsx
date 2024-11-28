import React, { useState } from "react";
import AssessmentService from "../Service/AssessmentService";

const RescheduleAssessment = () => {
    const [assessmentId, setAssessmentId] = useState("");
    const [scheduledDate, setScheduledDate] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formattedDate = new Date(scheduledDate).toISOString().split("T")[0];
            await AssessmentService.rescheduleAssessment(assessmentId, scheduledDate);
            setMessage("Assessment rescheduled successfully.");
        } catch (error) {
            setMessage(error.message || "Failed to reschedule assessment.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-50 shadow-md rounded-md mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Reschedule Assessment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="assessmentId"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Assessment ID
                    </label>
                    <input
                        id="assessmentId"
                        type="text"
                        value={assessmentId}
                        onChange={(e) => setAssessmentId(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
                        placeholder="Enter Assessment ID"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="scheduledDate"
                        className="block text-sm font-medium text-gray-600"
                    >
                        New Scheduled Date
                    </label>
                    <input
                        id="scheduledDate"
                        type="datetime-local"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Reschedule
                </button>
            </form>
            {message && (
                <p
                    className={`mt-4 text-center font-medium ${
                        message.includes("success") ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {message}
                </p>
            )}
        </div>
    );
};

export default RescheduleAssessment;
