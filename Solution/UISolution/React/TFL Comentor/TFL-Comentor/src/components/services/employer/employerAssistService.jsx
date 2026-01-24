const BASE_URL = "http://localhost:8080/dashboard"
export const getEmployerAssistData = async () =>
{
    try {
        const res = await fetch(`${BASE_URL}/employer-assist`);
        return await res.json();
    }
    catch (error)
    {
        console.error(error);
        return null
    }
}    