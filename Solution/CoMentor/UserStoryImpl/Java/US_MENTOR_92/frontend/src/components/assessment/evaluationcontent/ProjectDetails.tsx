import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Project = {
  id: number;
  mentor_id: number;
  project_name: string;
  description: string;
  repository_url: string;
  status: string;
  created_at: string;
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/projects/${id}`)
      .then((res) => res.json())
      .then((data: Project) => setProject(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-4">
      <div className="max-w-3xl mx-auto border border-border rounded-2xl p-6 shadow-md">

        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-primary underline"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold text-primary mb-4">
          {project.project_name}
        </h2>

        <p className="mb-2"><b>Status:</b> {project.status}</p>
        <p className="mb-2"><b>Mentor ID:</b> {project.mentor_id}</p>
        <p className="mb-4">{project.description}</p>

        <a
          href={project.repository_url}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          View Repository
        </a>

        <p className="mt-4 text-sm text-muted-foreground">
          Created At: {project.created_at}
        </p>

      </div>
    </div>
  );
};

export default ProjectDetails;