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

public class SkillRequirement {
    private String skill;
    private String requiredLevel;
    private int candidatesCovered;
    private int totalRequired;
    private int fillPercentage;
}
