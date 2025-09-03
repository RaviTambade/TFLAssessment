//  package com.transflower.tflassessment.demo.repositories;
// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.PreparedStatement;
// import java.sql.SQLException;

// // import com.transflower.tflassessment.demo.entities.EvaluationCriteria;


//  public class EvaluationCriteriaRepositoryImpl implements EvaluationCriteriaRepository {

//   private String Url = "jdbc:mysql://localhost:3306/assessmentdb";
//    private String Username = "root";
//     private String Password = "password";

//     @Override
//     public boolean updateSubject(int id, int subjectId) {
//         String query = "UPDATE evaluationcriterias SET subjectId = ? WHERE id = ?";
//         try (
//             Connection connection = DriverManager.getConnection(Url, Username, Password);
//             PreparedStatement statement = connection.prepareStatement(query)
//         ) {
//             statement.setInt(1, subjectId);
//             statement.setInt(2, id);
//             statement.executeUpdate();
//             return true;
//         } catch (SQLException e) {
//             e.printStackTrace();
//             return false;
//         }
//     }

//     @Override
//     public boolean insertCriteria(EvaluationCriteria criteria) {
//         String query = "INSERT INTO evaluationcriterias (title, subjectId) VALUES (?, ?)";
//         try (
//             Connection connection = DriverManager.getConnection(Url, Username, Password);
//             PreparedStatement statement = connection.prepareStatement(query)
//         ) {
//             statement.setString(1, criteria.getTitle());
//             statement.setInt(2, criteria.getSubjectId());
//             statement.executeUpdate();
//             return true;
//         } catch (SQLException e) {
//             e.printStackTrace();
//             return false;
//         }
//     }

//     @Override
//     public boolean updateCriteria(int id, int evaluationCriteriaId) {
//         String query = "UPDATE questionbank SET evaluationcriteriaid = ? WHERE id = ?";
//         try (
//             Connection connection = DriverManager.getConnection(Url, Username, Password);
//             PreparedStatement statement = connection.prepareStatement(query)
//         ) {
//             statement.setInt(1, evaluationCriteriaId);
//             statement.setInt(2, id);
//             statement.executeUpdate();
//             return true;
//         } catch (SQLException e) {
//             e.printStackTrace();
//             return false;
//         }
//     }

//     public static void main(String[] args) throws InterruptedException {
//         EvaluationCriteriaRepositoryImpl er = new EvaluationCriteriaRepositoryImpl();

//         try {
//              System.out.println("Welcome java");
//              EvaluationCriteria evc1 = new EvaluationCriteria(2, "c#", 5);
//              er.updateSubject(2, 5);

//              EvaluationCriteria evc2 = new EvaluationCriteria(39, "c", 7);
//              er.insertCriteria(evc2);

//             EvaluationCriteria evc3 = new EvaluationCriteria(4, "what is java", 7);
//              er.updateCriteria(4, 7);

//         } catch (Exception e) {
//             e.printStackTrace();
//         } finally {
            
//             try {
//                 com.mysql.cj.jdbc.AbandonedConnectionCleanupThread.checkedShutdown();
//             } catch (NoClassDefFoundError err) {
//                 System.err.println("MySQL AbandonedConnectionCleanupThread class not found: " + err.getMessage());
//             }
//         }
//     }
// }
