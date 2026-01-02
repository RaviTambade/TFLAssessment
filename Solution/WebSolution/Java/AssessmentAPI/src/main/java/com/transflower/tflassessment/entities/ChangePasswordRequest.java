package com.transflower.tflassessment.entities;

public class ChangePasswordRequest {
    

    private String Email;
    private String OldPassword;
    private String NewPassword;

    public ChangePasswordRequest()
    {

    }
    public ChangePasswordRequest(String Email,String OldPassword,String NewPassword)
    {
        this.Email=Email;
        this.OldPassword=OldPassword;
        this.NewPassword=NewPassword;
    }

    public String getEmail()
    {
        return Email;
    }
    public void setEmail(String Email)
    {
        this.Email=Email;
    }
    public String getOldPassword()
    {
        return OldPassword;
    }
    public void setOldPassword(String OldPassword)
    {
        this.OldPassword=OldPassword;
    }
    public String getNewPassword()
    {
        return NewPassword;
    }
    public void setNewPassword(String NewPassword)
    {
        this.NewPassword=NewPassword;
    }
    
 @Override 
 public String toString()
 {
    return "ChangePasswordRequest{Email='"+ Email +"',OldPassword='"+OldPassword + " ',NewPassword='"+NewPassword +" '}";
 }
    
    
}
