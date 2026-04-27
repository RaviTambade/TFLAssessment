
const API_BASE_URL = 'http://localhost:5294/api/AssessmentIntelligence'; 

export const getCandidateResults = async (candidateId, year) => {
    try {
        console.log(candidateId,year);
        const response = await fetch(`${API_BASE_URL}/Candidates/${candidateId}/Year/${year}`);
        console.log(response);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch candidate results:', error);
        throw error; 
    }
};
