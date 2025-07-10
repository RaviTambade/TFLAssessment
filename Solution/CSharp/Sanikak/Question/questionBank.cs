

using System;
using QuizApp;

public class QuestionBank
{
    private List<Question> questions = new List<Question>();
    private int nextId = 1;

    public void AddQuestion(string text, List<string> options, string correctAnswer)
    {
        if (!options.Contains(correctAnswer))
        {
            Console.WriteLine("Correct answer must be one of the provided options.");
            return;
        }

        questions.Add(new Question(nextId++, text, options, correctAnswer));
        Console.WriteLine("Question added successfully.");
    }

    public void EditQuestion(int id, string newText, List<string> newOptions, string newCorrectAnswer)
    {
        Question q = questions.Find(q => q.Id == id);
        if (q != null)
        {
            if (!newOptions.Contains(newCorrectAnswer))
            {
                Console.WriteLine("Correct answer must be one of the provided options.");
                return;
            }

            q.Text = newText;
            q.Options = newOptions;
            q.CorrectAnswer = newCorrectAnswer;
            Console.WriteLine("Question updated successfully.");
        }
        else
        {
            Console.WriteLine("Question not found.");
        }
    }

    public void ShowQuestions()
    {
        if (questions.Count == 0)
        {
            Console.WriteLine("No questions available.");
            return;
        }

        foreach (var q in questions)
        {
            Console.WriteLine(q);
        }
    }

    public void RemoveQuestion(int id)
    {
        Question q = questions.Find(q => q.Id == id);
        if (q != null)
        {
            questions.Remove(q);
            Console.WriteLine("Question removed successfully.");
        }
        else
        {
            Console.WriteLine("Question not found.");
        }
    }
}
