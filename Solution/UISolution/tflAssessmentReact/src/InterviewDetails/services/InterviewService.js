class InterviewService {
    constructor() {
        this.apiBaseUrl = 'http://localhost:5129/api/interviews';
    }

    async GetAllInterviewCandidates() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/details`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching interview candidates:', error);
            throw error;
        }
    }

    async GetInterviewedCandidatesSubjects(candidateId) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/candidate/${candidateId}`);
            
            if (!response.ok) {
                const errorDetails = await response.text();
                console.error('Error details:', errorDetails);
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching interview candidates:', error);
            throw error;
        }
    }
}

export default new InterviewService();
