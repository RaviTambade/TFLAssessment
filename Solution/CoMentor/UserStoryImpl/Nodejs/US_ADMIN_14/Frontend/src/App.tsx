import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import RolesUpdateForm from './components/RolesUpdateForm';
import ResponseDisplay from './components/ResponseDisplay';

interface UpdateRolesResponse {
  success: boolean;
  message: string;
  data?: any;
}

const App: React.FC = () => {
  const [response, setResponse] = useState<UpdateRolesResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateRoles = async (userId: string, roleIds: number[]) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await axios.put(
        'http://localhost:3898/api/roles/updateUserRoles',
        {
          user_id: userId,
          role_ids: roleIds,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse({
        success: true,
        message: 'Roles updated successfully',
        data: result.data,
      });
    } catch (err) {
      const message = axios.isAxiosError(err)
        ? err.response?.data?.message || err.message
        : err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(message);
      setResponse({
        success: false,
        message: 'Failed to update roles',
        data: err,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>US_ADMIN_14 - Roles Management Testing</h1>
        <p>Test the user roles update functionality</p>
      </header>

      <div className="app-content">
        <div className="form-section">
          <RolesUpdateForm onSubmit={handleUpdateRoles} isLoading={loading} />
        </div>

        <div className="response-section">
          {loading && <div className="loading">Processing...</div>}
          {error && <div className="error-message">Error: {error}</div>}
          {response && <ResponseDisplay response={response} />}
        </div>
      </div>
    </div>
  );
};

export default App;
