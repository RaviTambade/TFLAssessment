package com.transflower.tflassessment.demo;

import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.*;
import java.util.*;

public class App {
    public static void main(String[] args) {

        // ================= AssessmentIntelligenceRepository =================
        AssessmentIntelligenceRepositoryImpl intelligenceRepo = new AssessmentIntelligenceRepositoryImpl();
        List<AnnualCandidateResult> results = intelligenceRepo.getCandidateResults(2, 2015);
        for (AnnualCandidateResult result : results) {
            System.out.println("Candidate ID: " + result.getCandidateId() + " Score: " + result.getScore());
        }

        // ================= AuthRepository =================
        AuthRepositoryImpl authRepo = new AuthRepositoryImpl();
        User user = authRepo.getUserWithRolesByEmail("kajal.ghule@example.com", "12345");
        for (UserRole role : user.getUserRoles()) {
            System.out.println("User Email: " + role.getEmail() + " User Password: " + role.getPassword());
        }

        // ================= QuestionBankRepository =================
        QuestionBankRepositoryImpl repo = new QuestionBankRepositoryImpl();

        // -------- getAllQuestions --------
        System.out.println("\nAll Questions:");
        List<QuestionTitle> allQuestions = repo.getAllQuestions();
        for (QuestionTitle q : allQuestions) {
            System.out.println(q.getId() + " - " + q.getTitle());
        }

        // -------- getQuestionsBySubject --------
        int subjectId = 2;
        System.out.println("\nQuestions by Subject:");
        List<SubjectQuestion> subjectQuestions = repo.getQuestionsBySubject(subjectId);
        for (SubjectQuestion q : subjectQuestions) {
            System.out.println(q.getQuestionId() + " - " + q.getQuestion() + " - " + q.getSubject());
        }

        // -------- getQuestionsBySubjectAndCriteria --------
        System.out.println("\nQuestions by Subject and Criteria:");
        List<QuestionDetails> filteredQuestions = repo.getQuestionsBySubjectAndCriteria(1, 1);
        for (QuestionDetails q : filteredQuestions) {
            System.out.println(q.getId() + " - " + q.getQuestion() + " - " + q.getSubject() + " - " + q.getCriteria());
        }

        // -------- getQuestionsWithSubjectAndCriteria --------
        System.out.println("\nAll Questions with Subject and Criteria:");
        List<QuestionDetails> fullQuestions = repo.getQuestionsWithSubjectAndCriteria();
        for (QuestionDetails q : fullQuestions) {
            System.out.println(q.getId() + " - " + q.getQuestion() + " - " + q.getSubject() + " - " + q.getCriteria());
        }

        // -------- getQuestion --------
        System.out.println("\nGet Question by ID:");
        Question existingQuestion = repo.getQuestion(1);
        System.out.println(existingQuestion.getId() + " - " + existingQuestion.getTitle());

        // -------- updateAnswer --------
        boolean answerUpdated = repo.updateAnswer(1, 'b');
        System.out.println("\nAnswer Updated: " + answerUpdated);

        // -------- updateQuestionOptions --------
        Question question = new Question();
        question.setTitle("Updated Question?");
        question.setA("Option A");
        question.setB("Option B");
        question.setC("Option C");
        question.setD("Option D");
        question.setAnswerKey('C');
        boolean optionsUpdated = repo.updateQuestionOptions(1, question);
        System.out.println("\nOptions Updated: " + optionsUpdated);

        // -------- updateSubjectCriteria --------
        Question updateSubjectCriteria = new Question();
        updateSubjectCriteria.setSubjectId(1);
        updateSubjectCriteria.setEvaluationCriteriaId(1);
        boolean subjectCriteriaUpdated = repo.updateSubjectCriteria(1, updateSubjectCriteria);
        System.out.println("\nSubject and Criteria Updated: " + subjectCriteriaUpdated);

        // -------- insertQuestion --------
        NewQuestion newquestion = new NewQuestion();
        newquestion.setSubjectId(1);
        newquestion.setTitle("New Inserted Question?");
        newquestion.setA("A1");
        newquestion.setB("B1");
        newquestion.setC("C1");
        newquestion.setD("D1");
        newquestion.setAnswerKey('A');
        newquestion.setEvaluationCriteriaId(1);
        boolean inserted = repo.insertQuestion(newquestion);
        System.out.println("\nNew Question Inserted: " + inserted);

        // -------- getCriteria --------
        String subjectTitle = "COREJAVA";
        int questionId = 1;
        String criteriaTitle = repo.getCriteria(subjectTitle, questionId);
        System.out.println("\nCriteria Title for Subject and Question ID: " + criteriaTitle);

        // -------- getQuestions --------
        // List<Question> testQuestions = repo.getQuestions(1);
        // System.out.println("\nQuestions from Test (may be empty):");
        // for (Question q : testQuestions) {
        //     System.out.println(q.getId() + " - " + q.getTitle());
        // }

        //-------------- Insert Candidate Answer------------
//         CandidateAnswerRepositoryImpl answer=new CandidateAnswerRepositoryImpl();
//         List<CandidateAnswer> answers=answer.getCandidateAnswer(1,1);
//         for(CandidateAnswer ans:answers){
//             int candidateid=ans.getCandidateId();
//             int TestId=ans.getTestQuestionId();
//             System.out.println("CandidateId:"+ candidateid + "TestId:"+ TestId);
//         }

//         //-------------Get Candidate Answer-----
//         answers.add(new CandidateAnswer(101,1,1, "A"));
//         answers.add(new CandidateAnswer(102,1,2, "B"));
//         boolean success = answer.insertCandidateAnswer(1, answers);
//         if (success) 
//         {
            
//             System.out.println("Candidate answers inserted successfully.");
//         } else 
//         {
//             System.out.println("Failed to insert candidate answers.");
//         }

//         //------------getCandidateAnswerResult---------
//         List<CandidateAnswerResult> ansResult=new ArrayList<CandidateAnswerResult>();
//         ansResult.add(new CandidateAnswerResult(1,"C","A",true));
//         ansResult.add(new CandidateAnswerResult(2,"D","C",false));
        
//         for(CandidateAnswerResult ans:ansResult)
//         {
//             int TestQuestionId=ans.getTestQuestionId();
//             String CandidateAnswer=ans.getCandidateAnswer();
//             String CorrectAnswer=ans.getCorrectAnswer();
//             System.out.println("TestQuestionId:"+TestQuestionId+ "CandidateAnswer"+CandidateAnswer+"CorrectAnswer:"+CorrectAnswer);
//         }

//         //--------------CandidateTestDetails -------

//         int candidateId = 1; 
//         int testId = 101;   

//         CandidateTestDetails details = getCandidateTestDetails(candidateId, testId);
//         System.out.println(details);
    }
<<<<<<< HEAD

//mvn clean install
//mvn package
//mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"


//These are commands to used for compiling, running java app
=======
}
>>>>>>> 2167425a6f4a8e4a0bbe89fa2f5171429ea9dc0f
