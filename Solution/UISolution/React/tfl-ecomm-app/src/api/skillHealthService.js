export const getSkillHealth = async () => {
  const response = await fetch("http://localhost:8000/api/skill-health");
  return response.json();
};

//ravi tambade

