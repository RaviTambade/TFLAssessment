package com.transflower.tflassessment.demo.entities;

import java.time.LocalDateTime;
import java.util.Objects;

public class CreateTestRequest implements Cloneable {

    private int subjectId;
    private String name;
    private String duration;
    private int subjectExpertId;
    private LocalDateTime creationDate;
    private LocalDateTime modificationDate;
    private LocalDateTime scheduledDate;
    private int passingLevel;

    public CreateTestRequest() {

        this.subjectId = 0;
        this.name = null;
        this.duration = null;
        this.subjectExpertId = 0;
        this.creationDate = null;
        this.modificationDate = null;
        this.scheduledDate = null;
        this.passingLevel = 0;

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

    public int getSubjectId() {

        return this.subjectId;
    }

    public void setSubjectId(int id) {

        this.subjectId = id;
    }

    public String getName() {

        return this.name;
    }

    public void setName(String name) {

        this.name = name;
    }

    public String getDuration() {

        return this.duration;
    }

    public void setDuration(String duration) {

        this.duration = duration;
    }

    public int getSubjectExpertId() {

        return this.subjectExpertId;
    }

    public void setSubjectExpertId(int subEId) {

        this.subjectExpertId = subEId;
    }

    public LocalDateTime getCreationDate() {

        return this.creationDate;
    }

    public void setCreationDate(LocalDateTime createDate) {

        this.creationDate = createDate;
    }

    public LocalDateTime getModificationDate() {

        return this.modificationDate;
    }

    public void setModificationDate(LocalDateTime modifyDate) {

        this.modificationDate = modifyDate;
    }

    public LocalDateTime getScheduledDate() {

        return this.scheduledDate;
    }

    public void setScheduledDate(LocalDateTime schDate) {

        this.scheduledDate = schDate;
    }

    public int getPassingLevel() {

        return this.passingLevel;
    }

    public void setPassingLevel(int passLevel) {

        this.passingLevel = passLevel;
    }

    @Override
public String toString() {
    return "CreateTestRequest{subjectId='" + subjectId + "', name='" + name + "', duration='" + duration + "', subjectExpertId='" + subjectExpertId + "', creationDate='" + creationDate + "', modificationDate='" + modificationDate + "', scheduledDate='" + scheduledDate + "', passingLevel='" + passingLevel + "'}";
}
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }

        CreateTestRequest other = (CreateTestRequest) obj;

        return subjectId == other.subjectId
                && subjectExpertId == other.subjectExpertId
                && passingLevel == other.passingLevel
                && Objects.equals(name, other.name)
                && Objects.equals(duration, other.duration)
                && Objects.equals(creationDate, other.creationDate)
                && Objects.equals(modificationDate, other.modificationDate)
                && Objects.equals(scheduledDate, other.scheduledDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(subjectId, name, duration, subjectExpertId, creationDate, modificationDate, scheduledDate, passingLevel
        );
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for: " + this);
        } finally {
            super.finalize();
        }
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
       try{
       
        return new CreateTestRequest( subjectId,name,duration,subjectExpertId,creationDate,modificationDate,scheduledDate,passingLevel);
       }catch (Exception e)
       {
        System.out.println(e);
        return null;
       }
    }

}
