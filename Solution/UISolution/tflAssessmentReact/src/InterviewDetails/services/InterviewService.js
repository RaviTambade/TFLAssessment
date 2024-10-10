 const API_URL = "http://localhost:5129/api/interviews";

 const handleResponse = async (response) => {
   if (!response.ok) {
     const errorDetails = await response.json();
     throw new Error(errorDetails.message || "Something went wrong");
   }
   return await response.json();
 };
 
 class InterviewService {
   constructor() {
     this.apiBaseUrl = API_URL;
   }
 
   
   async getAllInterviewCandidates() {
     try {
       const response = await fetch(`${this.apiBaseUrl}/details`);
       return await handleResponse(response);
     } catch (error) {
       console.error('Error fetching interview candidates:', error);
       throw error;
     }
   }
 
   
   async getInterviewedCandidatesSubjects(candidateId) {
     try {
       const response = await fetch(`${this.apiBaseUrl}/candidate/${candidateId}`);
       return await handleResponse(response);
     } catch (error) {
       console.error(`Error fetching candidate subjects for ${candidateId}:`, error);
       throw error;
     }
   }
   async getCandidateDetails(candidateId) {
    try {
        const response = await fetch(`${this.apiBaseUrl}/candidate/${candidateId}`);
        return await handleResponse(response);
    } catch (error) {
        console.error(`Error fetching candidate details for ${candidateId}:`, error);
        throw error;
    }
}

   
   async getInterviewDetails(interviewId) {
     try {
       const response = await fetch(`${this.apiBaseUrl}/${interviewId}`);
       return await handleResponse(response);
     } catch (error) {
       console.error(`Error fetching interview details for ${interviewId}:`, error);
       throw error;
     }
   }
 
   
   async rescheduleInterview(interviewId, time, date) {
     try {
       const response = await fetch(
         `${this.apiBaseUrl}/${interviewId}/time/${encodeURIComponent(time)}/date/${date.toISOString().split('T')[0]}`, 
         {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' }
         }
       );
       return await handleResponse(response);
     } catch (error) {
       console.error(`Error rescheduling interview ${interviewId}:`, error);
       throw error;
     }
   }
 
   
   async changeInterviewer(interviewId, smeId) {
     try {
       const response = await fetch(
         `${this.apiBaseUrl}/${interviewId}/subjectexperts/${smeId}`, 
         {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' }
         }
       );
       return await handleResponse(response);
     } catch (error) {
       console.error(`Error changing interviewer for ${interviewId}:`, error);
       throw error;
     }
   }
 
   
   async cancelInterview(interviewId) {
     try {
       const response = await fetch(`${this.apiBaseUrl}/${interviewId}`, {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' }
       });
       return await handleResponse(response);
     } catch (error) {
       console.error(`Error cancelling interview ${interviewId}:`, error);
       throw error;
     }
   }
 }
 
 export default new InterviewService();
 