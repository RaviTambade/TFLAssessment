public class person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public person() // Default constructor
    {
        Name = "Unknown";
        Age = 0;
    }
    public person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public void DisplayInfo()
    {
        Console.WriteLine("Name" + Name);
        Console.WriteLine("Age: " + Age);
    }
    public override string ToString()
    {
        return $"Name: {Name}, Age: {Age}";
    }
}