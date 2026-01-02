package com.transflower.tflassessment.entities;

public class CandidateAssessmentHistory {
    
    private int assessmentid;
    private int CandidateId;
    private int Score;
    private String SubjectTitle;

    public CandidateAssessmentHistory()
    {

    }
    public CandidateAssessmentHistory(int assessmentid,int CandidateId,int Score,String SubjectTitle)
    {
        this.assessmentid=assessmentid;
        this.CandidateId=CandidateId;
        this.Score=Score;
        this.SubjectTitle=SubjectTitle;
    }

    public int getAssementId()
    {
        return assessmentid;  
    }
    public void setAssessmentId(int assessmentid)
    {
        this.assessmentid=assessmentid;
    }

    public int getCandidateId()
    {
        return CandidateId;
    }
    public void setCandidateId(int CandidateId)
    {
        this.CandidateId=CandidateId;
    }
    
    public int getScore()
    {
        return Score;
    }
    public void setScore(int Score)
    {
        this.Score=Score;
    }

    public String getSubjectTitle()
        {
            return SubjectTitle;
        }
    public void setSubjectTitle(String SubjectTitle)
    {
        this.SubjectTitle=SubjectTitle;
    }


    @Override
    public String toString()
    {
        return "CandidateAssessmentHistory{assessmentid='" + assessmentid + "', CandidateId='" + CandidateId + "', Score='" + Score + "', SubjectTitle='" + SubjectTitle + "'}";
    }

}
