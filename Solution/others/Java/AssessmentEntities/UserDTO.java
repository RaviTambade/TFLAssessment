package com.transflower.tflAssessment.entities;

public class UserDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private List<String> roles;

    public UserDTO() {

        this.id = 0;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
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
    @Override
    public String toString() {
        return "UserDTO{Id: "+id+"First Name: "+firstName+"Last= Name: "+lastName+"Email: "+email+"Roles: "+roles+"}";
    }

    @Override
    public boolean equals(Object obj){
      if(this == obj) {
        return true;
      }
      if(obj == null || this.getClass() != obj.getClass()) {
        return false;
      }
      UserDTO ud = (UserDTO) obj;
      if(this.id == ud.id &&
            (this.firstName == null ? ud.firstName == null: this.firstName.equals(ud.firstName)) &&
            (this.lastName == null ? ud.lastName == null: this.lastName.equals(ud.lastName)) &&
            (this.email == null ? ud.email == null: this.email.equals(ud.email)) &&
            Objects.equals(this.roles,ud.roles)) {
                return true;
            }
            else {
                return false;
            }
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.firstName, this.lastName, this.email, this.roles);
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        try {
            return new UserDTO(this.id, this.firstName, this.lastName, this.email, this.role);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public void finalize() throws Throwable{
        try {
            System.out.println("Finalize called for: "+this);
        } 
        finally {
            super.finalize();
        }
    }
}
