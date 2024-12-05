import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('authToken');

    // Redirect to the Home page
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}

export default Logout;
