
namespace TFL.Maths;

public class MathEngine
{
    
    private const double Pi = 3.14159; // constant field

    private readonly int radius; // instance field

    public MathEngine(int r)
    {
        this.radius = r; // constructor to initialize instance field
    }

    public bool UpdateRadius(int newRadius)
    {
        if (newRadius > 0)
        {
            //this.radius = newRadius; // update instance field
            return true;
        }
        return false; // invalid radius
    }

}
