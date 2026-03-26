import React, { useState } from "react";

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
        setMessage(" Runtime added successfully");
        setName(""); // clear input
      } else {
        setMessage(" Failed to add runtime");
      }
    } catch (error) {
      console.error(error);
      setMessage(" Server error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Add Runtime</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Runtime Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Add</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddRuntime;