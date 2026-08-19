package com.transflower.tflcomentor.fileio.Entity;

import java.util.List;

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

public class JobOpenings {

    private int id;
    private String jobTitle;
    private String department;
    private List<String> requiredSkills;
    private int candidatesShortlisted;
    private int candidatesInterviewed;
    private int offersExtended;
    private int openPositions;
    private String status;
}