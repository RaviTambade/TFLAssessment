package com.tap.assesmentDb.Entity;

//POJO class for Question entity
//Plain Old Java Object
public class Question {

    private String title;
    private int id;
    private int subjectId;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctAnswer;
    private int evaluationCriteria;

    public Question(){}
    public Question(String title, String optionA, String optionB, String optionC, String optionD, 
            String correctAnswer,
            int evaluationCriteria, int id, int subjectId) {
        this.title = title;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.correctAnswer = correctAnswer;

        this.evaluationCriteria = evaluationCriteria;
        this.id = id;
        this.subjectId = subjectId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectid) {
        this.subjectId = subjectid;
    }

    public String getOptionA() {
        return optionA;
    }

    public void setOptionA(String optionA) {
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
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public int getEvaluationCriteria() {
        return evaluationCriteria;
    }

    public void setEvaluationCriteria(int evaluationCriteria) {
        this.evaluationCriteria = evaluationCriteria;
    }

    @Override
    public String toString() {
        return "\n\nQuestion{" + "title=" + title + ", id=" + id + ", optionA=" + optionA +
                ", optionB=" + optionB +
                ", optionC=" + optionC +
                ", optionD=" + optionD +
                ", correctAnswer=" + correctAnswer +
                ", subject Id=" + subjectId +
                ", evaluationCriteria=" + evaluationCriteria +
            "}";
    }

}
