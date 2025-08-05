package com.transflower.tflAssessment.entities;

public class UserDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private List<String> roles;

    public UserDTO() {

        this.id = 0;
        this.firstName = 0;
        this.lastName = 0;
        this.email = 0;
        this.role = null;

    }

    public UserDTO(int id, String firstName, String lastName, String email, List<String> roles) {

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getRoles() {
        return Roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
