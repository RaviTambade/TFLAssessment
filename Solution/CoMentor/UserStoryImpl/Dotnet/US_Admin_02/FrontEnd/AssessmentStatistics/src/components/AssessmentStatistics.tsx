import { useEffect, useState } from "react";
import { getAssessmentStatistics } from "../services/assessmentService";
import type { AssessmentStatistics } from "../models/AssessmentStatistics";

const AssessmentTable = () => {
  const [data, setData] = useState<AssessmentStatistics[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const result = await getAssessmentStatistics();
      setData(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-brand-orange">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      
      <h1 className="text-3xl font-bold text-brand-orange mb-6">
        Assessment Statistics
      </h1>

      <div className="overflow-x-auto shadow-elegant rounded-lg bg-white border border-orange-200">
        <table className="min-w-full">
          
          {/* HEADER → ORANGE */}
          <thead className="bg-brand-orange text-white">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Total Students</th>
              <th className="px-4 py-3 text-left">Avg Score</th>
              <th className="px-4 py-3 text-left">Highest</th>
              <th className="px-4 py-3 text-left">Lowest</th>
              <th className="px-4 py-3 text-left">Pass %</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item) => (
              <tr
                key={item.assessmentId}
                className="border-b hover:bg-orange-50 transition-smooth"
              >
                <td className="px-4 py-3 text-gray-700">
                  {item.assessmentId}
                </td>

                <td className="px-4 py-3 font-medium text-gray-800">
                  {item.assessmentName}
                </td>

                <td className="px-4 py-3 text-gray-700">
                  {item.totalStudents}
                </td>

                <td className="px-4 py-3 text-brand-orange font-semibold">
                  {item.averageScore.toFixed(2)}
                </td>

                <td className="px-4 py-3 text-green-600 font-medium">
                  {item.highestScore}
                </td>

                <td className="px-4 py-3 text-brand-red font-medium">
                  {item.lowestScore}
                </td>

                <td className="px-4 py-3 font-bold text-brand-orange">
                  {item.passPercentage.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AssessmentTable;