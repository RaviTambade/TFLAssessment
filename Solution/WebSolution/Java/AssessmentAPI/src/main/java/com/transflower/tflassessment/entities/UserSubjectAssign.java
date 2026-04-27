package com.transflower.tflassessment.entities;

import java.util.List;

public class UserSubjectAssign {
    private int id;
    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private List<Subject> subjects;


    public UserSubjectAssign(){
        this.id=0;
        this.userId=0;
        this.firstName=null;
        this.lastName=null;
        this.email=null;
        this.contactNumber=null;
        this.subjects=null;
    }

    public UserSubjectAssign(int id,int userId,String firstName,String lastName,String contactNumber, String email,List<Subject> subjects){
        this.id=id;
        this.userId=userId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.contactNumber=contactNumber;
        this.subjects=subjects;

    }

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }

    public int getUserId(){
        return userId;
    }
    public void setUserId(int userId){
        this.userId=userId;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setfirstName(String firstName){
        this.firstName=firstName;
    }

    public String getLastName(){
        return lastName;
    }
    public void setLastName(String lastName){
        this.lastName=lastName;
    }    
    
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email=email;
    }

    public String getContactNumber(){
        return contactNumber;
    }

    public void setContactNumber( String contactNumber){
        this.contactNumber=contactNumber;
    }

    public List<Subject> getSubjects(){
        return subjects;
    } 
     public void setSubjects(List<Subject>subjects ){
            this.subjects=subjects;
     }

     public String toString(){
        return "UserSubjectAssign{" +
        ",id=" +id +
        ", userId=" + userId +
        ",firstName=" + firstName +
        ",lastName=" + lastName +
        ",email=" + email +
        ", contactNumber=" + contactNumber +
        ",subjects=" + subjects ;
        }
     }

    
