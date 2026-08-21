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

public class StudentResult {

    private int id;
    private String assessmentName;
    private String subject;
    private int score;
    private int totalScore;
    private int percentage;
    private String completedDate;
    private String status;
}