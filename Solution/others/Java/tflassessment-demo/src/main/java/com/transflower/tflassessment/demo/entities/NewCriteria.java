package com.transflower.tflassessment.demo.entities;
import java.util.*;

public class NewCriteria {
    
     private String title;
        private int subjectId;


    public String getTitle(){
        return title;

    }

    public void setTitle(String title){
        this.title=title;
    }


    
    public int getSubjectId(){
        return subjectId;

    }

    public void setSubjectId(int subjectId){
        this.subjectId=subjectId;
    }
    
    @Override
       public String toString(){
         return "NewCriteria{title=" + title + ", subjectID is " + subjectId + "}" ;
    }

    @Override
       public boolean equals(Object obj) {
       if (this == obj) return true;
       if (obj == null || getClass() != obj.getClass()) return false;
        NewCriteria other = ( NewCriteria) obj;
        return subjectId == other.subjectId && Objects.equals(title, other.title);
      }
      
    @Override
    public int hashCode() {
    return Objects.hash(title,subjectId) ;
}
 
    @Override
    protected void finalize() throws Throwable
    {
        try{
            System.out.println("Finalize called for"+this);
        }finally
        {
            
        }
    }


@Override
public NewCriteria clone() throws CloneNotSupportedException {
    return (NewCriteria) super.clone();
    }
}


