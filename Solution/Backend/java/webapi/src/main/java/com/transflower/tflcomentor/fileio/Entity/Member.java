package com.transflower.tflcomentor.fileio.Entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Member {
    private int id;
    private String name;
    private String email;
    private String role;
    private String status;
    private Date joinDate;
    private Date lastLoginDate;
    private String department;
  
}
