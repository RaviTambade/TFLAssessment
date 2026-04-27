package com.transflower.tflassessment.entities;

public class CandidateAssessmentHistory {
    
    private int assessmentId;
    private int candidateId;
    private int score;
    private String subjectTitle;

    public CandidateAssessmentHistory()
    {

    }
    public CandidateAssessmentHistory(int assessmentid,int CandidateId,int Score,String SubjectTitle)
    {
        this.assessmentId=assessmentid;
        this.candidateId=CandidateId;
        this.score=Score;
        this.subjectTitle=SubjectTitle;
    }

    public int getAssementId()
    {
        return assessmentId;  
    }
    public void setAssessmentId(int assessmentId)
    {
        this.assessmentId=assessmentId;
    }

    public int getCandidateId()
    {
        return candidateId;
    }
    public void setCandidateId(int candidateId)
    {
        this.candidateId=candidateId;
    }
    
    public int getScore()
    {
        return score;
    }
    public void setScore(int score)
    {
        this.score=score;
    }

    public String getSubjectTitle()
        {
            return subjectTitle;
        }
    public void setSubjectTitle(String subjectTitle)
    {
        this.subjectTitle=subjectTitle;
    }


    @Override
    public String toString()
    {
        return "CandidateAssessmentHistory{assessmentId='" + assessmentId + "', candidateId='" + candidateId + "', score='" + score + "', subjectTitle='" + subjectTitle + "'}";
    }

}
