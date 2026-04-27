package com.transflower.tflassessment.demo.entities;

import java.time.LocalDateTime;
import java.util.Objects;

public class Test implements Cloneable {

    private int id;
    private String name;
    private LocalDateTime scheduledDate;
    private String status;


    public Test(int id, String name, LocalDateTime scheduledDate, String status) {
        this.id = id;
        this.name = name;
        this.scheduledDate = scheduledDate;
        this.status = status;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getScheduledDate() {
        return scheduledDate;
    }

    public void setScheduledDate(LocalDateTime scheduledDate) {
        this.scheduledDate = scheduledDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // toString
    @Override
    public String toString() {
        return "Test{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", scheduledDate=" + scheduledDate +
                ", status='" + status + '\'' +
                '}';
    }

    // equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Test other = (Test) obj;
        return id == other.id &&
                Objects.equals(name, other.name) &&
                Objects.equals(scheduledDate, other.scheduledDate) &&
                Objects.equals(status, other.status);
    }

    // hashCode
    @Override
    public int hashCode() {
        return Objects.hash(id, name, scheduledDate, status);
    }

    // clone
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    // finalize
    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for: " + this);
        } finally {
            super.finalize();
        }
    }
}
