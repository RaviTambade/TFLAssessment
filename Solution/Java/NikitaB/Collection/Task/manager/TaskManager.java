
public class TaskManager {
    
    public String task;
    private int id;
    private String description;
    private boolean isComplete;

    public TaskManager(){
        task="";
        id=0;
        description="";
        isComplete=true;
    }
    public TaskManager(String task,int id,String description,boolean isComplete){
        this.task=task;
        this.id=id;
        this.description=description;
        this.isComplete=isComplete;
    }
    
    public String getTask(){
        return task;
    }
    public void setTask(String task){
        this.task=task;
    }

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }

    public String getDescription(){
        return description;
    }
    public void setDescription(String description){
        this.description=description;
    }

    public boolean getIsComplete(){
        return isComplete;
    }
    public void setIsComplete(boolean complete){
        this.isComplete=complete;
    }

    @Override
    public String toString(){
        return ("ID : "+id+" , "+"Task : "+task+" , "+"Description : "+description+" , "+"Completed : "+isComplete);
    }

}
