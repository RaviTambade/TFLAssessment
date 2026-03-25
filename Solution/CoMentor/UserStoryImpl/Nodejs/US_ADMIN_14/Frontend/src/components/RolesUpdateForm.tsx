import React, { useState } from 'react';
import './RolesUpdateForm.css';

interface RolesUpdateFormProps {
  onSubmit: (userId: string, roleIds: number[]) => void;
  isLoading: boolean;
}

const RolesUpdateForm: React.FC<RolesUpdateFormProps> = ({
  onSubmit: onSubmitProp,
  isLoading: isLoadingProp,
}: RolesUpdateFormProps) => {
  const [userId, setUserId] = useState('');
  const [roleIds, setRoleIds] = useState('');

  const onSubmit = onSubmitProp;
  const isLoading = isLoadingProp;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userId.trim()) {
      alert('Please enter a User ID');
      return;
    }

    if (!roleIds.trim()) {
      alert('Please enter at least one Role ID');
      return;
    }

    // Parse comma-separated role IDs
    const roles = roleIds
      .split(',')
      .map((id: string) => parseInt(id.trim(), 10))
      .filter((id: number) => !isNaN(id));

    if (roles.length === 0) {
      alert('Please enter valid Role IDs (comma-separated numbers)');
      return;
    }

    onSubmit(userId.trim(), roles);
  };

  const handleReset = () => {
    setUserId('');
    setRoleIds('');
  };

  return (
    <form className="roles-form" onSubmit={handleSubmit}>
      <h2>Update User Roles</h2>

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

      <div className="form-group">
        <label htmlFor="roleIds">Role IDs (comma-separated):</label>
        <input
          id="roleIds"
          type="text"
          value={roleIds}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoleIds(e.target.value)}
          placeholder="e.g., 1, 2, 3"
          disabled={isLoading}
          required
        />
        <small>Enter multiple role IDs separated by commas</small>
      </div>

      <div className="form-actions">
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Updating...' : 'Update Roles'}
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={isLoading}
          className="btn-secondary"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default RolesUpdateForm;
