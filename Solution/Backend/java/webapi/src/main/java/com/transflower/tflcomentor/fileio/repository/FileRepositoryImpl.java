package com.transflower.tflcomentor.fileio.repository;


import java.util.List;
import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.fileio.entity.AssessmentMetrics;
import com.transflower.tflcomentor.fileio.entity.Candidate;
import com.transflower.tflcomentor.fileio.entity.CandidatePerformance;
import com.transflower.tflcomentor.fileio.entity.JobOpenings;
import com.transflower.tflcomentor.fileio.entity.LearningCurve;
import com.transflower.tflcomentor.fileio.entity.Notification;
import com.transflower.tflcomentor.fileio.entity.RolePermissions;
import com.transflower.tflcomentor.fileio.entity.ScheduledAssessment;
import com.transflower.tflcomentor.fileio.entity.SkillGap;
import com.transflower.tflcomentor.fileio.entity.SkillRequirement;
import com.transflower.tflcomentor.fileio.entity.StudentResult;
import com.transflower.tflcomentor.fileio.helper.FileManager;
import com.transflower.tflcomentor.fileio.helper.FileManagerImpl;
import com.transflower.tflcomentor.fileio.entity.Member;
import com.transflower.tflcomentor.fileio.entity.MemberActivities;
import com.transflower.tflcomentor.fileio.entity.Mentee;
import com.transflower.tflcomentor.fileio.entity.MenteeGrowth;
import com.transflower.tflcomentor.fileio.entity.MentorshipActivities;

@Repository
public class FileRepositoryImpl implements FileRepository{

