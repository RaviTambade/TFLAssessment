package com.transflower.tflassessment.entities;

public class Concepts {

    private int Id;
    private String Title;
    private int SubjectId;

    public Concepts(){

    }

    public Concepts(int Id , String Title , int SubjectId)
    {
       this.Id = Id;
       this.Title = Title;
       this.SubjectId = SubjectId; 
    }

    public int getId()
    {
        return this.Id;
    }

    public void setId(int Id)
    {
        this.Id = Id;
    }

    public String getTitle()
    {
        return this.Title;
    }

    public void setTitle(String Title)
    {
        this.Title = Title;
    }

    public int getSubjectId()
    {
        return this.SubjectId;
    }

    public void setSubjectId(int SubjectId)
    {
        this.SubjectId = SubjectId;
    }

    @Override
    public String toString()
    {
        return "Concepts{"+
        "Id="+Id+
        ",Title="+Title+
        ",SubjectId="+SubjectId+'\''+
        '}';
    }
}
