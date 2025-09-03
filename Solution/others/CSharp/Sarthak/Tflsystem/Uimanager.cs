using Assesment.Entities;
using System;
namespace Persistance
{
    public class Uimanger
    {

        public void showMenu()
        {

            Console.WriteLine(" ____Main Menu____");
            Console.WriteLine("1. Add Question");
            Console.WriteLine("2. Edit Question");
            Console.WriteLine("3. Show Question");
            Console.WriteLine("4. Remove Question");
            Console.WriteLine("5. Exit");
        }
        public int GetChoice()
        {
            int choice;
            Console.WriteLine("Enter your choice: ");
            choice = int.Parse(Console.ReadLine());
            return choice;
        }

        public Question GetQuestion()
        {
            Question thequestion = new Question();

            Console.WriteLine("Enter title: ");
            thequestion.Title = Console.ReadLine();
            Console.WriteLine("Enter Option A: ");
            thequestion.Optiona = Console.ReadLine();
            Console.WriteLine("Enter Option B: ");
            thequestion.Optionb = Console.ReadLine();
            Console.WriteLine("Enter Option C: ");
            thequestion.Optionc = Console.ReadLine();
            Console.WriteLine("Enter Option D: ");
            thequestion.Optiond = Console.ReadLine();
            Console.WriteLine("Enter Answer: ");
            thequestion.Answer = Console.ReadLine();
            Console.WriteLine("Enter Evaluation Criteria: ");
            thequestion.EvaluationCriteria = Console.ReadLine();
            return thequestion;

        }

        public void ShowQuestions(List<Question> questions)
        {
            if (questions.Count == 0)
            {
                Console.WriteLine("No questions available.");
                return;
            }

            foreach (Question q in questions)
            {
                q.Display();
            }
        }
    }
}
