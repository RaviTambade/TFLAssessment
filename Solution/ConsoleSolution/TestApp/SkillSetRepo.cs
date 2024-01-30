namespace Assessment;

public class SkillSetRepository{

    //Member functions
    public bool Insert()
    {

        bool status=false;
        //code here
        return status;

    }
    public bool Update(){
        bool status=false;
        //code here
        return status;
    }
    public bool Delete(){
        bool status=false;
        //code here
        return status;
    }
    public List<SkillSet>  GetSkillSet(int empId){
        //Empty list
        List<SkillSet> skillSets=new List<SkillSet>();

        //Create individual SkillSet object
        SkillSet skillset1=new SkillSet();
        skillset1.skill="java";
        skillset1.rating=9;
        //Add newly created skillset to list

        skillSets.Add(skillset1);

        //Create individual SkillSet object
        SkillSet skillset2=new SkillSet();
        skillset2.skill="mysql";
        skillset2.rating=8;

        skillSets.Add(skillset2);

        //code here
        return skillSets;
    }
}