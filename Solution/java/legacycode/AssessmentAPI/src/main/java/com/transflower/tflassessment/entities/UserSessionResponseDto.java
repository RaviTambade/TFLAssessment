package com.transflower.tflassessment.entities;

import java.time.LocalDateTime;

public class UserSessionResponseDto {
    
    private long sessionId;
    private long userId;
    private LocalDateTime loginTime;
    private LocalDateTime logoutTime;
    private boolean session_Status;

    public UserSessionResponseDto(){
        this.sessionId=0;
        this.userId=0;
        this.loginTime=null;
        this.logoutTime=null;
        this.session_Status=false;
        
    }

    public  UserSessionResponseDto(long sessionId,long userId,LocalDateTime loginTime,LocalDateTime logoutTime,boolean session_Status){
            this.sessionId=sessionId;
            this.userId=userId;
            this.loginTime=loginTime;
            this.logoutTime=logoutTime;
            this.session_Status=session_Status;
    }



    public long getSessionId(){
        return sessionId;   
    } 

    public void SetSessionId(long sessionId){
        this.sessionId=sessionId;
    }

    public long getUserId(){
        return userId;
    }
    public void  setUserId(long userId){
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

    public boolean getSession_status(){
        return session_Status;
    }
    public void setSession_status(boolean session_Status){
        this.session_Status=session_Status;
    }

    public String tostring(){
        return "UserSessionResponseDto{" +
        "SessionId=" + sessionId +
        ",userId=" + userId +
        ", LoginTime =" + loginTime + 
        ",LogoutTime=" + logoutTime +
        ",Session_status=" + session_Status;

    }
    }




