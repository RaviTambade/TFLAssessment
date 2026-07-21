import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import Assessments from "./entities/UpcomingAssessment";




const UpcomingAssessment = () => {

  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [assessments, setAssessments] = useState<Assessments[]>([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatToDisplay = (date: string) => {
    if (!date) return "";
    const [y, m, d] = date.split("-");
    return `${m}/${d}/${y}`;
  };

  const fetchAssessments = async (from: string, to: string) => {
    setLoading(true);
    setError(null);
    try {
      const currentUser = sessionStorage.getItem("current");
      const user = currentUser ? JSON.parse(currentUser) : null;
      const userId = user?.userid;
      if (!userId) {
        setError("User not logged in");
        return;
      }

      const query = new URLSearchParams();
      if (from) query.append("fromDate", from);
      if (to) query.append("toDate", to);

      const apiUrl = `${WEBAPI_DOTNET_URL}/Assessment/user/${userId}${query.toString() ? `?${query.toString()}` : ""}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch assessments");
      }

      const data: Assessments[] = await response.json();
      setAssessments(data);
    }
    catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setAssessments([]);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssessments("", "");
  }, []);

 const startAssessment = (assessmentId: number) => { navigate(`/models/assessment/start/${assessmentId}`);};
  return (
    <div className="min-h-screen bg-rose-100 flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-6"> Upcoming Assessments</h2>
      <div className="flex flex-col md:flex-row gap-3 mb-6 w-full max-w-5xl">
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="px-3 py-2 border rounded-md"/>
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="px-3 py-2 border rounded-md" />
        <button onClick={() => fetchAssessments(fromDate, toDate)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" >Show Assessments</button>
      </div>

      {(fromDate || toDate) && (<p className="mb-4 text-gray-700"> Showing: {fromDate ? formatToDisplay(fromDate) : "All"} {" "}→{" "}{toDate ? formatToDisplay(toDate) : "All"}</p>)}
      {loading && (<p className="text-gray-500">Loading...</p>)} 
      {error && (<p className="text-red-500">{error}</p> )}
      {!loading && assessments.length === 0 && !error && (<p className="text-gray-600">No upcoming assessments available.</p>)}

      {assessments.length > 0 && (
        <div className="bg-white rounded-lg shadow-md w-full max-w-5xl overflow-hidden">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="p-3">Assessment Name</th>
                <th className="p-3">Date</th>
                <th className="p-3">Duration</th>
                <th className="p-3"> Status</th>
                <th className="p-3"> Action</th>
              </tr>
            </thead>

            <tbody>
                  {assessments.map((item) => (<tr key={item.srNo}  className="border-t" >
                                          <td className="p-3">{item.assessmentName} </td>
                                          <td className="p-3"> {formatToDisplay(item.scheduledAt.split("T")[0])}</td>
                                          <td className="p-3"> {item.duration} mins</td>
                                          <td className="p-3"> {item.status}</td>
                                          <td className="p-3"><button onClick={() =>startAssessment(item.assessmentId)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"> Start</button></td>
                                          </tr>))}
            </tbody>
          </table>
        </div>)}
    </div>
  );
};

export default UpcomingAssessment;