package com.transflower.tflassessment.entities;

import java.util.List;

public class UserRoleAssign {
    private int id;
    private String aadharId;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private List<Role> roles;

    public UserRoleAssign(){
        id=0;
        aadharId=null;
        firstName=null;
        lastName=null;
        email=null;
        contactNumber=null;
        roles=null;
    }

    public UserRoleAssign(int id,String aadharId,String firstName,String lastName,String email,String contactNumber,List<Role> roles){
        this.id=id;
        this.aadharId=aadharId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.contactNumber=contactNumber;
        this.roles=roles;
    }

    public void setId(int id){
        this.id=id;
    }
    public int getId(){
        return id;
    }

    public void setAadharId(String aadharId){
        this.aadharId=aadharId;
    }
    public String getAadharId(){
        return aadharId;
    }

    public void setFirstName(String firstName){
        this.firstName=firstName;
    }
    public String getFirstName(){
        return firstName;
    }

    public void setLastName(String lastName){
        this.lastName=lastName;
    }
    public String getLastName(){
        return lastName;
    }

    public void setEmail(String email){
        this.email=email;
    }
    public String getEmail(){
        return email;
    }

    public void setContactNumber(String contactNumber){
        this.contactNumber=contactNumber;
    }
    public String getContactNumber(){
        return contactNumber;
    }

    public void setRoles(List<Role> roles){
        this.roles=roles;
    }
    public List<Role> getRoles(){
        return roles;
    }

    public String toString(){
        return ("UserRoleAssign { Id = "+id+"AadharId = "+aadharId+"First Name = "+firstName+
                "Last Name = "+lastName+"Email = "+email+"Contact Number = "+contactNumber+
                "Roles = "+roles
        );
    }
}
