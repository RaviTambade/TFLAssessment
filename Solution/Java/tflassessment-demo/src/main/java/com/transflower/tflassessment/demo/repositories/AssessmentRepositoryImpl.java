package com.transflower.tflassessment.demo.repositories;

import java.sql.*;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import java.util.Date;



import com.transflower.tflassessment.demo.entities.*;

import com.transflower.tflassessment.demo.repositories.AssessmentRepository;

public class AssessmentRepositoryImpl implements AssessmentRepository {

<<<<<<< HEAD
    private String URL = "jdbc:mysql://localhost:3306/assessmentdb";
    private String USERNAME = "root";
    private String PASSWORD = "password";
=======
    private static Connection connection;
>>>>>>> 58e6945592fdd9670c5d252cfc7e0ab024977eb9

    @Override
    public List<Assessment> getAllBySubjectMatterExpert(int subId) {

<<<<<<< HEAD
        List<Assessment> assessments = new ArrayList<>();
        try (Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD)) {
            String query = "SELECT * FROM tests WHERE subjectid = ?;";
            PreparedStatement stmt = con.prepareStatement(query);
            stmt.setInt(1, subId);

            ResultSet rs = stmt.executeQuery();

=======

@Override
public Assessment getDetails(int assessmentId) {

    Assessment assessment = null; // Change from List to a single object

    String query = "SELECT t.id, t.name AS TestName, t.smeid AS subjectExpertId, " +
            "t.subjectid AS subjectId, t.creationdate AS creationDate, " +
            "t.modificationdate AS modificationDate, t.scheduleddate AS scheduledDate, " +
            "t.status, t.passinglevel, e.firstname, e.lastname, t.duration " +
            "FROM tests t " +
            "LEFT JOIN employees e ON t.smeid = e.id " +
            "WHERE t.id = " + assessmentId;

    try (Statement stmt = connection.createStatement();
         ResultSet rs = stmt.executeQuery(query)) {

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
        }

    } catch (SQLException e) {
        System.out.println("Error fetching assessment: " + e.getMessage());
    }

    return assessment; // Return a single object
}


   

    
   
    

    private LocalDateTime LocalDateTime(Timestamp timestamp) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'LocalDateTime'");
    }




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
            System.out.println("Error fetching assessments: " + e.getMessage());
        }

        return assessments;
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
    public List<List<Assessment>> GetAll(LocalDateTime fromDate, LocalDateTime toDate) {

        return null;
    }

    public List<List<Assessment>> GetAllTests() {
        return null;
    }

    public List<List<Assessment>> GetAllBySubjectMatterExpert(int smeId) {
        return null;
    }

    public List<Employee> GetAllEmployees() {
        return null;
    }

    public List<Employee> GetEmployeeById(int userId) {
        return null;
    }

    public List<List<Subject>> GetAllSubjects() {
        return null;
    }

    public List<List<EvaluationCriteria>> GetEvalutionCriterias() {
        return null;
    }

    public List<List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId) {
        return null;
    }

    public List<Boolean> CreateTest(CreateTestRequest request) {
        return null;
    }

    public List<Boolean> AddQuestion(int assessmentId, int questionId) {
        return null;
    }

    public List<Boolean> AddQuestions(int assessmentId, List<TestQuestion> questions) {
        return null;
    }

    public List<Boolean> ChangeDuration(int assessmentId, String duration) {
        return null;
    }

    public List<Boolean> Reschedule(int assessmentId, LocalDateTime date) {
        return null;
    }

    public List<Boolean> RemoveQuestion(int assessmentId, int questionId) {
        return null;
    }

    public List<Boolean> RemoveQuestions(int[] testQuestions) {
        return null;
    }

    public List<Integer> CreateTestWithQuestionsAsync(CreateTestWithQuestions createTestWithQuestions) {
        return null;
    }

    public List<List<SubjectQuestions>> GetAllQuestionsBySubject(int subjectId) {
        return null;
    }

    public List<List<Employee>> GetSmeBySubject(int subjectId) {
        return null;
    }

    public List<List<Test>> GetAllTests(LocalDateTime fromDate, LocalDateTime toDate) {
        return null;
    }

    public List<TestWithQuestions> GetTestDetails(int testId) {
        return null;
    }

    public List<List<Question>> GetQuestionsByEvaluationCriteriaId(int evaluationCriteriaId) {
        return null;
    }

    public List<Boolean> UpdateQuestion(Question question) {
        return null;
    }

   
