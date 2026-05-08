package com.transflower.tflcomentor.skilltaxonomy.dto.response;

public class ConceptQuestionCountDto {
    String concept;
    int question_count;

    public ConceptQuestionCountDto() {
    }

    public ConceptQuestionCountDto(String concept, int question_count) {
        this.concept = concept;
        this.question_count = question_count;
    }

    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    public int getQuestion_count() {
        return question_count;
    }

    public void setQuestion_count(int question_count) {
        this.question_count = question_count;
    }

    public String toString() {
        return "ConceptQuestionCountDto{" +
                "concept='" + concept + '\'' +
                ", question_count=" + question_count +
                '}';
    }
}
