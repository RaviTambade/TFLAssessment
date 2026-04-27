const getFlowers = async () => {
  const response = await fetch("http://localhost:8000/api/flowers");
  return response.json();
};

export default getFlowers;
//simple data
