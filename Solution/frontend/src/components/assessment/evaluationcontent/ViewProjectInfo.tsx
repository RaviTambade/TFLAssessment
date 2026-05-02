import React, { useState, useEffect } from "react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
interface Project {
  projectId: number;
  projectName: string;
  description: string;
  repositoryUrl: string;
  status: string;
}

const WEBAPI_URL = "http://localhost:8080/api";

const ViewProjectInfo: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // FETCH ALL PROJECTS
  useEffect(() => {
    fetch( `${WEBAPI_URL}/projects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  // OPTIONAL: FETCH SINGLE PROJECT (FROM API)
  const handleView = (id: number) => {
    fetch(`${WEBAPI_URL}/projects/${id}`)
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(`Failed to fetch project ${id}: ${res.status} ${res.statusText} - ${text}`);
          });
        }
        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          return res.text().then((text) => {
            throw new Error(`Expected JSON response but got ${contentType}: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => setSelectedProject(data))
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setSelectedProject(null);
      });
  };

  // STATUS COLORS (DB VALUES)
  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-600";
      case "IN_PROGRESS":
        return "bg-blue-100 text-blue-600";
      case "PENDING":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const formatStatus = (status: string) => status.replace("_", " ");

  return (
    <section className="py-16 sm:py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Project Dashboard
          </h2>
          <p className="text-muted-foreground">
            Live data from Spring Boot API
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-6">

              <div className="grid lg:grid-cols-3 gap-6">

                {/* LEFT TABLE */}
                <div className="lg:col-span-2">

                  <h3 className="text-xl font-semibold mb-4">
                    Project List
                  </h3>

                  {/* LOADING */}
                  {loading && <p>Loading projects...</p>}

                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Project</th>
                        <th className="p-2 text-left">Status</th>
                        <th className="p-2 text-left">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {projects.map((p, index) => (
                        <tr key={p.projectId} className="border-b">
                          <td className="p-2">{index + 1}</td>

                          <td className="p-2">
                            {p.projectName}
                          </td>

                          <td className="p-2">
                            <span className={`px-2 py-1 rounded ${getStatusColor(p.status)}`}>
                              {formatStatus(p.status)}
                            </span>
                          </td>

                          <td className="p-2">
                            <Button
                              size="sm"
                              onClick={() => handleView(p.projectId)}
                            >
                              View <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {!loading && projects.length === 0 && (
                    <p>No projects found</p>
                  )}
                </div>

                {/* RIGHT PANEL */}
                <div className="border p-4 rounded">

                  {selectedProject ? (
                    <>
                      <h3 className="text-xl font-bold mb-3">
                        {selectedProject.projectName}
                      </h3>

                      <p className="mb-2">
                        <strong>Status:</strong>{" "}
                        <span className={getStatusColor(selectedProject.status)}>
                          {formatStatus(selectedProject.status)}
                        </span>
                      </p>

                      <p className="mb-3">
                        <strong>Description:</strong>
                        <br />
                        {selectedProject.description}
                      </p>

                      <a
                        href={selectedProject.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                      >
                        Open Repository
                      </a>
                    </>
                  ) : (
                    <p>Select a project</p>
                  )}
                </div>

              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ViewProjectInfo;