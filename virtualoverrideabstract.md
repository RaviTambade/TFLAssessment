# virtual, override, and abstract keywords used in object-oriented programming

1. **virtual**:
   - The `virtual` keyword is used to declare a method, property, or indexer in a base class that can be overridden in derived classes.
   - It allows a method to be redefined in a derived class.

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
```

2. **override**:
   - The `override` keyword is used in a derived class to extend or modify the behavior of a method, property, or indexer that is marked as `virtual` in the base class.
   - It provides a new implementation for a method inherited from a base class.

```csharp
public class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a circle.");
    }
}
```

3. **abstract**:
   - The `abstract` keyword is used to declare an abstract class or method.
   - An abstract method has no implementation in the base class and must be implemented by derived classes.
   - An abstract class cannot be instantiated directly; it serves as a blueprint for other classes.

```csharp
public abstract class Shape
{
    public abstract void Draw();
}
```

**Example:**

```csharp
// Abstract class with abstract method
public abstract class Shape
{
    // Abstract method
    public abstract void Draw();
}

// Concrete class inheriting from Shape
public class Circle : Shape
{
    // Overriding the abstract method
    public override void Draw()
    {
        Console.WriteLine("Drawing a circle.");
    }
}

// Concrete class inheriting from Shape
public class Rectangle : Shape
{
    // Overriding the abstract method
    public override void Draw()
    {
        Console.WriteLine("Drawing a rectangle.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Creating objects
        Shape circle = new Circle();
        Shape rectangle = new Rectangle();

        // Calling the overridden method
        circle.Draw(); // Output: Drawing a circle.
        rectangle.Draw(); // Output: Drawing a rectangle.
    }
}
```

In this example, `Shape` is an abstract class with an abstract method `Draw()`. Both `Circle` and `Rectangle` classes inherit from `Shape` and override the `Draw()` method to provide specific implementations. The `virtual` keyword is not used here, as abstract methods are implicitly virtual.