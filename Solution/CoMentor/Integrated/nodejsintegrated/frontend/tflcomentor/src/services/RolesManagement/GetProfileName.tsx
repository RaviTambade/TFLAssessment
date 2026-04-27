const BASE_URL: string = "http://localhost:3000";

export interface UserName {
  firstname: string;
  lastname: string;
}

const getProfileName = async (userId: number): Promise<UserName> => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/personal`);

  if (!response.ok) {
    throw new Error("Failed to fetch roles");
  }

  const data = await response.json();
  return data;
};

export default getProfileName;