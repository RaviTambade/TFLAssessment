namespace upcommingassessments.Repositories;

//contract for data access operations related to assessments
//Specification
//Abstraction: 

// used for loose coupling between service layer and data access layer,
// allowing for easier testing and maintenance
public interface IAssessmentRepository
{
    bool AddAssessment(StudentAssessment assessment);   //abstract method for adding a new assessment
    bool UpdateAssessment(StudentAssessment assessment);
    bool DeleteAssessment(int assessmentId);
    List<StudentAssessment> GetUpcomingAssessments(int studentId);
    StudentAssessment? GetAssessmentById(int studentId, int assessmentId);
    
} 