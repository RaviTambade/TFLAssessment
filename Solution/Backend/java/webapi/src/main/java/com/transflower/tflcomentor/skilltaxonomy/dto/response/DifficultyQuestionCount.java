package com.transflower.tflcomentor.skilltaxonomy.dto.response;

public class DifficultyQuestionCount {
   
    private int count;
    private String difficulty;

    public DifficultyQuestionCount(String difficulty,int count) {
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
