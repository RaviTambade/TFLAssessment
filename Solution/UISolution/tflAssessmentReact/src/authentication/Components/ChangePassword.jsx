import React, { useState } from 'react';

function ChangePassword({ authSvc }) {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.oldPassword) {
      newErrors.oldPassword = 'This field is required';
    } else if (formData.oldPassword.length < 8 || formData.oldPassword.length > 25) {
      newErrors.oldPassword = 'Password must be between 8 and 25 characters';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'This field is required';
    } else if (formData.newPassword.length < 8 || formData.newPassword.length > 25) {
      newErrors.newPassword = 'Password must be between 8 and 25 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'This field is required';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onUpdatePassword = async () => {
    if (!validateForm()) return;

    const credential = {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    };

    try {
      const response = await authSvc.changePassword(credential);
      if (response) {
        alert('Password changed');
      } else {
        setIsInvalidCredentials(true);
        setTimeout(() => setIsInvalidCredentials(false), 3000);
      }
    } catch (error) {
      console.error('Password change error:', error);
    }
  };

  return (
    <div>
      <h3>Set New Password</h3>

      <form>
        <div>
          <input
            type={showOldPassword ? 'text' : 'password'}
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            placeholder="Old Password"
          />
          <button
            type="button"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            {showOldPassword ? 'Hide' : 'Show'}
          </button>
          {errors.oldPassword && <div>{errors.oldPassword}</div>}
        </div>

        <div>
          <input
            type={showNewPassword ? 'text' : 'password'}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? 'Hide' : 'Show'}
          </button>
          {errors.newPassword && <div>{errors.newPassword}</div>}
        </div>

        <div>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? 'Hide' : 'Show'}
          </button>
          {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
        </div>

        {isInvalidCredentials && (
          <div>Invalid Credentials. Please try again.</div>
        )}

        <button type="button" onClick={onUpdatePassword}>
          Submit
        </button>
        <button
          type="button"
          onClick={() =>
            setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' })
          }
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
