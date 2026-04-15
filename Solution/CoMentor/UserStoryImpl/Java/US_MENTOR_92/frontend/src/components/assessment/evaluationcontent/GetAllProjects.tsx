import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Project = {
  id: number;
  mentor_id: number;
  project_name: string;
  description: string;
  repository_url: string;
  status: string;
  created_at: string;
};

const GetAllProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("error fetching projects:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-4">
      <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-md p-6">
        
        <h2 className="text-2xl font-bold text-primary mb-6">
          Project Names
        </h2>

        <ul className="space-y-3">
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => navigate(`/models/evaluationcontent/projects/${project.id}`)}
              className="p-3 rounded-lg border border-border hover:bg-accent/20 transition-smooth cursor-pointer"
            >
              {project.project_name}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default GetAllProjects;