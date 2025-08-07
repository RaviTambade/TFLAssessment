package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class Role {

    private int id;
    private String name;
    private String lob;

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

    public String getLob() {
        return lob;
    }

    public void setLob(String lob) {
        this.lob = lob;
    }

    public Role(int id, String name, String lob) {
        this.id = id;
        this.name = name;
        this.lob = lob;
    }
    

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Role other = (Role) obj;
        return id == other.id &&
                Objects.equals(name, other.name) &&
                Objects.equals(lob, other.lob);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, lob);
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for " + this);
        } finally {
            
        }
    }

    @Override
    public String toString() {
        return "Role{ id=" + id + " name=  " + name + " lob= " + lob + "}";
    }
}
