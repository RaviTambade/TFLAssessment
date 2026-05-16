package com.transflower.tflcomentor.interview;
import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.dto.response.InterviewList;
import com.transflower.tflcomentor.ecm.entity.enums.InterviewStatus;
import java.sql.Timestamp;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

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

    @GetMapping("/details")
    public void getDetails(){
        
    }

   @GetMapping("/upcoming/{interviewer}")
   public List<InterviewList> getUpcommingInterviews(@PathVariable int interviewer) {

    List<InterviewList> interviews = new ArrayList<>();

    try {

        Connection connection = getConnection();

        String query = """
                SELECT interviewer, title
                FROM interviews
                WHERE interviewer = ?
                AND scheduled_at >= NOW()
                AND scheduled_at <= DATE_ADD(NOW(), INTERVAL 4 DAY)
                ORDER BY scheduled_at ASC
                """;

        PreparedStatement ps = connection.prepareStatement(query);

        ps.setInt(1, interviewer);

        ResultSet rs = ps.executeQuery();

        while (rs.next()) {

            InterviewList list = new InterviewList();
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

}