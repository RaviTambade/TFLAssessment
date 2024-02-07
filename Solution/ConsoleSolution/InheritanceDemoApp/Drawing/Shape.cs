namespace Drawing;

//absract class

//abstract class enforces their abstract method to be 
//overrided in thier child classes
public abstract  class Shape{
    public string color;
    public int width;
    //Minium one method should be abstract
    public abstract void Draw();
}