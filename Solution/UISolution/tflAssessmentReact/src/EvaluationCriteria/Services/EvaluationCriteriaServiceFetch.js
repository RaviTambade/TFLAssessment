<<<<<<< HEAD:Solution/UISolution/tflAssessmentReact/src/EvaluationCriteria/Services/EvaluationCriteriaServiceFetch.js
// services/EvaluationCriteriaServiceFetch.js
class EvaluationCriteriaService {

    constructor() {   
        this.apiBaseUrl = 'http://localhost:5195/api/criteria'; 
        // Replace with your API base URL
    }
=======
// // services/ProductServiceFetch.js
// class TflAssessmentServiceFetch {

//     constructor() {   
//         this.apiBaseUrl = 'http://localhost:5151/api/assessment'; 
//         // Replace with your API base URL
//     }
>>>>>>> 3bdbe03f5a5b947dfbe3d5d3894dfd6c2fe3117a:Solution/UISolution/tflAssessmentReact/src/services/TflAssessmentServiceFetch.js

//     // Fetch all products
//     async getAllAssessments() {
       
//         const response = await fetch('http://localhost:5151/api/assessment/assessments');
//         console.log(response);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return await response.json();
//     }

<<<<<<< HEAD:Solution/UISolution/tflAssessmentReact/src/EvaluationCriteria/Services/EvaluationCriteriaServiceFetch.js

    async getAllSubjectTitles() {
       
        const response = await fetch('http://localhost:5264/api/subject/subjects');
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
    }*/

    // Create a new Criteria
    async createCriteria(criteria) {
        const response = await fetch(this.apiBaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(criteria),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
    
    // UpdateCriteria
    async updateCriteria(evaluationCriteriaId, questionId) {
        const response = await fetch(`${this.apiBaseUrl}/${evaluationCriteriaId}'/questions/'${questionId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            //body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //return await response.json();
        return response;
    }

    // Delete a product
   /* async deleteProduct(id) {
        const response = await fetch(${this.apiBaseUrl}/${id}, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } */
}

export default new EvaluationCriteriaService();
=======
//     // Fetch a single product by ID
//    /*  async getProductById(id) {
//         const response = await fetch(${this.apiBaseUrl}/${id});
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return await response.json();
//     }

//     // Create a new product
//     async createProduct(product) {
//         const response = await fetch(this.apiBaseUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product),
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return await response.json();
//     }

//     // Update an existing product
//     async updateProduct(id, product) {
//         const response = await fetch(${this.apiBaseUrl}/${id}, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product),
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return await response.json();
//     }

//     // Delete a product
//     async deleteProduct(id) {
//         const response = await fetch(${this.apiBaseUrl}/${id}, {
//             method: 'DELETE',
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return await response.json();
//     } */
// }

// export default new TflAssessmentServiceFetch();
>>>>>>> 3bdbe03f5a5b947dfbe3d5d3894dfd6c2fe3117a:Solution/UISolution/tflAssessmentReact/src/services/TflAssessmentServiceFetch.js
