import { useState } from "react";

interface UserProfile {
  user_id: number;
  contact: string;
  status: string;

  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  email: string;

  enrollment_year: number | null;
  passing_year: number | null;
  percentage: number | null;
  college_name: string | null;

  skills: string | null;
}

interface ApiResponse {
  success: boolean;
  data?: UserProfile[];
  message?: string;
  error?: string;
}

function GetUserInformation() {
  const [userId, setUserId] = useState("");
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    if (!userId.trim()) {
      alert("Enter user ID");
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(
        `http://localhost:3000/api/users/${userId}` 
      );

      const data: ApiResponse = await res.json();

      console.log("API RESPONSE:", data);

      setResponse(data);

    } catch {
      setResponse({
        success: false,
        error: "Backend not running",
      });
    } finally {
      setLoading(false);
    }
  };

  const user = response?.data?.[0];

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>

      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
        style={{ marginRight: "10px" }}
      />

      <button onClick={fetchProfile}>
        {loading ? "Loading..." : "Get Profile"}
      </button>

      {response?.success && user && (
        <div>
          <h3>User ID: {user.user_id}</h3>
          <p>Contact: {user.contact}</p>
          <p>Status: {user.status}</p>

          <h4>Personal</h4>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>

          <h4>Academic</h4>
          <p>College: {user.college_name || "N/A"}</p>
          <p>Percentage: {user.percentage ?? "N/A"}</p>

          <h4>Professional</h4>
          <p>Skills: {user.skills || "N/A"}</p>
        </div>
      )}

      {response && !response.success && (
        <p style={{ color: "red" }}>
          {response.error || response.message}
        </p>
      )}
    </div>
  );
}

export default GetUserInformation;