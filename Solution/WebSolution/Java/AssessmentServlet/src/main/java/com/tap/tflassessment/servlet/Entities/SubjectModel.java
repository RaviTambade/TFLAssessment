package com.tap.tflassessment.servlet.Entities;

import java.util.Objects;

public class SubjectModel implements Cloneable{

    private int id;
    private String title;

    public SubjectModel() {}

    public SubjectModel(int id, String title) {
        this.id = id;
        this.title = title;
    }
    
    // Getters and Setters
    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }
    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title=title;
    }

    @Override
    public String toString(){
        return "SubjectModel{id="+id+",title='"+title+"'}";
    }

    @Override
    public boolean equals(Object obj){
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        SubjectModel other = (SubjectModel) obj;
        return id==other.id &&
                Objects.equals(title, other.title);
    }

    @Override
    public int hashCode(){
        return Objects.hash(id,title);
    }

    @Override
    public Object clone() throws CloneNotSupportedException{
        return super.clone();
    }
}