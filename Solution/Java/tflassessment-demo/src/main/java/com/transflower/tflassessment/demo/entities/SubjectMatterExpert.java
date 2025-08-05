
package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

import javax.security.auth.Subject;

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
    public Subject getSubject(Subject Subject)
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

    @Override
    public String toString()
    {
        return "SubjectMatterExpert{Id="+Id+",SubjectId="+SubjectId+",EmployeeId="+EmployeeId+",Subject='"+Subject+"',Employee='"+Employee+"'}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        SubjectMatterExpert other =(SubjectMatterExpert) obj;
        return Id==other.Id &&
               SubjectId == other.SubjectId &&
               EmployeeId == other.EmployeeId &&
               Employee != null ? Employee.equals (other.Employee):other.Employee == null &&
               Subject != null ? Subject.equals(other.Subject):other.Subject == null;
    }

    @Override 
    public int hashCode(){
        return Objects.hash(Id,SubjectId,EmployeeId,Subject,Employee);
    }

    @Override
    public void finalize() throws Throwable
    {
        try{
            System.out.println("Finalize method called!!"+this);
        }finally{
            super.finalize();
        }
    }

    @Override
    public Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }

    public static void main(String[] args) {
         
    }
}
