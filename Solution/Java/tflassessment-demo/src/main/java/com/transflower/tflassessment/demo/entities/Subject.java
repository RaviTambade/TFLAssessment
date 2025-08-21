package com.transflower.tflassessment.demo.entities;
<<<<<<< HEAD

=======
>>>>>>> c81ec6a16a13bdccf5cf3696fcf98289e1387b90
import java.util.Objects;

public class Subject implements Cloneable {

<<<<<<< HEAD
    private int id;
    private String title;

    // No-argument constructor (important for frameworks like JDBC, JPA, etc.)
    public Subject() {
    }

    // Parameterized constructor
    public Subject(int id, String title) {
        this.id = id;
        this.title = title;
    }

    // Getters and Setters (follow Java naming conventions: camelCase)
    public int getId() {
=======
    public Subject() {
        this.id = 0;
        this.title = null;
    }
    public int getid()
    {
>>>>>>> c81ec6a16a13bdccf5cf3696fcf98289e1387b90
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
