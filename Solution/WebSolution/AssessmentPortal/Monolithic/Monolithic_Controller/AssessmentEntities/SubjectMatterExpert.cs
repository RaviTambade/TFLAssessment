using System;

namespace Transflower.TFLAssessment.Entities
{
    public class SubjectMatterExpert
    {
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public int EmployeeId { get; set; }

        // Navigation Properties
        public Subject Subject { get; set; }
        public Employee Employee { get; set; }
    }
}


package com.transflower.tflAssesment.entities;

public class SubjectMatterExpert {

    private int Id;
    private int SubjectId;
    private int EmployeeId;
    private Subject Subject;
    private Employee Employee;

    public int getId(int Id)
    {
        return Id;
    }

    public void setId()
    {
        this.Id = Id;
    }

    public int getSubjectId(int SubjectId)
    {
        return SubjectId;
    }
    public void setSubjectId()
    {
        this.SubjectId = SubjectId;
    }
    public int getEmployeeId(int EmployeeId)
    {
        return EmployeeId;
    }
    public int setEmployeeId()
    {
        this.EmployeeId = EmployeeId;
    }
    public Subject getSubject(String Subject)
    {
        return Subject;
    }
    public Subject setSubject()
    {
        this.Subject = Subject;
    }
    public Employee getEmployee(Employee Employee)
    {
        return Employee;
    }
    public Employee setEmployee()
    {
        this.Employee = Employee;
    }
}

