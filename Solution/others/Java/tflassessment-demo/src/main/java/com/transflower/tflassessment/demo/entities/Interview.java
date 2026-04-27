package com.transflower.tflassessment.demo.entities;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

public class Interview implements Cloneable {

    public int id;
    public LocalDate interviewDate;
    public LocalTime interviewTime;
    public int smeId;
    public int candidateId;

    public Interview() {
        this.id = 0;
        this.interviewDate = null;
        this.interviewTime = null;
        this.smeId = 0;
        this.candidateId = 0;
    }

    public Interview(int id, LocalDate interviewDate, LocalTime interviewTime, int smeId, int candidateId) {
        this.id = id;
        this.interviewDate = interviewDate;
        this.interviewTime = interviewTime;
        this.smeId = smeId;
        this.candidateId = candidateId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getInterviewDate() {
        return interviewDate;
    }

    public void setInterviewDate(LocalDate interviewDate) {
        this.interviewDate = interviewDate;
    }

    public LocalTime getInterviewTime() {
        return interviewTime;
    }

    public void setInterviewTime(LocalTime interviewTime) {
        this.interviewTime = interviewTime;
    }

    public int getSmeId() {
        return smeId;
    }

    public void setSmeId(int smeId) {
        this.smeId = smeId;
    }

    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
    }

    @Override
    public String toString() {
        return ("Id: " + id + "Interview Date: " + interviewDate + "Interview Time: " + interviewTime + "SME Id: " + smeId + "Candidate Id:" + candidateId);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || this.getClass() != obj.getClass()) {
            return false;
        }
        Interview in = (Interview) obj;
        return this.id == in.id
                && this.interviewDate == in.interviewDate
                && this.interviewTime == in.interviewTime
                && this.smeId == in.smeId
                && this.candidateId == in.candidateId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.interviewDate, this.smeId, this.candidateId);
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        try {
            return new Interview(this.id, this.interviewDate, this.interviewTime, this.smeId, this.candidateId);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public void finalize() throws Throwable {
        try {
            System.out.println("Finalized called for " + this);
        } finally {
            super.finalize();
        }

    }

}
