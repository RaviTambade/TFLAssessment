using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using QuizApp;

public static class FileIO
{
    private static string filePath = "questions.txt";

    public static void SaveToFile(List<Question> questions)
    {
        List<string> lines = new List<string>();

        foreach (var q in questions)
        {
            string optionsLine = string.Join("||", q.Options);
            lines.Add($"{q.Id}##{q.Text}##{optionsLine}##{q.CorrectAnswer}");
        }

        File.WriteAllLines(filePath, lines);
    }

    public static List<Question> LoadFromFile()
    {
        List<Question> questions = new List<Question>();

        if (!File.Exists(filePath))
            return questions;

        var lines = File.ReadAllLines(filePath);
        foreach (var line in lines)
        {
            string[] parts = line.Split("##");
            if (parts.Length == 4)
            {
                int id = int.Parse(parts[0]);
                string text = parts[1];
                List<string> options = parts[2].Split("||").ToList();
                string correctAnswer = parts[3];

                questions.Add(new Question(id, text, options, correctAnswer));
            }
        }

        return questions;
    }
}
