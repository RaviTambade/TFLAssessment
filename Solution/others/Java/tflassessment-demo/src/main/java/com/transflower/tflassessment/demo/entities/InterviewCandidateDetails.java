package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class InterviewCandidateDetails implements Cloneable {

    public String firstName;
    public String lastName;
    public int candidateId;
    public String title;

    public InterviewCandidateDetails() {
        this.firstName = null;
        this.lastName = null;
        this.candidateId = 0;
        this.title = null;
    }

    public InterviewCandidateDetails(int candidateId, String firstName, String lastName, String title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.candidateId = candidateId;
        this.title = title;
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

    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "InterviewCandidateDetails{First Name: " + firstName + "last Name: " + lastName + "Candidate Id" + candidateId + "Title: " + title+"}";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || this.getClass() != obj.getClass()) {
            return false;
        }
        InterviewCandidateDetails ic = (InterviewCandidateDetails) obj;
        return this.firstName.equals(ic.firstName)
                && this.lastName.equals(ic.lastName)
                && this.candidateId == ic.candidateId
                && this.equals(ic.title);

    }

    @Override
    public int hashCode() {
        return Objects.hash(this.candidateId, this.firstName, this.lastName, this.title);
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        try {

            return new InterviewCandidateDetails(this.candidateId, this.firstName, this.lastName, this.title);
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
