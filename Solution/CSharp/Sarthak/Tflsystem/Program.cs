// See https://aka.ms/new-console-template for more information
using Assesment.Entities;
using Persistance;

int choice = 0;
do
{
    Uimanger u = new Uimanger();
    u.showMenu();
    choice = u.GetChoice();
    switch (choice)
    {
        case 1:
            {
                string fileName = "questions.json";
                JsonFileManager mg = new JsonFileManager();
                List<Question> allRetriveQuestionsFromFile = mg.DeSerialize(fileName);

                Question thequestion = u.GetQuestion();

                QuestionBank questionbank = new QuestionBank();
                questionbank.questions = allRetriveQuestionsFromFile; //assigning the list of questions from file to questionbank
                questionbank.InsertQuestion(thequestion);

                mg.Serialize(questionbank.questions, fileName);
            }
            break;

        case 2:
            {
                string fileName = "questions.json";
                JsonFileManager mg = new JsonFileManager();
                List<Question> allRetriveQuestionsFromFile = mg.DeSerialize(fileName);
                QuestionBank questionbank = new QuestionBank();
                questionbank.questions = allRetriveQuestionsFromFile; //assigning the list of questions from file to questionbank
                Console.WriteLine("Enter question to update based on Title");
                Question thequestion = u.GetQuestion();
                questionbank.UpdateQuestion(thequestion.Title, thequestion);
                mg.Serialize(questionbank.questions, fileName); 
                Console.WriteLine("Question updated successfully.");
            }
            break;
        case 3:
            {
                string fileName = "questions.json";
                JsonFileManager mg = new JsonFileManager();
                List<Question> allRetriveQuestionsFromFile = mg.DeSerialize(fileName);
               
                u.ShowQuestions(allRetriveQuestionsFromFile);
            }
            break;
        case 4:
            {
              
                string fileName = "questions.json";
                JsonFileManager mg = new JsonFileManager();
                List<Question> allRetriveQuestionsFromFile = mg.DeSerialize(fileName);

                QuestionBank questionbank = new QuestionBank();
                questionbank.questions = allRetriveQuestionsFromFile; //assigning the list of questions

                Console.WriteLine("Enter question of title to remove:  ");
                string questionTitle = Console.ReadLine();

                questionbank.RemoveQuestion(questionTitle);
                //after removing the question from the list, we need to serialize the updated list back to the file
                //so that the changes are saved
                mg.Serialize(questionbank.questions, fileName);
                Console.WriteLine("Question removed successfully.");
            }
            break;
        default:
            {
                Console.WriteLine("Invalid choice, please try again.");
            }
            break;
    }
} while (choice != 5);

public class JsonFileManager
{
    public JsonFileManager()
    {
    }

    public List<Question> DeSerialize(string fileName)
    {
        throw new NotImplementedException();
    }

    public void Serialize(List<Question> questions, string fileName)
    {
        throw new NotImplementedException();
    }
}