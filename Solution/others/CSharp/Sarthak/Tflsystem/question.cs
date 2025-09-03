using System;
namespace Assesment.Entities
{

    [Serializable]
    public class Question
    {

        private string title;
        private string optiona;
        private string optionb;
        private string optionc;
        private string optiond;
        private string answer;
        private string evalutioncriteria;
// why we use getter and setter
// allow controlled access to a class's private data and prevent unauthorized modifications, 
// maintaining the integrity of the class's internal state.
        public string Title
        {
            get { return title; }
            set { title = value; }
        }
        public string Optiona
        {
            get { return optiona; }
            set { optiona = value; }
        }

        public string Optionb
        {
            get { return optionb; }
            set { optionb = value; }
        }

        public string Optionc
        {
            get { return optionc; }
            set { optionc = value; }
        }

        public string Optiond
        {
            get { return optiond; }
            set { optiond = value; }
        }
        public string Answer
        {
            get { return answer; }
            set { answer = value; }
        }
        public string EvaluationCriteria
        {
            get { return evalutioncriteria; }
            set { evalutioncriteria = value; }
        }

        public Question()
        {
        
        }
        //to initialize object instances with specific values provided during object creation
        public Question(string title, string optiona, string optionb, string optionc, string optiond, string answer, string evalutioncriteria)
        {
            this.title = title;
            this.optiona = optiona;
            this.optionb = optionb;
            this.optionc = optionc;
            this.optiond = optiond;
            this.answer = answer;
            this.evalutioncriteria = evalutioncriteria;
        }
        public void Display()
        {
            Console.WriteLine("Question: " + title);
            Console.WriteLine("Option a: " + optiona);
            Console.WriteLine("Option b: " + optionb);
            Console.WriteLine("Option c: " + optionc);
            Console.WriteLine("Option d: " + optiond);
            Console.WriteLine("Answer: " + answer);
            Console.WriteLine("Evaluation Criteria: " + evalutioncriteria);
        }
        // Tostring is used to convert the int variable to string 
        public override string ToString()
        {
            return "Question: {title}, Option: {option}, Answer: {answer}, Evaluation Criteria: {evalutioncriteria}";
        }

    }
}