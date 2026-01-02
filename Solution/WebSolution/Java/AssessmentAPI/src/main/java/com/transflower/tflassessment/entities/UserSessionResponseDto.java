package com.transflower.tflassessment.entities;

import java.time.LocalDateTime;

public class UserSessionResponseDto {
    
    private long SessionId;
    private long UserId;
    private LocalDateTime LoginTime;
    private LocalDateTime LogoutTime;
    private boolean Session_status;

    public UserSessionResponseDto(){
        this.SessionId=0;
        this.UserId=0;
        this.LoginTime=null;
        this.LogoutTime=null;
        this.Session_status=false;
        
    }

    public  UserSessionResponseDto(long SessionId,long UserId,LocalDateTime LoginTime,LocalDateTime LogoutTime,boolean Session_status){
            this.SessionId=SessionId;
            this.UserId=UserId;
            this.LoginTime=LoginTime;
            this.LogoutTime=LogoutTime;
            this.Session_status=Session_status;
    }



    public long getSessionId(){
        return SessionId;   
    } 

    public void SetSessionId(long SessionId){
        this.SessionId=SessionId;
    }

    public long getUserId(){
        return UserId;
    }
    public void  setUserId(long UserId){
        this.UserId=UserId;
    }

      public LocalDateTime getLoginTime(){
        return LoginTime;
    }

    public void setLoginTime(LocalDateTime LoginTime){
        this.LoginTime=LoginTime;
    }

    public LocalDateTime getLogoutTime(){
        return LogoutTime;
    }

    public void setLogoutTime(LocalDateTime LogoutTime){
        this.LogoutTime=LogoutTime;
    }

    public boolean getSession_status(){
        return Session_status;
    }
    public void setSession_status(boolean Session_status){
        this.Session_status=Session_status;
    }

    public String tostring(){
        return "UserSessionResponseDto{" +
        "SessionId=" + SessionId +
        ",userId=" + UserId +
        ", LoginTime =" + LoginTime + 
        ",LogoutTime=" + LogoutTime +
        ",Session_status=" + Session_status;

    }
    }




