import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import UserManagementForm from './components/UserManagementForm';
import ResponseDisplay from './components/ResponseDisplay';

interface UserManagementResponse {
  success: boolean;
  message: string;
  data?: any;
}

const App: React.FC = () => {
  const [response, setResponse] = useState<UserManagementResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUserManagement = async (userId: string, action: 'activate' | 'inactivate' | 'block') => {
    setLoading(true);
    setError(null);
    setResponse(null);

    const endpoint = `http://localhost:3899/api/users/changeUserStatus`;
    
    // Map action to status value
    const statusMap: Record<string, string> = {
      activate: 'active',
      inactivate: 'inactive',
      block: 'blocked',
    };
    
    const status = statusMap[action];

    try {
      const result = await axios.put(
        endpoint,
        {
          id: userId,
          status: status,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse({
        success: true,
        message: `User ${action}d successfully`,
        data: result.data,
      });
    } catch (err: unknown) {
      let message = 'An unexpected error occurred';
      if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === 'object' && err !== null && 'response' in err) {
        const axiosErr = err as any;
        message = axiosErr.response?.data?.message || axiosErr.message || 'An unexpected error occurred';
      }
      setError(message);
      setResponse({
        success: false,
        message: `Failed to ${action} user`,
        data: err,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>US_ADMIN_15 - User Management Testing</h1>
        <p>Test user activation, inactivation, and blocking functionality</p>
      </header>

      <div className="app-content">
        <div className="form-section">
          <UserManagementForm onSubmit={handleUserManagement} isLoading={loading} />
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
