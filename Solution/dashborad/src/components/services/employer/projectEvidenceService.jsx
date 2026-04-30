const BASE_URL = "http://localhost:8080/dashboard"

export const getProjectEvidenceData = async () => {
    try {
        const res = await fetch(`${BASE_URL}/projectevidence`);
        return await res.json();
    }
    catch (error) {
        console.error(error);
        return null;
    }
}