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

public class ScheduledAssessment {

    private int id;
    private String name;
    private String subject;
    private String scheduledDate;
    private int duration;
    private int totalQuestions;
    private String status;
}