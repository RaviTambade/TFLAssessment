const BASE_URL = "http://localhost:8080/dashboard"
export const getCandidateListView = async () =>
{
    try {
        const res = await fetch(`${BASE_URL}/candidateList`);
        return await res.json();
    }
    catch (error)
    {
        console.error(error);
        return null
    }
}    