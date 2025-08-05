package com.transflower.tflAssessment.entities;

public class Employee {
    private int id;
    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private  String contact;
    private String role;    


    public Employee(){

        this.id=0;
        this.userId=0;
        this.firstName=null;
        this.lastName=null;
        this.email=null;
        this.contact=null;
        this.role=null;
    }


    public Employee(int id,int userId,String firstName,String lastName,String email,String contact,String role){

        this.id=id;
        this.userId=userId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.contact=contact;
        this.role=role;
    }


    public int getId(){
        return this.id;
    }

    public void setId(int id){

        this.id=id;
    }

    public int getUserId(){
        return this.userId;
    }

    public void setUserId(int uId){
        this.userId=uId;
    }

    public String getFirstName(){
        return this.firstName;
    }

    public void setFirstName(String fName){
        this.firstName = fName;
    }

    public String getLastName(){
        return this.lastName;
    }

    public void setLastName(String lName){
        this.lastName = lName;
    }

    public String getEmail(){
        return this.email;
    }

    public void setEmail(String email){
        this.email = email;
    }
    public String getContact(){
        return this.contact;
    }

    public void setContact(String con){
        this.contact = con;
    }

    public String getRole(){
        return this.role;
    }

    public void setRole(String role){
        this.role = role;
    }
}
