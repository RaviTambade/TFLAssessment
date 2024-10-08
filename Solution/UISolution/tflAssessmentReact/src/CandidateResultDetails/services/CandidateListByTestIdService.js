class CandidateListByTestIdService {
    constructor() {
      this.apiBaseUrl = 'http://localhost:5235/api/Result';
      
    }
    async getCandidates(testId) {
      try {
        const response = await fetch(`${this.apiBaseUrl}/Candidates/tests/${testId}`);
        return await this.handleResponse(response);
      } catch (error) {
        console.error('Error fetching candidates :', error);
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
  
  export default new CandidateListByTestIdService();
  