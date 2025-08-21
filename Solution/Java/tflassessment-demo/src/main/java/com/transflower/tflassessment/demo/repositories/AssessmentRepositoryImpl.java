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
            while (rs.next()) {
                Assessment assessment = new Assessment();
                
                // Fixed column names
                assessment.setId(rs.getInt("id"));
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

                // Removed subject, firstname, lastname – not available in this table
                
                assessments.add(assessment);
            }
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
    }
    return employees;
}



    @Override
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

    @Override
    public boolean removeQuestions(int[] testQuestions) {
       return false;
    }

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
    }}









   
    






