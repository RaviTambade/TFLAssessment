// package com.transflower.tflassessment.Entities;
import java.lang.annotation.*;
import java.util.Objects;
import java.util.*;

public class Subject implements Cloneable
{
        private int Id;
        private String Title;

    public int getId()
    {
        return Id;
    }
    public void setId(int Id)
    {
        this.Id=Id;
    }
    public String getTitle()
    {
        return Title;
    }

    public void setTitle(String Title)
    {
        this.Title=Title;
    }

    public Subject(int Id,String Title)
    {
        this.Id=Id;
        this.Title=Title;
    }

    @Override
    public String toString()
    {
        return "Subject{Id="+Id+",Title='"+Title+"'}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if(this==obj) return true;
        if(obj==null || getClass() !=obj.getClass())return false;
        Subject other=(Subject) obj;
        return Id == other.Id && Objects.equals(Title,other.Title);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(Id,Title);
    }

    @Override
    public void finalize() throws Throwable
    {
        try{
            System.out.println("Finalize called for"+this);
        }
       finally{
            super.finalize();
        }
    }

    // @Override
    protected Object Clone()throws CloneNotSupportedException
    {
        return super.clone();
    }
}

