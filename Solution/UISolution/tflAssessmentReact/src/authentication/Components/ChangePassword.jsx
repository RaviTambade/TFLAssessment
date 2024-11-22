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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Set New Password</h3>
        
        <form>
          {/* Old Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Old Password</label>
            <div className="relative">
              <input
                type={showOldPassword ? 'text' : 'password'}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Enter old password"
                className="w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.oldPassword && <div className="text-red-500 text-sm mt-2">{errors.oldPassword}</div>}
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.newPassword && <div className="text-red-500 text-sm mt-2">{errors.newPassword}</div>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                className="w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.confirmPassword && <div className="text-red-500 text-sm mt-2">{errors.confirmPassword}</div>}
          </div>

          {/* Error Message */}
          {isInvalidCredentials && (
            <div className="text-red-500 text-center text-sm mb-4">
              Invalid Credentials. Please try again.
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onUpdatePassword}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' })
              }
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
