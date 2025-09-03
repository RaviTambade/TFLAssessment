package com.transflower.tflAssessment.entities;

import java.time.LocalDateTime;

public class Test {

    private int Id;
    private String Name;
    private LocalDateTime ScheduledDate;
    private String Status;
    
// Getters and Setters 
    public int getId(){
        return Id;
    }

    public void setId(int Id){
        this.Id = Id;
    }

    public String getName(){
        return Name;
    }

    public void setName(String Name){
        this.Name = Name;
    }

    public LocalDateTime getScheduledDate(){
        return ScheduledDate;
    }

    public void setScheduledDate(LocalDateTime ScheduledDate){
        this.ScheduledDate = ScheduledDate;
    }

    public String getStatus(){
        return Status;
    }

    public void setStatus(String Status){
        this.Status = Status;
    }
}    