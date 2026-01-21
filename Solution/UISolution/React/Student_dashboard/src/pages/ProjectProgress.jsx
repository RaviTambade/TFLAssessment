import React from 'react';
import Header from '../components/layout/Header';
import SkillHealthCard from '../components/dashboard/SkillHealthCard';
import ProjectProgressCard from '../components/dashboard/ProjectProgressCard';

function ProjectProgress() {
  return (
    <div>
        <Header/>
        <ProjectProgressCard/>
        </div>
  );
}

export default ProjectProgress;