import { endpoints } from '../config/apiEndpoints';

class CandidateDetailsService {
  
    
    async getCandidateDetails(candidateId, testId) {
      try {
        const response = await fetch(endpoints.getCandidateScore(candidateId, testId));
        return await this.handleResponse(response);
      } catch (error) {
        console.error('Error fetching candidate details:', error);
        throw error;
      }
    }


  async getTestResultDetails(testId) {
    try {
      const response = await fetch(endpoints.getTestResultDetails(testId));
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

  async getTestList(candidateId) {
    try {
      const response = await fetch(endpoints.getTestList(candidateId));
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching candidates:', error);
      throw error;
    }
  }
  }
  export default new CandidateDetailsService();
  



  
    // async getTestList(candidateId) {
    //   if (!candidateId) {
    //     throw new Error("Candidate ID is required.");
    //   }
    //   const url = endpoints.getTestList(candidateId);
    //   try {
    //     const response = await fetch(url);
    //     return await this.handleResponse(response);
    //   } catch (error) {
    //     console.error(`Error fetching test list from ${url}:`, error);
    //     throw error;
    //   }
    // }
  

    // async handleResponse(response) {
    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.statusText}`);
    //   }
    //   return response.json();
    // }


  //   async getTestList(candidateId) {
  //     const response = await fetch(endpoints.assessment.getTestListByCandidateId(candidateId));
  //     return handleResponse(response);
  // }
