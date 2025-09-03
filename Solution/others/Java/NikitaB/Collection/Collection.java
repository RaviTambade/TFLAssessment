import java.util.*;

//Collection,List ->ArrayList, LinkedList,Set->HashSet, TreeSet,Queue->PriorityQueue, ArrayDeque,Map->HashMap, TreeMap
public class Collection{
    public static void main(String[] args){
     ArrayList<String> tflStudents=new ArrayList<String>();
     tflStudents.add("Nikita");
     tflStudents.add("Sanika");
     tflStudents.add("Om");
     tflStudents.add("Sarthak");
     tflStudents.add("Pankaj");

     for(String names:tflStudents){
        System.out.println(names);
     }

     List<Integer> table = new ArrayList<Integer>();
     System.out.println("Enter the number whose table you want to print :");
     Scanner sc=new Scanner(System.in);
     int num=sc.nextInt();
     List<Integer> res=new ArrayList<Integer>();
     for(int i=1;i<=10;i++){
        table.add(num*i);
       // System.out.println(table);
     }
     System.out.println(table);
     
}
}
