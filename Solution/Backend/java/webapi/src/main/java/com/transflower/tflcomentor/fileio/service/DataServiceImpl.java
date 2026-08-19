package com.transflower.tflcomentor.fileio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import com.transflower.tflcomentor.fileio.Entity.Notification;
import com.transflower.tflcomentor.fileio.Entity.RolePermissions;
import com.transflower.tflcomentor.fileio.Entity.ScheduledAssessment;
import com.transflower.tflcomentor.fileio.Entity.SkillGap;
import com.transflower.tflcomentor.fileio.Entity.SkillRequirement;
import com.transflower.tflcomentor.fileio.Entity.StudentResult;
import com.transflower.tflcomentor.fileio.repository.DataRepository;

@Service
public class DataServiceImpl implements DataService {
    
    @Autowired
    DataRepository dataRepository;

    public DataServiceImpl(DataRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    @Override
    public List<Notification> showAdminNotification() {
        return dataRepository.showAdminNotification();
    }

    @Override
    public Notification getAdminNotificationById(int id) {
        return dataRepository.getAdminNotificationById(id);
    }

    @Override
    public List<Notification> showMentorNotification() {
        return dataRepository.showMentorNotification();
    }

    @Override
    public Notification getMentorNotificationById(int id) {
        return dataRepository.getMentorNotificationById(id);
    }

    @Override
    public List<Notification> showRecruiterNotification() {
        return dataRepository.showRecruiterNotification();
    }

    @Override
    public Notification getRecruiterNotificationById(int id) {
        return dataRepository.getRecruiterNotificationById(id);
    }

    @Override
    public List<Notification> showSmeNotification() {
        return dataRepository.showSmeNotification();
    }

    @Override
    public Notification getSmeNotificationById(int id) {
        return dataRepository.getSmeNotificationById(id);
    }

    @Override
    public List<Notification> showStudentNotification() {
        return dataRepository.showStudentNotification();
    }

    @Override
    public Notification getStudentNotificationById(int id) {
        return dataRepository.getStudentNotificationById(id);
    }

    @Override
    public List<LearningCurve> showLearningCurve() {
        return dataRepository.showLearningCurve();
    }

    @Override
    public List<SkillGap> showSkillGap() {
        return dataRepository.showSkillGap();
    }

    @Override
    public List<SkillRequirement> showSkillRequirement() {
        return dataRepository.showSkillRequirement();
    }

    @Override
    public List<Candidate> showCandidates(){
        return dataRepository.showCandidates();

    }

    @Override
    public Candidate getCandidateById(int id) {
        return dataRepository.getCandidateById(id);
    }

    @Override
    public List<Member> showMember() {
        return dataRepository.showMember();
    }

    @Override
    public Member getMemberById(int id) {
        return dataRepository.getMemberById(id);
    }

    @Override
    public List<Mentee> showMentee() {
        return dataRepository.showMentee();
    }

    @Override
    public Mentee getMenteeById(int id) {
        return dataRepository.getMenteeById(id);
    }

    @Override
    public List<AssessmentMetrics> showAssessmentMetrics() {
        return dataRepository.showAssessmentMetrics();
    }

    @Override
    public AssessmentMetrics getAssessmentMetricsById(int id) {
        return dataRepository.getAssessmentMetricsById(id);
    }

    @Override
    public List<CandidatePerformance> showCandidatePerformance() {
        return dataRepository.showCandidatePerformance();
    }

    @Override
    public CandidatePerformance getCandidatePerformanceById(int id) {
        return dataRepository.getCandidatePerformanceById(id);
    }

    @Override
    public List<JobOpenings> showJobOpenings() {
        return dataRepository.showJobOpenings();
    }

    @Override
    public JobOpenings getJobOpeningsById(int id) {
        return dataRepository.getJobOpeningsById(id);
    }

    @Override
    public List<MemberActivities> showMemberActivities() {
        return dataRepository.showMemberActivities();
    }

    @Override
    public MemberActivities getMemberActivitiesById(int id) {
        return dataRepository.getMemberActivitiesById(id);
    }

    @Override
    public List<MenteeGrowth> showMenteeGrowth() {
        return dataRepository.showMenteeGrowth();
    }

    @Override
    public List<MentorshipActivities> showMentorshipActivities() {
        return dataRepository.showMentorshipActivities();
    }

    @Override
    public MentorshipActivities getMentorshipActivitiesById(int id) {
        return dataRepository.getMentorshipActivitiesById(id);
    }

    @Override
    public List<RolePermissions> showRolePermissions() {
        return dataRepository.showRolePermissions();
    }

    @Override
    public RolePermissions getRolePermissionById(int id) {
        return dataRepository.getRolePermissionById(id);
    }

    @Override
    public List<ScheduledAssessment> showScheduledAssessment() {
        return dataRepository.showScheduledAssessment();
    }

    @Override
    public ScheduledAssessment getScheduledAssessmentById(int id) {
        return dataRepository.getScheduledAssessmentById(id);
    }

    @Override
    public List<StudentResult> showStudentResult() {
        return dataRepository.showStudentResult();
    }

    @Override
    public StudentResult getStudentResultById(int id) {
        return dataRepository.getStudentResultById(id);
    }
}