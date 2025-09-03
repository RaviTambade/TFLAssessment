import React, { useState, useEffect } from "react";
import AssessmentService from "../Assessment/Service/AssessmentService";

const TestListComponent = ({ candidateId }) => {
    const [testList, setTestList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestList = async () => {
            try {
                setLoading(true);
                const data = await AssessmentService.getTestListByCandidateId(candidateId);
                setTestList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTestList();
    }, [candidateId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Test List</h2>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2">Test ID</th>
                        <th className="border border-gray-200 px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {testList.map((test) => (
                        <tr key={test.TestId} className="text-center">
                            <td className="border border-gray-200 px-4 py-2">{test.TestId}</td>
                            <td className="border border-gray-200 px-4 py-2">{test.Score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TestListComponent;
