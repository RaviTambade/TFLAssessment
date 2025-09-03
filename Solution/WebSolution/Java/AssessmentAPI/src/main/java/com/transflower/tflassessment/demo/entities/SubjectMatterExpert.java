package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

import javax.security.auth.Subject;

public class SubjectMatterExpert implements Cloneable {

    private int id;
    private int subjectId;
    private int employeeId;
    private Subject subject;
    private Employee employee;

    public SubjectMatterExpert(int id, int subjectId, int employeeId, Subject subject, Employee employee) {
        this.id = id;
        this.subjectId = subjectId;
        this.employeeId = employeeId;
        this.subject = subject;
        this.employee = employee;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "SubjectMatterExpert{" +
                "id=" + id +
                ", subjectId=" + subjectId +
                ", employeeId=" + employeeId +
                ", subject=" + subject +
                ", employee=" + employee +
                '}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        SubjectMatterExpert other = (SubjectMatterExpert) obj;
        return id == other.id &&
                subjectId == other.subjectId &&
                employeeId == other.employeeId &&
                Objects.equals(subject, other.subject) &&
                Objects.equals(employee, other.employee);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, subjectId, employeeId, subject, employee);
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize method called: " + this);
        } finally {
            
        }
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

}
