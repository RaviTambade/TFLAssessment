class TestApperService {
    constructor() {
        //http://localhost:5172/api/questionbank/questions/tests/"+testId;
        this.apiBaseUrl = 'http://localhost:5172/api/questionbank'
    }
    async getTestQuetions(testId){
        const response = await fetch(`${this.apiBaseUrl}/questions/tests/${testId}`);
        if(!response.ok){
            throw new Error('network response was not ok');
        }
        return await response.json();
    }

    async submitAnswers(candidateId, candidateAnswers){
        const response = await fetch(`http://localhost:5299/api/candidateanswer/assessmentanswers/candidates/${candidateId}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(candidateAnswers),
        });
        if(!response.ok){
            throw new Error('error submitting answers');
        }
        return response.json();
    }

    async fetchResult(candidateId, testId){
        const response = await fetch(`http://localhost:5235/api/result/candidates/${candidateId}/tests/${testId}/score`);
      if (!response.ok) {
        throw new Error("Error fetching result");
      }
      return response.json();
    }
}

export default new TestApperService();