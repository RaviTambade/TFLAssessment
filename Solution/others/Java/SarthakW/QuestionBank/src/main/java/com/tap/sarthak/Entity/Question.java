package com.tap.sarthak.Entity;

import java.lang.invoke.StringConcatException;

public class Question {

    private String title;
    private int id;
    private int subjectId;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String CorrectAnswer;
    private int EvaluationCritera;

    public Question() {

    }

    public Question(String title, String optionA, String optionB, String optionC, String optionD, String CorrectAnswer,
            int EvaluationCritera, int id, int subjectId) {
        this.title = title;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.CorrectAnswer = CorrectAnswer;
        this.EvaluationCritera = EvaluationCritera;
        this.id = id;
        this.subjectId = subjectId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOptionA() {
        return optionA;
    }

    public void settOptionA(String optionA) {
        this.optionA = optionA;
    }

    public String getOptionB() {
        return optionB;
    }

    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }

    public String getOptionC() {
        return optionC;
    }

    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }

    public String getOptionD() {
        return optionD;
    }

    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }

    public String getCorrectAnswer() {
        return CorrectAnswer;
    }

    public void setCorrectAAnswer(String CorrectAnswer) {
        this.CorrectAnswer = CorrectAnswer;
    }

    public int getEvaluationCritera() {
        return EvaluationCritera;
    }

    public void setEvaluationCritera(int EvaluationCritera)
    {
        this.EvaluationCritera = EvaluationCritera;
    }

    @Override
    public String toString() {
        return "\n\nQuestion{" + "title=" + title + ", id=" + id + ", optionA=" + optionA +
                ", optionB=" + optionB +
                ", optionC=" + optionC +
                ", optionD=" + optionD +
                ", correctAnswer=" + CorrectAnswer +
                ", subject Id=" + subjectId +
                ", evaluationCriteria=" + EvaluationCritera +
                "}";
    }
}
