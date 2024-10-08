//  services/EvaluationCriteriaServiceFetch.js
class GetQuestionBankServiceFetch {

    constructor() {   

        var questionUrl = 'http://localhost:5172/api/questionbank/questions/tests';
        console.log("questionUrl : "+ questionUrl);
        // Replace with your API base URL
    }

        // Fetch all Questions
        //await fetch(`${this.questionUrl}/${id}`
         async getAllQuestions(id) {
            
         const response = await fetch(`http://localhost:5172/api/questionbank/questions/tests/${id}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
         });
         console.log(response);
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return await response.json();
    }

//     // Fetch a single product by ID
//    /*  async getProductById(id) {
//         const response = await fetch(${this.apiBaseUrl}/${id});
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
 }

 export default new GetQuestionBankServiceFetch();
