import React from 'react';
import Header from '../components/layout/Header';

function Projects() {
  const projects = [
    {
      name: 'E-Commerce App',
      completion: 65,
      tasks: ['API Design', 'DB Setup', 'Exception Handling', 'Deployment'],
      link:['https://github.com/RaviTambade/TFLECommerce']
    },
    {
      name: 'Chatbot App',
      completion: 40,
      tasks: ['NLP Design', 'Integration', 'Testing'],
      link:['https://github.com/RaviTambade/TFLAssessment']
    },
  ];

  return (
    <div>
      <Header/>
      <h3>Projects</h3>
      {projects.map((project, idx) => (
        <div key={idx} className="card mb-3">
          <div className="card-header">
            <a href={project.link}>{project.name}</a> - {project.completion}%
          </div>
          <div className="card-body">
            <ul>
              {project.tasks.map((task, tIdx) => (
                <li key={tIdx}>
                  <input type="checkbox" checked={tIdx < project.completion / 25} readOnly /> {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;