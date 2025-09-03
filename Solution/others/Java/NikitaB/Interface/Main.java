public class Main {
    public static void main(String[]args){
        Math operation=new MathLogic();
        int sum=operation.add();
        int sub=operation.subtract();
        double div=operation.divide();
        int mul=operation.multiply();

        System.out.println("Sum is : "+sum);
        System.out.println("Subtraction is : "+sub);
        System.out.println("Division is : "+div);
        System.out.println("Multiplication is : "+mul);
    }
}
