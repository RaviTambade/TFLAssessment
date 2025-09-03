package tap.transflower.tflAssessment.entities;

import java.util.Arrays;
import java.util.Objects;

public class InterviewDetails implements Cloneable {
     private int id;
     private  String interviewDate;
     private  String interviewTime;
     private  String smeName;
     private  String candidateName;
     private  String subject;
     private  String [] criterias;

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


    @Override
    public String toString() {
        return "InterviewDetails{" + "id=" + id +", interviewDate='" + interviewDate + '\'' + ", interviewTime='" + interviewTime + '\'' +
                ", smeName='" + smeName + '\'' +
                ", candidateName='" + candidateName + '\'' +
                ", subject='" + subject + '\'' +
                ", criterias=" + Arrays.toString(criterias) +
                '}';
    }
 
    
    @Override
    public boolean equals(Object obj) {
    if (this == obj) return true;
     if (obj == null || getClass() != obj.getClass()) return false;
        InterviewDetails other = (InterviewDetails) obj;
        return id == other.id &&
         Objects.equals(interviewDate, other.interviewDate) &&
        Objects.equals(interviewTime, other.interviewTime) &&
         Objects.equals(smeName, other.smeName) &&
         Objects.equals(candidateName, other.candidateName) &&
         Objects.equals(subject, other.subject) &&
         Arrays.equals(criterias, other.criterias);
    }

@Override
public int hashCode() {
    return Objects.hash(id, interviewDate,interviewTime,smeName,candidateName,subject);
}

@Override
public Object clone() throws CloneNotSupportedException {
    return super.clone();
}

@Override
protected void finalize() throws Throwable {
    try {
    } finally {
        super.finalize();
    }
}
}
