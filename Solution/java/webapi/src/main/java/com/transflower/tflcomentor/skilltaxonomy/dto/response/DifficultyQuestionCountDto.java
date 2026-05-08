package com.transflower.tflcomentor.skilltaxonomy.dto.response;

public class DifficultyQuestionCountDto {
   
    private int count;
    private String difficulty;

    public DifficultyQuestionCountDto(String difficulty,int count) {
        this.count = count;
        this.difficulty = difficulty;
    }

    public int getCount() {
        return count;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }


}
