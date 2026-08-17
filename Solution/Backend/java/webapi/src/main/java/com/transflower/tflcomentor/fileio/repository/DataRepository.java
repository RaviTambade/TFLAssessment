package com.transflower.tflcomentor.fileio.repository;

import java.util.List;

import com.transflower.tflcomentor.fileio.Entity.Notification;
import com.transflower.tflcomentor.fileio.Entity.RolePermissions;
import com.transflower.tflcomentor.fileio.Entity.ScheduledAssessment;
import com.transflower.tflcomentor.fileio.Entity.SkillGap;
import com.transflower.tflcomentor.fileio.Entity.SkillRequirement;
import com.transflower.tflcomentor.fileio.Entity.StudentResult;
import com.transflower.tflcomentor.fileio.Entity.AssessmentMetrics;
import com.transflower.tflcomentor.fileio.Entity.Candidate;
import com.transflower.tflcomentor.fileio.Entity.CandidatePerformance;
import com.transflower.tflcomentor.fileio.Entity.JobOpenings;
import com.transflower.tflcomentor.fileio.Entity.LearningCurve;
import com.transflower.tflcomentor.fileio.Entity.Member;
import com.transflower.tflcomentor.fileio.Entity.MemberActivities;
import com.transflower.tflcomentor.fileio.Entity.Mentee;
import com.transflower.tflcomentor.fileio.Entity.MenteeGrowth;
import com.transflower.tflcomentor.fileio.Entity.MentorshipActivities;


public interface DataRepository {
    
    
    List<Notification> showAdminNotification();

    Notification getAdminNotificationById(int id);

    List<Notification> showMentorNotification();

    Notification getMentorNotificationById(int id);

    List<Notification> showRecruiterNotification();

    Notification getRecruiterNotificationById(int id);

    List<Notification> showSmeNotification();

    Notification getSmeNotificationById(int id);

    List<Notification> showStudentNotification();

    Notification getStudentNotificationById(int id);

    List<LearningCurve> showLearningCurve();

    List<SkillGap> showSkillGap();

    List<SkillRequirement> showSkillRequirement();

    List<Candidate> showCandidates();
    
    Candidate getCandidateById(int id);

    List<Member> showMember();

    Member getMemberById(int id);

    List<Mentee> showMentee();

    Mentee getMenteeById(int id);

    List<AssessmentMetrics> showAssessmentMetrics();
    
    AssessmentMetrics getAssessmentMetricsById(int id);

    List<CandidatePerformance> showCandidatePerformance();

    CandidatePerformance getCandidatePerformanceById(int id);

    List<JobOpenings> showJobOpenings();

    JobOpenings getJobOpeningsById(int id);

    List<MemberActivities> showMemberActivities();

    MemberActivities getMemberActivitiesById(int id);

    List<MenteeGrowth> showMenteeGrowth();

    List<MentorshipActivities> showMentorshipActivities();

    MentorshipActivities getMentorshipActivitiesById(int id);

    List<RolePermissions> showRolePermissions();

    RolePermissions getRolePermissionById(int id);

    List<ScheduledAssessment> showScheduledAssessment();

    ScheduledAssessment getScheduledAssessmentById(int id);

    List<StudentResult> showStudentResult();

    StudentResult getStudentResultById(int id);
}