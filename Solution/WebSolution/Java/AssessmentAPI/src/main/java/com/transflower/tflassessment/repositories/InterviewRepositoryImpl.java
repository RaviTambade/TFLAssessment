// package com.transflower.tflassessment.repositories;

// import java.io.InputStream;
// import java.sql.CallableStatement;
// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.ResultSet;
// import java.sql.Statement;
// import java.time.LocalDate;
// import java.time.LocalTime;
// import java.util.ArrayList;
// import java.util.List;
// import java.util.Properties;

// import org.jasypt.util.text.AES256TextEncryptor;
// import org.springframework.stereotype.Repository;

// import com.transflower.tflassessment.entities.InterviewCandidateDetails;
// import com.transflower.tflassessment.entities.InterviewDetails;

// @Repository
// public class InterviewRepositoryImpl implements InterviewRepository {
//     private static Connection connection;

//     static {
//         try {
//             Properties props = new Properties();

//             try (InputStream input = InterviewRepositoryImpl.class.getClassLoader()
//                     .getResourceAsStream("application.properties")) {
//                 props.load(input);
//             }
//             String url = props.getProperty("db.url");
//             String username = props.getProperty("db.username");
//             String encPass = props.getProperty("db.password");

//             AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
//             textEncryptor.setPassword("TransFlower");

//             String pass = textEncryptor.decrypt(encPass.replace("ENC(", "").replace(")", ""));

//             String driver = props.getProperty("db.driver");
//             Class.forName(driver);

//             connection = DriverManager.getConnection(url, username, pass);
//             System.out.println("Connection Established");
//         } catch (Exception e) {
//             System.out.println(e);
//         }
//     }

//     @Override
//     public List<InterviewCandidateDetails> getAllInterviewCandidates() {
//         List<InterviewCandidateDetails> allInterviewCandidates = new ArrayList<>();
//         try (Statement statement = connection.createStatement()) {
//             String selectQuery = "SELECT interviews.candidateid,employees.firstname,employees.lastname,subjects.title "
//                     + "FROM interviews "
//                     + "INNER JOIN employees ON  interviews.candidateid= employees.id "
//                     + "INNER JOIN subjectmatterexperts ON interviews.smeid = subjectmatterexperts.id "
//                     + "INNER JOIN subjects ON subjectmatterexperts.subjectid=subjects.id";

//             ResultSet rs = statement.executeQuery(selectQuery);

//             while (rs.next()) {
//                 InterviewCandidateDetails candidateDetails = new InterviewCandidateDetails(rs.getInt(1),
//                         rs.getString(2), rs.getString(3), null);
//                 allInterviewCandidates.add(candidateDetails);
//             }
//         } catch (Exception e) {
//             System.out.println(e);
//         }
//         return allInterviewCandidates;
//     }

//     @Override
//     public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId) {
//         List<InterviewCandidateDetails> interviewCandidateSubjectDetails = new ArrayList<>();
//         try (Statement statement = connection.createStatement()) {
//             String selectQuery = "SELECT interviews.candidateid,employees.firstname,employees.lastname,subjects.Title "
//                     + "FROM employees INNER JOIN interviews ON employees.id = interviews.candidateid "
//                     + "INNER JOIN subjectmatterexperts ON subjectmatterexperts.id = interviews.smeid "
//                     + "INNER JOIN subjects ON subjectmatterexperts.subjectid = subjects.id "
//                     + "WHERE candidateid =" + candidateId + ";";

//             ResultSet rs = statement.executeQuery(selectQuery);
//             while (rs.next()) {
//                 InterviewCandidateDetails CandidateSubjectDetails = new InterviewCandidateDetails(rs.getInt(1),
//                         rs.getString(2), rs.getString(3), rs.getString(4));
//                 interviewCandidateSubjectDetails.add(CandidateSubjectDetails);
//             }
//         } catch (Exception e) {
//             System.out.println(e);
//         }
//         return interviewCandidateSubjectDetails;
//     }

//     @Override
//     public InterviewDetails getInterviewDetails(int interviewId) {
//         InterviewDetails interviewDetails = null;
//         try (Statement statement = connection.createStatement()) {
//             String call = "{CALL spinterviewdetails(?)}";
//             CallableStatement callablestatement = connection.prepareCall(call);
//             callablestatement.setInt(1, interviewId);

//             ResultSet rs1 = callablestatement.executeQuery();
//             if (rs1.next()) {
//                 interviewDetails = new InterviewDetails(
//                         rs1.getInt(1),
//                         rs1.getString(2),
//                         rs1.getString(3),
//                         rs1.getString(5),
//                         rs1.getString(6),
//                         rs1.getString(7),
//                         null);
//             }

//             if (callablestatement.getMoreResults()) {
//                 ResultSet rs2 = callablestatement.getResultSet();
//                 List<String> criterias = new ArrayList<>();
//                 while (rs2.next()) {
//                     criterias.add(rs2.getString("title"));
//                 }
//                 if (interviewDetails != null) {
//                     interviewDetails.setCriterias(criterias.toArray(new String[0]));
//                 }
//             }

//             return interviewDetails;

//         } catch (Exception e) {
//             System.out.println(e);
//         }
//         return interviewDetails;
//     }

//     @Override
//     public boolean rescheduleInterview(int interviewId, LocalDate date) {
//         try (Statement statement = connection.createStatement()) {
//             String updateQuery = "UPDATE interviews "
//                     + "SET interviewdate = '" + date + "' "
//                     + "WHERE id =" + interviewId + ";";
//             statement.executeUpdate(updateQuery);
//             return true;
//         } catch (Exception e) {
//             System.out.println(e);
//         }
//         return true;
//     }

//     @Override
//     public boolean rescheduleInterview(int interviewId, LocalTime time) {
//         try (Statement statement = connection.createStatement()) {
//             String updateQuery = "UPDATE interviews "
//                     + "SET interviewtime = '" + time + " AM ' "
//                     + "WHERE id =" + interviewId;
//             statement.executeUpdate(updateQuery);
//             return true;
//         } catch (Exception e) {
//             System.out.println(e);
//         }
//         return true;

//     }

//     @Override

//     public boolean rescheduleInterview(int interviewId, LocalTime time, LocalDate date) {
//         try (Statement statement = connection.createStatement()) {
//             String updateQuery = "UPDATE interviews "
//                     + "SET interviewdate = '" + date + "', interviewtime = '" + time + "' "
//                     + "WHERE id = " + interviewId + ";";

//             System.out.println("Executing: " + updateQuery);
//             statement.executeUpdate(updateQuery);
//             return true;
//         } catch (Exception e) {
//             e.printStackTrace();
//             return false;
//         }
//     }

//     @Override
//     public boolean changeInterviewer(int interviewId, int smeId) {
//         try (Statement statement = connection.createStatement()) {
//             String updateQuery = "UPDATE interviews "
//                     + "SET smeid = " + smeId + " "
//                     + "WHERE id = " + interviewId + ";";
//             statement.executeUpdate(updateQuery);
//             return true;
//         } catch (Exception e) {
//             System.out.println(e);
//             return false;
//         }

//     }

//     @Override
//     public boolean cancelInterview(int interviewId) {
//         try (Statement statement = connection.createStatement()) {
//             String updateQuery = "DELETE FROM interviews WHERE id =" + interviewId + ";";
//             statement.executeUpdate(updateQuery);
//             return true;
//         } catch (Exception e) {
//             System.out.println(e);
//             return false;

//         }
//     }

// }
