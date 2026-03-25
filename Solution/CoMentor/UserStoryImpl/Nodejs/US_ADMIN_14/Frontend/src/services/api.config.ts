/**
 * API Configuration for US_ADMIN_14 Backend
 * 
 * This file documents the API endpoints and their specifications
 */

export const API_CONFIG = {
  BASE_URL: 'http://localhost:3898',
  ENDPOINTS: {
    UPDATE_USER_ROLES: '/api/roles/updateUserRoles',
  },
  PORT: 3898,
};

/**
 * Request/Response Type Definitions
 */

export interface UpdateUserRolesRequest {
  user_id: string;
  role_ids: number[];
}

export interface UpdateUserRolesResponse {
  success: boolean;
  message: string;
  data?: {
    user_id: string;
    role_ids: number[];
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

export const RolesService = {
  /**
   * Update user roles
   * @param userId - The ID of the user to update
   * @param roleIds - Array of role IDs to assign to the user
   * @returns Promise with the API response
   */
  updateUserRoles: async (
    userId: string,
    roleIds: number[]
  ): Promise<UpdateUserRolesResponse> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.UPDATE_USER_ROLES}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          role_ids: roleIds,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  },
};

/**
 * Test Cases for the API
 */

export const TEST_CASES = [
  {
    id: 1,
    name: 'Update Single Role',
    description: 'Update a user with a single role',
    input: {
      user_id: 'user_001',
      role_ids: [1],
    },
  },
  {
    id: 2,
    name: 'Update Multiple Roles',
    description: 'Update a user with multiple roles',
    input: {
      user_id: 'user_002',
      role_ids: [1, 2, 3],
    },
  },
  {
    id: 3,
    name: 'Update with Admin Role',
    description: 'Update a user with admin privileges',
    input: {
      user_id: 'admin_user',
      role_ids: [10, 20],
    },
  },
  {
    id: 4,
    name: 'Update with Empty Roles',
    description: 'Test updating with no roles (expected to fail)',
    input: {
      user_id: 'user_004',
      role_ids: [],
    },
  },
];
