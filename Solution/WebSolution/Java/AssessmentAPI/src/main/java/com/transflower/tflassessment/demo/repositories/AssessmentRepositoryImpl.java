package com.transflower.tflassessment.demo.repositories;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.transflower.tflassessment.demo.entities.Assessment;
import com.transflower.tflassessment.demo.entities.CandidateTestDetails;
import com.transflower.tflassessment.demo.entities.CreateTestRequest;
import com.transflower.tflassessment.demo.entities.Employee;
import com.transflower.tflassessment.demo.entities.EvaluationCriteria;
import com.transflower.tflassessment.demo.entities.Question;
import com.transflower.tflassessment.demo.entities.QuestionBank;
import com.transflower.tflassessment.demo.entities.Subject;
import com.transflower.tflassessment.demo.entities.Test;
import com.transflower.tflassessment.demo.entities.TestAssignmentRequest;
import com.transflower.tflassessment.demo.entities.TestEmployeeDetails;
import com.transflower.tflassessment.demo.entities.TestQuestion;
import com.transflower.tflassessment.demo.entities.TestStatusUpdate;
import com.transflower.tflassessment.demo.entities.TestWithQuestions;
import com.transflower.tflassessment.demo.entities.CreateTestWithQuestions;
import com.transflower.tflassessment.demo.entities.CreateTestRequest;

public class AssessmentRepositoryImpl implements AssessmentRepository {

    private static Connection connection;

    static {
        try {
            String url = "jdbc:mysql://localhost:3306/assessmentdb";
            String user = "root";
            String password = "password";
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println("Connection Failed: " + e.getMessage());
        }
    }

    @Override
    public Assessment getDetails(int assessmentId) {
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
    }

    @Override
    public List<Assessment> getAll(LocalDateTime fromDate, LocalDateTime toDate) {
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
    }

// getSmeBySubject
    public List<Employee> getSmeBySubject(int subjectId) {
        List<Employee> smeList = new ArrayList<>();

        String query = "SELECT sme.id, e.userId, e.firstName, e.lastName, e.email, e.contact "
                + "FROM employees e "
                + "INNER JOIN subjectmatterexperts sme ON e.id = sme.employeeid "
                + "WHERE sme.subjectid = ?";

        try {
            PreparedStatement stmt = connection.prepareStatement(query);

            stmt.setInt(1, subjectId);

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Employee emp = new Employee();
                    emp.setId(rs.getInt("id"));
                    emp.setUserId(rs.getInt("userId"));
                    emp.setFirstName(rs.getString("firstName"));
                    emp.setLastName(rs.getString("lastName"));
                    emp.setEmail(rs.getString("email"));
                    emp.setContact(rs.getString("contact"));

                    smeList.add(emp);
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }

        return smeList;
    }

    //getAllTests
    @Override
    public List<Assessment> getAllTests() {
        List<Assessment> tests = new ArrayList<>();

        String query
                = "SELECT tests.*, subjects.title AS skill, employees.firstname, employees.lastname "
                + "FROM tests "
                + "INNER JOIN subjectmatterexperts ON subjectmatterexperts.id = tests.smeid "
                + "INNER JOIN subjects ON subjects.id = subjectmatterexperts.subjectid "
                + "INNER JOIN employees ON employees.id = subjectmatterexperts.employeeid";

        try (
                PreparedStatement stmt = connection.prepareStatement(query); ResultSet rs = stmt.executeQuery()) {

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
    }

// getTestDetails
    public TestWithQuestions getTestDetails(int testId) {
        TestWithQuestions test = null;

        String testQuery = "SELECT * FROM tests WHERE id = ?";
        String queryQuestions = "SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, "
                + "q.answerkey, q.evaluationcriteriaid "
                + "FROM questionbank q "
                + "INNER JOIN testquestions tq ON q.id = tq.questionbankid "
                + "WHERE tq.testid = ?";

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
                    q.setSubjectId(rs2.getInt("SubjectId"));
                    q.setTitle(rs2.getString("title"));
                    q.setA(rs2.getString("a"));
                    q.setB(rs2.getString("b"));
                    q.setC(rs2.getString("c"));
                    q.setD(rs2.getString("d"));
                    q.setAnswerKey(rs2.getString("answerkey"));
                    q.setEvaluationCriteriaId(rs2.getInt("evaluationcriteriaid"));
                    questions.add(q);
                }
                // test.setQuesitions(questions);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return test;

    }

//getAllBySubjectMatterExpert
    @Override

