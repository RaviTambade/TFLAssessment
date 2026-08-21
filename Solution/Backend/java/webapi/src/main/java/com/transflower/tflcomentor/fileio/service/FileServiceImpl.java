package com.transflower.tflcomentor.fileio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import com.transflower.tflcomentor.fileio.entity.Notification;
import com.transflower.tflcomentor.fileio.entity.RolePermissions;
import com.transflower.tflcomentor.fileio.entity.ScheduledAssessment;
import com.transflower.tflcomentor.fileio.entity.SkillGap;
import com.transflower.tflcomentor.fileio.entity.SkillRequirement;
import com.transflower.tflcomentor.fileio.entity.StudentResult;
import com.transflower.tflcomentor.fileio.repository.FileRepository;

@Service
public class FileServiceImpl implements FileService {
    
    @Autowired
    FileRepository dataRepository;

    public FileServiceImpl(FileRepository dataRepository){
        this.dataRepository = dataRepository;
    }

    @Override
    public List<Notification> getAdminNotifications() {
        return dataRepository.getAdminNotifications();
    }

    @Override
    public Notification getAdminNotificationById(int id) {
        return dataRepository.getAdminNotificationById(id);
    }

    @Override
    public List<Notification> getMentorNotifications() {
        return dataRepository.getMentorNotifications();
    }

    @Override
    public Notification getMentorNotificationById(int id) {
        return dataRepository.getMentorNotificationById(id);
    }

    @Override
    public List<Notification> getRecruiterNotifications() {
        return dataRepository.getRecruiterNotifications();
    }

    @Override
    public Notification getRecruiterNotificationById(int id) {
        return dataRepository.getRecruiterNotificationById(id);
    }

    @Override
    public List<Notification> getSmeNotifications() {
        return dataRepository.getSmeNotifications();
    }

    @Override
    public Notification getSmeNotificationById(int id) {
        return dataRepository.getSmeNotificationById(id);
    }

    @Override
    public List<Notification> getStudentNotifications() {
        return dataRepository.getStudentNotifications();
    }

    @Override
    public Notification getStudentNotificationById(int id) {
        return dataRepository.getStudentNotificationById(id);
    }

    @Override
    public List<LearningCurve> getLearningCurves() {
        return dataRepository.getLearningCurves();
    }

    @Override
    public List<SkillGap> getSkillGaps() {
        return dataRepository.getSkillGaps();
    }

    @Override
    public List<SkillRequirement> getSkillRequirements() {
        return dataRepository.getSkillRequirements();
    }

    @Override
    public List<Candidate> getCandidates(){
        return dataRepository.getCandidates();

    }

    @Override
    public Candidate getCandidateById(int id) {
        return dataRepository.getCandidateById(id);
    }

    @Override
    public List<Member> getMembers() {
        return dataRepository.getMembers();
    }

    @Override
    public Member getMemberById(int id) {
        return dataRepository.getMemberById(id);
    }

    @Override
    public List<Mentee> getMentees() {
        return dataRepository.getMentees();
    }

    @Override
    public Mentee getMenteeById(int id) {
        return dataRepository.getMenteeById(id);
    }

    @Override
    public List<AssessmentMetrics> getAssessmentMetrics() {
        return dataRepository.getAssessmentMetrics();
    }

    @Override
    public AssessmentMetrics getAssessmentMetricsById(int id) {
        return dataRepository.getAssessmentMetricsById(id);
    }

    @Override
    public List<CandidatePerformance> getCandidatePerformances() {
        return dataRepository.getCandidatePerformances();
    }

    @Override
    public CandidatePerformance getCandidatePerformanceById(int id) {
        return dataRepository.getCandidatePerformanceById(id);
    }

    @Override
    public List<JobOpenings> getJobOpenings() {
        return dataRepository.getJobOpenings();
    }

    @Override
    public JobOpenings getJobOpeningById(int id) {
        return dataRepository.getJobOpeningById(id);
    }

    @Override
    public List<MemberActivities> getMemberActivities() {
        return dataRepository.getMemberActivities();
    }

    @Override
    public MemberActivities getMemberActivityById(int id) {
        return dataRepository.getMemberActivityById(id);
    }

    @Override
    public List<MenteeGrowth> getMenteeGrowths() {
        return dataRepository.getMenteeGrowths();
    }

    @Override
    public List<MentorshipActivities> getMentorshipActivities() {
        return dataRepository.getMentorshipActivities();
    }

    @Override
    public MentorshipActivities getMentorshipActivitiesById(int id) {
        return dataRepository.getMentorshipActivitiesById(id);
    }

    @Override
    public List<RolePermissions> getRolePermissions() {
        return dataRepository.getRolePermissions();
    }

    @Override
    public RolePermissions getRolePermissionById(int id) {
        return dataRepository.getRolePermissionById(id);
    }

    @Override
    public List<ScheduledAssessment> getScheduledAssessments() {
        return dataRepository.getScheduledAssessments();
    }

    @Override
    public ScheduledAssessment getScheduledAssessmentById(int id) {
        return dataRepository.getScheduledAssessmentById(id);
    }

    @Override
    public List<StudentResult> getStudentsResults() {
        return dataRepository.getStudentsResults();
    }

    @Override
    public StudentResult getStudentResultById(int id) {
        return dataRepository.getStudentResultById(id);
    }
}