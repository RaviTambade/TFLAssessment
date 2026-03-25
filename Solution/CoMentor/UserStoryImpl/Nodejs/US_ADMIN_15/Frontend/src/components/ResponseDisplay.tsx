import React from 'react';
import './ResponseDisplay.css';

interface ResponseDisplayProps {
  response: {
    success: boolean;
    message: string;
    data?: any;
  };
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }: ResponseDisplayProps) => {
  return (
    <div className={`response-container ${response.success ? 'success' : 'failure'}`}>
      <h2>Response</h2>
      <div className="response-header">
        <span className={`status-badge ${response.success ? 'success' : 'error'}`}>
          {response.success ? '✓ Success' : '✗ Error'}
        </span>
        <p className="response-message">{response.message}</p>
      </div>

      {response.data && (
        <div className="response-data">
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
