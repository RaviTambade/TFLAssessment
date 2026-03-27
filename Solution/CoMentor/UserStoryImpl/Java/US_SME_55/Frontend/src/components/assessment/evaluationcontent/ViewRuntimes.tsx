import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

const AddRuntime: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/runtimes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ runtime_name: name }),
      });

      if (response.ok) {
        setMessage("✅ Runtime added successfully");
        setName("");
      } else {
        setMessage("❌ Failed to add runtime");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-10" style={{ backgroundColor: "#fde8e8" }}>
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900">
          ➕ Add Runtime
        </h1>
        <p className="text-gray-500 mt-2">
          Add a new runtime to the system
        </p>
      </div>

      {/* Card */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 text-center border border-red-100">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Input */}
          <input
            type="text"
            placeholder="Enter Runtime Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            <PlusCircle size={20} />
            {loading ? "Adding..." : "Add Runtime"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-6 text-gray-700 font-medium">
            {message}
          </p>
        )}

      </div>
    </div>
  );
};

export default AddRuntime;