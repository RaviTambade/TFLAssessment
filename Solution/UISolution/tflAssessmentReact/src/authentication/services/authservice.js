// Importing the API base URL from environment configurations
const authAPIUrl = process.env.REACT_APP_AUTHENTICATION_API;

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
export const changePassword = async (credential) => {
  const url = `${authAPIUrl}/updatepassword`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credential),
    });
    return response.ok; // Return true if the response was successful
  } catch (error) {
    console.error('Error in changePassword:', error);
    throw error;
  }
};

