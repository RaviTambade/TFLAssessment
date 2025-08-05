
package transflower.tflassessment.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.transflower.tflAssessment.entities.UserRole;

public class User {

    private int id;
    private String aadharId;
    private String firstname;
    private String lastname;
    private String email;
    private String contactNumber;
    private String password;
    private List<UserRole> userRoles = new ArrayList<>();



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

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
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


@Override
public  toString String(){
return "userRole{"+
"id=" +id+
",adharId='"+aadharId+
",firstname='"+firstname+
",lastname='"+lastname+
",email='"+email+
",contactNumber'"+contactNumber+
",password'"+password+"''}";

}

}
@Override
public equal toequal(){
if (this== obj) return true;
if (obj == null || getClass() !=obj.getClass())return false;

userRole other = (UserRole) obj;
        return id ==  Uother.id &&
Objects.equals(adharId, other.adharId) &&
Objects.equals(firstname, other.firstname) &&
 Objects.equals(lastname, other.lastname);
{
 {   
}

    

}

       
    }












