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

public class SkillGap {
    private String skill;
    private int candidatesLacking;
    private int averagePerformance;
    private String priority;
}
