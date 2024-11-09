import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/authservice'; 
import jwt_decode from 'jwt-decode';

const Role = {
  Employee: 'Employee',
  Director: 'Director',
  HRManager: 'HRManager',
  ProjectManager: 'ProjectManager',
};

const LocalStorageKeys = {
  jwt: 'jwtToken',
};

const Login = () => {
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isCredentialInvalid, setIsCredentialInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!contactNumber.match(/^\d{10}$/) || password.length < 8 || password.length > 25) {
      setIsCredentialInvalid(true);
      setTimeout(() => setIsCredentialInvalid(false), 3000);
      return;
    }

    const credential = {
      contactNumber,
      password,
      lob: 'PMS',
    };

    try {
      const response = await signIn(credential);
      if (!response.token) {
        setIsCredentialInvalid(true);
        setTimeout(() => setIsCredentialInvalid(false), 3000);
      } else {
        localStorage.setItem(LocalStorageKeys.jwt, response.token);
        const decodedToken = jwt_decode(response.token);
        const role = decodedToken.role;
        navigateByRole(role);
      }
    } catch (error) {
      console.error('Error in sign-in:', error);
      setIsCredentialInvalid(true);
      setTimeout(() => setIsCredentialInvalid(false), 3000);
    }
  };

  const navigateByRole = (role) => {
    switch (role) {
      case Role.Employee:
        navigate('/employees');
        break;
      case Role.Director:
        navigate('/directors');
        break;
      case Role.HRManager:
        navigate('/hrmanagers');
        break;
      case Role.ProjectManager:
        navigate('/prjmanagers');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div>
      <h1>Welcome To Transflower</h1>
      <p>A Learning Experience</p>
      <div>
        <h5>Sign In</h5>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              minLength="10"
              maxLength="10"
              pattern="^\d{10}$"
            />
            {isCredentialInvalid && <small>Contact Number should contain 10 digits only.</small>}
          </div>

          <div>
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
              maxLength="25"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
            {isCredentialInvalid && (
              <small>Password must be between 8 and 25 characters.</small>
            )}
          </div>

          {isCredentialInvalid && (
            <div>
              <small>Invalid Credentials, please check again.</small>
            </div>
          )}

          <button type="submit" onClick={handleSignIn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
