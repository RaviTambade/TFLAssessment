package com.transflower.tflassessment.repositories;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.CompletableFuture;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.Assessment;
import com.transflower.tflassessment.entities.Concepts;
import com.transflower.tflassessment.entities.CreateTestRequest;
import com.transflower.tflassessment.entities.CreateTestWithQuestions;
import com.transflower.tflassessment.entities.Employee;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.Subject;
import com.transflower.tflassessment.entities.SubjectQuestions;
import com.transflower.tflassessment.entities.Test;
import com.transflower.tflassessment.entities.TestWithQuestions;

@Repository
public class AssessmentRepositoryImpl implements AssessmentRepository {

    private static Connection connection;

    static {
        try (InputStream input = AssessmentRepositoryImpl.class.getClassLoader()
                .getResourceAsStream("application.properties")) {
            Properties props = new Properties();
            props.load(input);

            String url = props.getProperty("db.url");
            String user = props.getProperty("db.username");
            String enpass = props.getProperty("db.password");
            AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
            textEncryptor.setPassword("TransFlower");
            String pass = textEncryptor.decrypt(enpass.replace("ENC(", "").replace(")", ""));
            // ix3jGci+cQ5VXBXcnfDeGfETyVy1yWkUxsdJPXiPt/x2J+3B079VBAJnSj6TeDWv
            String driver = props.getProperty("db.driver");

            Class.forName(driver);
            connection = DriverManager.getConnection(url, user, pass);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error in connecting to database");
        }
    }

    @Override
    public CompletableFuture<Assessment> getDetails(int assessmentId) {
        return CompletableFuture.supplyAsync(()->{
        Assessment assessment = null;

        String query = "SELECT t.id, t.name AS TestName, t.smeid AS subjectExpertId, "
                + "t.subjectid AS subjectId, t.creationdate AS creationDate, "
                + "t.modificationdate AS modificationDate, t.scheduleddate AS scheduledDate, "
                + "t.status, t.passinglevel, e.firstname, e.lastname, t.duration "
                + "FROM tests t "
                + "LEFT JOIN employees e ON t.smeid = e.id "
                + "WHERE t.id = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, assessmentId);

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    assessment = new Assessment();
                    assessment.setId(rs.getInt("id"));
                    assessment.setTestName(rs.getString("TestName"));
                    assessment.setSubjectExpertId(rs.getInt("subjectExpertId"));
                    assessment.setSubjectId(rs.getInt("subjectId"));

                    Timestamp creationTs = rs.getTimestamp("creationDate");
                    if (creationTs != null) {
                        assessment.setCreationDate(creationTs.toLocalDateTime());
                    }

                    Timestamp modificationTs = rs.getTimestamp("modificationDate");
                    if (modificationTs != null) {
                        assessment.setModificationDate(modificationTs.toLocalDateTime());
                    }

                    Timestamp scheduleTs = rs.getTimestamp("scheduledDate");
                    if (scheduleTs != null) {
                        assessment.setScheduleDate(scheduleTs.toLocalDateTime());
                    }

                    assessment.setStatus(rs.getString("status"));
                    assessment.setPassingLevel(rs.getInt("passinglevel"));
                    assessment.setFirstName(rs.getString("firstname"));
                    assessment.setLastName(rs.getString("lastname"));
                    assessment.setDuration(rs.getTimestamp("duration"));
                }
            }

        } catch (SQLException e) {
            System.out.println("Error fetching assessment: " + e.getMessage());
        }

