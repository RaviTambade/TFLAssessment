 const API_URL = "http://localhost:5129/api/interviews";

 // Centralized response handler
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
 
   // Fetch all interview candidates
   async getAllInterviewCandidates() {
     try {
       const response = await fetch(`${this.apiBaseUrl}/details`);
       return await handleResponse(response);
     } catch (error) {
       console.error('Error fetching interview candidates:', error);
       throw error;
     }
   }
 
   // Fetch interviewed candidates by candidateId
   async getInterviewedCandidatesSubjects(candidateId) {
     try {
       const response = await fetch(`${this.apiBaseUrl}/candidate/${candidateId}`);
       return await handleResponse(response);
     } catch (error) {
       console.error(`Error fetching candidate subjects for ${candidateId}:`, error);
       throw error;
     }
   }
 
   // Fetch interview details by interviewId
   async getInterviewDetails(interviewId) {
     try {
       const response = await fetch(`${this.apiBaseUrl}/${interviewId}`);
       return await handleResponse(response);
     } catch (error) {
       console.error(`Error fetching interview details for ${interviewId}:`, error);
       throw error;
     }
   }
 
   // Reschedule interview (PUT request)
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
 
   // Change interviewer (PUT request)
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
 
   // Cancel interview (DELETE request)
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
 