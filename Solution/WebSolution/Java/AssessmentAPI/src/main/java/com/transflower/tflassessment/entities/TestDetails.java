package com.transflower.tflassessment.entities;

import java.time.Duration;
import java.time.LocalDateTime;

public class TestDetails {
    private int id;
    private String testName;
    private String subjectName;
    private Duration duration;
    private LocalDateTime scheduledStart;
    private LocalDateTime scheduledEnd;

    public TestDetails(){
        id=0;
        testName=" ";
        subjectName=" ";
        duration=null;
        scheduledStart=null;
        scheduledEnd=null;
    }

    public TestDetails(int id,String testName,String subjectName,Duration duration,LocalDateTime scheduledStart,LocalDateTime scheduledEnd){
        this.id=id;
        this.testName=testName;
        this.subjectName=subjectName;
        this.duration=duration;
        this.scheduledStart=scheduledStart;
        this.scheduledEnd=scheduledEnd;
    }

    public void setId(int id){
        this.id=id;
    }
    public int getId(){
        return id;
    }


    public void setTestName(String testName){
        this.testName=testName;
    }
    public String getTestName(){
        return testName;
    }

    public void setSubjectName(String subjectName){
        this.subjectName=subjectName;
    }
    public String SubjectName(){
        return subjectName;
    }

    public void setDuration(Duration duration){
        this.duration=duration;
    }
    public Duration getDuration(){
        return duration;
    }

    public void setScheduledStart(LocalDateTime scheduledStart){
        this.scheduledStart=scheduledStart;
    }
    public LocalDateTime getScheduledStart(){
        return scheduledStart;
    }

    public void setScheduledEnd(LocalDateTime scheduledEnd){
        this.scheduledEnd=scheduledEnd;
    }
    public LocalDateTime getScheduledEnd(){
        return scheduledEnd;
    }

    @Override
    public String toString(){
        return ("TestDetails{ Id = "+id+"TestName = "+testName+"SubjectName = "+subjectName+
        "Duration = "+duration+"ScheduleStart = "+scheduledStart+
        "ScheduledEnd = "+scheduledEnd
        );
    }
}
