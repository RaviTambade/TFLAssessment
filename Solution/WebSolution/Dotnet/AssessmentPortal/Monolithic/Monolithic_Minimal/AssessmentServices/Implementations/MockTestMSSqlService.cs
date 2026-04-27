// using Transflower.TFLAssessment.Entities;
// using System.Data.SqlClient;
// using System.Data;
// using Transflower.TFLAssessment.Repositories.Interfaces;
// namespace Transflower.TFLAssessment.Repositories.Implementations;
// public class MockTestMSSqlManager : IMockTestManager
// {

//     private readonly IMockTestManager _repository;

//     public MockTestManager(IMockTestManager repository)
//     {
//         _repository = repository;

//     }


//     public List<EvaluationCriteria> GetEvalutionCriterias()
//     {
//         return _repository.GetEvalutionCriterias;
//     }



//     public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId)
//     {
//         return _repository.GetEvalutionCriteriasBySubject(subjectId );
//     }



//     public int GetCandidateScore(int candidateId, int testId)
//     {
//         return _repository.GetCandidateScore(candidateId,testId);
//     }

//     public List<TestQuestion> GetQuestions(int testId)
//     {

//         return _repository.GetQuestions(testId);
//     }

//     public bool InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
//     {
//         return _repository.InsertCandidateAnswers(candidateId, answers);
//     }

//     public bool SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
//     {
//         return _repository.SetCandidateTestStartTime(candidateId,testId,time);
//     }


//     public bool SetCandidateTestEndTime(int candidateId, int testId, TestTime time)
//     {
//         return _repository.SetCandidateTestEndTime(candidateId,testId,time);
//     }
//     public List<Test> GetAllTests()
//     {
//         return _repository.GetAllTests;
//     }
//     public string GetCriteria(string subject, int questionId)
//     {
//         return _repository.GetCriteria(subject,questionId);
//     }

//     public TestQuestion GetQuestion(string subject, int questionid)
//     {
//         return _repository.GetQuestion(subject,questionid);


//     }

//     public bool InsertQuestion(NewQuestion question)
//     {
//         return _repository.InsertQuestion(question);

//     }

//     public bool InsertCriteria(NewCriteria criteria)
//     {
//         return _repository.InsertCriteria(criteria);
//     }


//     public bool UpdateCriteria(int evaluationCriteriaId, int questionId)
//     {
//         return _repository.UpdateCriteria(evaluationCriteriaId,questionId);

//     }

//     public List<Question> GetTestQuestions(int testId)
//     {
//         return _repository.GetTestQuestions(testId);
//     }

//     public List<InterviewCandidateDetails> GetAllInterviewCandidates()
//     {
//         return _repository.GetAllInterviewCandidates;
//     }


//     public bool DeleteQuestion(int[] testQuestions)
//     {
//         return _repository.GetAllInterviewCandidates;
//     }


//     public List<InterviewCandidateDetails> GetInterviewCandidateDetailsSubjects(int candidateId)
//     {
//         return _repository.GetAllInterviewCandidates;
//     }

//     public InterviewDetails GetInterviewDetails(int interviewId)
//     {
//         return _repository.GetAllInterviewCandidates;
//     }

//     public int GetCandidateTestScore(int candidateId, int testId)
//     {
//         return _repository.GetAllInterviewCandidates;
//     }

//     public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId)
//     {
//         return _repository.GetAllInterviewCandidates;
//     }


//     public bool CreateTest(Test newTest)
//     {
//         return _repository.GetAllInterviewCandidates;

//     }


// }
