import UserProfile from "./UserProfile";

interface ApiResponse {
  success: boolean;
  data?: UserProfile[];
  message?: string;
  error?: string;
}

export default ApiResponse;