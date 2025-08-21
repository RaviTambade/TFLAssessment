package com.transflower.tflassessment.demo.repositories;

import java.sql.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.Date;

import com.transflower.tflassessment.demo.entities.*;

public class AssessmentRepositoryImpl implements AssessmentRepository {

    private String URL = "jdbc:mysql://localhost:3306/assessmentdb";
    private String USERNAME = "root";
    private String PASSWORD = "password";

    @Override
    public List<Assessment> getAllBySubjectMatterExpert(int subId) {

        List<Assessment> assessments = new ArrayList<>();
        try (Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD)) {
            String query = "SELECT * FROM tests WHERE subjectid = ?;";
            PreparedStatement stmt = con.prepareStatement(query);
            stmt.setInt(1, subId);

            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Assessment assessment = new Assessment();
                assessment.setId(rs.getInt("id"));
                assessment.setTestName(rs.getString("name"));
                assessment.setSubject(rs.getInt("subid"));
                // set other fields as needed

                assessments.add(assessment);
            }
        } catch (SQLException e) {
            e.printStackTrace();

        }

        return assessments;
    }

    @Override
    public List<Test> getAllTests(Date fromDate, Date toDate) {
        List<Test> tests = new ArrayList<>();

        String query = "SELECT * FROM tests WHERE scheduleddate BETWEEN ? AND ?";
        try (Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
                PreparedStatement stmt = con.prepareStatement(query)) {

            stmt.setDate(1, new java.sql.Date(fromDate.getTime()));
            stmt.setDate(2, new java.sql.Date(toDate.getTime()));

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Test test = new Test(0, query, null, query);
                    test.setId(rs.getInt("id"));
                    test.setName(rs.getString("name"));
                    test.setScheduledDate(rs.getDate("scheduleddate"));

                    tests.add(test);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return tests;
    }

    @Override
    public List<Question> getTestDetails(int testId) {

        TestWithQuestions test = null;

        String testQuery = "SELECT * FROM tests WHERE id = ?";
        String questionQuery = "SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, " +
                "q.answerkey, q.evaluationcriteriaid " +
                "FROM questionbank q " +
                "INNER JOIN testquestions tq ON q.id = tq.questionbankid " +
                "WHERE tq.testid = ?";
        
            List<Question> questions = new ArrayList<>();
        try {

            Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            // ---- Fetch Test ----
            PreparedStatement stmt = con.prepareStatement(testQuery);

        stmt.setInt(1, testId);

            ResultSet rs = stmt.executeQuery();

            Timestamp ts = rs.getTimestamp("scheduleddate");
            LocalDateTime lt = ts.toLocalDateTime();
            if (rs.next()) {
                test = new TestWithQuestions();
                test.setId(rs.getInt("id"));
                test.setName(rs.getString("name"));
                test.setScheduledDate(lt);
                // map other test fields here...
            }

            // ---- Fetch Questions if test exists ----
            if (test != null) {

                PreparedStatement stmt1 = con.prepareStatement(questionQuery);
                stmt1.setInt(1, testId);

                ResultSet rs1 = stmt1.executeQuery();

                while (rs1.next()) {
                    Question q = new Question();
                    q.setQuestionId(rs1.getInt("QuestionId"));
                    q.setSubjectId(rs1.getInt("SubjectId"));
                    q.setTitle(rs1.getString("title"));
                    q.setA(rs1.getString("a"));
                    q.setB(rs1.getString("b"));
                    q.setC(rs1.getString("c"));
                    q.setD(rs1.getString("d"));
                    q.setAnswerKey(rs1.getString("answerkey"));
                    q.setEvaluationCriteriaId(rs1.getInt("evaluationcriteriaid"));

                    questions.add(q);
                }

                return questions;
                // test.setQuestions(questions);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return questions;
    }

    public static void main(String[] args) {
        AssessmentRepositoryImpl repo = new AssessmentRepositoryImpl();

        List<Assessment> assessments = repo.getAllBySubjectMatterExpert(2);

        for (Assessment a : assessments) {
            a.toString();
        }

        // // ---- Fetch tests between two dates ----
        // java.sql.Date fromDate = java.sql.Date.valueOf("2025-08-01");
        // java.sql.Date toDate = java.sql.Date.valueOf("2025-08-30");

        // List<Test> tests = repo.getAllTests(fromDate, toDate);

        // for (Test t : tests) {
        //     System.out.println("ID: " + t.getId() +
        //             ", Name: " + t.getName() +
        //             ", Scheduled Date: " + t.getScheduledDate());
        // }

        // // ---- Fetch test details with questions ----
        // int testId = 1;
        // List<Question> testDetails = repo.getTestDetails(testId);

        // if (testDetails != null) {
        //     System.out.println("Test ID: " + testDetails.getId());
        //     System.out.println("Name: " + testDetails.getName());
        //     System.out.println("Scheduled Date: " + testDetails.getScheduledDate());

        //     System.out.println("\n--- Questions ---");
        //     for (Question q : (testDetails).getQuestions()) {
        //         System.out.println("Q" + q.getQuestionId() + ": " + q.getTitle());
        //         System.out.println("   A: " + q.getA());
        //         System.out.println("   B: " + q.getB());
        //         System.out.println("   C: " + q.getC());
        //         System.out.println("   D: " + q.getD());
        //         System.out.println("   Answer Key: " + q.getAnswerKey());
        //         System.out.println("   SubjectId: " + q.getSubjectId());
        //         System.out.println("   EvalCriteriaId: " + q.getEvaluationCriteriaId());
        //         System.out.println("-------------------------");
        //     }
        // } else {
        //     System.out.println("No test found with ID " + testId);
        // }
    }
}