        return assessment;
        });
    }

    @Override
    public CompletableFuture<List<Assessment>> getAll(LocalDateTime fromDate, LocalDateTime toDate) {
        return CompletableFuture.supplyAsync(()->{
        List<Assessment> assessments = new ArrayList<>();

        String query = "SELECT * FROM tests WHERE creationDate BETWEEN ? AND ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setTimestamp(1, Timestamp.valueOf(fromDate));
            stmt.setTimestamp(2, Timestamp.valueOf(toDate));

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Assessment assessment = new Assessment();
                    assessment.setId(rs.getInt("id"));
                    assessment.setSubjectExpertId(rs.getInt("smeid"));
                    assessment.setSubjectId(rs.getInt("subjectid"));

                    Timestamp modDate = rs.getTimestamp("modificationdate");
                    if (modDate != null) {
                        assessment.setModificationDate(modDate.toLocalDateTime());
                    }

                    Timestamp schedDate = rs.getTimestamp("scheduleddate");
                    if (schedDate != null) {
                        assessment.setScheduleDate(schedDate.toLocalDateTime());
                    }

                    assessment.setStatus(rs.getString("status"));

                    assessments.add(assessment);
                }
            }

        } catch (SQLException e) {
            System.out.println("Error " + e.getMessage());
        }

        return assessments;
    });
    }

    // // getSmeBySubject
    // public CompletableFuture<List<Employee>> getSmeBySubject(int subjectId) {
    // List<Employee> smeList = new ArrayList<>();

    // String query = "SELECT sme.id, e.userId, e.firstName, e.lastName, e.email,
    // e.contact "
    // + "FROM employees e "
    // + "INNER JOIN subjectmatterexperts sme ON e.id = sme.employeeid "
    // + "WHERE sme.subjectid = ?";

    // try {
    // PreparedStatement stmt = connection.prepareStatement(query);

    // stmt.setInt(1, subjectId);

    // try (ResultSet rs = stmt.executeQuery()) {
    // while (rs.next()) {
    // Employee emp = new Employee();
    // emp.setId(rs.getInt("id"));
    // emp.setUserId(rs.getInt("userId"));
    // emp.setFirstName(rs.getString("firstName"));
    // emp.setLastName(rs.getString("lastName"));
    // emp.setEmail(rs.getString("email"));
    // emp.setContact(rs.getString("contact"));

    // smeList.add(emp);
    // }
    // }

    // } catch (SQLException ex) {
    // ex.printStackTrace();
    // }

    // return CompletableFuture.completedFuture(smeList);
    // }

    // getAllTests
    @Override
    public CompletableFuture<List<Assessment>> getAllTests() {
        return CompletableFuture.supplyAsync(()->{
        List<Assessment> tests = new ArrayList<>();

        String query = "SELECT tests.*, subjects.title AS skill, employees.firstname, employees.lastname "
                + "FROM tests "
                + "INNER JOIN subjectmatterexperts ON subjectmatterexperts.id = tests.smeid "
                + "INNER JOIN subjects ON subjects.id = subjectmatterexperts.subjectid "
                + "INNER JOIN employees ON employees.id = subjectmatterexperts.employeeid";

        try (
                PreparedStatement stmt = connection.prepareStatement(query);
                ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                Assessment test = new Assessment();

                test.setId(rs.getInt("id"));
                test.setTestName(rs.getString("name"));
                test.setSubjectId(rs.getInt("subjectid"));
                test.setSubjectExpertId(rs.getInt("smeid"));

                test.setCreationDate(rs.getTimestamp("creationdate").toLocalDateTime());
                test.setModificationDate(rs.getTimestamp("modificationdate").toLocalDateTime());
                test.setScheduleDate(rs.getTimestamp("scheduleddate").toLocalDateTime());

                test.setStatus(rs.getString("status"));
                test.setSubject(rs.getString("skill"));
                test.setFirstName(rs.getString("firstname"));
                test.setLastName(rs.getString("lastname"));

                tests.add(test);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return tests;
    });
    }

    // getAllEmployees
    @Override
    public CompletableFuture<List<Employee>> getAllEmployees() {
        return CompletableFuture.supplyAsync(()->{
        List<Employee> employees = new ArrayList<>();
        String query = "SELECT * FROM employees";

        try (
                Statement stmt = connection.createStatement();
                ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                Employee emp = new Employee();
                emp.setId(rs.getInt("id"));
                emp.setFirstName(rs.getString("firstname"));
                emp.setLastName(rs.getString("lastname"));
                emp.setEmail(rs.getString("email"));
                emp.setContact(rs.getString("contact"));
                employees.add(emp);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employees;
    });
    }

    // getEmployeeById
    @Override
    public CompletableFuture<Employee> getEmployeeById(int userId) {
        return CompletableFuture.supplyAsync(()->{
        Employee employee = null;

        String query = "SELECT * FROM employees WHERE id = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, userId);

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    employee = new Employee();
                    employee.setId(rs.getInt("id"));
                    employee.setFirstName(rs.getString("firstname"));
                    employee.setLastName(rs.getString("lastname"));
                    employee.setEmail(rs.getString("email"));
                    employee.setContact(rs.getString("contact"));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return employee;
    });
    }

    // getAllSubjects
    @Override
    public CompletableFuture<List<Subject>> getAllSubjects() {
        return CompletableFuture.supplyAsync(()->{
        List<Subject> subjects = new ArrayList<>();
        String query = "SELECT * FROM subjects";

        try (PreparedStatement stmt = connection.prepareStatement(query); ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                Subject subject = new Subject();
                subject.setId(rs.getInt("id"));
                subject.setTitle(rs.getString("title"));

                subjects.add(subject);
            }

        } catch (SQLException e) {
            System.err.println("Error fetching subjects: " + e.getMessage());
        }

        return subjects;
    });
    }

    // getConcepts
    @Override
    public CompletableFuture<List<Concepts>> getConcepts() {
        return CompletableFuture.supplyAsync(()->{
        List<Concepts> concepts = new ArrayList<>();
        String query = "SELECT * FROM Concepts";

        try (Statement stmt = connection.createStatement(); ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                Concepts concept = new Concepts();
                concept.setId(rs.getInt("id"));
                concept.setTitle(rs.getString("title"));
                concept.setSubjectId(rs.getInt("subjectid"));

                concepts.add(concept);
            }

        } catch (SQLException e) {
            System.out.println("Error fetching evaluation criterias: " + e.getMessage());
        }

        return concepts;
    });
    }

    // getConceptsBySubject
    @Override
    public CompletableFuture<List<Concepts>> getConceptsBySubject(int subjectId) {
        return CompletableFuture.supplyAsync(()->{
        List<Concepts> concepts = new ArrayList<>();

        String query = "SELECT * FROM Concepts WHERE subjectid = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, subjectId);

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Concepts concept = new Concepts();
                    concept.setId(rs.getInt("id"));
                    concept.setTitle(rs.getString("title"));
                    concept.setSubjectId(rs.getInt("subjectid"));

                    concepts.add(concept);
                }
            }
        } catch (SQLException e) {
            System.err.println("error" + e.getMessage());
        }

        return concepts;
    });
    }

    // getAllBySubjectMatterExpert
    @Override

    public CompletableFuture<List<Assessment>> getAllBySubjectMatterExpert(int smeId) {

        return CompletableFuture.supplyAsync(()->{
        List<Assessment> assessments = new ArrayList<>();

        try {
            String query = "SELECT * FROM tests WHERE smeid = ?";

            PreparedStatement stmt = connection.prepareStatement(query);
            stmt.setInt(1, smeId);
            ResultSet rs = stmt.executeQuery();
            LocalDateTime l1;

            while (rs.next()) {

                Assessment assessment = new Assessment();
                assessment.setId(rs.getInt("id"));
                assessment.setTestName(rs.getString("name"));
                assessment.setDuration(rs.getTimestamp("duration"));
                assessment.setSubjectId(rs.getInt("subjectid"));
                assessment.setSubjectExpertId(rs.getInt("smeid"));
                assessment.setModificationDate(rs.getTimestamp("modificationdate").toLocalDateTime());
                assessment.setCreationDate(rs.getTimestamp("creationdate").toLocalDateTime());
                assessment.setScheduleDate(rs.getTimestamp("scheduleddate").toLocalDateTime());
                assessment.setPassingLevel(rs.getInt("passinglevel"));
                assessment.setStatus(rs.getString("status"));
                // set other fields as needed
                assessments.add(assessment);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return assessments;
        });
    }

    
    @Override
    public CompletableFuture<Boolean> createTest(CreateTestRequest request) {
        return CompletableFuture.supplyAsync(()->{
        String insertTestSQL = "INSERT INTO tests "
        + "(name, subjectid, duration, smeid, creationdate,modificationdate, scheduleddate, passinglevel, status) "
        + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement preparedStatement =
            connection.prepareStatement(insertTestSQL)) {
            LocalDateTime now = LocalDateTime.now();

            preparedStatement.setString(1, request.getName());
            preparedStatement.setInt(2, request.getSubjectId());
            preparedStatement.setString(3, request.getDuration());
            preparedStatement.setInt(4, request.getSubjectExpertId());

            preparedStatement.setTimestamp(5, Timestamp.valueOf(now));
            preparedStatement.setTimestamp(6, Timestamp.valueOf(now));
            preparedStatement.setTimestamp(7,
            Timestamp.valueOf(request.getScheduledDate()));

            preparedStatement.setInt(8, request.getPassingLevel());
            preparedStatement.setString(9, "created"); // default status

            int rowsAffected = preparedStatement.executeUpdate();
            return (rowsAffected > 0);

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    });
    }
    
    // addQuestion
    @Override
    public CompletableFuture<Boolean> addQuestion(int assessmentId, int questionId) {
        return CompletableFuture.supplyAsync(()->{
        String query = "INSERT INTO testquestions (testid, questionBankid) VALUES (?,?)";
        try {

            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1, assessmentId);
            statement.setInt(2, questionId);
            statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        return true;
        });
    }

    //addQuestions
    // @Override
    // public CompletableFuture<Boolean> addQuestions(int assessmentId, List<QuestionBank> questions) {
    // return CompletableFuture.supplyAsync(()->{
    //     String query = "INSERT INTO testquestions (testid, questionBankid) VALUES (?,?)";
    // try {
    //     int rowCount = 0;
    //     PreparedStatement statement = connection.prepareStatement(query);
    //     for (QuestionBank elem : questions) {
    //     statement.setInt(1, assessmentId);
    //     statement.setInt(2, elem.getQuestionBankId());
    //     rowCount = statement.executeUpdate();
    // }
    // if (rowCount > 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // } catch (Exception e) {
    //     e.printStackTrace();
    //     return false;
    // }
    // });
    // }

    @Override
    public CompletableFuture<Boolean> removeQuestion(int assessmentId, int questionId) {
        return CompletableFuture.supplyAsync(()->{
    String sql = "DELETE FROM testquestions WHERE testid = ? AND questionbankid =?;";

    try (PreparedStatement stmt = connection.prepareStatement(sql)) {
    stmt.setInt(1, assessmentId);
    stmt.setInt(2, questionId);
    int rowsAffected = stmt.executeUpdate();
    return rowsAffected > 0;
    } catch (SQLException e) {
    e.printStackTrace();
    return false;
    }
    });
    }

    //changeDuration
    public CompletableFuture<Boolean> changeDuration(int assessmentId, String duration){
    return CompletableFuture.supplyAsync(()->{
        boolean status = false;
        String query = "UPDATE tests SET duration = ? WHERE id = ?";

    try {

        PreparedStatement statement = connection.prepareStatement(query);

        statement.setString(1, duration);
        statement.setInt(2, assessmentId);

        int rowsAffected = statement.executeUpdate();

        if (rowsAffected > 0) {
          status = true;
        } else {
            status = false;
        }
    } catch (Exception e) {
        System.out.println(e.getMessage());
    }
    return status;
    });
    }

    @Override
    public CompletableFuture<Boolean> reschedule(int assessmentId, LocalDateTime date) {
    return CompletableFuture.supplyAsync(()->{
    String query = "update assessments set scheduledstart=? where id=?";

    try (PreparedStatement preparedStatement =connection.prepareStatement(query)) {
        preparedStatement.setTimestamp(1, Timestamp.valueOf(date));
        preparedStatement.setInt(2, assessmentId);
        int rowsAffected = preparedStatement.executeUpdate();
        return rowsAffected > 0;
    } catch (Exception e) {
        System.out.println("Error while rescheduling: " + e.getMessage());
        return false;
    }
    });
    }

    @Override
    public CompletableFuture<Boolean> removeQuestions(int[] testQuestions){
        return CompletableFuture.supplyAsync(()->{
        boolean status = false;
        try {
            String query = "DELETE FROM testquestions where id = ?;";
            PreparedStatement pstate1 = connection.prepareStatement(query);
            int rowExecuted = 0;
            for (int i = 0; i < testQuestions.length; i++) {
            pstate1.setInt(1, testQuestions[i]);
            pstate1.executeUpdate();
            rowExecuted++;
            }

            if (rowExecuted > 0) {
                status = true;
        }
            return status;
        } catch (Exception e) {
            System.out.println(e);
        }
        return status;
        });
    }

    @Override
    public CompletableFuture<Integer> createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions){
    return CompletableFuture.supplyAsync(()->{
    int testId = -1;
    String insertTestSQL = "INSERT INTO tests "
    + "(name, smeid, subjectid, creationdate, modificationdate, scheduleddate,passinglevel, duration) "
    + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    try (PreparedStatement preparedStatement =
    connection.prepareStatement(insertTestSQL, Statement.RETURN_GENERATED_KEYS))
    {
    LocalDateTime now = LocalDateTime.now();

    preparedStatement.setString(1, createTestWithQuestions.getName());
    preparedStatement.setInt(2, createTestWithQuestions.getSmeId());
    preparedStatement.setInt(3, createTestWithQuestions.getSubjectId());
    preparedStatement.setTimestamp(4, Timestamp.valueOf(now));
    preparedStatement.setTimestamp(5, Timestamp.valueOf(now));
    preparedStatement.setTimestamp(6,
    Timestamp.valueOf(createTestWithQuestions.getScheduledDate()));
    preparedStatement.setInt(7, createTestWithQuestions.getPassingLevel());
    preparedStatement.setString(8, createTestWithQuestions.getDuration());

    int rowsAffected = preparedStatement.executeUpdate();

    if (rowsAffected > 0) {
    try (ResultSet generatedKeys = preparedStatement.getGeneratedKeys()) {
    if (generatedKeys.next()) {
    testId = generatedKeys.getInt(1);
    }
    }
    }

    // Insert questions into testquestions table
    if (testId > 0 && createTestWithQuestions.getQuestionIds() != null) {
    String insertQuestionSQL = "INSERT INTO testquestions (testid, questionbankid) VALUES (?, ?)";
    try (PreparedStatement stmt = connection.prepareStatement(insertQuestionSQL))
    {
    for (Integer questionId : createTestWithQuestions.getQuestionIds()) {
    stmt.setInt(1, testId);
    stmt.setInt(2, questionId);
    stmt.addBatch();
    }
    stmt.executeBatch();
    }
    }
    } catch (SQLException e) {
    System.out.println("Error creating test with questions: " + e.getMessage());
    }

    return testId;
    });
    }

    @Override
    public CompletableFuture<List<SubjectQuestions>> getAllQuestionsBySubject(int subjectId) {
    return CompletableFuture.supplyAsync(()->{
    List<SubjectQuestions> subjectQuestionsList = new ArrayList<>();

    String query = "SELECT id AS QuestionBankId,title,a,b, c,d "+
            "FROM questionbank "+
            "WHERE subject_concept_id = ?";

    try (PreparedStatement stmt = connection.prepareStatement(query)) {
    stmt.setInt(1, subjectId);

    try (ResultSet rs = stmt.executeQuery()) {
    while (rs.next()) {
    SubjectQuestions subjectQuestion = new SubjectQuestions();

    subjectQuestion.setQuestionBankId(rs.getInt("QuestionBankId")) ;
    subjectQuestion.setTitle(rs.getString("title"));
    subjectQuestion.setA(rs.getString("a"));
    subjectQuestion.setB(rs.getString("b"));
    subjectQuestion.setC(rs.getString("c"));
    subjectQuestion.setD(rs.getString("d"));

    subjectQuestionsList.add(subjectQuestion);
    }
    }
    } catch (SQLException e) {
    System.out.println("Error fetching questions by subject: " + e.getMessage());
    }
    return subjectQuestionsList;
    });
    }

     // getAllTests
    public CompletableFuture<List<Test>> getAllTests(Date fromDate, Date toDate) {
    return CompletableFuture.supplyAsync(()->{
    List<Test> tests = new ArrayList<>();
    String query = "SELECT * FROM tests WHERE scheduleddate BETWEEN ? AND ?";

    try {
    PreparedStatement stmt = connection.prepareStatement(query);
    stmt.setDate(1, new java.sql.Date(fromDate.getTime()));
    stmt.setDate(2, new java.sql.Date(toDate.getTime()));

    try (ResultSet rs = stmt.executeQuery()) {
    while (rs.next()) {
    Test test = new Test(0, query, null, query);
    test.setId(rs.getInt("id"));
    test.setName(rs.getString("name"));
    test.setScheduledDate((rs.getTimestamp("scheduleddate")).toLocalDateTime());
    test.setStatus(rs.getString("status"));
    tests.add(test);
    }
    }
    } catch (SQLException e) {
    e.printStackTrace();
    }
    return tests;
    });
    }

    // getTestDetails
    public CompletableFuture<TestWithQuestions> getTestDetails(int testId) {
    return CompletableFuture.supplyAsync(()->{
    TestWithQuestions test = null;
    Question question=new Question();
        String title;
    String testQuery = "SELECT * FROM tests WHERE id = ?";
    String queryQuestions =" SELECT q.id AS QuestionId, q.subject_concept_id AS SubjectId,q.title, q.a,"+
    " q.b, q.c, q.d,q.answerkey"+
    " FROM questionbank q INNER JOIN testquestions tq ON q.id = tq.questionbankid WHERE tq.testid = ?";

    try {
    PreparedStatement stmt = connection.prepareStatement(testQuery);
    stmt.setInt(1, testId);
    ResultSet rs = stmt.executeQuery();

    if (rs.next()) {
        test = new TestWithQuestions();
        test.setId(rs.getInt("id"));
        test.setName(rs.getString("name"));
        test.setScheduledDate(rs.getTimestamp("scheduleddate").toLocalDateTime());
    }
    
    if (test != null) {
    PreparedStatement stmt2 = connection.prepareStatement(queryQuestions);
    stmt2.setInt(1, testId);
    ResultSet rs2 = stmt2.executeQuery();
    List<Question> questions = new ArrayList<>();
    while (rs2.next()) {
    Question q = new Question();
    q.setId(rs2.getInt("QuestionId"));
    q.setsubject_concept_id(rs2.getInt("SubjectId"));
    q.setTitle(rs2.getString("title"));
    q.setA(rs2.getString("a"));
    q.setB(rs2.getString("b"));
    q.setC(rs2.getString("c"));
    q.setD(rs2.getString("d"));
    q.setAnswerKey(rs2.getString("answerkey"));
    questions.add(q);
    title=q.getTitle();
    System.out.println("**************************"+title+"*******************************");
    }
    test.setQuestions(questions);
    System.out.println("**************************"+questions+"*******************************");
    }
    } catch (SQLException ex) {
    ex.printStackTrace();
    }
    return test;
      });
    }

    
    

   

    // // getQuestionsByConceptsId
    // @Override
    // public List<Question> getQuestionsByConceptsId(int ConceptsId) {
    // List<Question> questions = new ArrayList<>();
    // String query = "SELECT q.id, q.subjectid, q.title, q.a, q.b, q.c, q.d,
    // q.answerkey, q.Conceptsid "
    // + "FROM questionbank q WHERE q.Conceptsid = ?";

    // try (PreparedStatement stmt = connection.prepareStatement(query)) {
    // stmt.setInt(1, ConceptsId);

    // try (ResultSet rs = stmt.executeQuery()) {
    // while (rs.next()) {
    // Question question = new Question();
    // question.setId(rs.getInt("id"));
    // question.setSubjectId(rs.getInt("subjectid"));
    // question.setTitle(rs.getString("title"));
    // question.setA(rs.getString("a"));
    // question.setB(rs.getString("b"));
    // question.setC(rs.getString("c"));
    // question.setD(rs.getString("d"));
    // question.setAnswerKey(rs.getString("answerkey"));
    // question.setConceptsId(rs.getInt("Conceptsid"));

    // questions.add(question);
    // }
    // }
    // } catch (SQLException e) {
    // System.out.println("Error fetching questions: " + e.getMessage());
    // }
    // return questions;
    // }

    // //updateQuestion
    // @Override
    // public boolean updateQuestion(Question question) {
    // try {
    // String query = "UPDATE questionbank "
    // + "SET title = ?, a = ?, b = ?, c = ?, d = ?, answerkey = ? "
    // + "WHERE id = ?";

    // PreparedStatement prepareStatement = connection.prepareStatement(query);

    // prepareStatement.setString(1, question.getTitle());
    // prepareStatement.setString(2, question.getA());
    // prepareStatement.setString(3, question.getB());
    // prepareStatement.setString(4, question.getC());
    // prepareStatement.setString(5, question.getD());
    // prepareStatement.setString(6, question.getAnswerKey());
    // prepareStatement.setInt(7, question.getId());

    // int rowsUpdated = prepareStatement.executeUpdate();
    // return rowsUpdated > 0;
    // } catch (Exception e) {
    // System.out.println("Error updating question: " + e.getMessage());
    // }
    // return false;
    // }

    // // updateTestStatus
    // @Override
    // public boolean updateTestStatus(int testId, TestStatusUpdate status) {
    // try {
    // String query = "UPDATE tests SET status = ? WHERE id = ?";
    // PreparedStatement preparedStatement = connection.prepareStatement(query);
    // // ResultSet resultSet = preparedStatement.executeQuery(query);

    // preparedStatement.setString(1, status.getStatus());
    // preparedStatement.setInt(2, testId);

    // int rowsUpdated = preparedStatement.executeUpdate();
    // return rowsUpdated > 0;
    // } catch (Exception e) {
    // System.out.println("error updating test status:" + e.getMessage());
    // e.printStackTrace();

    // }
    // return false;
    // }

    // // addEmployeesToTest
    // @Override
    // public boolean addEmployeesToTest(TestAssignmentRequest request,
    // CandidateTestDetails candidateTestDetails) {

    // String query = "INSERT INTO testschedules "
    // + "(testid, candidateid, scheduledstart, scheduledend, status, rescheduledon,
    // remarks) "
    // + "VALUES (?, ?, ?, ?, ?, ?, ?)";

    // try {
    // PreparedStatement preparedStatement = connection.prepareStatement((query));
    // preparedStatement.setInt(1, request.getTestId());
    // preparedStatement.setInt(2, candidateTestDetails.getCandidateId());
    // preparedStatement.setTimestamp(3,
    // Timestamp.valueOf(request.getScheduledStart()));
    // preparedStatement.setTimestamp(4,
    // Timestamp.valueOf(request.getScheduledEnd()));
    // preparedStatement.setString(5, request.getStatus());
    // preparedStatement.setTimestamp(6,
    // Timestamp.valueOf(request.getRescheduledOn()));
    // preparedStatement.setString(7, request.getRemarks());
    // // preparedStatement.setInt(8, request.getTestId());
    // int rowsUpdated = preparedStatement.executeUpdate();
    // return rowsUpdated > 0;
    // } catch (Exception e) {
    // System.out.println("Error adding employee to test :" + e.getMessage());
    // }

    // return false;
    // }

    // // getAllTestByEmpId
    // @Override
    // public List<TestEmployeeDetails> getAllTestByEmpId(int empId) {
    // List<TestEmployeeDetails> testEmployeeDetailsList = new ArrayList<>();
    // try {
    // String query = "{call GetTestEmployeeDetailsByCandidate(?)}";
    // CallableStatement statement = connection.prepareCall(query);
    // statement.setInt(1, empId);
    // ResultSet set = statement.executeQuery();
    // while (set.next()) {

    // TestEmployeeDetails testEmployeeDetails = null;
    // Timestamp t1 = set.getTimestamp("scheduledstart");
    // LocalDateTime l1 = t1.toLocalDateTime();
    // Timestamp t2 = set.getTimestamp("scheduledend");
    // LocalDateTime l2 = t2.toLocalDateTime();
    // Time sqlTime = set.getTime("duration"); // Replace with actual column name
    // LocalTime localTime = sqlTime.toLocalTime(); // Convert to LocalTime
    // Duration duration = Duration.ofHours(localTime.getHour())
    // .plusMinutes(localTime.getMinute())
    // .plusSeconds(localTime.getSecond());
    // testEmployeeDetails = new TestEmployeeDetails(set.getInt("candidateid"),
    // set.getString("testname"),
    // set.getString("passinglevel"), duration, l1, l2, set.getString("status"));
    // testEmployeeDetailsList.add(testEmployeeDetails);
    // }
    // return testEmployeeDetailsList;

    // } catch (Exception e) {
    // System.out.println(e);
    // }
    // return testEmployeeDetailsList;
    // }

    // @Override
    // public CompletableFuture<List<Concepts>> getConcepts() {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'getConcepts'");
    // }

    // @Override
    // public CompletableFuture<List<Concepts>> getConceptsBySubject(int subjectId)
    // {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'getConceptsBySubject'");
    // }

    // @Override
    // public CompletableFuture<Integer>
    // createTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions)
    // {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'createTestWithQuestionsAsync'");
    // }

    // @Override
    // public CompletableFuture<List<Question>> getQuestionsByConceptId(int
    // ConceptId) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'getQuestionsByConceptId'");
    // }

    // @Override
    // public CompletableFuture<Integer> GetTestCountByStatus(String status) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetTestCountByStatus'");
    // }

    // @Override
    // public CompletableFuture<List<TestDetails>> GetAllTestByStatus(String status)
    // {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetAllTestByStatus'");
    // }

    // @Override
    // public CompletableFuture<List<Subject>> GetSubjectBySME(int smeid) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetSubjectBySME'");
    // }

    // @Override
    // public CompletableFuture<List<TestDetails>> GetSmeTestList(int smeId) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetSmeTestList'");
    // }

    // @Override
    // public CompletableFuture<List<CandidateAssessmentHistory>>
    // GetAssesmentHistory(int candidateid) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetAssesmentHistory'");
    // }

    // @Override
    // public CompletableFuture<List<ConceptWithCorrectAns>>
    // GetConceptwiseCorrectAnswer(int candidateid) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetConceptwiseCorrectAnswer'");
    // }

    // @Override
    // public CompletableFuture<List<TestEmployeeDetails>>
    // GetAssessmentEmployeeDetails(int assessmentId, int candidateId) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetAssessmentEmployeeDetails'");
    // }

    // @Override
    // public CompletableFuture<TimeConfig> GetBufferTimeAsync() {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'GetBufferTimeAsync'");
    // }

    // @Override
    // public CompletableFuture<Boolean> UpdateBufferTimeAsync(int bufferTime) {
    // // TODO Auto-generated method stub
    // throw new UnsupportedOperationException("Unimplemented method
    // 'UpdateBufferTimeAsync'");
    // }
}