    @Override
    public List<Notification> getAdminNotifications(){
        FileManager notificationFile = new FileManagerImpl();
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

        FileManager dataIO = new FileManagerImpl();

        List<Notification> notifications = dataIO.deserialize("Data/notifications/adminNotifications.json", Notification.class);
        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<Notification> getMentorNotifications(){
        FileManager notificationFile = new FileManagerImpl();
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
        FileManager dataIO = new FileManagerImpl();
        List<Notification> notifications = dataIO.deserialize("Data/notifications/mentorNotifications.json", Notification.class);
        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<Notification> getRecruiterNotifications(){
        FileManager notificationFile = new FileManagerImpl();
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
        FileManager dataIO = new FileManagerImpl();
        List<Notification> notifications = dataIO.deserialize("Data/notifications/recruiterNotifications.json", Notification.class);
        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<Notification> getSmeNotifications(){
        FileManager notificationFile = new FileManagerImpl();
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
        FileManager dataIO = new FileManagerImpl();
        List<Notification> notifications = dataIO.deserialize("Data/notifications/smeNotifications.json", Notification.class);

        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<Notification> getStudentNotifications(){
        FileManager notificationFile = new FileManagerImpl();
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
        FileManager dataIO = new FileManagerImpl();
        List<Notification> notifications = dataIO.deserialize("Data/notifications/studentNotification.json", Notification.class);
        for (Notification notification : notifications) {
            if (notification.getId() == id) {
                return notification;
            }
        }
        return null;
    }

    @Override
    public List<LearningCurve> getLearningCurves(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<LearningCurve> learningCurve = notificationFile.deserialize("Data/skills/learningCurveData.json",LearningCurve.class);
            return learningCurve;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<SkillGap> getSkillGaps(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<SkillGap> skillGap = notificationFile.deserialize("Data/skills/skillGapAnalysis.json",SkillGap.class);
            return skillGap;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<SkillRequirement> getSkillRequirements(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<SkillRequirement> skillRequirement = notificationFile.deserialize("Data/skills/skillRequirements.json",SkillRequirement.class);
            return skillRequirement;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Candidate> getCandidates(){
        FileManager notificationFile = new FileManagerImpl();
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
        FileManager dataIO = new FileManagerImpl();
        List<Candidate> candidates = dataIO.deserialize("Data/users/candidates.json", Candidate.class);
        for (Candidate candidate : candidates) {
            if (candidate.getId() == id) {
                return candidate;
            }
        }
        return null;
    }

    @Override
    public List<Member> getMembers(){
        FileManager notificationFile = new FileManagerImpl();
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
        FileManager dataIO = new FileManagerImpl();
        List<Member> memberIds = dataIO.deserialize("Data/users/members.json", Member.class);
        for (Member memberId : memberIds) {
            if (memberId.getId() == id) {
                return memberId;
            }
        }
        return null;
    }

    @Override
    public List<Mentee> getMentees(){
        FileManager notificationFile = new FileManagerImpl();
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
        FileManager dataIO = new FileManagerImpl();
        List<Mentee> menteeIds = dataIO.deserialize("Data/users/mentees.json", Mentee.class);
        for (Mentee menteeId : menteeIds) {
            if (menteeId.getId() == id) {
                return menteeId;
            }
        }
        return null;
    }

    @Override
    public List<AssessmentMetrics> getAssessmentMetrics(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<AssessmentMetrics> assesmentMetrics = notificationFile.deserialize("Data/assessmentMetrics.json",AssessmentMetrics.class);
            return assesmentMetrics;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public AssessmentMetrics getAssessmentMetricsById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<AssessmentMetrics> assesmentMetrics = dataIO.deserialize("Data/assessmentMetrics.json", AssessmentMetrics.class);
        for (AssessmentMetrics assesmentMetric : assesmentMetrics) {
            if (assesmentMetric.getId() == id) {
                return assesmentMetric;
            }
        }
        return null;
    }

    @Override
    public List<CandidatePerformance> getCandidatePerformances(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<CandidatePerformance> CandidatePerformance = notificationFile.deserialize("Data/candidatePerformance.json",CandidatePerformance.class);
            return CandidatePerformance;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public CandidatePerformance getCandidatePerformanceById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<CandidatePerformance> candidatePerformances = dataIO.deserialize("Data/candidatePerformance.json", CandidatePerformance.class);
        for (CandidatePerformance candidatePerformance : candidatePerformances) {
            if (candidatePerformance.getId() == id) {
                return candidatePerformance;
            }
        }
        return null;
    }

    @Override
    public List<JobOpenings> getJobOpenings(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<JobOpenings> jobOpening = notificationFile.deserialize("Data/jobOpenings.json",JobOpenings.class);
            return jobOpening;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public JobOpenings getJobOpeningById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<JobOpenings> jobOpenings = dataIO.deserialize("Data/jobopenings.json", JobOpenings.class);
        for (JobOpenings jobOpening : jobOpenings) {
            if (jobOpening.getId() == id) {
                return jobOpening;
            }
        }
        return null;
    }

    @Override
    public List<MemberActivities> getMemberActivities(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<MemberActivities> memberActivity = notificationFile.deserialize("Data/memberActivities.json",MemberActivities.class);
            return memberActivity;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MemberActivities getMemberActivityById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<MemberActivities> MemberActivities = dataIO.deserialize("Data/memberActivities.json", MemberActivities.class);
        for (MemberActivities memberActivity : MemberActivities) {
            if (memberActivity.getId() == id) {
                return memberActivity;
            }
        }
        return null;
    }

    @Override
    public List<MenteeGrowth> getMenteeGrowths(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<MenteeGrowth> menteeGrowth = notificationFile.deserialize("Data/menteeGrowths.json",MenteeGrowth.class);
            return menteeGrowth;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<MentorshipActivities> getMentorshipActivities(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<MentorshipActivities> mentorshipActivity = notificationFile.deserialize("Data/mentorshipActivities.json",MentorshipActivities.class);
            return mentorshipActivity;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MentorshipActivities getMentorshipActivitiesById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<MentorshipActivities> mentorshipActivities = dataIO.deserialize("Data/mentorshipActivities.json", MentorshipActivities.class);
        for (MentorshipActivities mentorshipActivity : mentorshipActivities) {
            if (mentorshipActivity.getId() == id) {
                return mentorshipActivity;
            }
        }
        return null;
    }

    @Override
    public List<RolePermissions> getRolePermissions(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<RolePermissions> rolePermission = notificationFile.deserialize("Data/rolePermissions.json",RolePermissions.class);
            return rolePermission;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public RolePermissions getRolePermissionById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<RolePermissions> rolePermissions = dataIO.deserialize("Data/rolePermissions.json", RolePermissions.class);
        for (RolePermissions rolePermission : rolePermissions) {
            if (rolePermission.getId() == id) {
                return rolePermission;
            }
        }
        return null;
    }

    @Override
    public List<ScheduledAssessment> getScheduledAssessments(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<ScheduledAssessment> scheduledAssessment = notificationFile.deserialize("Data/ScheduledAssessment.json",ScheduledAssessment.class);
            return scheduledAssessment;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public ScheduledAssessment getScheduledAssessmentById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<ScheduledAssessment> rolePermissions = dataIO.deserialize("Data/ScheduledAssessment.json", ScheduledAssessment.class);
        for (ScheduledAssessment rolePermission : rolePermissions) {
            if (rolePermission.getId() == id) {
                return rolePermission;
            }
        }
        return null;
    }

    @Override
    public List<StudentResult> getStudentsResults(){
        FileManager notificationFile = new FileManagerImpl();
        try{
            List<StudentResult> studentResult = notificationFile.deserialize("Data/studentResult.json",StudentResult.class);
            return studentResult;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public StudentResult getStudentResultById(int id) {
        FileManager dataIO = new FileManagerImpl();
        List<StudentResult> studentResults = dataIO.deserialize("Data/studentResult.json", StudentResult.class);
        for (StudentResult studentResult : studentResults) {
            if (studentResult.getId() == id) {
                return studentResult;
            }
        }
        return null;
    }
}
