package com.transflower.tflcomentor.fileio.entity;

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

public class MemberActivities {

    private int id;
    private String memberName;
    private String role;
    private String activityType;
    private String description;
    private String timestamp;
    private String status;
}