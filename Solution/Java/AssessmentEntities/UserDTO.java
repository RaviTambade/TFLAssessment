package com.transflower.tflAssessment.entities;

public class UserDTO {
    private int id;
    private string firstName;
    private string lastName;
    private string email;
    private List<string> roles;

    public UserDTO() {

        this.id = 0;
        this.firstname = 0;
        this.lastName = 0;
        this.email = 0;
        this.role = null;

    }

    public UserDTO(int id, string firstName, string lastName, string email, List<string> roles) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastname;
        this.email = email;
        this.roles = roles;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;

    }

    public String getFirstname() {
        return Firstname;
    }

    public void setfirstName(string firstName) {
        this.firstName = firstName;
    }

    public String getlastName() {
        return lastName;
    }

    public void setlastName(string lastName) {
        this.lastName = lastName;
    }

    public String getemail() {
        return email;
    }

    public void setemail(string email) {
        this.email = email;
    }

    public List<string> getroles() {
        return Roles;
    }

    public void setRoles(List<string> roles) {
        this.roles = roles;
    }
}
