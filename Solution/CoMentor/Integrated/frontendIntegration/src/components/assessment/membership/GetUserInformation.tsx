import { useState } from 'react';
import App from '@/App';

interface UserProfile {
  userId: number;
  contact: string;
  status: string;
  personalInformation: {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    email: string;
  };
  academicInformation: {
    enrollmentYear: number;
    passingYear: number;
    percentage: number;
    collegeName: string;
  };
  professionalInformation: {
    skills: string;
  };
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: UserProfile;
  error?: string;
  statusCode?: number;
}

function GetUserInformation() {
  const [userId, setUserId] = useState<string>('');
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProfile = async () => {
    if (!userId.trim()) {
      alert('Please enter a user ID');
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`http://localhost:4001/api/userprofile/getUserProfile/${userId}`);
      const data: ApiResponse = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({
        success: false,
        error: 'Failed to fetch data. Make sure the backend is running.',
        statusCode: 0
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>API Testing Frontend - User Profile</h1>
      <div className="input-section">
        <label htmlFor="userId">User ID:</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
        <button onClick={fetchProfile} disabled={loading}>
          {loading ? 'Fetching...' : 'Get Profile'}
        </button>
      </div>

      {response && (
        <div className="response-section">
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          {response.success && response.data && (
            <div className="profile-display">
              <h3>User Profile Details</h3>
              <p><strong>User ID:</strong> {response.data.userId}</p>
              <p><strong>Contact:</strong> {response.data.contact}</p>
              <p><strong>Status:</strong> {response.data.status}</p>
              <h4>Personal Information</h4>
              <p><strong>Name:</strong> {response.data.personalInformation.firstName} {response.data.personalInformation.lastName}</p>
              <p><strong>Gender:</strong> {response.data.personalInformation.gender}</p>
              <p><strong>Date of Birth:</strong> {response.data.personalInformation.dateOfBirth}</p>
              <p><strong>Email:</strong> {response.data.personalInformation.email}</p>
              <h4>Academic Information</h4>
              <p><strong>Enrollment Year:</strong> {response.data.academicInformation.enrollmentYear}</p>
              <p><strong>Passing Year:</strong> {response.data.academicInformation.passingYear}</p>
              <p><strong>Percentage:</strong> {response.data.academicInformation.percentage}%</p>
              <p><strong>College:</strong> {response.data.academicInformation.collegeName}</p>
              <h4>Professional Information</h4>
              <p><strong>Skills:</strong> {response.data.professionalInformation.skills}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GetUserInformation;