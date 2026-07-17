import React, { useEffect, useState } from "react";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FolderKanban,
  Search,
  RefreshCw,
  Calendar,
  Github,
  User,
} from "lucide-react";

function ProjectByMentee() {
  const [projects, setProjects] = useState<any[]>([]);
  const [menteeId, setMenteeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${WEBAPI_JAVA_URL}/projects`);

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      setProjects(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchByMenteeId = async () => {
    if (!menteeId) {
      setError("Please enter a Mentee ID");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${WEBAPI_JAVA_URL}/projects/student/${menteeId}/projects`
      );

      if (!response.ok) {
        throw new Error("No projects found");
      }

      const data = await response.json();
      setProjects(data);
    } catch (err: any) {
      setError(err.message);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "in progress":
        return "bg-yellow-100 text-yellow-700";
      case "pending":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Student Projects
          </h1>

          <p className="text-gray-600 mt-2">
            Monitor and review all mentee projects from one place.
          </p>
        </div>

        {/* Search Card */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-red-600" />
              Search Projects
            </CardTitle>
          </CardHeader>

          <CardContent>

            <div className="flex flex-col md:flex-row gap-4">

    

              <Button onClick={fetchByMenteeId}>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>

              <Button
                variant="outline"
                onClick={fetchAllProjects}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Show All
              </Button>

            </div>

          </CardContent>
        </Card>

        {loading && (
          <div className="text-center py-10 text-lg">
            Loading projects...
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 font-medium mb-6">
            {error}
          </div>
        )}

        {/* Project Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {!loading && projects.length === 0 && (
            <div className="col-span-full text-center text-gray-500">
              No projects available.
            </div>
          )}

          {projects.map((project: any) => (

            <Card
              key={project.projectId}
              className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-red-500"
            >
              <CardHeader>

                <CardTitle className="flex items-center gap-2">

                  <FolderKanban className="text-red-600 w-6 h-6" />

                  {project.projectName}

                </CardTitle>

              </CardHeader>

              <CardContent className="space-y-4">

                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>

                <div className="space-y-2 text-sm">

                 
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-500" />
                    <strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  })}
                  </div>

                  <div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>

                  </div>

                </div>

                {project.repositoryUrl && (

                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full mt-3">

                      <Github className="mr-2 h-4 w-4" />

                      Open Repository

                    </Button>
                  </a>

                )}

              </CardContent>
            </Card>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ProjectByMentee;