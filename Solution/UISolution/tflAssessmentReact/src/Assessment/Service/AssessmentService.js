
class AssessmentService {

    constructor() {
        this.apiBaseUrl = 'http://localhost:5151/api/assessment';
    }

    async getAllAssessments() {

        const response = await fetch(`${this.apiBaseUrl}/assessments`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }

    async getAllEmployees() {
        const response = await fetch(`${this.apiBaseUrl}/employees`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }

    async getAllSubjects() {
        const response = await fetch(`${this.apiBaseUrl}/subjects`);
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    }
   
    async getEvaluationCriteria() {
        const response = await fetch(`${this.apiBaseUrl}/criterias`);
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    }

    async getEvaluationCriteriaBySubject(id) {
        const response = await fetch(`${this.apiBaseUrl}/criterias/subjects/${id}`);
         if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    }

 async getAssessmentDetails(id) {
    const response = await fetch(`${this.apiBaseUrl}/${id}`);
     if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return await response.json();
}

async getAllBySubjectMatterExpert(id) {
    const response = await fetch(`${this.apiBaseUrl}/subjectexperts/${id}`);
     if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return await response.json();
}
//http://localhost:5151/api/Assessment/createtest
async createTest(newTest){
    const response = await fetch(`${this.apiBaseUrl}/createtest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTest)
    });
  
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error("Failed to create test");
      return null;
    }
  };
   
}

export default new AssessmentService();