=======
<<<<<<< HEAD
    @Override
=======
>>>>>>> 9930bf4ad93028d2286d06a9bdd224830e57d8a4
    return assessments;
}





       

        @Override
    public List<Assessment> getAllTests() {
    List<Assessment> tests = new ArrayList<>();

    String query = 
    "SELECT tests.*, subjects.title AS skill, employees.firstname, employees.lastname " +
    "FROM tests " +
    "INNER JOIN subjectmatterexperts ON subjectmatterexperts.id = tests.smeid " +
    "INNER JOIN subjects ON subjects.id = subjectmatterexperts.subjectid " +
    "INNER JOIN employees ON employees.id = subjectmatterexperts.employeeid";

    try (
         PreparedStatement stmt = connection.prepareStatement(query);
         ResultSet rs = stmt.executeQuery()) {

        while (rs.next()) {
            Assessment test = new Assessment();

            test.setId(rs.getInt("id"));
            test.setTestName(rs.getString("name"));
            test.setSubjectId(rs.getInt("subjectid"));
            test.setSubjectExpertId(rs.getInt("smeid"));

            // Convert SQL timestamps → Java LocalDateTime
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



@Override
public List<Assessment> getAllBySubjectMatterExpert(int smeId) {
    List<Assessment> assessments = new ArrayList<>();

    String query = "SELECT * FROM tests WHERE smeid = ?";

    try (PreparedStatement stmt = connection.prepareStatement(query)) {

        stmt.setInt(1, smeId);

        try (ResultSet rs = stmt.executeQuery()) {
>>>>>>> 58e6945592fdd9670c5d252cfc7e0ab024977eb9
            while (rs.next()) {
                Assessment assessment = new Assessment();
                
                // Fixed column names
                assessment.setId(rs.getInt("id"));
<<<<<<< HEAD
                assessment.setTestName(rs.getString("name"));
                assessment.setSubject(rs.getInt("subid"));
                // set other fields as needed
=======
                assessment.setTestName(rs.getString("name")); // FIXED
                assessment.setSubjectId(rs.getInt("subjectid"));
                assessment.setDuration(rs.getTimestamp("duration"));
                assessment.setSubjectExpertId(rs.getInt("smeid"));

                Timestamp creation = rs.getTimestamp("creationdate");
                if (creation != null) {
                    assessment.setCreationDate(creation.toLocalDateTime());
                }

                Timestamp modification = rs.getTimestamp("modificationdate");
                if (modification != null) {
                    assessment.setModificationDate(modification.toLocalDateTime());
                }

                Timestamp schedule = rs.getTimestamp("scheduleddate");
                if (schedule != null) {
                    assessment.setScheduleDate(schedule.toLocalDateTime());
                }

                assessment.setStatus(rs.getString("status"));
                assessment.setPassingLevel(rs.getInt("passinglevel"));
>>>>>>> 58e6945592fdd9670c5d252cfc7e0ab024977eb9

                // Removed subject, firstname, lastname – not available in this table
                
                assessments.add(assessment);
            }
<<<<<<< HEAD
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
=======
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }

    return assessments;
}






    @Override
    public List<Employee> getAllEmployees() {
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
>>>>>>> 58e6945592fdd9670c5d252cfc7e0ab024977eb9
    }
    return employees;
}



    @Override
<<<<<<< HEAD
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
=======
       public List<Subject> getAllSubjects() {
    List<Subject> subjects = new ArrayList<>();
    String query = "SELECT * FROM subjects";

    try (Statement stmt = connection.createStatement();
         ResultSet rs = stmt.executeQuery(query)) {

        while (rs.next()) {
            Subject subject = new Subject(); 
            subject.setId(rs.getInt("id"));
            subject.setTitle(rs.getString("title"));

            subjects.add(subject);
        }

    } catch (SQLException e) {
        System.out.println("Error fetching subjects: " + e.getMessage());
    }

    return subjects;
}






    @Override
    public List<EvaluationCriteria> getEvaluationCriterias() {
    List<EvaluationCriteria> evaluationCriterias = new ArrayList<>();
    String query = "SELECT * FROM evaluationcriterias";

    try (Statement stmt = connection.createStatement();
         ResultSet rs = stmt.executeQuery(query)) {

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



    @Override
    public List<EvaluationCriteria> getEvaluationCriteriasBySubject(int subjectId) {
    List<EvaluationCriteria> criterias = new ArrayList<>();

    String query = "SELECT * FROM evaluationcriterias WHERE subjectid = " + subjectId;

    try (Statement stmt = connection.createStatement();
         ResultSet rs = stmt.executeQuery(query)) {

        while (rs.next()) {
            EvaluationCriteria criteria = new EvaluationCriteria();
            criteria.setId(rs.getInt("id"));
            criteria.setTitle(rs.getString("title"));
            criteria.setSubjectId(rs.getInt("subjectid"));

            criterias.add(criteria);
        }

    } catch (SQLException e) {
        System.out.println("Error fetching evaluation criterias: " + e.getMessage());
    }

    return criterias;
}



    @Override
    public boolean createTest(Assessment newTest) {
       return false;
    }
    @Override
    public boolean addQuestion(int assessmentId, int questionId) {
      return false;
    }

  ///  @Override
  //  public boolean addQuestions(int assessmentId, List<TestQuestion> questions) {
  //     return false;
  //  }

        }
        return false;
    }

    @Override
    public boolean addEmployeesToTest(TestAssignmentRequest request) {

        String query = "INSERT INTO testschedules " +
               "(testid, candidateid, scheduledstart, scheduledend, status, rescheduledon, remarks) " +
               "VALUES (?, ?, ?, ?, ?, ?, ?)";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement((query));
            preparedStatement.setInt(1, request.getTestId());
           // preparedStatement.setInt(2, request.getCandidateId());
            preparedStatement.setTimestamp(3, Timestamp.valueOf(request.getScheduledStart()));
            preparedStatement.setTimestamp(4, Timestamp.valueOf(request.getScheduledEnd()));
            preparedStatement.setString(4, request.getStatus());
            preparedStatement.setTimestamp(5, Timestamp.valueOf(request.getRescheduledOn()));
            preparedStatement.setString(6, request.getRemarks());
            preparedStatement.setInt(8, request.getTestId());

            int rowsUpdated = preparedStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("Error adding employee to test :" + e.getMessage());
        }
        return false;
    }
>>>>>>> 58e6945592fdd9670c5d252cfc7e0ab024977eb9

        // if (testDetails != null) {
        //     System.out.println("Test ID: " + testDetails.getId());
        //     System.out.println("Name: " + testDetails.getName());
        //     System.out.println("Scheduled Date: " + testDetails.getScheduledDate());

<<<<<<< HEAD
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
=======
    public int createTestWithQuestions(CreateTestWithQuestions createTestWithQuestions) {
        return 0;
    }

    public List<SubjectQuestions> getAllQuestionsBySubject(int subjectId) {
        return null;
    }

    public List<Employee> getSmeBySubject(int subjectId) {
        return null;
    }

    public List<Test> getAllTests(Date fromDate, Date toDate) {
        return null;
    }

    public TestWithQuestions getTestDetails(int testId) {
        return null;
    }

    public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId) {
        return null;
    }

    public boolean updateQuestion(Question question) {
        return false;
    }

    public boolean updateTestStatus(int testId, TestStatusUpdate status) {
        return false;
    }

    public boolean addEmployeesToTest(TestAssignmentRequest request) {
        return false;
    }

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
                employee.setContact(rs.getString("contact")); // Make sure this matches your DB column
            }
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }

    return employee;
}
@Override
     public List<Question> getQuestionsByEvaluationCriteriaId(int evaluationCriteriaId)
     {
     List<Question> questions=new ArrayList<>();
     try{ 
         Statement   stmt = connection.createStatement();
       

     String query="SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.evaluationcriteriaid " +
            "FROM questionbank q " +
            "WHERE q.evaluationcriteriaid = EvaluationCriteriaId";

              ResultSet resultSet = stmt.executeQuery(query);

            while (resultSet.next()) {
                Question question=new Question();
                question.setEvaluationCriteriaId(resultSet.getInt("evaluationCriteriaId")); 
                question.setSubjectId(resultSet.getInt("SubjectId")); 
                question.setTitle(resultSet.getString("Title"));

                 TestQuestion testQuestion=new TestQuestion();
                 testQuestion.setId(resultSet.getInt("QuestionId"));
                 testQuestion.setA(resultSet.getString("a"));
                testQuestion.setB(resultSet.getString("b"));
                testQuestion.setC(resultSet.getString("c"));
                testQuestion.setD(resultSet.getString("d"));
                testQuestion.setAnswerKey(resultSet.getString("AnswerKey"));
                 testQuestion.setCriteria(resultSet.getString("Criterai"));

                 
          

                questions.add(question);
               // questions.add(testQuestion);
                
            }
        } catch(Exception e)
        {
            System.out.println("Error fetching questions:"+e.getMessage());
        }
        return questions;
     }

    @Override
    public boolean updateQuestion(Question question) {
        
        try {
            
            String query =  "UPDATE questionbank " +
               "SET title = ?, a = ?, b = ?, c = ?, d = ?, answerkey = ? " +
               "WHERE id = ?";

             PreparedStatement prepareStatement = connection.prepareStatement(query);
             ResultSet resultSet = prepareStatement.executeQuery(query);

            prepareStatement.setString(1, question.getTitle());
            prepareStatement.setString(2, question.getA());
            prepareStatement.setString(3, question.getB());
            prepareStatement.setString(4, question.getC());
            prepareStatement.setString(5, question.getD());
            prepareStatement.setString(6,question.getAnswerKey());
            prepareStatement.setInt(7, question.getId());

            int rowsUpdated = prepareStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("Error updating question:" + e.getMessage());

        }
        return false;
    }

    public boolean updateTestStatus(int testId, TestStatusUpdate status) {
         try {
            String query = "UPDATE tests SET status = ? WHERE id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet=preparedStatement.executeQuery(query);


            preparedStatement.setString(1, status.getStatus());
            preparedStatement.setInt(2, testId);

         int rowsUpdated = preparedStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("error updating test status:" + e.getMessage());

        }
        return false;
    }

    @Override
    public boolean addEmployeesToTest(TestAssignmentRequest request) {

        String query = "INSERT INTO testschedules " +
               "(testid, candidateid, scheduledstart, scheduledend, status, rescheduledon, remarks) " +
               "VALUES (?, ?, ?, ?, ?, ?, ?)";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement((query));
            preparedStatement.setInt(1, request.getTestId());
           // preparedStatement.setInt(2, request.getCandidateId());
            preparedStatement.setTimestamp(3, Timestamp.valueOf(request.getScheduledStart()));
            preparedStatement.setTimestamp(4, Timestamp.valueOf(request.getScheduledEnd()));
            preparedStatement.setString(4, request.getStatus());
            preparedStatement.setTimestamp(5, Timestamp.valueOf(request.getRescheduledOn()));
            preparedStatement.setString(6, request.getRemarks());
            preparedStatement.setInt(8, request.getTestId());

            int rowsUpdated = preparedStatement.executeUpdate();
            return rowsUpdated > 0;
        } catch (Exception e) {
            System.out.println("Error adding employee to test :" + e.getMessage());
        }
        return false;
    }

    @Override
    
    public List<TestEmployeeDetails> getAllTestByEmpId(int empId) {
        List<TestEmployeeDetails> testEmployeeDetailsList = new ArrayList<>();
        try{
        String query="{call GetTestEmployeeDetailsByCandidate(?)}";
        CallableStatement statement=connection.prepareCall(query);
           statement.setInt(1, empId);
         ResultSet set= statement.executeQuery();
         TestEmployeeDetails testEmployeeDetails=null;
         Timestamp t1 =set.getTimestamp("scheduledstart");
         LocalDateTime l1 =t1.toLocalDateTime();
         Timestamp t2 =set.getTimestamp("scheduledend");
         LocalDateTime l2 =t2.toLocalDateTime();
         Time sqlTime = set.getTime("duration"); // Replace with actual column name
        LocalTime localTime = sqlTime.toLocalTime();   // Convert to LocalTime
        Duration duration = Duration.ofHours(localTime.getHour())
                                .plusMinutes(localTime.getMinute())
                                .plusSeconds(localTime.getSecond());
         while (set.next()) {
            testEmployeeDetails=new TestEmployeeDetails(set.getInt("candidateid"),set.getString("testname"),set.getString("passinglevel"),duration, l1,l2,set.getString("status"));
         }
         return testEmployeeDetailsList;
         
        }catch(Exception e)
        {
            System.out.println(e);
        }
        return testEmployeeDetailsList;
    }
    public static void main(String[] args) {
    // ================= AssessmentRepository =================
    AssessmentRepositoryImpl repo = new AssessmentRepositoryImpl();

    // -------- getQuestionsByEvaluationCriteriaId --------
    int evaluationCriteriaId = 1;
    System.out.println("\nQuestions by Evaluation Criteria:");
    List<Question> questions = repo.getQuestionsByEvaluationCriteriaId(evaluationCriteriaId);
    for (Question q : questions) {
        System.out.println(
            q.getId() + " - " + q.getTitle() +
            " | SubjectId: " + q.getSubjectId() +
            " | AnswerKey: " + q.getAnswerKey()
        );
    }

    // -------- updateQuestion --------
    Question sampleQ = new Question();
    sampleQ.setId(1);
    sampleQ.setTitle("Updated Question Title");
    sampleQ.setA("Option A");
    sampleQ.setB("Option B");
    sampleQ.setC("Option C");
    sampleQ.setD("Option D");
    sampleQ.setAnswerKey("A");

    boolean updated = repo.updateQuestion(sampleQ);
    System.out.println("\nUpdate Question Status: " + (updated ? "Success" : "Failed"));

    // -------- updateTestStatus --------
    int testId = 1;
    TestStatusUpdate statusUpdate = new TestStatusUpdate();
    statusUpdate.setStatus("Completed");

    boolean statusUpdated = repo.updateTestStatus(testId, statusUpdate);
    System.out.println("\nUpdate Test Status: " + (statusUpdated ? "Success" : "Failed"));

    // -------- addEmployeesToTest --------
    TestAssignmentRequest request = new TestAssignmentRequest();
    request.setTestId(1);
   // request.setCandidateId(101);
    request.setScheduledStart(java.time.LocalDateTime.now());
    request.setScheduledEnd(java.time.LocalDateTime.now().plusHours(2));
    request.setStatus("Scheduled");
    request.setRescheduledOn(java.time.LocalDateTime.now());
    request.setRemarks("First attempt");

    boolean added = repo.addEmployeesToTest(request);
    System.out.println("\nAdd Employee To Test: " + (added ? "Success" : "Failed"));

    // -------- getAllTestByEmpId --------
    int empId = 101;
    System.out.println("\nAll Tests by Employee ID:");
    List<TestEmployeeDetails> testDetails = repo.getAllTestByEmpId(empId);
    for (TestEmployeeDetails t : testDetails) {
        System.out.println(
           // "CandidateId: " + t.getCandidateId() +
            " | TestName: " + t.getTestName() +
            " | PassingLevel: " + t.getPassingLevel() +
            " | Duration: " + t.getDuration() +
            " | Start: " + t.getScheduledStart() +
            " | End: " + t.getScheduledEnd() +
            " | Status: " + t.getStatus()
        );
<<<<<<< HEAD
    }}





=======
    }
>>>>>>> 1a448c0b04f8a751d10e4c7eef9e50e671a24543
}
>>>>>>> 9930bf4ad93028d2286d06a9bdd224830e57d8a4




   
    






>>>>>>> 58e6945592fdd9670c5d252cfc7e0ab024977eb9
