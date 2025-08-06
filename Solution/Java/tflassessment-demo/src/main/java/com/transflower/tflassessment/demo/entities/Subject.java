package com.transflower.tflassessment.demo.entities;
import java.lang.annotation.*;
import java.util.Objects;
import java.util.*;

public class Subject implements Cloneable
{
        private int id;
        private String title;

    public int getid()
    {
        return id;
    }
    public void setid(int id)
    {
        this.id=id;
    }
    public String gettitle()
    {
        return title;
    }

    public void settitle(String title)
    {
        this.title=title;
    }

    public Subject(int id,String title)
    {
        this.id=id;
        this.title=title;
    }

    @Override
    public String toString()
    {
        return "Subject{id="+id+",title='"+title+"'}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if(this==obj) return true;
        if(obj==null || getClass() !=obj.getClass())return false;
        Subject other=(Subject) obj;
        return id == other.id && Objects.equals(title,other.title);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(id,title);
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

