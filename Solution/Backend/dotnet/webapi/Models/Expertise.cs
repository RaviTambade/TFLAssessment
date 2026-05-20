namespace backend.Models;
public class Expertise
{
    public int id {get;set;}

    public long user_id  {get;set;}

    public string runtime {get;set;}

    public string framework {get; set;}

    public string layer {get; set;}

    public string language {get; set;}
}