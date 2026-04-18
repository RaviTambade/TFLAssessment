const BASE_URL: string = "http://localhost:4000";

export interface UserName {
  firstname: string;
  lastname: string;
}

const getProfileName = async (userId: number): Promise<UserName> => {
  const response = await fetch(`${BASE_URL}/api/profile/username/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch roles");
  }

  const data = await response.json();
  return data;
};

export default getProfileName;