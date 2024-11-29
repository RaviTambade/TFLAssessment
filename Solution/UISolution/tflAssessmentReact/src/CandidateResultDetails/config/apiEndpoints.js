
const API_BASE_URL_RESULT = import.meta.env.VITE_API_BASE_URL1;


const endpoints = {
  TestResultDetails: (testId) => `${API_BASE_URL_RESULT}/Result/tests/${testId}/details`,
  getCandidatesByTestId: (testId) => `${API_BASE_URL_RESULT}/Result/candidates/tests/${testId}`,
  getCandidateScore: (candidateId, testId) => `${API_BASE_URL_RESULT}/Result/candidates/${candidateId}/tests/${testId}/score`,
  setCandidateTestStartTime: (candidateId, testId) => `${API_BASE_URL_RESULT}/Result/setstarttime/${candidateId}/tests/${testId}`,
  setCandidateTestEndTime: (candidateId, testId) => `${API_BASE_URL_RESULT}/Result/setendtime/${candidateId}/tests/${testId}`,
  getCandidateResultDetails: (candidateId, testId) => `${API_BASE_URL_RESULT}/Result/candidates/${candidateId}/tests/${testId}/details`,
//  getAppearedCandidates: (testId) => `${API_BASE_URL_RESULT}/Result/candidates/tests/${testId}`,
  getTestList:(candidateId)=>`${API_BASE_URL_RESULT}/Result/testlist/${candidateId}`
};

export { API_BASE_URL_RESULT, endpoints };
