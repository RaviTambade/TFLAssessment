package tap.transflower.tflAssessment.entities;

public class InterviewDetails{
     private int id;
     private  string interviewDate;
     private  string interviewTime;
     private  string smeName;
     private  string candidateName;
     private  string subject;
     private  string [] criterias;

    public int getid(){
        return id;
    }
    
    public void setid(int id){
        this.id=id;
    }

    public string interviewDate(){
        return interviewDate;
    }

    public void setinterviewDate(String date){
        this. interviewDate=date;
    }
    
    public String getinterviewTime(){
        return interviewTime;
    }
    
    public void  setinterviewTime(String interviewTime){
        this.interviewTime=interviewTime;
    }

   public String getsmeName(){
        return smeName;
    }

    public void setsmeName(String smeName ){
         this.smeName=smeName;
    }

   public  string getcandidateName(){
       return  candidateName;
   }

     public  void setcandidateName(String candidateName ){
      this.candidateName=candidateName;
   }
 
   public String getsubject(){
        return subject; 
   
   }
   
   public void setsubject(String subject){
       this.subject=subject;
   }

    public String[] getCriterias() {
        return criterias;
    }

    public void setCriterias(String[] criterias) {
        this.criterias = criterias;
    }


}
