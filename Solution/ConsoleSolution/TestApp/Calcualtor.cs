namespace assignment;

public class Calculator
{
    
    double answer;


    public double Calculate(int num1, double number1, double number2)
    {
        
        switch(num1){
         case 1:
         {
               answer =  number1 + number2;

         }
         break;
    
         case 2:
        {
             answer =  number1 - number2;
        }
        break;
    
        case 3:
         {
             answer =  number1 * number2;
         }
         break;

        case 4:
        {
              answer =  number1 / number2;
        }
        break;
        
        }
        return answer;

    }
}



