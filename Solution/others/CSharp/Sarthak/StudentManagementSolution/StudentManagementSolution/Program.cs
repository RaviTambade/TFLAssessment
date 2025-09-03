// See https://aka.ms/new-console-template for more information
// See https://aka.ms/new-console-template for more information
// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    static void Main()
    {
        int choice;
        Uimanager ui = new Uimanager();

        do
        {
            ui.showmenu();
            choice = ui.GetChoice();
            switch (choice)
            {
                case 1:
                    {
                        Console.WriteLine("Enter Student Id:");
                        int id = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Student Name:");
                        string name = Console.ReadLine();
                        Console.WriteLine("Enter Student Age:");
                        int age = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Student Department:");
                        string department = Console.ReadLine();

                        Student student = new Student(id, name, age, department);

                        break;
                    }
                case 2:
                    {
                        Console.WriteLine("Enter Student Id to search:");
                        int id = Convert.ToInt32(Console.ReadLine());
                        ui.SearchStudent(id);
                        break;
                    }
                case 3:
                    {

                        int id = Convert.ToInt32(Console.ReadLine());
                        ui.DeleteStudent(id);
                        Console.WriteLine("Enter Student Id to delete:");
                        break;
                    }
                case 4:
                    {
                        ui.EditStudent();
                        Console.WriteLine("Enter Student Id to view:");
                        break;
                    }
                case 5:
                    {
                        ui.ViewStudent();
                        break;
                    }
                case 6:
                    {
                        Console.WriteLine("Exiting the application.");
                        break;
                    }
                default:
                    {
                        Console.WriteLine("Invalid choice. Please try again.");
                        break;
                    }
            }
        } while (choice != 6);
    }
}



