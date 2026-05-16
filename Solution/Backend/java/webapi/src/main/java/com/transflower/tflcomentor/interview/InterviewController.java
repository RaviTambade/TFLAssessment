package com.transflower.tflcomentor.interview;
import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.dto.response.InterviewDetails;
import com.transflower.tflcomentor.ecm.dto.response.InterviewList;
import com.transflower.tflcomentor.ecm.entity.enums.InterviewStatus;
import java.sql.Timestamp;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.transflower.tflcomentor.ecm.dto.request.ScheduleInterview;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/interview")
public class InterviewController{

    private Connection getConnection() throws Exception {
            return DBConfig.getConnection();
    }

    @GetMapping()
    public List<InterviewList> getAllInterviewList() {
          List<InterviewList> interviewList = new ArrayList<>();

            try{
                Connection connection=getConnection();
                String query = """
                    SELECT i.interview_id, jd.title 
                    FROM interviews i
                    JOIN job_applications ja ON i.application_id = ja.id
                    JOIN job_descriptions jd ON ja.job_id = jd.job_id
                """;

                PreparedStatement statement=connection.prepareStatement(query);
                    ResultSet rs=statement.executeQuery();
                    while(rs.next()){
                        InterviewList list=new InterviewList();
                        list.setInterviewId(rs.getInt("interview_id"));
                        list.setTitle(rs.getString("title"));
                        interviewList.add(list);
                    }
            }catch(Exception e){
                e.printStackTrace();
            }
            return interviewList;
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

    // @GetMapping("/details/student/{studentId}/interview/{interviewId}")
    // public InterviewDetails getDetails(@PathVariable int studentId,@PathVariable int interviewId){
    //     try(Connection connection=getConnection()){
    //         String query="SELECT i.interview_id,i.scheduled_at,i.mode,i.title,CONCAT(pi.first_name,' ',pi.last_name) AS interviewer\n" +
    //                             "FROM interviews i\n" +
    //                             "JOIN personal_informations pi ON pi.user_id=i.interviewer\n" +
    //                             "WHERE i.student_id=? "+
    //                             "AND i.interview_id=?";
                       
    //         PreparedStatement ps=connection.prepareStatement(query);
    //         ps.setInt(1,studentId);
    //         ps.setInt(2,interviewId);
    //         ResultSet rs=ps.executeQuery();
    //         InterviewDetails details=new InterviewDetails();

    //         while(rs.next()){
    //             details.setInterviewId(rs.getInt("interview_id"));
    //             details.setScheduleDate(rs.getTimestamp("scheduled_at").toLocalDateTime());
    //             details.setMode(rs.getString("mode"));
    //             details.setTitle(rs.getString("title"));
    //             details.setInterviewer(rs.getString("interviewer"));
    //         }
    //         return details;
    //     }catch(Exception e){
    //         e.printStackTrace();
    //         return null;
    //     }
    // }

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
                "SELECT i.interview_id, i.scheduled_at, i.mode, i.title, " +
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
                "SELECT i.interview_id, i.scheduled_at, i.mode, i.title, " +
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
        }
        return details;
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
}

}