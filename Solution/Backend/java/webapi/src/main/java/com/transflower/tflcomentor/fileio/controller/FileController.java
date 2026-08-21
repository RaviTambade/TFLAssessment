package com.transflower.tflcomentor.fileio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
import com.transflower.tflcomentor.fileio.service.FileService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/data")
public class FileController {
    
    @Autowired
    FileService dataService;

    public FileController(FileService dataService) {
        this.dataService = dataService;
    }

    //Admin Notification
    @GetMapping("/adminNotification")
    public List<Notification> getAdminNotifications(){
        return dataService.getAdminNotifications();
    }

    @GetMapping("/adminNotification/{id}")
    public Notification getAdminNotificationById(@PathVariable int id){
        return dataService.getAdminNotificationById(id);
    }

    //Mentor Notification
    @GetMapping("/mentorNotification")
    public List<Notification> getMentorNotifications(){
        return dataService.getMentorNotifications();
    }

    @GetMapping("/mentorNotification/{id}")
    public Notification getMentorNotificationById(@PathVariable int id){
        return dataService.getMentorNotificationById(id);
    }

    //Recruiter Notification
    @GetMapping("/recruiterNotification")
    public List<Notification> getRecruiterNotifications(){
        return dataService.getRecruiterNotifications();
    }

    @GetMapping("/recruiterNotification/{id}")
    public Notification getRecruiterNotificationById(@PathVariable int id){
        return dataService.getRecruiterNotificationById(id);
    }

    //SME Notification
    @GetMapping("/smeNotification")
    public List<Notification> getSmeNotifications(){
        return dataService.getSmeNotifications();
    }

    @GetMapping("/smeNotification/{id}")
    public Notification getSmeNotificationById(@PathVariable int id){
        return dataService.getSmeNotificationById(id);
    }

    //Student Notification
    @GetMapping("/studentNotification")
    public List<Notification> getStudentNotifications(){
        return dataService.getStudentNotifications();
    }

    @GetMapping("/studentNotification/{id}")
    public Notification getStudentNotificationById(@PathVariable int id){
        return dataService.getStudentNotificationById(id);
    }

    //Learning Curve
    @GetMapping("/learningCurve")
    public List<LearningCurve> getLearningCurves(){
        return dataService.getLearningCurves();
    }

    //Skill Gap Analysis
    @GetMapping("/skillGapAnalysis")
    public List<SkillGap> getSkillGaps(){
        return dataService.getSkillGaps();
    }

    //Skill Requirement
    @GetMapping("/skillRequirement")
    public List<SkillRequirement> getSkillRequirements(){
        return dataService.getSkillRequirements();
    }

    //Candidates
    @GetMapping("/candidates")
    public List<Candidate> getCandidates(){
        return dataService.getCandidates();
    }

    @GetMapping("/candidates/{id}")
    public Candidate getCandidateById(@PathVariable int id) {
        return dataService.getCandidateById(id);
    }

    //Member
    @GetMapping("/Member")
    public List<Member> getMembers(){
        return dataService.getMembers();
    }

    @GetMapping("/Member/{id}")
    public Member getMemberById(@PathVariable int id) {
        return dataService.getMemberById(id);
    }

    //Mentee
    @GetMapping("/Mentee")
    public List<Mentee> getMentees(){
        return dataService.getMentees();
    }

    @GetMapping("/Mentee/{id}")
    public Mentee getMenteeById(@PathVariable int id) {
        return dataService.getMenteeById(id);
    }

    //Assessment Metrics
    @GetMapping("/assessmentMetrics")
    public List<AssessmentMetrics> getAssessmentMetrics() {
        return dataService.getAssessmentMetrics();
    }

    @GetMapping("/assessmentMetrics/{id}")
    public AssessmentMetrics getAssessmentMetricsById(@PathVariable int id) {
        return dataService.getAssessmentMetricsById(id);
    }

    //Candidate Performance
    @GetMapping("/candidatePerformance")
    public List<CandidatePerformance> getCandidatePerformances(){
        return dataService.getCandidatePerformances();
    }

    @GetMapping("/candidatePerformance/{id}")
    public CandidatePerformance getCandidatePerformanceById(@PathVariable int id) {
        return dataService.getCandidatePerformanceById(id);
    }

    // Job Openings
    @GetMapping("/jobopenings")
    public List<JobOpenings> getJobOpenings() {
        return dataService.getJobOpenings();
    }

    @GetMapping("/jobopenings/{id}")
    public JobOpenings getJobOpeningById(@PathVariable int id) {
        return dataService.getJobOpeningById(id);
    }

    //Member Activities
    @GetMapping("/memberactivities")
    public List<MemberActivities> getMemberActivities() {
        return dataService.getMemberActivities();
    }

    @GetMapping("/memberactivities/{id}")
    public MemberActivities getMemberActivityById(@PathVariable int id) {
        return dataService.getMemberActivityById(id);
    }

    // Mentee Growth
    @GetMapping("/menteegrowth")
    public List<MenteeGrowth> getMenteeGrowths() {
        return dataService.getMenteeGrowths();
    }

    // Mentorship Activities
    @GetMapping("/mentorshipactivities")
    public List<MentorshipActivities> getMentorshipActivities() {
        return dataService.getMentorshipActivities();
    }

    @GetMapping("/mentorshipactivities/{id}")
    public MentorshipActivities getMentorshipActivitiesById(@PathVariable int id) {
        return dataService.getMentorshipActivitiesById(id);
    }

    // Role Permissions
    @GetMapping("/rolepermissions")
    public List<RolePermissions> getRolePermissions() {
        return dataService.getRolePermissions();
    }

    @GetMapping("/rolepermissions/{id}")
    public RolePermissions getRolePermissionById(@PathVariable int id) {
        return dataService.getRolePermissionById(id);
    }

    // Scheduled Assessment
    @GetMapping("/scheduledassessments")
    public List<ScheduledAssessment> getScheduledAssessments() {
        return dataService.getScheduledAssessments();
    }

    @GetMapping("/scheduledassessments/{id}")
    public ScheduledAssessment getScheduledAssessmentById(@PathVariable int id) {
        return dataService.getScheduledAssessmentById(id);
    }

    // Student Results
    @GetMapping("/studentresults")
    public List<StudentResult> getStudentsResults() {
        return dataService.getStudentsResults();
    }

    @GetMapping("/studentresults/{id}")
    public StudentResult getStudentResultById(@PathVariable int id) {
        return dataService.getStudentResultById(id);
    }

    
}