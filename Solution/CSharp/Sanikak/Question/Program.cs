using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        QuestionBank bank = new QuestionBank();
        bool running = true;

        while (running)
        {
            Console.WriteLine("\n--- Question Bank Menu ---");
            Console.WriteLine("1. Add Question");
            Console.WriteLine("2. Edit Question");
            Console.WriteLine("3. Show Questions");
            Console.WriteLine("4. Remove Question");
            Console.WriteLine("5. Exit");
            Console.Write("Select an option: ");

            switch (Console.ReadLine())
            {
                case "1":
                    AddNewQuestion(bank);
                    break;
                case "2":
                    EditExistingQuestion(bank);
                    break;
                case "3":
                    bank.ShowQuestions();
                    break;
                case "4":
                    Console.Write("Enter question ID to remove: ");
                    int removeId = int.Parse(Console.ReadLine());
                    bank.RemoveQuestion(removeId);
                    break;
                case "5":
                    running = false;
                    Console.WriteLine("Exiting...");
                    break;
                default:
                    Console.WriteLine("Invalid option. Try again.");
                    break;
            }
        }
    }

    static void AddNewQuestion(QuestionBank bank)
    {
        Console.Write("Enter question text: ");
        string text = Console.ReadLine();

        List<string> options = new List<string>();
        for (int i = 0; i < 4; i++)
        {
            Console.Write($"Enter option {(char)('A' + i)}: ");
            options.Add(Console.ReadLine());
        }

        Console.Write("Enter correct answer (must match one of the options exactly): ");
        string correctAnswer = Console.ReadLine();

        bank.AddQuestion(text, options, correctAnswer);
    }

    static void EditExistingQuestion(QuestionBank bank)
    {
        Console.Write("Enter question ID to edit: ");
        int id = int.Parse(Console.ReadLine());

        Console.Write("Enter new question text: ");
        string newText = Console.ReadLine();

        List<string> newOptions = new List<string>();
        for (int i = 0; i < 4; i++)
        {
            Console.Write($"Enter new option {(char)('A' + i)}: ");
            newOptions.Add(Console.ReadLine());
        }

        Console.Write("Enter new correct answer (must match one of the new options): ");
        string newCorrectAnswer = Console.ReadLine();

        bank.EditQuestion(id, newText, newOptions, newCorrectAnswer);
    }
}
