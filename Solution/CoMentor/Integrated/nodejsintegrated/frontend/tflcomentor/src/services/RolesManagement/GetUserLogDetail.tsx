// Define the type for user log entry
export interface UserLog {
  user_id: number;
  login_time: string;
  logout_time: string;
}

// Function to fetch user log details by user ID
export const getUserLogDetails = async (userId: number): Promise<UserLog[]> => {
  try {
    const response = await fetch(`http://localhost:3898/api/userlog/getUserlogById/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: UserLog[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user log details:', error);
    throw error;
  }
};
