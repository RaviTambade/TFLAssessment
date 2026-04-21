const BASE_URL: string = "http://localhost:3898";

export interface Role {
  role_id: number;
  role_name: string;
  description: string;
}

const getAllRoles = async (): Promise<Role[]> => {
  const response = await fetch(`${BASE_URL}/api/roles/getAllRoles`);

  if (!response.ok) {
    throw new Error("Failed to fetch roles");
  }

  const data = await response.json();
  return data;
};

export default getAllRoles;