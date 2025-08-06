package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class SubjectModel {
    private int Id;
    private String Title;

    public int getId(int Id){
        return Id;
    }
    public void setId(){
        this.Id=Id;
    }
    public String getTitle(String Title){
        return Title;
    }
    public void setTitle(){
        this.Title=Title;
    }

    @Override
    public String toString()
    {
        return "SubjectModel{Id="+Id+",Title='"+Title+"'}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        SubjectModel other = (SubjectModel) obj;
        return Id==other.Id &&
               Title==other.Title;

    }

    @Override
    public int hashCode(){
        return Objects.hash(Id,Title);
    }

    @Override
    public void finalize() throws Throwable
    {
        try{
            System.out.println("Finalized Called!!"+this);
        }finally{
          
        }
    }

    @Override
    public Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }
}
