/**
 * API Configuration for US_ADMIN_15 Backend
 * 
 * This file documents the API endpoints and their specifications
 */

export const API_CONFIG = {
  BASE_URL: 'http://localhost:3899',
  ENDPOINTS: {
    ACTIVATE_USER: '/api/users/activateUser',
    INACTIVATE_USER: '/api/users/inactivateUser',
    BLOCK_USER: '/api/users/blockUser',
  },
  PORT: 3899,
};

/**
 * Request/Response Type Definitions
 */

export interface UserManagementRequest {
  id: string;
}

export interface UserManagementResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    status?: string;
    updated_at?: string;
  };
}

export interface ApiError {
  status: number;
  message: string;
  error?: string;
}

/**
 * API Service Methods
 */

export const UserService = {
  /**
   * Activate a user
   * @param userId - The ID of the user to activate
   * @returns Promise with the API response
   */
  activateUser: (userId: string) => ({
    method: 'PUT',
    url: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ACTIVATE_USER}`,
    data: { id: userId },
  }),

  /**
   * Inactivate a user
   * @param userId - The ID of the user to inactivate
   * @returns Promise with the API response
   */
  inactivateUser: (userId: string) => ({
    method: 'PUT',
    url: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.INACTIVATE_USER}`,
    data: { id: userId },
  }),

  /**
   * Block a user
   * @param userId - The ID of the user to block
   * @returns Promise with the API response
   */
  blockUser: (userId: string) => ({
    method: 'PUT',
    url: `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.BLOCK_USER}`,
    data: { id: userId },
  }),
};
