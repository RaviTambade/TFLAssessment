package com.transflower.tflcomentor.interview;
import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.dto.response.InterviewDetails;
import com.transflower.tflcomentor.ecm.dto.response.InterviewList;
import com.transflower.tflcomentor.ecm.entity.enums.InterviewStatus;

import java.sql.Timestamp;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import com.transflower.tflcomentor.ecm.dto.request.ScheduleInterview;
import com.transflower.tflcomentor.ecm.dto.request.InterviewFeedback;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.dto.request.ScheduleInterview;
import com.transflower.tflcomentor.ecm.dto.response.InterviewDetails;
import com.transflower.tflcomentor.ecm.dto.response.InterviewList;
import com.transflower.tflcomentor.ecm.entity.enums.InterviewStatus;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/interview")
public class InterviewController{

    private Connection getConnection() throws Exception {
            return DBConfig.getConnection();
    }

    @PostMapping("/schedule")
    public void scheduleInterview(@RequestBody ScheduleInterview scheduleInterview){
        try{
            Connection connection=getConnection();
            String query="INSERT INTO interviews(scheduled_at,mode,status,title,created_at,interviewer,student_id) VALUES(?,?,'SCHEDULED',?,NOW(),?,?)";
            PreparedStatement ps=connection.prepareStatement(query);
            ps.setTimestamp(1,Timestamp.valueOf(scheduleInterview.getScheduleAt()));
            ps.setString(2,scheduleInterview.getMode());
            ps.setString(3,scheduleInterview.getTitle());
            ps.setInt(4, scheduleInterview.getInterviewer());
            ps.setInt(5, scheduleInterview.getStudentId());
            ps.executeUpdate();

        }catch(Exception e){
            e.printStackTrace();
        }
    }

