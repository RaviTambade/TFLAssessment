import React, { useState } from "react";
import { Code2 } from "lucide-react";

const AddRuntime: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/runtimes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ runtime_name: name }),
      });

      if (response.ok) {
        setMessage("Runtime added successfully");
        setName("");
      } else {
        setMessage("Failed to add runtime");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error");
    }
  };

  return (
    <div className="min-h-screen p-10" style={{ backgroundColor: "#fde8e8" }}>
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900">
           Add Runtime
        </h1>
        <p className="text-gray-500 mt-2">
          Enter a runtime name and add it
        </p>
      </div>

      {/* Card */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 text-center border border-red-100">

        <form onSubmit={handleSubmit}>
          
          {/* Input */}
          <div className="flex items-center gap-2 border border-red-200 rounded-lg px-4 py-2 mb-6">
            <Code2 className="text-red-600" size={20} />
            <input
              type="text"
              placeholder="Enter Runtime Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Add Runtime
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-6 text-gray-700 font-medium">{message}</p>
        )}

      </div>
    </div>
  );
};

export default AddRuntime;