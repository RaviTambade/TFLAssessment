package com.tap.yash.repository;

import java.util.*;
import com.tap.yash.entity.*;

public class QuestionBank {
    
    private ArrayList<Question> questions = new ArrayList<Question>();

    public QuestionBank() {
        
     // initialization of QuestionBank object when the constrctor gets called 

    }
    
    public void add(Question question){
       questions.add(question);
    
    }

    public void remove(int questionId){
        questions.removeIf(q -> q.getid()== questionId);
        
    }

    public Question getQuestion(int questionid) {
        for (Question q : questions){
            if(q.getid()== questionid){
               return q;
            }
        }
         return null;
   }
   public void UpdateQuestion(int questionIDtoUpdate, Question updatedQuestion){
       for(int i = 0 ;i<questions.size();i++ ){
        if ( questions.get(i).getid() == questionIDtoUpdate){
             questions.set(i, updatedQuestion);
             return ;
 
           }
       }
   }
    
      public List<Question> getAllQuestions() {
        return questions;

        

      }

      public void getQuestion(Question updatedQuestion) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getQuestion'");
      }

     

   
}
