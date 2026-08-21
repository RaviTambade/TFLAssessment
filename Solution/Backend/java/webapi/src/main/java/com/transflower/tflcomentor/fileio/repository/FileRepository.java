package com.transflower.tflcomentor.fileio.repository;

import java.util.List;

import com.transflower.tflcomentor.fileio.entity.Notification;
import com.transflower.tflcomentor.fileio.entity.RolePermissions;
import com.transflower.tflcomentor.fileio.entity.ScheduledAssessment;
import com.transflower.tflcomentor.fileio.entity.SkillGap;
import com.transflower.tflcomentor.fileio.entity.SkillRequirement;
import com.transflower.tflcomentor.fileio.entity.StudentResult;
import com.transflower.tflcomentor.fileio.entity.AssessmentMetrics;
import com.transflower.tflcomentor.fileio.entity.Candidate;
import com.transflower.tflcomentor.fileio.entity.CandidatePerformance;
import com.transflower.tflcomentor.fileio.entity.JobOpenings;
import com.transflower.tflcomentor.fileio.entity.LearningCurve;
import com.transflower.tflcomentor.fileio.entity.Member;
import com.transflower.tflcomentor.fileio.entity.MemberActivities;
import com.transflower.tflcomentor.fileio.entity.Mentee;
import com.transflower.tflcomentor.fileio.entity.MenteeGrowth;
import com.transflower.tflcomentor.fileio.entity.MentorshipActivities;


public interface FileRepository {
    
    
    List<Notification> getAdminNotifications();

    Notification getAdminNotificationById(int id);

    List<Notification> getMentorNotifications();

    Notification getMentorNotificationById(int id);

    List<Notification> getRecruiterNotifications();

    Notification getRecruiterNotificationById(int id);

    List<Notification> getSmeNotifications();

    Notification getSmeNotificationById(int id);

    List<Notification> getStudentNotifications();

    Notification getStudentNotificationById(int id);

    List<LearningCurve> getLearningCurves();

    List<SkillGap> getSkillGaps();

    List<SkillRequirement> getSkillRequirements();

    List<Candidate> getCandidates();
    
    Candidate getCandidateById(int id);

    List<Member> getMembers();

    Member getMemberById(int id);

    List<Mentee> getMentees();

    Mentee getMenteeById(int id);

    List<AssessmentMetrics> getAssessmentMetrics();
    
    AssessmentMetrics getAssessmentMetricsById(int id);

    List<CandidatePerformance> getCandidatePerformances();

    CandidatePerformance getCandidatePerformanceById(int id);

    List<JobOpenings> getJobOpenings();

    JobOpenings getJobOpeningById(int id);

    List<MemberActivities> getMemberActivities();

    MemberActivities getMemberActivityById(int id);

    List<MenteeGrowth> getMenteeGrowths();

    List<MentorshipActivities> getMentorshipActivities();

    MentorshipActivities getMentorshipActivitiesById(int id);

    List<RolePermissions> getRolePermissions();

    RolePermissions getRolePermissionById(int id);

    List<ScheduledAssessment> getScheduledAssessments();

    ScheduledAssessment getScheduledAssessmentById(int id);

    List<StudentResult> getStudentsResults();

    StudentResult getStudentResultById(int id);
}