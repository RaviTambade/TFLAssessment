const API_BASE_URL_ASSESSMENT = import.meta.env.VITE_API_BASE_URL3;  

//http://localhost:5151/api

const endpoints = {

  // Assessment endpoints
  assessment: {
    getAllSubjects: `${API_BASE_URL_ASSESSMENT}/assessment/subjects`,
    getAllAssessments: `${API_BASE_URL_ASSESSMENT}/assessment/assessments`,
   // getAllBySubjectMatterExpert: `${API_BASE_URL_ASSESSMENT}/assessment/subjectexperts/${id}`,
    getCriteriaBySubject: (subjectId) => `${API_BASE_URL_ASSESSMENT}/assessment/criterias/subjects/${subjectId}`,
  }
};

export { API_BASE_URL_ASSESSMENT, endpoints };
