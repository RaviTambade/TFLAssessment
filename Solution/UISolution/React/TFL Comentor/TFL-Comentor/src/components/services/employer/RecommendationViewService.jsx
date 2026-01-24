const BASE_URL = "http://localhost:8080/dashboard"
export const  getRecommendationView = async () =>
{
    try {
        const res = await fetch(`${BASE_URL}/recommendationview`);
        return await res.json();
    }
    catch (error)
    {
        console.error(error);
        return null
    }
}    