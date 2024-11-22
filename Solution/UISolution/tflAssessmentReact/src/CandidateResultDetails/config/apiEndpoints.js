
const VITE_API_BASE_URL_RESULT = import.meta.env.VITE_API_BASE_URL1;

const endpoints = {
  getCandidatesByTestId: (testId) => `${VITE_API_BASE_URL_RESULT}/Result/candidates/tests/${testId}`,
  getCandidateScore: (candidateId, testId) => `${VITE_API_BASE_URL_RESULT}/Result/candidates/${candidateId}/tests/${testId}/score`,
  setCandidateTestStartTime: (candidateId, testId) => `${VITE_API_BASE_URL_RESULT}/Result/setstarttime/${candidateId}/tests/${testId}`,
  setCandidateTestEndTime: (candidateId, testId) => `${VITE_API_BASE_URL_RESULT}/Result/setendtime/${candidateId}/tests/${testId}`,
  getCandidateResultDetails: (candidateId, testId) => `${VITE_API_BASE_URL_RESULT}/Result/candidates/${candidateId}/tests/${testId}/details`,
  getTestResultDetails: (testId) => `${VITE_API_BASE_URL_RESULT}/Result/tests/${testId}/details`,
  getAppearedCandidates: (testId) => `${VITE_API_BASE_URL_RESULT}/Result/candidates/tests/${testId}`,
  getTestList:(candidateId)=>`${VITE_API_BASE_URL_RESULT}/Result/testlist/${candidateId}`
};

export { VITE_API_BASE_URL_RESULT, endpoints };
