
public class collection {
    public static void main(String[] args) {
        int [] studentScore=new int [5];

        for (int i = 0; i < 5; i++) 
        {
            studentScore[i]=78+i;
        }
         for (int i = 0; i < 5; i++) 
         {
            System.out.println("Marks scored by student id " + i +" at Index " + i + " = " + studentScore[i] + " value");
        }
    }
}
