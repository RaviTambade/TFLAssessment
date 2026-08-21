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

public class CandidatePerformance {

    private int id;
    private String candidateName;
    private String email;
    private String skillLevel;
    private int assessmentsTaken;
    private int averageScore;
    private String lastAssessmentDate;
    private String status;
}