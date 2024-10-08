class CandidateService {
    constructor() {
      this.apiBaseUrl = 'http://localhost:5235/api/Result';
    }
    async getCandidateDetails(candidateId, testId) {
      try {
        const response = await fetch(`${this.apiBaseUrl}/Candidates/${candidateId}/tests/${testId}/details`);
        return await this.handleResponse(response);
      } catch (error) {
        console.error('Error fetching candidate details:', error);
        throw error;
      }
    }
    async handleResponse(response) {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    }
  }
  
  export default new CandidateService();
  