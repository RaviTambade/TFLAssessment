package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class TestStatusUpdate {

    private String status;

    public TestStatusUpdate() {
        this.status = "";
    }

    public TestStatusUpdate(String status) {
        this.status = status;
    }

  
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "TestStatusUpdate{" +
                "status='" + status  +
                '}';
    }

    @Override
    public boolean equals(Object object) {
        if (this == object)
            return true;
        if (!(object instanceof TestStatusUpdate))
            return false;
        TestStatusUpdate that = (TestStatusUpdate) object;
        return Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(status);
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
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
