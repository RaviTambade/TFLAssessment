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

public class MenteeGrowth {

    private String menteeName;
    private String skillName;
    private int improvementPercentage;
    private String currentLevel;
    private String recommendedFocus;
}