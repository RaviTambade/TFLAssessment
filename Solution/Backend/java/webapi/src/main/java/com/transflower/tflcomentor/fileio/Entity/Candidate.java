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

public class Candidate {

    private int id;
    private String name;
    private String email;
    private String appliedPosition;
    private int skillsMatch;
    private String experienceLevel;
    private int assessmentScore;
    private String interviewStatus;
    private String applicationDate;
}