# Object-Oriented Programming (OOP) basics in C#:

1. **Classes and Objects**: 
    - A class is a blueprint for creating objects. It defines the data and behavior of the objects.
    - An object is an instance of a class.

```csharp
public class Person
{
    // Fields
    public string Name;
    public int Age;

    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hello, my name is {Name} and I'm {Age} years old.");
    }
}

// Creating an object of the Person class
Person person1 = new Person("Alice", 30);
person1.Introduce(); // Output: Hello, my name is Alice and I'm 30 years old.
```

2. **Encapsulation**:
    - Encapsulation is the bundling of data and methods that operate on the data within a single unit (i.e., class).
    - It hides the internal state of an object from the outside world and only exposes the necessary functionalities.

```csharp
public class BankAccount
{
    private decimal balance;

    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount;
    }

    public void Withdraw(decimal amount)
    {
        if (amount > 0 && balance >= amount)
            balance -= amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}
```

3. **Inheritance**:
    - Inheritance is a mechanism in which a new class inherits properties and behavior from an existing class (base class).

```csharp
public class Animal
{
    public void Eat()
    {
        Console.WriteLine("Animal is eating.");
    }

    public void Sleep()
    {
        Console.WriteLine("Animal is sleeping.");
    }
}

public class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Dog is barking.");
    }
}

// Creating an object of Dog class
Dog dog = new Dog();
dog.Eat(); // Output: Animal is eating.
dog.Sleep(); // Output: Animal is sleeping.
dog.Bark(); // Output: Dog is barking.
```

4. **Polymorphism**:
    - Polymorphism allows objects of different classes to be treated as objects of a common base class.
    - It enables methods to do different things based on the object that calls them.

```csharp
public class Shape
{
    public virtual void Draw()
    {
        Console.WriteLine("Drawing a shape.");
    }
}

public class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a circle.");
    }
}

public class Rectangle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a rectangle.");
    }
}

Shape shape = new Circle();
shape.Draw(); // Output: Drawing a circle.

shape = new Rectangle();
shape.Draw(); // Output: Drawing a rectangle.
```

These are some of the fundamental concepts of Object-Oriented Programming in C#. Understanding and mastering these concepts will lay a solid foundation for building more complex and scalable applications.