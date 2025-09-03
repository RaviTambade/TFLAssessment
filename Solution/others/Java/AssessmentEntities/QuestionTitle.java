package com.Transflower.TFLAssessment.Entities;

import java.util.Objects;

public class QuestionTitle {

    private int id;
    private String title;

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

    public QuestionTitle(int id, String title) {
        this.id = id;
        this.title = title;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        QuestionTitle other = (QuestionTitle) obj;
        return id == other.id && Objects.equals(title, other.title);

    }

    @Override
    public int hashcode() {
        return Objects.hash(id, title);
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for " + this);
        } finally {
            super.finalize();
        }
    }

    @Override
    public String toString() {
        return "Question Title{id =" + id + ",title=" + title + "}";
    }
}
