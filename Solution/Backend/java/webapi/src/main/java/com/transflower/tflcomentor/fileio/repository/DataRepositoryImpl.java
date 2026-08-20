package com.transflower.tflcomentor.fileio.repository;


import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

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
import com.transflower.tflcomentor.fileio.FileIO.DataIO;
import com.transflower.tflcomentor.fileio.FileIO.DataIOImpl;
import com.transflower.tflcomentor.fileio.Entity.Member;
import com.transflower.tflcomentor.fileio.Entity.MemberActivities;
import com.transflower.tflcomentor.fileio.Entity.Mentee;
import com.transflower.tflcomentor.fileio.Entity.MenteeGrowth;
import com.transflower.tflcomentor.fileio.Entity.MentorshipActivities;

@Repository
public class DataRepositoryImpl implements DataRepository{

    @Value("${app.admin.notification.path}")
    private String adminNotificationPath;

    @Value("${app.mentor.notification.path}")
    private String mentorNotificationPath;

    @Value("${app.recruiter.notification.path}")
    private String recruiterNotificationPath;

    @Value("${app.sme.notification.path}")
    private String smeNotificationPath;

    @Value("${app.student.notification.path}")
    private String studentNotificationPath;

    @Value("${app.learning.curve.path}")
    private String learningCurvePath;

    @Value("${app.skill.gap.path}")
    private String skillGapPath;

    @Value("${app.skill.requirement.path}")
    private String skillRequirementPath;

    @Value("${app.candidates.path}")
    private String candidatesPath;

    @Value("${app.members.path}")
    private String membersPath;

    @Value("${app.mentees.path}")
    private String menteesPath;

    @Value("${app.assessment.metrics.path}")
    private String assessmentMetricsPath;

    @Value("${app.candidate.performance.path}")
    private String candidatePerformancePath;

    @Value("${app.job.openings.path}")
    private String jobOpeningsPath;

    @Value("${app.member.activities.path}")
    private String memberActivitiesPath;

    @Value("${app.mentee.growth.path}")
    private String menteeGrowthPath;

    @Value("${app.mentorship.activities.path}")
    private String mentorshipActivitiesPath;

    @Value("${app.role.permissions.path}")
    private String rolePermissionsPath;

    @Value("${app.scheduled.assessment.path}")
    private String scheduledAssessmentPath;

    @Value("${app.student.result.path}")
    private String studentResultPath;

    @Override
    public List<Notification> showAdminNotification(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Notification> notifications = notificationFile.deserialize(adminNotificationPath,Notification.class);
            return notifications;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Notification getAdminNotificationById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Notification> notifications =
                dataIO.deserialize(adminNotificationPath, Notification.class);

        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }

