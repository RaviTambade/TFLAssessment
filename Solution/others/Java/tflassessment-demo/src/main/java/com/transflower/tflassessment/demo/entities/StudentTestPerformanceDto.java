package com.transflower.tflassessment.demo.entities;

import java.util.List;
import java.util.Objects;

public class StudentTestPerformanceDto {

    private List<TestScoreDto> testScores;

    public List<TestScoreDto> getTestScores() {
        return testScores;
    }

    public void setTestScores(List<TestScoreDto> testScores) {
        this.testScores = testScores;
    }

    @Override
    public String toString() {
        return "StudentTestPerformanceDto{" + "testScores=" + testScores +'}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        StudentTestPerformanceDto other = (StudentTestPerformanceDto) obj;
        return Objects.equals(testScores, other.testScores);
    }

    @Override
    public int hashCode() {
        return Objects.hash(testScores);
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("StudentTestPerformanceDto is being garbage collected");
        } finally {
            super.finalize();
        }
    }
}