    public List<Assessment> getAllBySubjectMatterExpert(int subId) {

        List<Assessment> assessments = new ArrayList<>();

        try {

            String query = "SELECT * FROM tests WHERE subjectid = ?;";

            PreparedStatement stmt = connection.prepareStatement(query);

            stmt.setInt(1, subId);

            ResultSet rs = stmt.executeQuery();

            LocalDateTime l1;

            while (rs.next()) {

                Assessment assessment = new Assessment();

                assessment.setId(rs.getInt("id"));

                assessment.setTestName(rs.getString("name"));

                assessment.setDuration(rs.getTimestamp("duration"));

                assessment.setSubjectId(rs.getInt("subjectid"));

                assessment.setFirstName(rs.getString("firstname"));

                assessment.setLastName(rs.getString("lastname"));

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

    }

    // getAllEmployees
    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employees = new ArrayList<>();
        String query = "SELECT * FROM employees";

        try (
                Statement stmt = connection.createStatement(); ResultSet rs = stmt.executeQuery(query)) {

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
    }

// getEmployeeById 
    @Override
    public Employee getEmployeeById(int userId) {
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
    }

//getAllSubjects
    @Override
    public List<Subject> getAllSubjects() {
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
    }

//getEvaluationCriterias
    @Override
    public List<EvaluationCriteria> getEvaluationCriterias() {
        List<EvaluationCriteria> evaluationCriterias = new ArrayList<>();
        String query = "SELECT * FROM evaluationcriterias";

        try (Statement stmt = connection.createStatement(); ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                EvaluationCriteria evaluationCriteria = new EvaluationCriteria();
                evaluationCriteria.setId(rs.getInt("id"));
                evaluationCriteria.setTitle(rs.getString("title"));
                evaluationCriteria.setSubjectId(rs.getInt("subjectid"));

                evaluationCriterias.add(evaluationCriteria);
            }

        } catch (SQLException e) {
            System.out.println("Error fetching evaluation criterias: " + e.getMessage());
        }

        return evaluationCriterias;
    }

// getEvaluationCriteriasBySubject
    @Override
    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId) {
        List<EvaluationCriteria> criterias = new ArrayList<>();

        String query = "SELECT * FROM evaluationcriterias WHERE subjectid = ?";

        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, subjectId);

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    EvaluationCriteria criteria = new EvaluationCriteria();
                    criteria.setId(rs.getInt("id"));
                    criteria.setTitle(rs.getString("title"));
                    criteria.setSubjectId(rs.getInt("subjectid"));

                    criterias.add(criteria);
                }
            }
        } catch (SQLException e) {
            System.err.println("error" + e.getMessage());
        }

        return criterias;
    }

    // addQuestion
    @Override
    public boolean addQuestion(int assessmentId, int questionId) {
        String query = "INSERT INTO testquestions (testid, questionBankid) VALUES (?, ?)";
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
    }

