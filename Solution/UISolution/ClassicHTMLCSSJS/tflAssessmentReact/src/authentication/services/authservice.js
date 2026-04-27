import { endpoints } from "../Config/apiEndpoints";


// SignIn function for user authentication
export const signIn = async (credential) => {
  const url = `${authAPIUrl}/signin`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credential),
    });
    const data = await response.json();
    console.log('service', data);
    return data;
  } catch (error) {
    console.error('Error in signIn:', error);
    throw error;
  }
};

// ChangePassword function to update user password
export const authSvc = {
  changePassword: async (credential) => {
    try {
    const response = await fetch(endpoints.Authentication.changePassword, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credential),
    });
    return response.ok; 
  } catch (error) {
    console.error('Error in changePassword:', error);
    throw error;
  }
 },
};

