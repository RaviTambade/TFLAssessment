using System;

namespace QuizApp
{

    public class Question
    {
        /*private int id;
        private string text;
        private List<string> options;
        private int correctAnswer;*/

        public int Id { get; }
        public string Text { get; set; }
        public List<string> Options { get; set; }
        public string CorrectAnswer { get; set; }


        public Question(int id, string text, List<string> options, string correctAnswer)
        {
            Id = id;
            Text = text;
            Options = options;
            CorrectAnswer = correctAnswer;
        }

        public override string ToString()
        {
            string optionsText = string.Join("\n", Options.Select((opt, idx) => $"{(char)('A' + idx)}. {opt}"));
        return $"ID: {Id}\nQuestion: {Text}\nOptions:\n{optionsText}\nCorrect Answer: {CorrectAnswer}\n";

        }


    }
}