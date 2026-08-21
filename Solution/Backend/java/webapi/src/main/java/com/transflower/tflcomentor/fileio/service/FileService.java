package com.transflower.tflcomentor.fileio.service;

import java.util.List;

import com.transflower.tflcomentor.fileio.Entity.AssessmentMetrics;
import com.transflower.tflcomentor.fileio.Entity.Candidate;
import com.transflower.tflcomentor.fileio.Entity.CandidatePerformance;
import com.transflower.tflcomentor.fileio.Entity.JobOpenings;
import com.transflower.tflcomentor.fileio.Entity.LearningCurve;
import com.transflower.tflcomentor.fileio.Entity.Notification;
import com.transflower.tflcomentor.fileio.Entity.RolePermissions;
import com.transflower.tflcomentor.fileio.Entity.ScheduledAssessment;
import com.transflower.tflcomentor.fileio.Entity.SkillGap;
import com.transflower.tflcomentor.fileio.Entity.SkillRequirement;
import com.transflower.tflcomentor.fileio.Entity.StudentResult;
import com.transflower.tflcomentor.fileio.Entity.Member;
import com.transflower.tflcomentor.fileio.Entity.MemberActivities;
import com.transflower.tflcomentor.fileio.Entity.Mentee;
import com.transflower.tflcomentor.fileio.Entity.MenteeGrowth;
import com.transflower.tflcomentor.fileio.Entity.MentorshipActivities;

public interface FileService {

    
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

