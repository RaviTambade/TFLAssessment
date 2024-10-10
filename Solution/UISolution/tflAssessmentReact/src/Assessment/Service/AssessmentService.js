import { endpoints } from "../config/apiEndpoints";

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.message || "Something went wrong");
    }
    return await response.json();
};

const AssessmentService = {

    async getAllAssessments() {
        const response = await fetch(endpoints.assessment.getAllAssessments);
        return handleResponse(response);
    },

    async getAllEmployees() {
        const response = await fetch(`${this.apiBaseUrl}/employees`);
        return handleResponse(response);
    },

    async getAllSubjects() {
        const response = await fetch(`${this.apiBaseUrl}/subjects`);
        return handleResponse(response);
    },

    async getEvaluationCriteria() {
        const response = await fetch(`${this.apiBaseUrl}/criterias`);
        return handleResponse(response);
    },

    async getEvaluationCriteriaBySubject(id) {
        const response = await fetch(`${this.apiBaseUrl}/criterias/subjects/${id}`);
        return handleResponse(response);
    },

    async getAssessmentDetails(id) {
        const response = await fetch(`${this.apiBaseUrl}/assessments/${id}`); // Updated URL
        return handleResponse(response);
    },

    async getAllBySubjectMatterExpert(id) {
        const response = await fetch(`${this.apiBaseUrl}/subjectexperts/${id}`);
        return handleResponse(response);
    },

    async createTest(newTest) {
        const response = await fetch(`${this.apiBaseUrl}/createtest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTest),
        });
        return handleResponse(response);
    },
};

export default AssessmentService;
