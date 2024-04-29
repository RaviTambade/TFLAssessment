# Basic C# syntax:

1. **Variables and Types**: In C#, you declare variables with a type followed by a variable name.

```csharp
int age = 25;
string name = "John";
double salary = 2500.50;
bool isEmployed = true;
```

2. **Control Structures**: C# supports common control structures like if-else statements, loops, and switch statements.

```csharp
if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}
else
{
    Console.WriteLine("You are a minor.");
}

for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

switch (age)
{
    case 18:
        Console.WriteLine("You just became an adult.");
        break;
    default:
        Console.WriteLine("You are not 18 yet.");
        break;
}
```

3. **Methods**: Methods are blocks of code that perform a specific task.

```csharp
public void Greet(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

Greet("Alice");
```

4. **Classes and Objects**: C# is an object-oriented language, so you can define classes to create objects.

```csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Introduce()
    {
        Console.WriteLine($"My name is {Name} and I'm {Age} years old.");
    }
}

Person person1 = new Person();
person1.Name = "Alice";
person1.Age = 30;
person1.Introduce();
```

5. **Arrays**: Arrays are used to store multiple values of the same type.

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
Console.WriteLine(numbers[0]); // Outputs: 1
```

6. **Strings**: Strings are sequences of characters.

```csharp
string greeting = "Hello";
string name = "Alice";
Console.WriteLine($"{greeting}, {name}!"); // Outputs: Hello, Alice!
```

7. **Exception Handling**: C# supports try-catch blocks for exception handling.

```csharp
try
{
    int result = 10 / 0; // This will throw a DivideByZeroException
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Cannot divide by zero.");
}
```

These are just some of the basic syntax elements of C#. As you become more familiar with the language, you'll encounter more advanced features and concepts.