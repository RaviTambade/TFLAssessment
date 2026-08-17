package com.transflower.tflcomentor.fileio.Entity;


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

public class AssessmentMetrics {

    private int id;
    private String assessmentName;
    private String subject;
    private int totalCandidates;
    private double averageScore;
    private double passRate;
    private String difficultyLevel;
    private String createdDate;
}