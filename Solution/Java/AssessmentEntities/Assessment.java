// package com.transflower.tflAssessment.entities;

import java.security.Timestamp;
import java.time.LocalDateTime;

public class Assessment {
    private int id;
    private String testName;
    private int subjectId;
    private Timestamp duration;
    private int subjectExpertId;
    private LocalDateTime creationDate;
    private LocalDateTime modificationDate;
    private LocalDateTime scheduleDate;
    private String status;
    private int passingLevel;
    private String subject;
    private String firstName;
    private String lastName;


    public Assessment()
    {

    }

    public Assessment(int id,String testName,int subjectId,Timestamp duration,int subjectExpertId,
    LocalDateTime creationDate,LocalDateTime modificationDate,LocalDateTime scheduleDate,String status,int passingLevel,
    String subject,String firstName,String lastName ){

        this.id=id;
        this.testName=testName;
        this.subjectId=subjectId;
        this.duration=duration;
        this.subjectExpertId=subjectExpertId;
        this.creationDate=creationDate;
        this.modificationDate=modificationDate;
        this.scheduleDate=scheduleDate;
        this.passingLevel=passingLevel;
        this.subject=subject;
        this.firstName=firstName;
        this.lastName=lastName;

    }
    
    public int getId()
    {
        return id;
    }
    public void setId( int id)
    {
        this.id=id;
    }
    public String getTestName()
    {
        return testName;
    }
    public void setTestName( String testName)
    {
        this.testName=testName;
    }
     public int getSubjectId()
     {
        return subjectId;
     }
    public void setSubjectId(int subjectId)
    {
        this.subjectId=subjectId;
    }
    public Timestamp getDuration()
    {
        return duration;
    }
    public void setDuration(Timestamp duration)
    {
        this.duration=duration;
    }
    public int getSubjectExpertId()
    {
        return subjectExpertId;
    }
    public void setSubjectExpertId(int subjectExpertId)
    {
        this.subjectExpertId=subjectExpertId;
    }
 

    public LocalDateTime getcreationDate()
    {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate)
    {
           this.creationDate=creationDate;
    }
    public String getStatus()
    {
         return status;
    }
    public void setStatus(String status)
    {
        this.status=status;
    }

    public int getPassingLevel()
    {
        return passingLevel;

    }
    public void setPassingLevel(int passingLevel)
    {
        this.passingLevel=passingLevel;
    }
  public String getSubject()
  {
    return subject;
  }
  public void setSubject(String subject)
  {
    this.subject=subject;
  }
  public String getFirstName()
  {
    return firstName;
  }
  public void setFirstName(String firstName)
  {
    this.firstName=firstName;
  }
  public String getLastName()
  {
    return lastName;
  }
  public void setLastName()
  {
    this.lastName=lastName;
  }

}
