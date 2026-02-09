import React, { useEffect, useState } from 'react';
import {getProjectProgressCard }from "../../Services/student/projectProgressCardService";


function ProjectProgressCard() {

  const [projects, setProjects]=useState([]);
  useEffect(()=>{
    getProjectProgressCard().then((data) => {
      setProjects(data)
    });
  });
  return (
    <div className="card mb-3">
      <div className="card-header">Project Progress</div>
      <div className="card-body">
        {projects.map((project, idx) => (
          <div key={idx} className="mb-3">
            <strong>{project.name} - {project.completion}%</strong>
            <ul>
              {project.tasks.map((task, tIdx) => (
                <li key={tIdx}>
                  <input type="checkbox" checked={tIdx < project.completion / 25} readOnly /> {task.taskName}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectProgressCard;