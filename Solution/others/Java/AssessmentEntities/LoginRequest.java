package tap.transflower.tflAssessment.entities;

import java.util.Objects;

public class LoginRequest implements Cloneable{
    
    private String email;
    private String password ;


    public String getemail(){
        return email;
    }

    public void setemail(String email){
        this.email=email;
    }
 
  public String getpassword(){
        return password;
    }
 
    public void setpassword(String password){
        this. password= password;
    }



     @Override
     public String toString() {
         return "LoginRequest{email="+ email+ ", password = " + password +"}";
     }



     @Override
    public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
     LoginRequest other = ( LoginRequest) obj;
        return Objects.equals(email, other.email) && Objects.equals(password, other.password);
      }

@Override
public int hashCode() {
    return Objects.hash(email, password);
}

@Override
protected void finalize() throws Throwable {
    try {
    } finally {
        super.finalize();
    }
}


@Override
public Object clone() throws CloneNotSupportedException {
    return super.clone();
}



}

