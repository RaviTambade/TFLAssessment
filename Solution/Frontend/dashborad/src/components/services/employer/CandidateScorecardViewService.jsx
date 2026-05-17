const BASE_URL = "http://localhost:8080/dashboard"
export const getCandidateScorecard = async () =>
{
    try {
        const res = await fetch(`${BASE_URL}/candidate-scorecard`);
        return await res.json();
    }
    catch (error)
    {
        console.error(error);
        return null
    }
}    