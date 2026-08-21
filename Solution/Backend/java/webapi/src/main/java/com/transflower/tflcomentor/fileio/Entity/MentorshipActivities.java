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

public class MentorshipActivities {

    private int id;
    private String menteeName;
    private String activityType;
    private String description;
    private String date;
    private String completionStatus;
}