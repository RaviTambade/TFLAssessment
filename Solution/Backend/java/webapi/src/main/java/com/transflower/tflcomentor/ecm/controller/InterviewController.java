package com.transflower.tflcomentor.ecm.controller;
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
            String query="INSERT INTO interviews(scheduled_at,mode,status,created_at,interviewer,student_id) VALUES(?,?,'SCHEDULED',NOW(),?,?)";
            PreparedStatement ps=connection.prepareStatement(query);
            ps.setTimestamp(1,Timestamp.valueOf(scheduleInterview.getScheduleAt()));
            ps.setString(2,scheduleInterview.getMode());
            ps.setInt(3, scheduleInterview.getInterviewer());
            ps.setInt(4, scheduleInterview.getStudentId());
            ps.executeUpdate();

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}