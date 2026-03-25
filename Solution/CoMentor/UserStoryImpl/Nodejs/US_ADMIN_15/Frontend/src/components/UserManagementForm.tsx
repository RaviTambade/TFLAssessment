import React, { useState } from 'react';
import './UserManagementForm.css';

interface UserManagementFormProps {
  onSubmit: (userId: string, action: 'activate' | 'inactivate' | 'block') => void;
  isLoading: boolean;
}

const UserManagementForm: React.FC<UserManagementFormProps> = ({
  onSubmit: onSubmitProp,
  isLoading: isLoadingProp,
}: UserManagementFormProps) => {
  const [userId, setUserId] = useState('');

  const onSubmit = onSubmitProp;
  const isLoading = isLoadingProp;

  const handleSubmit = (action: 'activate' | 'inactivate' | 'block') => {
    if (!userId.trim()) {
      alert('Please enter a User ID');
      return;
    }

    onSubmit(userId.trim(), action);
  };

  const handleReset = () => {
    setUserId('');
  };

  return (
    <div className="user-form">
      <h2>User Management</h2>

      <div className="form-group">
        <label htmlFor="userId">User ID:</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
          placeholder="Enter user ID"
          disabled={isLoading}
          required
        />
      </div>

      <div className="form-description">
        <p>Select an action to perform on the user:</p>
      </div>

      <div className="action-buttons">
        <button
          type="button"
          onClick={() => handleSubmit('activate')}
          disabled={isLoading}
          className="btn btn-activate"
        >
          {isLoading ? 'Processing...' : 'Activate User'}
        </button>
        <button
          type="button"
          onClick={() => handleSubmit('inactivate')}
          disabled={isLoading}
          className="btn btn-inactivate"
        >
          {isLoading ? 'Processing...' : 'Inactivate User'}
        </button>
        <button
          type="button"
          onClick={() => handleSubmit('block')}
          disabled={isLoading}
          className="btn btn-block"
        >
          {isLoading ? 'Processing...' : 'Block User'}
        </button>
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={handleReset}
          disabled={isLoading}
          className="btn btn-secondary"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default UserManagementForm;
