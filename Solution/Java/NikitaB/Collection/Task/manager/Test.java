import java.util.*;

public class Test {
    public static void main(String[]args){
        Scanner sc=new Scanner(System.in);
        TaskOperation tOperation=new TaskOperation();
        tOperation.insertTask();
        tOperation.displayTask();
        System.out.println("Enter the id to update the data : ");
        int id=sc.nextInt();
        tOperation.updateTask(id);
        tOperation.displayTask();
        tOperation.deleteTask(id);
    }
}
