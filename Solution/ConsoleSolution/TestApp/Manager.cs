namespace Assessment;
public class Manager{
    private string department;
    private double target;
    private double achieved;
    private double incentive;
    private double basicSal;

    public Manager(){
       
    }


<<<<<<< HEAD
=======
     public string Department
    {
        get { return department; } 
        set { department= value; }  
    }
    
     public double Target{
        get;set;
     }

      public double Achieved
    {
        get { return achieved; } 
        set { achieved= value; }  
    }

      public double Incentive
    {
        get { return incentive; } 
        set { incentive= value; }  
    }

      public double BasicSalary
    {
        get { return basicSal; } 
        set { basicSal= value; }  
    }


    

    public double CalculateSalary(){
      //double TotalSalary;
     // TotalSalary=(basicSal+incentive*achieved);
     // return TotalSalary;

     double TotalSalary;
     if(achieved==0){
         incentive=0;
     }
     if(achieved >0 && achieved <=20){
        incentive=1000.00;  
     }

      if(achieved >20 && achieved <=50){
        incentive=1500.00;      
     }

     return  TotalSalary=(basicSal)+(incentive*achieved);

        
    }
>>>>>>> 716900fbf1d241bf15d21d5f10bc0ca18f69011e

}