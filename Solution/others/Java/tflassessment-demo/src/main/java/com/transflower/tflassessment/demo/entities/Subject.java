package com.transflower.tflassessment.demo.entities;
import java.util.Objects;

public class Subject implements Cloneable {
    private int id;
    private String title;

    public Subject() {
        this.id = 0;
        this.title = null;
    }
    public int getid()
    {
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

    @Override
    public String toString() {
        return "Subject{id=" + id + ", title='" + title + "'}";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Subject other = (Subject) obj;
        return id == other.id && Objects.equals(title, other.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title);
    }

    // Clone support
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
