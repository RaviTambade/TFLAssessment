
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
 //http://localhost:5151/api/assessment/1
 async getAssessmentDetails(id) {
    const response = await fetch(`${this.apiBaseUrl}/${id}`);
     if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return await response.json();
}

    // Fetch a single product by ID
    /*  async getProductById(id) {
         const response = await fetch(${this.apiBaseUrl}/${id});
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return await response.json();
     }
 
     // Create a new product
     async createProduct(product) {
         const response = await fetch(this.apiBaseUrl, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(product),
         });
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return await response.json();
     }
 
     // Update an existing product
     async updateProduct(id, product) {
         const response = await fetch(${this.apiBaseUrl}/${id}, {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(product),
         });
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return await response.json();
     }
 
     // Delete a product
     async deleteProduct(id) {
         const response = await fetch(${this.apiBaseUrl}/${id}, {
             method: 'DELETE',
         });
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return await response.json();
     } */
}

export default new AssessmentService();