public class Questions {
    private int id;
    private String title;
    private int subjectId;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctAnswer;
    private int evaluationCriteria;

    public Questions(){}
    public Questions(int id,int subjectId,int evaluationCriteria,String optionA,String optionB,String optionC,String optionD,String correctAnswer,String title){
        id=this.id;
        subjectId=this.subjectId;
        optionA=this.optionA;
        optionB=this.optionB;
        optionC=this.optionC;
        optionD=this.optionD;
        correctAnswer=this.correctAnswer;
        evaluationCriteria=this.evaluationCriteria;
        title=this.title;

    }

    public int getId(){
        return id;
    }
    public void setId(int id){
        id=this.id;
    }
    public String getTitle(){
        return title;
    }
    public void setTitle(string title){
        title=this.title;
    }
    
    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectid) {
        this.subjectId = subjectid;
    }

    public String getOptionA() {
        return optionA;
    }

    public void setOptionA(String optionA) {
        this.optionA = optionA;
    }

    public String getOptionB() {
        return optionB;
    }

    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }

    public String getOptionC() {
        return optionC;
    }

    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }

    public String getOptionD() {
        return optionD;
    }

    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public int getEvaluationCriteria() {
        return evaluationCriteria;
    }

    public void setEvaluationCriteria(int evaluationCriteria) {
        this.evaluationCriteria = evaluationCriteria;
    }



    
}
