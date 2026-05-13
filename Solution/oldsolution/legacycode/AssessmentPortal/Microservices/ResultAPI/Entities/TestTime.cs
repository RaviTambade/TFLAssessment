namespace Transflower.TFLAssessment.Entities;
public class TestTime{
    public   int Day{get;set;}
    public  int Hour{get;set;}
    public int  Minutes{get;set;}
    public   int Month{get;set;}
    public  int Seconds{get;set;}
    public int  Year{get;set;}

    public override string ToString()
    {
        return this.Day+" "+this.Hour+" "+this.Minutes+" "+this.Month+" "+this.Seconds+" "+this.Year;
    }

}