import { useState } from "react";
import { Code2 } from "lucide-react";

interface Runtime {
  runtime_name: string;
}

const RuntimeSection = () => {
  const [data, setData] = useState<Runtime[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRuntimes = () => {
    setLoading(true);

    fetch("http://localhost:8080/api/runtimes")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="min-h-screen p-10" style={{ backgroundColor: "#fde8e8" }}>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900">
          🚀 Runtime Explorer
        </h1>
        <p className="text-gray-500 mt-2">
          Click below to view all runtimes
        </p>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 text-center border border-red-100">

        {/* Button */}
        <button
          onClick={fetchRuntimes}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transition"
        >
          {loading ? "Loading..." : "Show Runtimes"}
        </button>

        {/* Grid */}
        {data.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

            {data.map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#fff5f5" }}
                className="border border-red-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <Code2 className="text-red-600" size={20} />
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {item.runtime_name}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default RuntimeSection;