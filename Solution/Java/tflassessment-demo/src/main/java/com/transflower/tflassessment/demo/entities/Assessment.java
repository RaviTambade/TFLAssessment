 package com.transflower.tflassessment.demo.entities;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Objects;

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

    public Assessment() {

    }

    public Assessment(int id, String testName, int subjectId, Timestamp duration, int subjectExpertId,
            LocalDateTime creationDate, LocalDateTime modificationDate, LocalDateTime scheduleDate, String status,
            int passingLevel,
            String subject, String firstName, String lastName) {

        this.id = id;
        this.testName = testName;
        this.subjectId = subjectId;
        this.duration = duration;
        this.subjectExpertId = subjectExpertId;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.scheduleDate = scheduleDate;
        this.passingLevel = passingLevel;
        this.subject = subject;
        this.firstName = firstName;
        this.lastName = lastName;

    }

   

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public Timestamp getDuration() {
        return duration;
    }

  public void setDuration(Timestamp duration) {
    this.duration = duration;
    }

    public int getSubjectExpertId() {
        return subjectExpertId;
    }

    public void setSubjectExpertId(int subjectExpertId) {
        this.subjectExpertId = subjectExpertId;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }
    
    public LocalDateTime getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(LocalDateTime modificationDate) {
        this.modificationDate = modificationDate;
    }

    public LocalDateTime getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(LocalDateTime scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getPassingLevel() {
        return passingLevel;

    }

    public void setPassingLevel(int passingLevel) {
        this.passingLevel = passingLevel;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Assessment{" +
                "id=" + id +
                ",testName='" + testName +
                " ',subjectId=" + subjectId +
                ",duration=" + duration +
                ",subjectExpertId=" + subjectExpertId +
                ", creationDate=" + creationDate +
                ",modificationDate=" + modificationDate +
                ",scheduleDate=" + scheduleDate +
                ",status= '" + status +
                " ',passingLevel=" + passingLevel +
                ",subject = '" + subject +
                " ',firstName= ' " + firstName +
                " ',lastName= ' " + lastName +
                "'}";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Assessment other = (Assessment) obj;
        return id == other.id &&
                subjectId == other.subjectId &&
                creationDate == other.creationDate &&
                modificationDate == other.modificationDate &&
                scheduleDate == other.scheduleDate &&
                duration == other.duration &&
                subject.equals(other.subject) &&
                status.equals(other.status) &&
                firstName.equals(other.firstName) &&
                lastName.equals(other.lastName);
    }
    @Override 
  public int hashCode()
  {
    return Objects.hash(id,subjectId,creationDate,modificationDate,
  scheduleDate,duration,subject,status,firstName,lastName);
  }
  @Override
  protected void finalize() throws Throwable
  {
    try
    {
        System.out.println("Return to"+this);
    }
    finally
    {
        super.finalize();
    }

  }
  @Override
      protected Object clone() throws CloneNotSupportedException  
      {
        return super.clone();
      } 

}