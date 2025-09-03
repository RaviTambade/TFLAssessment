import java.util.Scanner;
import java.util.*;


public class TaskOperation {
    ArrayList<TaskManager> tasks=new ArrayList<TaskManager>();
    Scanner sc=new Scanner(System.in);
    TaskManager task=new TaskManager();

    public void insertTask(){
        System.out.println("Enter the task id : ");
        task.setId(sc.nextInt());
        sc.nextLine();
        System.out.println("Enter the task : ");
        task.setTask(sc.nextLine());
        System.out.println("Enter the task description : ");
        task.setDescription(sc.nextLine());
        System.out.println("Is the task completed (true/false): ");
        task.setIsComplete(sc.nextBoolean());

        tasks.add(task);

    }

    public void deleteTask(int id){
       for(TaskManager tm:tasks){
        if(tm.getId()==id){
            tasks.remove(tm);
        }
       }
    }

    public void updateTask(int id){
    try{
       for(TaskManager tm:tasks){

        if(tm.getId()==id){
            tasks.remove(tm);
           
        TaskManager updatedTask=new TaskManager();
        updatedTask.setId(id);
        sc.nextLine();
        System.out.println("Enter the updated task : ");
        updatedTask.setTask(sc.nextLine());
        System.out.println("Enter the description : ");
        updatedTask.setDescription(sc.nextLine());
        System.out.println("Enter the completion status (true/false) : ");
        updatedTask.setIsComplete(sc.nextBoolean());
        tasks.add(updatedTask);
        }
    }
    }catch(Exception e){
            System.out.println(e);
        }
}

    public void displayTask(){
        for(TaskManager tm:tasks){
            System.out.println(tm);
        }
    }
}
