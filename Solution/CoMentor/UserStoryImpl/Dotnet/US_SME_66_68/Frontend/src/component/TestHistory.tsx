import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TestHistoryItem {
  srNo: number;
  runtime: string;
  title: string;
  duration: string;
  difficulty: string;
  createDate: string;
  status: string;
}

const getStatusClasses = (status?: string) => {
  switch (status?.trim().toLowerCase()) {
    case "completed":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "assigned":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const TestHistory = () => {
  const [testHistory, settestHistory] = useState<TestHistoryItem[]>([]);
  const [loadingData, setloadingData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestHistory = async () => {
      try {
        const response = await fetch("http://localhost:5300/api/TestHistory");

        if (!response.ok) {
          throw new Error(`API Error ${response.status}`);
        }

        const data = await response.json();
        settestHistory(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setloadingData(false);
      }
    };

    fetchTestHistory();
  }, []);

  if (loadingData) return <p className="p-6">loadingData...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <section className="rounded-3xl bg-white p-4 md:p-6 shadow-md">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-slate-900">
        Test History
      </h2>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-4">
          <thead>
            <tr className="bg-[#ffe9e6] text-[#c5302e] uppercase text-sm tracking-widest">
              <th className="rounded-l-2xl px-4 py-4 text-left">Runtime</th>
              <th className="px-4 py-4 text-left">Title</th>
              <th className="px-4 py-4 text-center">Duration</th>
              <th className="px-4 py-4 text-center">Difficulty</th>
              <th className="px-4 py-4 text-center">Create Date</th>
              <th className="px-4 py-4 text-center">Status</th>
              <th className="rounded-r-2xl px-4 py-4 text-center">Details</th>
            </tr>
          </thead>

          <tbody>
            {testHistory.map((item, index) => (
              <tr key={index} className="bg-slate-50 shadow-sm">
                <td className="rounded-l-2xl px-4 py-4">{item.runtime}</td>
                <td className="px-4 py-4">{item.title}</td>
                <td className="px-4 py-4 text-center">{item.duration}</td>
                <td className="px-4 py-4 text-center">{item.difficulty}</td>
                <td className="px-4 py-4 text-center">{item.createDate}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${getStatusClasses(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="rounded-r-2xl px-4 py-4 text-center">
                  <button
                    onClick={() => navigate(`/test-details/${item.srNo}`)}
                    className="rounded-full bg-[#ef3f2f] px-5 py-2 text-white font-semibold hover:bg-[#d92e1b]"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / Tablet Card View */}
      <div className="grid gap-4 lg:hidden">
        {testHistory.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
          >
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-slate-500">Runtime</p>
                <p className="font-semibold">{item.runtime}</p>
              </div>

              <div>
                <p className="text-slate-500">Duration</p>
                <p className="font-semibold">{item.duration} Min</p>
              </div>

              <div className="col-span-2">
                <p className="text-slate-500">Title</p>
                <p className="font-semibold">{item.title}</p>
              </div>

              <div>
                <p className="text-slate-500">Difficulty</p>
                <p className="font-semibold">{item.difficulty}</p>
              </div>

              <div>
                <p className="text-slate-500">Date</p>
                <p className="font-semibold">{item.createDate}</p>
              </div>

              <div>
                <p className="text-slate-500">Status</p>

                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate(`/test-details/${item.srNo}`)}
              className="mt-4 w-full rounded-full bg-[#ef3f2f] py-2 text-white font-semibold hover:bg-[#d92e1b]"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestHistory;