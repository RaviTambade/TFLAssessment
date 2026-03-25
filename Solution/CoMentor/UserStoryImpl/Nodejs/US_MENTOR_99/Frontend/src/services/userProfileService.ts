import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api/v1'; // Updated to port 5001

interface UserProfileData {
  user_id: string;
  email: string;
  role?: 'MENTOR' | 'ADMIN' | 'STUDENT';
  name?: string;
  phone?: string;
  company?: string;
  yearsOfExperience?: number;
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  [key: string]: any;
}

export const updateUserProfile = async (userData: UserProfileData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/profile`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
    throw error;
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/profile/${userId}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
    throw error;
  }
};
