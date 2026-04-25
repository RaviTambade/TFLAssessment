package com.transflower.tflassessment.demo.entities;
import java.util.*;
public class LoginResponse {
    
    private String token ;
    private User user ;

    public String getToken(){
       return token;
     }
 
    public void setToken(String token){
        this.token=token;
    }

   public User getUser(){
       return user;
   }
 
    public void setUser(User user){
        this.user=user;
      }

@Override
  public String toString(){
     return "LoginResponse{token ="+ token + " , user = " + user + "}";
  }

@Override
  public boolean equals(Object obj){
    if (this==obj) return true;
    if(obj==null || getClass() != obj.getClass()) return false;
     LoginResponse other = (LoginResponse) obj;
       return Objects.equals(token, other.token) && Objects.equals(user, other.user);     
  }   
  
@Override
public int hashCode() {
    return Objects.hash(token, user);
}

 @Override
    protected void finalize() throws Throwable
    {
        try{
            System.out.println("Finalize called for"+this);
        }finally
        {
            
        }
    }

@Override
public Object clone() throws CloneNotSupportedException {
    return super.clone();
}

}
