package com.transflower.tflcomentor.fileio.Entity;
import java.util.Date;

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

public class Mentee {
    private int id;
    private String name;
    private String email;
    private String careerGoal;
    private Date joinDate;
    private int progress;
    private Date lastMeetingDate;
    private String status;
}
