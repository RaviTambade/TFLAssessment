package com.transflower.tflassessment.entities;

public class Concepts {

    private int id;
    private String title;
    private int subjectId;

    public Concepts(){

    }

    public Concepts(int id , String title , int subjectId)
    {
       this.id = id;
       this.title = title;
       this.subjectId = subjectId; 
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public int getSubjectId()
    {
        return subjectId;
    }

    public void setSubjectId(int subjectId)
    {
        this.subjectId = subjectId;
    }

    @Override
    public String toString()
    {
        return "Concepts{"+
        "Id="+id+
        ",Title="+title+
        ",SubjectId="+subjectId+'\''+
        '}';
    }
}
