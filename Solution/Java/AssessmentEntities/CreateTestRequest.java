package com.transflower.tflAssessment.entities;
import java.time.LocalDateTime;
public class CreateTestRequest {
    private int subjectId;
    private String name;
    private String duration;
    private int subjectExpertId;
    private LocalDateTime creationDate;
    private LocalDateTime modificationDate;
    private LocalDateTime scheduledDate;
    private int passingLevel;

    public CreateTestRequest(){

        this.subjectId=0;
        this.name=null;
        this.duration=null;
        this.subjectExpertId=0;
        this.creationDate=null;
        this.modificationDate=null;
        this.scheduledDate=null;
        this.passingLevel=0;

    }

    public CreateTestRequest(int subjectId, String name, String duration, int subjectExpertId, LocalDateTime creationDate, LocalDateTime modificationDate, LocalDateTime scheduledDate, int passingLevel) {
        this.subjectId = subjectId;
        this.name = name;
        this.duration = duration;
        this.subjectExpertId = subjectExpertId;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.scheduledDate = scheduledDate;
        this.passingLevel = passingLevel;
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

    public int getSubjectExpertId(){

        return this.subjectExpertId;
    }
    public void setSubjectExpertId(int subEId){

        this.subjectExpertId=subEId;
    }

    public LocalDateTime getCreationDate(){

        return this.creationDate;
    }
    public void setCreationDate(LocalDateTime createDate){

        this.creationDate=createDate;
    }

    public LocalDateTime getModificationDate(){

        return this.modificationDate;
    }
    public void setModificationDate(LocalDateTime modifyDate){

        this.modificationDate=modifyDate;
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
}
