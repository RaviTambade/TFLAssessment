package com.transflower.tflcomentor.fileio.repository;


import java.util.List;
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

    @Override
    public List<Notification> showAdminNotification(){
        DataIO notificationFile = new DataIOImpl();
        try{
            List<Notification> notifications = notificationFile.deserialize("Data/notifications/adminNotifications.json",Notification.class);
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
                dataIO.deserialize("Data/notifications/adminNotifications.json", Notification.class);

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
            List<Notification> notifications = notificationFile.deserialize("Data/notifications/mentorNotifications.json",Notification.class);
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
                dataIO.deserialize("Data/notifications/mentorNotifications.json", Notification.class);

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
            List<Notification> notifications = notificationFile.deserialize("Data/notifications/recruiterNotifications.json",Notification.class);
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
            dataIO.deserialize("Data/notifications/recruiterNotifications.json", Notification.class);

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
            List<Notification> notifications = notificationFile.deserialize("Data/notifications/smeNotifications.json",Notification.class);
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
            dataIO.deserialize("Data/notifications/smeNotifications.json", Notification.class);

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
            List<Notification> notifications = notificationFile.deserialize("Data/notifications/studentNotification.json",Notification.class);
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
            dataIO.deserialize("Data/notifications/studentNotification.json", Notification.class);

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
            List<LearningCurve> learningCurve = notificationFile.deserialize("Data/skills/learningCurveData.json",LearningCurve.class);
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
            List<SkillGap> gap = notificationFile.deserialize("Data/skills/skillGapAnalysis.json",SkillGap.class);
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
            List<SkillRequirement> skills = notificationFile.deserialize("Data/skills/skillRequirements.json",SkillRequirement.class);
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
            List<Candidate> candidates = notificationFile.deserialize("Data/users/candidates.json",Candidate.class);
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
                dataIO.deserialize("Data/users/candidates.json", Candidate.class);

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
            List<Member> members = notificationFile.deserialize("Data/users/members.json",Member.class);
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
                dataIO.deserialize("Data/users/members.json", Member.class);

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
            List<Mentee> mentees = notificationFile.deserialize("Data/users/mentees.json",Mentee.class);
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
                dataIO.deserialize("Data/users/mentees.json", Mentee.class);

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
            List<AssessmentMetrics> assesments = notificationFile.deserialize("Data/assessmentMetrics.json",AssessmentMetrics.class);
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
                dataIO.deserialize("Data/assessmentMetrics.json", AssessmentMetrics.class);

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
            List<CandidatePerformance> performance = notificationFile.deserialize("Data/candidatePerformance.json",CandidatePerformance.class);
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
                dataIO.deserialize("Data/candidatePerformance.json", CandidatePerformance.class);

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
            List<JobOpenings> opening = notificationFile.deserialize("Data/jobOpenings.json",JobOpenings.class);
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
                dataIO.deserialize("Data/jobopenings.json", JobOpenings.class);

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
            List<MemberActivities> activity = notificationFile.deserialize("Data/memberActivities.json",MemberActivities.class);
            return activity;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MemberActivities getMemberActivitiesById(int id) {

        DataIO dataIO = new DataIOImpl();

        List<MemberActivities> activities =dataIO.deserialize("Data/memberActivities.json", MemberActivities.class);

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
            List<MenteeGrowth> growth = notificationFile.deserialize("Data/menteeGrowths.json",MenteeGrowth.class);
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
            List<MentorshipActivities> activity = notificationFile.deserialize("Data/mentorshipActivities.json",MentorshipActivities.class);
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
                dataIO.deserialize("Data/mentorshipActivities.json", MentorshipActivities.class);

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
            List<RolePermissions> permission = notificationFile.deserialize("Data/rolePermissions.json",RolePermissions.class);
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
                dataIO.deserialize("Data/rolePermissions.json", RolePermissions.class);

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
            List<ScheduledAssessment> permission = notificationFile.deserialize("Data/ScheduledAssessment.json",ScheduledAssessment.class);
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
                dataIO.deserialize("Data/ScheduledAssessment.json", ScheduledAssessment.class);

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
            List<StudentResult> result = notificationFile.deserialize("Data/studentResult.json",StudentResult.class);
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
                dataIO.deserialize("Data/studentResult.json", StudentResult.class);

        for (StudentResult studentResult : studentResults) {
            if (studentResult.getId() == id) {
                return studentResult;
            }
        }

        return null;
    }
}
