package com.transflower.tflassessment.demo;

<<<<<<< HEAD
import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.*;
import java.util.*;

public class App {
    public static void main(String[] args) {
=======
import java.util.List;

import com.transflower.tflassessment.demo.entities.AnnualCandidateResult;
import com.transflower.tflassessment.demo.entities.User;
import com.transflower.tflassessment.demo.entities.UserRole;
import com.transflower.tflassessment.demo.entities.Role;
import com.transflower.tflassessment.demo.repositories.AssessmentIntelligenceRepositoryImpl;
import com.transflower.tflassessment.demo.repositories.AuthRepositoryImpl;

public class App {
    public static void main( String[] args )
    { 
        //Create instance of the repository implementation
        AssessmentIntelligenceRepositoryImpl repo = new AssessmentIntelligenceRepositoryImpl();
        List<AnnualCandidateResult> results=  repo.getCandidateResults(2, 2015);
        for (AnnualCandidateResult result : results) {
>>>>>>> 5155dc5f13931292a8d015a5c1facaba400268fa

        // // ================= AssessmentIntelligenceRepository =================
        // AssessmentIntelligenceRepositoryImpl intelligenceRepo = new AssessmentIntelligenceRepositoryImpl();
        // List<AnnualCandidateResult> results = intelligenceRepo.getCandidateResults(2, 2015);
        // for (AnnualCandidateResult result : results) {
        //     System.out.println("Candidate ID: " + result.getCandidateId() + " Score: " + result.getScore());
        // }

        // // ================= AuthRepository =================
        // AuthRepositoryImpl authRepo = new AuthRepositoryImpl();
        // User user = authRepo.getUserWithRolesByEmail("kajal.ghule@example.com", "12345");
        // for (UserRole role : user.getUserRoles()) {
        //     System.out.println("User Email: " + role.getEmail() + " User Password: " + role.getPassword());
        // }

        // ================= QuestionBankRepository =================
        QuestionBankRepositoryImpl repo = new QuestionBankRepositoryImpl();

        // -------- getAllQuestions --------
        System.out.println("\nAll Questions:");
        List<QuestionTitle> allQuestions = repo.getAllQuestions();
        for (QuestionTitle q : allQuestions) {
            System.out.println(q.getId() + " - " + q.getTitle());
        }

<<<<<<< HEAD
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
    }
}
=======
        AuthRepositoryImpl auth = new AuthRepositoryImpl();

        User user = auth.getUserWithRolesByEmail("nirjala.naik@example.com", "12345");
        int id = user.getId();
        String aadharId = user.getAadharId();
        String email = user.getEmail();
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();
        String contactNumber = user.getContactNumber();

        for (UserRole userRole : user.getUserRoles()) {

            Role r = userRole.getrole();
            // System.out.println("ID: " + id + ", Aadhar ID: " + aadharId + ", Email: " +
            // email + ", Password: " + password +
            // ", Role: " + r.getName() + ", First Name: " + firstName + ", Last Name: " +
            // lastName +
            // ", Contact Number: " + contactNumber);

            System.out.println("ID: " + id);
            System.out.println("Aadhar ID: " + aadharId);
            System.out.println("Email: " + email);
            System.out.println("Password: " + password);
            System.out.println("Role: " + r.getName());
            System.out.println("First Name: " + firstName);
            System.out.println("Last Name: " + lastName);
            System.out.println("Contact Number: " + contactNumber);

        }

    }
}

// EvaluationCriteria evc=new EvaluationCriteria(23,"JAVA",10);
// evc.updateSubject();
// evc.

// mvn clean install
// mvn package
// mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"

// mvn clean install
// mvn package
// mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"
>>>>>>> 5155dc5f13931292a8d015a5c1facaba400268fa
