import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AssessmentService from "../Service/AssessmentService";

const AssessmentList = () => {
    const [assessments, setAssessment] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssessments = async () => {
            try {
                const data = await AssessmentService.getAllAssessments();
                setAssessment(data);
            } catch (err) {
                setError("Failed to fetch assessments");
            }
        };

        fetchAssessments();
    }, []);

    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-100 dark:bg-gray-900 py-10">
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
                    Assessments
                </h1>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left">Subject ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Test Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Subject Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">SME ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">First Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Creation Date</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Scheduled Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assessments.map((assessment) => (
                                <tr key={assessment.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 px-4 py-2">{assessment.subjectId}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Link
                                            to={`/teacher/assessmentlist/candidates/${assessment.id}`}
                                            className="text-blue-600 hover:underline dark:text-blue-400"
                                        >
                                            {assessment.testName}
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{assessment.subject}</td>
                                    <td className="border border-gray-300 px-4 py-2">{assessment.status}</td>
                                    <td className="border border-gray-300 px-4 py-2">{assessment.subjectExpertId}</td>
                                    <td className="border border-gray-300 px-4 py-2">{assessment.firstName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{assessment.lastName}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(assessment.creationDate).toLocaleDateString()}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(assessment.scheduledDate).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AssessmentList;
