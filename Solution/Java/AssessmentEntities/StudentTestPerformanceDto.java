package com.transflower.tflassessment.Entities;

import java.util.*;

public class StudentTestPerformanceDto
{
    private List<TestScoreDto> testScores;


    public List<TestScoreDto> getTestScores()
    {
        return testScores;
    }

    public void setTestScores(List<TestScoreDto> testScores)
    {
        this.testScores = testScores;
    }
}