//addQuestions
    @Override
    public boolean addQuestions(int assessmentId, List<QuestionBank> questions) {

        String query = "INSERT INTO testquestions (testid, questionBankid) VALUES (?, ?)";
        try {
            int rowCount = 0;

            PreparedStatement statement = connection.prepareStatement(query);
            for (QuestionBank elem : questions) {
                statement.setInt(1, assessmentId);
                statement.setInt(2, elem.getQuestionBankId());
                rowCount = statement.executeUpdate();
            }
            if (rowCount > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    //changeDuration
    public boolean changeDuration(int assessmentId, String duration) {
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
    }

    // getAllTests
    public List<Test> getAllTests(Date fromDate, Date toDate) {

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

    }

    // getQuestionsByEvaluationCriteriaId 
    @Override
    public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId) {
        List<Question> questions = new ArrayList<>();
        try {
            Statement stmt = connection.createStatement();

            String query = "SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.evaluationcriteriaid "
                    + "FROM questionbank q "
                    + "WHERE q.evaluationcriteriaid = EvaluationCriteriaId";

            ResultSet resultSet = stmt.executeQuery(query);

            while (resultSet.next()) {
                Question question = new Question();

                question.setEvaluationCriteriaId(resultSet.getInt("evaluationCriteriaId"));
                question.setSubjectId(resultSet.getInt("SubjectId"));
                question.setTitle(resultSet.getString("Title"));

                TestQuestion testQuestion = new TestQuestion();
                testQuestion.setId(resultSet.getInt("QuestionId"));
                testQuestion.setA(resultSet.getString("a"));
                testQuestion.setB(resultSet.getString("b"));
                testQuestion.setC(resultSet.getString("c"));
                testQuestion.setD(resultSet.getString("d"));
                testQuestion.setAnswerKey(resultSet.getString("answerKey"));
                testQuestion.setCriteria(resultSet.getString("Criterai"));

                questions.add(question);
                // questions.add(testQuestion);

            }
        } catch (Exception e) {
            System.out.println("Error fetching questions:" + e.getMessage());
        }
        return questions;
    }

    //updateQuestion
    @Override
    public boolean updateQuestion(Question question) {

        try {

            String query = "UPDATE questionbank "
                    + "SET title = ?, a = ?, b = ?, c = ?, d = ?, answerkey = ? "
                    + "WHERE id = ?";

            PreparedStatement prepareStatement = connection.prepareStatement(query);
            ResultSet resultSet = prepareStatement.executeQuery(query);

            prepareStatement.setString(1, question.getTitle());
            prepareStatement.setString(2, question.getA());
            prepareStatement.setString(3, question.getB());
            prepareStatement.setString(4, question.getC());
            prepareStatement.setString(5, question.getD());
            prepareStatement.setString(6, String.valueOf(question.getAnswerKey()));
            prepareStatement.setInt(7, question.getId());

            int rowsUpdated = prepareStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("Error updating question:" + e.getMessage());

        }
        return false;
    }

    // updateTestStatus
    @Override
    public boolean updateTestStatus(int testId, TestStatusUpdate status) {
        try {
            String query = "UPDATE tests SET status = ? WHERE id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            // ResultSet resultSet = preparedStatement.executeQuery(query);

            preparedStatement.setString(1, status.getStatus());
            preparedStatement.setInt(2, testId);

            int rowsUpdated = preparedStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("error updating test status:" + e.getMessage());
            e.printStackTrace();

        }
        return false;
    }

    // addEmployeesToTest
    @Override
    public boolean addEmployeesToTest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails) {

        String query = "INSERT INTO testschedules "
                + "(testid, candidateid, scheduledstart, scheduledend, status, rescheduledon, remarks) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?)";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement((query));
            preparedStatement.setInt(1, request.getTestId());
            preparedStatement.setInt(2, candidateTestDetails.getCandidateId());
            preparedStatement.setTimestamp(3, Timestamp.valueOf(request.getScheduledStart()));
            preparedStatement.setTimestamp(4, Timestamp.valueOf(request.getScheduledEnd()));
            preparedStatement.setString(5, request.getStatus());
            preparedStatement.setTimestamp(6, Timestamp.valueOf(request.getRescheduledOn()));
            preparedStatement.setString(7, request.getRemarks());
            // preparedStatement.setInt(8, request.getTestId());
            int rowsUpdated = preparedStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("Error adding employee to test :" + e.getMessage());
        }

        return false;
    }

    // getAllTestByEmpId
    @Override
    public List<TestEmployeeDetails> getAllTestByEmpId(int empId) {
        List<TestEmployeeDetails> testEmployeeDetailsList = new ArrayList<>();
        try {
            String query = "{call GetTestEmployeeDetailsByCandidate(?)}";
            CallableStatement statement = connection.prepareCall(query);
            statement.setInt(1, empId);
            ResultSet set = statement.executeQuery();
            while (set.next()) {

                TestEmployeeDetails testEmployeeDetails = null;
                Timestamp t1 = set.getTimestamp("scheduledstart");
                LocalDateTime l1 = t1.toLocalDateTime();
                Timestamp t2 = set.getTimestamp("scheduledend");
                LocalDateTime l2 = t2.toLocalDateTime();
                Time sqlTime = set.getTime("duration"); // Replace with actual column name
                LocalTime localTime = sqlTime.toLocalTime(); // Convert to LocalTime
                Duration duration = Duration.ofHours(localTime.getHour())
                        .plusMinutes(localTime.getMinute())
                        .plusSeconds(localTime.getSecond());
                testEmployeeDetails = new TestEmployeeDetails(set.getInt("candidateid"), set.getString("testname"),
                        set.getString("passinglevel"), duration, l1, l2, set.getString("status"));
            }
            return testEmployeeDetailsList;

        } catch (Exception e) {
            System.out.println(e);
        }
        return testEmployeeDetailsList;
    }

    @Override
    public boolean removeQuestions(int[] testQuestions) {
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
    }


    @Override
    public boolean reschedule(int assessmentId, Date date) {
                     
          
        String query =  "UPDATE tests JOIN subjects ON tests.subjectid = subjects.id SET tests.scheduleddate = ? WHERE tests.id = ?";

         try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setDate(1, new java.sql.Date(date.getTime()));
            preparedStatement.setInt(2, assessmentId);
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (Exception e) {
            System.out.println("Error while rescheduling: " + e.getMessage());
            return false;
        }
    }


 @Override
    public boolean removeQuestion(int assessmentId, int questionId) {
        String sql = "DELETE FROM testquestions WHERE testid = ? AND questionbankid = ?;";

        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, assessmentId);
            stmt.setInt(2, questionId);
            int rowsAffected = stmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
@Override
    public boolean createTest(CreateTestRequest request) {
        String insertTestSQL = "INSERT INTO tests " +
                "(name, smeid, subjectid, creationdate, modificationdate, scheduleddate, passinglevel, duration) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement preparedStatement = connection.prepareStatement(insertTestSQL)) {
            LocalDateTime now = LocalDateTime.now();
              preparedStatement.setString(1, request.getName());
            preparedStatement.setInt(2, request.getSubjectExpertId());
             preparedStatement.setString(3, request.getDuration());
            preparedStatement.setInt(4, request.getSubjectId());
            preparedStatement.setTimestamp(5, Timestamp.valueOf(now)); 
            preparedStatement.setTimestamp(6, Timestamp.valueOf(now)); 
            preparedStatement.setTimestamp(7, Timestamp.valueOf(request.getScheduledDate())); // scheduled date    
            preparedStatement.setInt(8, request.getPassingLevel());
            

            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return true;
        }
    }


}
