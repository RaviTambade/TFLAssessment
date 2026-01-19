import React from 'react';
import Header from '../components/layout/Header';
import SkillHealthCard from '../components/dashboard/SkillHealthCard';
import ProjectProgressCard from '../components/dashboard/ProjectProgressCard';
import LearningPathTimeline from '../components/dashboard/LearningPathTimeline';
import AssessmentSummary from '../components/dashboard/AssessmentSummary';
import ConfidenceMeter from '../components/dashboard/ConfidenceMeter';
import NextActions from '../components/dashboard/NextActions';

function StudentDashboard() {
  const studentData = {
    student_pic:'/src/assets/nirjala.jpg',
    studentName: 'Nirjala',
    targetRole: 'Full Stack Developer',
    readiness: '68%',
    confidence: 'Medium',
  };

  return (
    <div>
      <Header
      student_pic={studentData.student_pic}
        studentName={studentData.studentName}
        targetRole={studentData.targetRole}
        readiness={studentData.readiness}
        confidence={studentData.confidence}
      />
      <SkillHealthCard />
      <ProjectProgressCard />
      <LearningPathTimeline />
      <AssessmentSummary />
      <ConfidenceMeter />
      <NextActions />
    </div>
  );

     
}

export default StudentDashboard;