package com.tap.repo.Entity;

public class Student {
    private String name;
    private int rollNo;
    private float percentage;

    public Student(){
        name="";
        rollNo=0;
        percentage=0;
    }

    public Student(String name,int rollNo,float percentage){
        this.name=name;
        this.rollNo=rollNo;
        this.percentage=percentage;
    }

    public void setName(String name){
        this.name=name;
    }
    public String getName(){
        return name;
    }

    public void setNumber(int rollno){
        this.rollNo=rollno;
    }
    public int getNumber(){
        return rollNo;
    }

    public void setPercentage(float per){
        this.percentage=per;
    }
    public float getPercentage(){
        return percentage;
    }

    public String toString(){
        return ("Name : "+name+" , "+"Roll Number : "+rollNo+" , "+"Percentage : "+percentage);
    }
}
