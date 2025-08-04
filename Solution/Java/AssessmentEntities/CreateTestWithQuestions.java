package com.transflower.tflAssessment.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


public class CreateTestWithQuestions {
    private int subjectId;
    private String name;
    private String duration;
    private int smeId;
    private LocalDateTime scheduledDate;
    private int passingLevel;
    private List<Integer> questionIds;


   public CreateTestWithQuestions(){

        this.subjectId=0;
        this.name=null;
        this.duration=null;
        this.smeId=0;
        this.scheduledDate=null;
        this.passingLevel=0;
        this.questionIds=new ArrayList<>();

    }
      
     public CreateTestWithQuestions(int subjectId, String name, String duration,  int smeId, LocalDateTime scheduledDate, int passingLevel,List<Integer> questionIds) {
        this.subjectId = subjectId;
        this.name = name;
        this.duration = duration;
        this.smeId=smeId;
        this.scheduledDate = scheduledDate;
        this.passingLevel = passingLevel;
        this.questionIds=questionIds;
    }
   

    public int getSubjectId(){

        return this.subjectId;
    }
    public void setSubjectId(int id){

        this.subjectId=id;
    }

    public String getName(){

        return this.name;
    }
    public void setName(String name){

        this.name=name;
    }

    public String getDuration(){

        return this.duration;
    }
    public void setDuration(String duration){

        this.duration=duration;
    }

    public  int getSmeId(){

        return this.smeId;
    }    
    public void setSmeId(int smeid){

        this.smeId=smeid;
    }

    
    public LocalDateTime getScheduledDate(){

        return this.scheduledDate;
    }
    public void setScheduledDate(LocalDateTime schDate){

        this.scheduledDate=schDate;
    }

    public int getPassingLevel(){

        return this.passingLevel;
    }
    public void setPassingLevel(int passLevel){

        this.passingLevel=passLevel;
    }
    public List<Integer> getQuestionIds(){

        return this.questionIds;
    }
    public void setQuestionIds(List<Integer> qIds){

        this.questionIds=qIds;
    }
}






