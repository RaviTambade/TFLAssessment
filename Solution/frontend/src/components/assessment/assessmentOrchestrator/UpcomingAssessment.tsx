import React, { useState } from "react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
interface Assessment {
  srNo: number;
  assessmentName: string;
  scheduledAt: string;
  duration: number;
  status: string;
}

const UpcomingAssessment: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [userId, setUserId] = useState("");
  const [inputId, setInputId] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [assessments, setAssessments] = useState<Assessment[]>([]);

  const formatToDisplay = (date: string) => {
    if (!date) return "";
    const [y, m, d] = date.split("-");
    return `${m}/${d}/${y}`;
  };

  const formatForApi = (date: string) => {
    return date; 
  };

  const fetchAssessments = async () => {
    if (!inputId || !fromDate || !toDate) {
      setError("Please enter UserId, From Date and To Date");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiFrom = formatForApi(fromDate);
      const apiTo = formatForApi(toDate);

      const apiUrl = `${WEBAPI_DOTNET_URL}/Assessment/user/${inputId}?fromDate=${apiFrom}&toDate=${apiTo}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: Assessment[] = await response.json();
      setAssessments(data);
      setUserId(inputId);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
      setAssessments([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-rose-100 flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-6">
        Upcoming Assessments
      </h2>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter User ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="px-3 py-2 border rounded-md"
        />

        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="px-3 py-2 border rounded-md"
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="px-3 py-2 border rounded-md"
        />

        <button
          onClick={fetchAssessments}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Show Assessments
        </button>
      </div>

      {/* Show selected dates in your format */}
      {fromDate && toDate && (
        <p className="mb-4 text-gray-700">
          Showing: {formatToDisplay(fromDate)} → {formatToDisplay(toDate)}
        </p>
      )}

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* No Data */}
      {!loading && userId && assessments.length === 0 && !error && (
        <p className="text-gray-600">
          No upcoming assessment available for you.
        </p>
      )}

      {/* Table */}
      {assessments.length > 0 && (
        <div className="bg-white rounded-lg shadow-md w-full max-w-4xl overflow-hidden">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="p-3">Assessment Name</th>
                <th className="p-3">Date</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((item) => (
                <tr key={item.srNo} className="border-t">
                  <td className="p-3">{item.assessmentName}</td>
                  <td className="p-3">
                    {formatToDisplay(item.scheduledAt.split("T")[0])}
                  </td>
                  <td className="p-3">{item.duration} mins</td>
                  <td className="p-3">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UpcomingAssessment;
