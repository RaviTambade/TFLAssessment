package com.tap.students.Entity;

public class Student {
    private int id;
    private String name;
    private String email;

    public Student(){
        id=0;
        name="abc";
        email="abc@gmail.com";
    }

    public Student(int id,String name,String email){
        this.id=id;
        this.name=name;
        this.email=email;
    }

    public void setID(int id){
        this.id=id;
    }

    public int getID(){
        return id;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getName(){
        return name;
    }

    public void setMail(String email){
        this.email=email;
    }

    public String getMail(){
        return email;
    }

    public String toString(){
        return ("ID :"+id +" "+"Name : "+name+" "+"E-mail : "+email);
    }
}
