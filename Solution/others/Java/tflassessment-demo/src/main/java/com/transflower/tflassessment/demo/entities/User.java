package com.transflower.tflassessment.demo.entities;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class User {
    private int id;
    private String aadharId;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private String password;

    private List<UserRole> userRoles = new ArrayList<>();



      public User( int id, String aadharId, String firstname, String lastname, String email, String contactNumber, String password) {
        this.id = id;
        this.aadharId = aadharId;
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.contactNumber = contactNumber;
        this.password = password;

    }
    public User() {
        this.id = 0;
        this.aadharId = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.contactNumber = "";
        this.password = "";
    }



    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAadharId() {
        return aadharId;
    }

    public void setAadharId(String aadharId) {
        this.aadharId = aadharId;
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

    public void setLastname(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(List<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

     public void addUserRole(List<UserRole> userRoles) {
           this.userRoles=userRoles;
        }

    

   @Override
public String toString() {
    return "User{" +
            "id=" + id +
            ", aadharId='" + aadharId + 
            ", firstname='" + firstName + 
            ", lastname='" + lastName + 
            ", email='" + email + 
            ", contactNumber='" + contactNumber + 
            ", password='" + password + 
            '}';
}

    @Override
public boolean equals(Object obj) {
    if (this == obj)
        return true;
    if (obj == null || getClass() != obj.getClass())
        return false;

    User other = (User) obj;
    return id == other.id &&
           Objects.equals(aadharId, other.aadharId) &&
           Objects.equals(firstName, other.firstName) &&
           Objects.equals(lastName, other.lastName) &&
           Objects.equals(email, other.email) &&
           Objects.equals(contactNumber, other.contactNumber) &&
           Objects.equals(password, other.password);
}


    @Override
    public int hashCode() {
        return Objects.hash(id, aadharId, firstName, lastName, email, contactNumber, password);

    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for " + this);
        } finally {
            super.finalize();

        }
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

        
    
        
    
        


