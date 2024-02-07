namespace Drawing;
public class Line:Shape{
     
     //Enforce overriding  
    public override void Draw(){
        Console.WriteLine("Drawing a Line" + this.color);    }
}