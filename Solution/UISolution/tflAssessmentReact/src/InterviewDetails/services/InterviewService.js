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

    async GetIntervieweDetails(interviewId) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/${interviewId}`);

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

    async RescheduleInterview(interviewId, time, date) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/${interviewId}/time/${encodeURIComponent(time)}/date/${date.toISOString().split('T')[0]}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                const errorDetails = await response.text();
                console.error('Error details:', errorDetails);
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
    
            return await response.json(); 
        } catch (error) {
            console.error('Error rescheduling interview:', error);
            throw error;
        }
    }

    
    async ChangeInterviewer(interviewId, smeId) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/${interviewId}/subjectexperts/${smeId}' , {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                const errorDetails = await response.text();
                console.error('Error details:', errorDetails);
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
    
            return await response.json(); 
        } catch (error) {
            console.error('Error rescheduling interview:', error);
            throw error;
        }
    }
    
}

export default new InterviewService();
