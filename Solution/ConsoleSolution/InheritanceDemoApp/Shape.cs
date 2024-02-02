namespace Drawing;

//concrete class
public   class Shape{
    public string color;
    public int width;
    public virtual void Draw(){
        Console.WriteLine("Drawing Shape");
    }

}