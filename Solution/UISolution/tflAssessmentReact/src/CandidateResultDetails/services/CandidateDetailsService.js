import { endpoints } from '../config/apiConfig';

class CandidateService {
    
    async getCandidateDetails(candidateId, testId) {
      try {
        const response = await fetch(endpoints.getCandidateScore(candidateId, testId));
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


  async getCandidatesByTestId(testId) {
    try {
      const response = await fetch(endpoints.getCandidatesByTestId(testId));
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching candidates:', error);
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
  