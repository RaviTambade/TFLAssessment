package com.transflower.tflassessment.entities;

public class ChangePasswordRequest {
    

    private String email;
    private String oldPassword;
    private String newPassword;

    public ChangePasswordRequest()
    {

    }
    public ChangePasswordRequest(String email,String oldPassword,String newPassword)
    {
        this.email=email;
        this.oldPassword=oldPassword;
        this.newPassword=newPassword;
    }

    public String getEmail()
    {
        return email;
    }
    public void setEmail(String email)
    {
        this.email=email;
    }
    public String getOldPassword()
    {
        return oldPassword;
    }
    public void setOldPassword(String oldPassword)
    {
        this.oldPassword=oldPassword;
    }
    public String getNewPassword()
    {
        return newPassword;
    }
    public void setNewPassword(String newPassword)
    {
        this.newPassword=newPassword;
    }
    
 @Override 
 public String toString()
 {
    return "ChangePasswordRequest{email='"+ email +"',oldPassword='"+oldPassword + " ',newPassword='"+newPassword +" '}";
 }
    
    
}
