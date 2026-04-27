package com.transflower.tflassessment.demo.repositories;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;


public class InterviewRepositoryImpl implements InterviewRepository {

    private String url = "jdbc:mysql://localhost:3306/assessmentdb";
    private String userName = "root";
    private String password = "password";
    Connection connection;
    Statement statement;

    public InterviewRepositoryImpl() {
        try {
            connection = DriverManager.getConnection(url, userName, password);
            statement = connection.createStatement();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public List<InterviewCandidateDetails> getAllInterviewCandidates() {
        List<InterviewCandidateDetails> allInterviewCandidates = new ArrayList<>();
        try {
            String selectQuery = "SELECT interviews.candidateid,employees.firstname,employees.lastname,subjects.title "
                    + "FROM interviews "
                    + "INNER JOIN employees ON  interviews.candidateid= employees.id "
                    + "INNER JOIN subjectmatterexperts ON interviews.smeid = subjectmatterexperts.id "
                    + "INNER JOIN subjects ON subjectmatterexperts.subjectid=subjects.id";

            ResultSet rs = statement.executeQuery(selectQuery);

            while (rs.next()) {
                InterviewCandidateDetails candidateDetails = new InterviewCandidateDetails(rs.getInt(1), rs.getString(2), rs.getString(3), null);
                allInterviewCandidates.add(candidateDetails);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return allInterviewCandidates;
    }

    @Override
    public List<InterviewCandidateDetails> getInterviewedCandidatesSubjects(int candidateId) {
        List<InterviewCandidateDetails> interviewCandidateSubjectDetails = new ArrayList<>();
        try {
            String selectQuery = "SELECT interviews.candidateid,employees.firstname,employees.lastname,subjects.Title "
                    + "FROM employees INNER JOIN interviews ON employees.id = interviews.candidateid "
                    + "INNER JOIN subjectmatterexperts ON subjectmatterexperts.id = interviews.smeid "
                    + "INNER JOIN subjects ON subjectmatterexperts.subjectid = subjects.id "
                    + "WHERE candidateid =" + candidateId + ";";

            ResultSet rs = statement.executeQuery(selectQuery);
            while (rs.next()) {
                InterviewCandidateDetails CandidateSubjectDetails = new InterviewCandidateDetails(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4));
                interviewCandidateSubjectDetails.add(CandidateSubjectDetails);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return interviewCandidateSubjectDetails;
    }

    @Override
    public InterviewDetails getInterviewDetails(int interviewId) {
        InterviewDetails interviewDetails = null;
        try {
            String call = "{CALL spinterviewdetails(?)}";
            CallableStatement callablestatement = connection.prepareCall(call);
            callablestatement.setInt(1, interviewId);

            ResultSet rs1 = callablestatement.executeQuery();
            if (rs1.next()) {
                interviewDetails = new InterviewDetails(
                        rs1.getInt(1),
                        rs1.getString(2),
                        rs1.getString(3),
                        rs1.getString(5),
                        rs1.getString(6),
                        rs1.getString(7),
                        null
                );
            }

            if (callablestatement.getMoreResults()) {
                ResultSet rs2 = callablestatement.getResultSet();
                List<String> criterias = new ArrayList<>();
                while (rs2.next()) {
                    criterias.add(rs2.getString("title"));
                }
                if (interviewDetails != null) {
                    interviewDetails.setCriterias(criterias.toArray(new String[0]));
                }
            }

            return interviewDetails;

        } catch (Exception e) {
            System.out.println(e);
        }
        return interviewDetails;
    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalDate date) {
        try {
            String updateQuery = "UPDATE interviews "
                    + "SET interviewdate = '" + date + "' "
                    + "WHERE id =" + interviewId + ";";
            statement.executeUpdate(updateQuery);
            return true;
        } catch (Exception e) {
            System.out.println(e);
        }
        return true;
    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalTime time) {
        try {
            String updateQuery = "UPDATE interviews "
                    + "SET interviewtime = '" + time + " AM ' "
                    + "WHERE id =" + interviewId;
            statement.executeUpdate(updateQuery);
            return true;
        } catch (Exception e) {
            System.out.println(e);
        }
        return true;

    }

    @Override
    public boolean rescheduleInterview(int interviewId, LocalTime time, LocalDate date) {
        try {
            String updateQuery = "UPDATE interviews "
                    + "SET interviewdate = '" + date + "', interviewtime = '" + time + " AM' "
                    + "WHERE id =" + interviewId + ";";
            statement.executeUpdate(updateQuery);
        } catch (Exception e) {
            System.out.println(e);
        }
        return true;
    }

    @Override
    public boolean changeInterviewer(int interviewId, int smeId) {
        try {
            String updateQuery = "UPDATE interviews "
                    + "SET smeid = " + smeId + " "
                    + "WHERE id = " + interviewId + ";";
            statement.executeUpdate(updateQuery);
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }

    @Override
    public boolean cancelInterview(int interviewId) {
        try {
            String updateQuery = "DELETE FROM interviews WHERE id =" + interviewId + ";";
            statement.executeUpdate(updateQuery);
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }
    public static void main(String[] args) throws Exception {
        InterviewRepositoryImpl obj1 = new InterviewRepositoryImpl();
        List<InterviewCandidateDetails> icd1 = obj1.getAllInterviewCandidates();
        List<InterviewCandidateDetails> icd2 = obj1.getInterviewedCandidatesSubjects(6);
        InterviewDetails id = obj1.getInterviewDetails(4);
        boolean status1 = obj1.rescheduleInterview(4,LocalDate.of(2022,12,23) );
        boolean status2 = obj1.rescheduleInterview(3,LocalTime.of(12, 00),LocalDate.of(2032,07,23));
        boolean status3 = obj1.rescheduleInterview(2,LocalDate.of(2022,07,23) );
        boolean status4 = obj1.cancelInterview(2);
        boolean status5 = obj1.changeInterviewer(4,1);
        for (InterviewCandidateDetails icd : icd1) {
            System.out.println(icd);
        }
        for (InterviewCandidateDetails icd: icd2) {
            System.out.println(icd);
        }
        System.out.println(id);
    }
}
