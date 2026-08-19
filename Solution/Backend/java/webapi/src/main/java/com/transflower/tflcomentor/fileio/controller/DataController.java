package com.transflower.tflcomentor.fileio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
import com.transflower.tflcomentor.fileio.service.DataService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/data")
public class DataController {
    
    @Autowired
    DataService dataService;

    public DataController(DataService dataService) {
        this.dataService = dataService;
    }

    @GetMapping("/adminNotification")
    public List<Notification> showAdminNotification(){
        return dataService.showAdminNotification();
    }

    @GetMapping("/adminNotification/{id}")
    public Notification getAdminNotificationById(@PathVariable int id){
        return dataService.getAdminNotificationById(id);
    }

    @GetMapping("/mentorNotification")
    public List<Notification> showMentorNotification(){
        return dataService.showMentorNotification();
    }

    @GetMapping("/mentorNotification/{id}")
    public Notification getMentorNotificationById(@PathVariable int id){
        return dataService.getMentorNotificationById(id);
    }

    @GetMapping("/recruiterNotification")
    public List<Notification> showRecruiterNotification(){
        return dataService.showRecruiterNotification();
    }

    @GetMapping("/recruiterNotification/{id}")
    public Notification getRecruiterNotificationById(@PathVariable int id){
        return dataService.getRecruiterNotificationById(id);
    }

    @GetMapping("/smeNotification")
    public List<Notification> showSmeNotification(){
        return dataService.showSmeNotification();
    }

    @GetMapping("/smeNotification/{id}")
    public Notification getSmeNotificationById(@PathVariable int id){
        return dataService.getSmeNotificationById(id);
    }

    @GetMapping("/studentNotification")
    public List<Notification> showStudentNotification(){
        return dataService.showStudentNotification();
    }

    @GetMapping("/studentNotification/{id}")
    public Notification getStudentNotificationById(@PathVariable int id){
        return dataService.getStudentNotificationById(id);
    }

    @GetMapping("/learningCurve")
    public List<LearningCurve> showLearningCurve(){
        return dataService.showLearningCurve();
    }

    @GetMapping("/skillGapAnalysis")
    public List<SkillGap> showSkillGap(){
        return dataService.showSkillGap();
    }

    @GetMapping("/skillRequirement")
    public List<SkillRequirement> showSkillRequirement(){
        return dataService.showSkillRequirement();
    }

    @GetMapping("/candidates")
    public List<Candidate> showCandidates(){
        return dataService.showCandidates();
    }

    @GetMapping("/candidates/{id}")
    public Candidate getCandidateById(@PathVariable int id) {
        return dataService.getCandidateById(id);
    }

    @GetMapping("/Member")
    public List<Member> showMember(){
        return dataService.showMember();
    }

    @GetMapping("/Member/{id}")
    public Member getMemberById(@PathVariable int id) {
        return dataService.getMemberById(id);
    }

    @GetMapping("/Mentee")
    public List<Mentee> showMentee(){
        return dataService.showMentee();
    }

    @GetMapping("/Mentee/{id}")
    public Mentee getMenteeById(@PathVariable int id) {
        return dataService.getMenteeById(id);
    }

    // Job Openings
    @GetMapping("/jobopenings")
    public List<JobOpenings> showJobOpenings() {
        return dataService.showJobOpenings();
    }

    @GetMapping("/jobopenings/{id}")
    public JobOpenings getJobOpeningsById(@PathVariable int id) {
        return dataService.getJobOpeningsById(id);
    }

    //Member Activities
    @GetMapping("/memberactivities")
    public List<MemberActivities> showMemberActivities() {
        return dataService.showMemberActivities();
    }

    @GetMapping("/memberactivities/{id}")
    public MemberActivities getMemberActivitiesById(@PathVariable int id) {
        return dataService.getMemberActivitiesById(id);
    }

    // Mentee Growth
    @GetMapping("/menteegrowth")
    public List<MenteeGrowth> showMenteeGrowth() {
        return dataService.showMenteeGrowth();
    }

    // Mentorship Activities
    @GetMapping("/mentorshipactivities")
    public List<MentorshipActivities> showMentorshipActivities() {
        return dataService.showMentorshipActivities();
    }

    @GetMapping("/mentorshipactivities/{id}")
    public MentorshipActivities getMentorshipActivitiesById(@PathVariable int id) {
        return dataService.getMentorshipActivitiesById(id);
    }

    // Role Permissions
    @GetMapping("/rolepermissions")
    public List<RolePermissions> showRolePermissions() {
        return dataService.showRolePermissions();
    }

    @GetMapping("/rolepermissions/{id}")
    public RolePermissions getRolePermissionById(@PathVariable int id) {
        return dataService.getRolePermissionById(id);
    }

    // Scheduled Assessment
    @GetMapping("/scheduledassessments")
    public List<ScheduledAssessment> showScheduledAssessment() {
        return dataService.showScheduledAssessment();
    }

    @GetMapping("/scheduledassessments/{id}")
    public ScheduledAssessment getScheduledAssessmentById(@PathVariable int id) {
        return dataService.getScheduledAssessmentById(id);
    }

    // Student Results
    @GetMapping("/studentresults")
    public List<StudentResult> showStudentResult() {
        return dataService.showStudentResult();
    }

    @GetMapping("/studentresults/{id}")
    public StudentResult getStudentResultById(@PathVariable int id) {
        return dataService.getStudentResultById(id);
    }

    @GetMapping("/candidatePerformance")
    public List<CandidatePerformance> getCandidatePerformance(){
        return dataService.showCandidatePerformance();
    }

    @GetMapping("/assessmentMetrics")
    public List<AssessmentMetrics> showAssessmentMetrics() {
        return dataService.showAssessmentMetrics();
    }
}