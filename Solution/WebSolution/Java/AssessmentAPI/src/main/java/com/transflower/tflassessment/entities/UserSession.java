package com.transflower.tflassessment.entities;

import java.time.LocalDateTime;
import java.util.Date;

public class UserSession {
    
    private long Id;
    private long UserId;
    private LocalDateTime LoginTime;
    private LocalDateTime LogoutTime;
    private String SessionStatus;



    public UserSession(){
        this.Id=0;
        this.UserId=0;
        this.LoginTime=null;
        this.LogoutTime=null;
        this.SessionStatus=null;
        

    }

    public UserSession(long Id,long UserId,LocalDateTime LoginTime,LocalDateTime Logouttime,String SessionStatus ){

        this.Id=Id;
        this.UserId=UserId;
        this.LoginTime=LoginTime;
        this.LogoutTime=LogoutTime;
        this.SessionStatus=SessionStatus;
    }


    @Override

    public String toString(){
        return "UserSession{" +
        "Id =" + Id +
        ",UserId=" + UserId +
        ", LoginTime =" + LoginTime + 
        ",LogoutTime=" + LogoutTime +
        ",SessionStatus=" + SessionStatus;
    }
    
}
