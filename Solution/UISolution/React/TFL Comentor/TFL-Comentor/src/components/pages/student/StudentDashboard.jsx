import React from 'react';
import Header from '../components/layout/Header';
import SkillHealthCard from '../components/dashboard/SkillHealthCard';
import LearningPathTimeline from '../components/dashboard/LearningPathTimeline';
import AssessmentSummary from '../components/dashboard/AssessmentSummary';
import ConfidenceMeter from '../components/dashboard/ConfidenceMeter';
import NextActions from '../components/dashboard/NextActions';
import Projects from './Projects';

function StudentDashboard() {


  return (
    <div>
      <Header/>
      <SkillHealthCard />
    </div>
  );

     
}

export default StudentDashboard;