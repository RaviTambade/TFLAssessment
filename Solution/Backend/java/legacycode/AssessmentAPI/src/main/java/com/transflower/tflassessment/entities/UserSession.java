package com.transflower.tflassessment.entities;

import java.time.LocalDateTime;

public class UserSession {
    
    private long id;
    private long userId;
    private LocalDateTime loginTime;
    private LocalDateTime logoutTime;
    private String sessionStatus;



    public UserSession(){
        this.id=0;
        this.userId=0;
        this.loginTime=null;
        this.logoutTime=null;
        this.sessionStatus=null;
        

    }

    public UserSession(long id,long userId,LocalDateTime loginTime,LocalDateTime logoutTime,String sessionStatus ){

        this.id=id;
        this.userId=userId;
        this.loginTime=loginTime;
        this.logoutTime=logoutTime;
        this.sessionStatus=sessionStatus;
    }


    public long  getId(){
        return id;
    }

    public void setId(long id){
        this.id=id;
    }

      public long  getuserId(){
        return userId;
    }

    public void setUserId(long userId){
        this.userId=userId;
    }

    public LocalDateTime getLoginTime(){
        return loginTime;
    }

    public void setLoginTime(LocalDateTime loginTime){
        this.loginTime=loginTime;
    }

    public LocalDateTime getLogoutTime(){
        return logoutTime;
    }

    public void setLogoutTime(LocalDateTime logoutTime){
        this.logoutTime=logoutTime;
    }

    public String getSessionStatus(){
        return sessionStatus;
    }

    public void setSessionStatus(String sessionStatus){
        this.sessionStatus=sessionStatus;
    }
    @Override

    public String toString(){
        return "UserSession{" +
        "Id =" + id +
        ",UserId=" + userId +
        ", LoginTime =" + loginTime + 
        ",LogoutTime=" + logoutTime +
        ",SessionStatus=" + sessionStatus;
    }
    
}
