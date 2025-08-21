package com.transflower.tflassessment.demo.repositories;

import java.sql.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.Date;



import com.transflower.tflassessment.demo.entities.*;

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

    @Override
    public boolean changeDuration(int assessmentId, String duration) {
       return false;
    }

    @Override
    public boolean reschedule(int assessmentId, Date date) {
        return false;
    }

    @Override
    public boolean removeQuestion(int assessmentId, int questionId) {
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
   public List<Assessment> getAll(Date fromDate, Date toDate) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getAll'");
   }




   @Override
   public boolean createTest(CreateTestRequest request) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'createTest'");
   }




   @Override
   public List<TestEmployeeDetails> getAllTestByEmpId(int empId) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getAllTestByEmpId'");
   }






}
