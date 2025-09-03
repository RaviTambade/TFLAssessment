
using System.Collections.Generic;
using System.Threading.Tasks.Dataflow;
using Assesment.Entities;
namespace Persistance
{
    public class QuestionBank
    {
       public  List<Question> questions;  //same type of datatype stored in the questions

        public QuestionBank()
        {
            questions = new List<Question>(); //to store the list of the questions 
        }

        
       public void InsertQuestion(Question theQuestion)
        {
           
            if (theQuestion != null)
            {
               
                questions.Add(theQuestion);
                Console.WriteLine("Question added");
            }
            else
            {
                Console.WriteLine("Invalid question.");
            }
        }
        
        public void UpdateQuestion(string  title, Question thequestion)
         {
             
             foreach (Question qt in questions)
             {
                 if (qt.Title == title)
                 {
                     qt.Title = thequestion.Title;
                     qt.Optiona= thequestion.Optiona;
                     qt.Optionb= thequestion.Optionb;
                     qt.Optionc= thequestion.Optionc;
                     qt.Optiond= thequestion.Optiond;
                     qt.Answer = thequestion.Answer;
                     qt.EvaluationCriteria = thequestion.EvaluationCriteria;
                     Console.WriteLine("Question updated");
                     return;
                 }

             }

         }
        public List<Question> GetAllQuestions()
        {
            return questions; //returning the list of questions
        }
        public void RemoveQuestion(string questionTitle)
        {
            List<Question> AllRemoveQuestions = new List<Question>();
             for (int i = questions.Count - 1; i >= 0; i--)
            {
                if (questions[i].Title == questionTitle)  
                {
                    questions.Remove(questions[i]);
                    Console.WriteLine("question removed");
                    return;
                }

            }

            
               // foreach (var q in questions)
            // {
            //     if (q.Title == questionTitle)
            //     {
            //         questions.Remove(q);
            //         Console.WriteLine("Question removed");
            //         return;
            //     }
            // }
            //Unhandled exception. System.ArgumentOutOfRangeException: Index was out of range.
            //Must be non-negative and less than the size of the collection. (Parameter 'index')
            //jr i++ kela tr index match hota nahi tymula error yete 

            // questions.Remove(questionTitle);
            // Console.WriteLine("Question removed");
        }
    
    }
}