   @GetMapping("/details/{userId}/role/{roleId}/interview/{interviewId}")
    public InterviewDetails getInterviewDetails(
        @PathVariable int userId,
        @PathVariable int roleId,
        @PathVariable int interviewId) {
    try (Connection connection = getConnection()) {
        String query = "";
        // STUDENT
        if (roleId == 2) {
            query =
                "SELECT i.interview_id, i.scheduled_at, i.mode, i.title,i.status, " +
                "CONCAT(pi.first_name,' ',pi.last_name) AS interviewer " +
                "FROM interviews i " +
                "JOIN personal_informations pi " +
                "ON pi.user_id = i.interviewer " +
                "WHERE i.student_id = ? " +
                "AND i.interview_id = ?";
        }
        // SME
        else if (roleId == 4) {
            query =
                "SELECT i.interview_id, i.scheduled_at, i.mode, i.title,i.status, " +
                "CONCAT(pi.first_name,' ',pi.last_name) AS interviewer " +
                "FROM interviews i " +
                "JOIN personal_informations pi " +
                "ON pi.user_id = i.student_id " +
                "WHERE i.interviewer = ? " +
                "AND i.interview_id = ?";
        }
        PreparedStatement ps = connection.prepareStatement(query);
        // same parameters for both queries
        ps.setInt(1, userId);
        ps.setInt(2, interviewId);
        ResultSet rs = ps.executeQuery();
        InterviewDetails details = new InterviewDetails();
        if (rs.next()) {
            details.setInterviewId(rs.getInt("interview_id"));
            details.setScheduleDate(rs.getTimestamp("scheduled_at").toLocalDateTime());
            details.setMode(rs.getString("mode"));
            details.setTitle(rs.getString("title"));
            details.setInterviewer(rs.getString("interviewer"));
            String status=rs.getString("status");
            details.setStatus(InterviewStatus.valueOf(status));
        }
        return details;
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
    }
 
   @GetMapping("/upcoming/{userId}/role/{roleId}")
   public List<InterviewList> getUpcommingInterviews(@PathVariable int userId,@PathVariable int roleId) {

    List<InterviewList> interviews = new ArrayList<>();

    try ( Connection connection = getConnection()){
        //STUDENT
        String query = "";

            if(roleId==2){
                query = """
                    SELECT
                        interview_id,
                        interviewer,
                        title
                    FROM interviews
                    WHERE student_id = ?
                    AND scheduled_at >= NOW()
                    AND scheduled_at <= DATE_ADD(NOW(), INTERVAL 4 DAY)
                    AND status = 'SCHEDULED'
                    ORDER BY scheduled_at ASC
                    """;
                }
                //SME
                else if(roleId==4){
                query = """
                    SELECT
                        interview_id,
                        interviewer,
                        title
                    FROM interviews
                    WHERE interviewer = ?
                    AND scheduled_at >= NOW()
                    AND scheduled_at <= DATE_ADD(NOW(), INTERVAL 4 DAY)
                    AND status = 'SCHEDULED'
                    ORDER BY scheduled_at ASC
                    """;

            }

        PreparedStatement ps = connection.prepareStatement(query);

        ps.setInt(1, userId);

        ResultSet rs = ps.executeQuery();

        while (rs.next()) {

            InterviewList list = new InterviewList();

            list.setInterviewId(
                    rs.getInt("interview_id")
            );

            list.setInterviewer(
                    rs.getInt("interviewer")
            );

            list.setTitle(
                    rs.getString("title")
            );

            interviews.add(list);
        }

    } catch (Exception e) {

        e.printStackTrace();

    }

    return interviews;
}

  @GetMapping("/history/{userId}/role/{roleId}")
public List<InterviewList> getInterviewHistory(
        @PathVariable int userId,
        @PathVariable int roleId) {

    List<InterviewList> history = new ArrayList<>();

    try (Connection connection = getConnection()) {

        String query = "";

        // STUDENT
        if (roleId == 2) {

            query = """
                    SELECT
                        interview_id,
                        title
                    FROM interviews
                    WHERE student_id = ?
                    AND (scheduled_at < NOW()
                    OR status = 'CANCELED')
                    ORDER BY scheduled_at DESC
                    """;
        }

        // SME
        else if (roleId == 4) {

            query = """
                    SELECT
                        interview_id,
                        title
                    FROM interviews
                    WHERE interviewer = ?
                    AND (scheduled_at < NOW()
                    OR status = 'CANCELED')
                    ORDER BY scheduled_at DESC
                    """;
        }

        PreparedStatement ps = connection.prepareStatement(query);

        ps.setInt(1, userId);

        ResultSet rs = ps.executeQuery();

        while (rs.next()) {

            InterviewList list = new InterviewList();

            list.setInterviewId(
                    rs.getInt("interview_id")
            );

            list.setTitle(
                    rs.getString("title")
            );

            history.add(list);
        }

    } catch (Exception e) {

        e.printStackTrace();
    }

    return history;
}
        



    @PutMapping("/{interviewId}/cancel")
    public void cancelInterview(@PathVariable int interviewId){
        try(Connection connection=getConnection()){
            String query="UPDATE interviews set status='CANCELED' where interview_id=?";
            PreparedStatement ps=connection.prepareStatement(query);
            ps.setInt(1,interviewId);
            ps.executeUpdate();
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @PutMapping("/accept/{interviewId}")
    public void acceptInterview(@PathVariable int interviewId){
        try(Connection connection=getConnection()){
            String query="UPDATE interviews set outcome='ACCEPTED' where interview_id=?";
            PreparedStatement ps=connection.prepareStatement(query);
            ps.setInt(1,interviewId);
            ps.executeUpdate();
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @PutMapping("/reject/{interviewId}")
    public void rejectInterview(@PathVariable int interviewId){
        try(Connection connection=getConnection()){
            String query="UPDATE interviews set outcome='REJECTED' where interview_id=?";
            PreparedStatement ps=connection.prepareStatement(query);
            ps.setInt(1,interviewId);
            ps.executeUpdate();
        }catch(Exception e){
            e.printStackTrace();
        }   
    }

    @PostMapping("/feedback")
    public boolean addFeedback(@RequestBody InterviewFeedback feedback){
        boolean status = false;
        try(Connection connection=getConnection()){
         String query = """
            INSERT INTO interview_feedback (
                interview_id,
                start_time,
                end_time,
                communication_rating,
                problem_solving_rating,
                strengths,
                feedback_comment,
                recommendation
            )
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)
        """;
   
               PreparedStatement statement =
                connection.prepareStatement(query);

        statement.setLong(1, feedback.getInterviewId());
        statement.setTimestamp(
                2,
                Timestamp.valueOf(feedback.getStartTime())
        );

        statement.setTimestamp(
                3,
                Timestamp.valueOf(feedback.getEndTime())
        );

        statement.setInt(4,
                feedback.getCommunicationRating());

        statement.setInt(5,
                feedback.getProblemSolvingRating());

        statement.setString(6,
                feedback.getStrengths());

        statement.setString(7,
                feedback.getFeedbackComment());

        statement.setString(8,
                feedback.getRecommendation());

        int rows = statement.executeUpdate();

        status = rows > 0;

        } catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }

    @GetMapping
public List<InterviewDetails> getInterviews(){

    List<InterviewDetails> interviews =new ArrayList<>();

    try(Connection connection = getConnection()){
        String query ="SELECT * FROM interviews";
        PreparedStatement ps =connection.prepareStatement(query);
        ResultSet rs =ps.executeQuery();

        while(rs.next()){

            InterviewDetails interview =new InterviewDetails();

            interview.setInterviewId(rs.getInt("interview_id") );
            interview.setTitle(rs.getString("title"));
            interview.setScheduleDate(rs.getTimestamp("scheduled_at").toLocalDateTime());
            interview.setMode(rs.getString("mode"));
            interview.setInterviewer(rs.getString("interviewer"));
            interview.setStatus(InterviewStatus.valueOf(rs.getString("status")) );
            interviews.add(interview);
        }
    }catch(Exception e){
        e.printStackTrace();
    }

    return interviews;
}
    
}