        return null;
    }

    @Override
    public List<Notification> showMentorNotification(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Notification> notifications = notificationFile.deserialize(mentorNotificationPath,Notification.class);
            return notifications;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Notification getMentorNotificationById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Notification> notifications =
                dataIO.deserialize(mentorNotificationPath, Notification.class);

        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<Notification> showRecruiterNotification(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Notification> notifications = notificationFile.deserialize(recruiterNotificationPath,Notification.class);
            return notifications;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Notification getRecruiterNotificationById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Notification> notifications =
            dataIO.deserialize(recruiterNotificationPath, Notification.class);

        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<Notification> showSmeNotification(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Notification> notifications = notificationFile.deserialize(smeNotificationPath,Notification.class);
            return notifications;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Notification getSmeNotificationById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Notification> notifications =
            dataIO.deserialize(smeNotificationPath, Notification.class);

        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<Notification> showStudentNotification(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Notification> notifications = notificationFile.deserialize(studentNotificationPath,Notification.class);
            return notifications;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Notification getStudentNotificationById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Notification> notifications =
            dataIO.deserialize(studentNotificationPath, Notification.class);

        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<LearningCurve> showLearningCurve(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<LearningCurve> learningCurve = notificationFile.deserialize(learningCurvePath,LearningCurve.class);
            return learningCurve;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<SkillGap> showSkillGap(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<SkillGap> gap = notificationFile.deserialize(skillGapPath,SkillGap.class);
            return gap;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<SkillRequirement> showSkillRequirement(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<SkillRequirement> skills = notificationFile.deserialize(skillRequirementPath,SkillRequirement.class);
            return skills;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Candidate> showCandidates(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Candidate> candidates = notificationFile.deserialize(candidatesPath,Candidate.class);
            return candidates;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Candidate getCandidateById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Candidate> candidates =
                dataIO.deserialize(candidatesPath, Candidate.class);

        for (Candidate candidate : candidates) {
            if (candidate.getId() == id) {
                return candidate;
            }
        }

        return null;
    }

    @Override
    public List<Member> showMember(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Member> members = notificationFile.deserialize(membersPath,Member.class);
            return members;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Member getMemberById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Member> memberIds = 
                dataIO.deserialize(membersPath, Member.class);

        for (Member memberId : memberIds) {
            if (memberId.getId() == id) {
                return memberId;
            }
        }

        return null;
    }

    @Override
    public List<Mentee> showMentee(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Mentee> mentees = notificationFile.deserialize(menteesPath,Mentee.class);
            return mentees;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Mentee getMenteeById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<Mentee> menteeIds = 
                dataIO.deserialize(menteesPath, Mentee.class);

        for (Mentee menteeId : menteeIds) {
            if (menteeId.getId() == id) {
                return menteeId;
            }
        }

        return null;
    }

    @Override
    public List<AssessmentMetrics> showAssessmentMetrics(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<AssessmentMetrics> assesments = notificationFile.deserialize(assessmentMetricsPath,AssessmentMetrics.class);
            return assesments;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public AssessmentMetrics getAssessmentMetricsById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<AssessmentMetrics> assesmentMetrics = 
                dataIO.deserialize(assessmentMetricsPath, AssessmentMetrics.class);

        for (AssessmentMetrics assesmentMetric : assesmentMetrics) {
            if (assesmentMetric.getId() == id) {
                return assesmentMetric;
            }
        }

        return null;
    }

    @Override
    public List<CandidatePerformance> showCandidatePerformance(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<CandidatePerformance> performance = notificationFile.deserialize(candidatePerformancePath,CandidatePerformance.class);
            return performance;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public CandidatePerformance getCandidatePerformanceById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<CandidatePerformance> candidatePerformances = 
                dataIO.deserialize(candidatePerformancePath, CandidatePerformance.class);

        for (CandidatePerformance candidatePerformance : candidatePerformances) {
            if (candidatePerformance.getId() == id) {
                return candidatePerformance;
            }
        }

        return null;
    }

    @Override
    public List<JobOpenings> showJobOpenings(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<JobOpenings> opening = notificationFile.deserialize(jobOpeningsPath,JobOpenings.class);
            return opening;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public JobOpenings getJobOpeningsById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<JobOpenings> jobOpenings = 
                dataIO.deserialize(jobOpeningsPath, JobOpenings.class);

        for (JobOpenings jobOpening : jobOpenings) {
            if (jobOpening.getId() == id) {
                return jobOpening;
            }
        }

        return null;
    }

    @Override
    public List<MemberActivities> showMemberActivities(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<MemberActivities> activity = notificationFile.deserialize(memberActivitiesPath,MemberActivities.class);
            return activity;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MemberActivities getMemberActivitiesById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<MemberActivities> activities =dataIO.deserialize(memberActivitiesPath, MemberActivities.class);

        for (MemberActivities memberActivity : activities) {
            if (memberActivity.getId() == id) {
                return memberActivity;
            }
        }

        return null;
    }

    @Override
    public List<MenteeGrowth> showMenteeGrowth(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<MenteeGrowth> growth = notificationFile.deserialize(menteeGrowthPath,MenteeGrowth.class);
            return growth;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<MentorshipActivities> showMentorshipActivities(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<MentorshipActivities> activity = notificationFile.deserialize(mentorshipActivitiesPath,MentorshipActivities.class);
            return activity;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MentorshipActivities getMentorshipActivitiesById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<MentorshipActivities> mentorActivities = 
                dataIO.deserialize(mentorshipActivitiesPath, MentorshipActivities.class);

        for (MentorshipActivities mentorActivity : mentorActivities) {
            if (mentorActivity.getId() == id) {
                return mentorActivity;
            }
        }

        return null;
    }

    @Override
    public List<RolePermissions> showRolePermissions(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<RolePermissions> permission = notificationFile.deserialize(rolePermissionsPath,RolePermissions.class);
            return permission;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public RolePermissions getRolePermissionById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<RolePermissions> rolePermissions = 
                dataIO.deserialize(rolePermissionsPath, RolePermissions.class);

        for (RolePermissions rolePermission : rolePermissions) {
            if (rolePermission.getId() == id) {
                return rolePermission;
            }
        }

        return null;
    }

    @Override
    public List<ScheduledAssessment> showScheduledAssessment(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<ScheduledAssessment> permission = notificationFile.deserialize(scheduledAssessmentPath,ScheduledAssessment.class);
            return permission;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public ScheduledAssessment getScheduledAssessmentById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<ScheduledAssessment> rolePermissions = 
                dataIO.deserialize(scheduledAssessmentPath, ScheduledAssessment.class);

        for (ScheduledAssessment rolePermission : rolePermissions) {
            if (rolePermission.getId() == id) {
                return rolePermission;
            }
        }

        return null;
    }

    @Override
    public List<StudentResult> showStudentResult(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<StudentResult> result = notificationFile.deserialize(studentResultPath,StudentResult.class);
            return result;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public StudentResult getStudentResultById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<StudentResult> studentResults = 
                dataIO.deserialize(studentResultPath, StudentResult.class);

        for (StudentResult studentResult : studentResults) {
            if (studentResult.getId() == id) {
                return studentResult;
            }
        }

        return null;
    }
}
