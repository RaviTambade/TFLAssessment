// package com.transflower.tflassessment.services;

// import java.time.LocalDateTime;
// import java.util.List;
// import java.util.concurrent.CompletableFuture;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.transflower.tflassessment.entities.AppearedCandidate;
// import com.transflower.tflassessment.entities.CandidateResultDetails;
// import com.transflower.tflassessment.entities.CandidateSubjectResults;
// import com.transflower.tflassessment.entities.FailedCandidateDetails;
// import com.transflower.tflassessment.entities.PassedCandidateDetails;
// import com.transflower.tflassessment.entities.Subject;
// import com.transflower.tflassessment.entities.TestAverageReport;
// import com.transflower.tflassessment.entities.TestList;
// import com.transflower.tflassessment.entities.TestResultDetails;
// import com.transflower.tflassessment.entities.TestScoreDto;
// import com.transflower.tflassessment.repositories.ResultRepository;
      

// @Service
// public class ResultServiceImpl implements ResultService {

//     private final ResultRepository repository;

//     @Autowired
//     public ResultServiceImpl(ResultRepository repository) {
//         this.repository = repository;
//     }

    
// @Override
// @Async("asyncExecutor")
// public CompletableFuture<Integer> getCandidateScore(int candidateId, int testId){
//     return CompletableFuture.completedFuture(repository.getCandidateScore(candidateId,testId));
// }


//  @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<Boolean> setCandidatTeststarttime(int candidateId, int testId, LocalDateTime time) {
//         return CompletableFuture.completedFuture(repository.setCandidateTestStartTime(candidateId, testId,time ));
//     }

    
//     @Override
//         @Async("asyncExecutor")
// public CompletableFuture<Boolean> setCandidateTestEndTime(int candidateId, int testId, LocalDateTime time){
//           return CompletableFuture.completedFuture(repository.setCandidateTestStartTime(candidateId, testId,time ));

// }

//    @Override
//    @Async("asyncExecutor")
//        public CompletableFuture<Boolean> setCandidateTestResultDetails(int candidateId, int testId){
//           return CompletableFuture.completedFuture((Boolean)repository.setCandidateTestResultDetails(candidateId, testId));

//     }
  

//     @Override
//     @Async("asyncExecutor")
//         public CompletableFuture<CandidateResultDetails> CandidateTestResultDetails(int candidateId, int testId){
//       return CompletableFuture.completedFuture(repository.candidateTestResultDetails (candidateId,testId));
//     }

//  @Override
// @Async("asyncExecutor")
//      public CompletableFuture<List<TestList>> getTestList(int candidateId){
//        return CompletableFuture.completedFuture(repository.getTestList(candidateId));
//     }

//     @Override
//     @Async("asyncExecutor")
//         public CompletableFuture <List<PassedCandidateDetails>> getPassedCandidateResults(int testId){
//        return CompletableFuture.completedFuture(repository.getPassedCandidateResults(testId));
//     }


//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<Boolean> setPassingLevel (int testId, int passingLevel){
//       return CompletableFuture.completedFuture(repository.setPassingLevel(testId, passingLevel));
//     }

//     @Override
//     @Async("asyncExecutor")
//        public CompletableFuture<List<CandidateSubjectResults>> getSubjectResultDetails(int subjectId){
//         return CompletableFuture.completedFuture(repository.getSubjectResultDetails(subjectId));
//     }


//     @Override
//     @Async("asyncExecutor")
//         public CompletableFuture <List<AppearedCandidate>> getAppearedCandidates(int testId){
//         return CompletableFuture.completedFuture(repository.getAppearedCandidates(testId));      
//     }



//     @Override
//     @Async("asyncExecutor")
//        public CompletableFuture<List<Subject>> getAllSubjects(){
//       return CompletableFuture.completedFuture(repository.getAllSubjects());
//     }

//     @Override
//     @Async("asyncExecutor")
//       public  CompletableFuture<List<TestAverageReport>> getTestAverageReport(int testId) {
//       return CompletableFuture.completedFuture(repository.getTestAverageReport(testId));
//     }

//     @Override
//     @Async("asyncExecutor")
//        public CompletableFuture<List<TestScoreDto>> getCandidateAllScore(int candidateId){

//        return CompletableFuture.completedFuture(repository.getCandidateAllScore(candidateId));
//     }


//     @Override
//     @Async("asyncExecutor")
//     public CompletableFuture<List<FailedCandidateDetails>> getFailedCandidateResults(int testId) {
// return CompletableFuture.completedFuture(repository.getFailedCandidateResults(testId));
//    }

//     @Override
//     public CompletableFuture<List<TestResultDetails>> getTestResultDetail(int testId) {
//       // TODO Auto-generated method stub
//       throw new UnsupportedOperationException("Unimplemented method 'getTestResultDetail'");
//     }


   




    
    
// }





 

