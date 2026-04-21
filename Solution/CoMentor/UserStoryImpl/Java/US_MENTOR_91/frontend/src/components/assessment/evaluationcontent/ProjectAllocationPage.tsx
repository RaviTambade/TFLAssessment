import React, { useEffect, useState } from "react";

type ProjectAllocation = {
  projectId: number;
  projectName: string;
  studentId: number;
  studentName: string;
  joinedDate: string;
  releaseDate: string | null;
};

type Project = {
  projectId: number;
  projectName: string;
};

type Student = {
  studentId: number;
  studentName: string;
};

const ProjectAllocationPage: React.FC = () => {
  const [allocations, setAllocations] = useState<ProjectAllocation[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  const [projectId, setProjectId] = useState<number | "">("");
  const [studentId, setStudentId] = useState<number | "">("");

  useEffect(() => {
    fetchAllocations();
    fetchProjects();
    fetchStudents();
  }, []);

  const fetchAllocations = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/project-allocations/all"
      );
      const data = await response.json();
      setAllocations(data);
    } catch (error) {
      console.error("Error fetching allocations:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/project-allocations/all"
      );
      const data = await response.json();

      const uniqueProjects = data.reduce(
        (acc: Project[], current: ProjectAllocation) => {
          const exists = acc.find(
            (project) => project.projectId === current.projectId
          );

          if (!exists) {
            acc.push({
              projectId: current.projectId,
              projectName: current.projectName,
            });
          }

          return acc;
        },
        []
      );

      setProjects(uniqueProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/project-allocations/all"
      );
      const data = await response.json();

      const uniqueStudents = data.reduce(
        (acc: Student[], current: ProjectAllocation) => {
          const exists = acc.find(
            (student) => student.studentId === current.studentId
          );

          if (!exists) {
            acc.push({
              studentId: current.studentId,
              studentName: current.studentName,
            });
          }

          return acc;
        },
        []
      );

      setStudents(uniqueStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async () => {
    if (projectId === "" || studentId === "") {
      alert("Please select project and student");
      return;
    }

    const payload = {
      projectId,
      studentId,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/project-allocations/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const message = await response.text();
      alert(message);

      setProjectId("");
      setStudentId("");

      fetchAllocations();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleReleaseStudent = async () => {
    if (projectId === "" || studentId === "") {
      alert("Please select project and student");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/project-allocations/remove?projectId=${projectId}&studentId=${studentId}`,
        {
          method: "DELETE",
        }
      );

      const message = await response.text();
      alert(message);

      setProjectId("");
      setStudentId("");

      fetchAllocations();
    } catch (error) {
      console.error("Error releasing student:", error);
    }
  };

  const filteredAllocations = projectId 
    ? allocations.filter(allocation => allocation.projectId === projectId)
    : [];

  const activeAllocationsCount = filteredAllocations.filter(allocation => !allocation.releaseDate).length;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-4">
      <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-md p-6">
        
        <h2 className="text-2xl font-bold text-primary mb-6">
          Project Allocation
        </h2>

        <div className="mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Project Name</label>
            <select
              value={projectId}
              onChange={(e) => setProjectId(Number(e.target.value))}
              className="w-full max-w-xs px-3 py-2 border border-border rounded-md bg-background"
            >
              <option value="">Select Project</option>
              {projects.map((project) => (
                <option key={project.projectId} value={project.projectId}>
                  {project.projectName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Student Name</label>
            <select
              value={studentId}
              onChange={(e) => setStudentId(Number(e.target.value))}
              className="w-full max-w-xs px-3 py-2 border border-border rounded-md bg-background"
            >
              <option value="">Select Student</option>
              {students.map((student) => (
                <option key={student.studentId} value={student.studentId}>
                  {student.studentName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handleAddStudent}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Add Student
            </button>

            <button 
              onClick={handleReleaseStudent}
              className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors"
            >
              Release Student
            </button>
          </div>
        </div>

        {projectId && (
          <div className="mt-6">
            <div className="mb-4 p-4 bg-muted/20 rounded-lg">
              <p className="text-sm font-medium">
                {projects.find(p => p.projectId === projectId)?.projectName} - {activeAllocationsCount} active student{activeAllocationsCount !== 1 ? 's' : ''} working on this project
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-4 py-2 text-left">Project Name</th>
                    <th className="border border-border px-4 py-2 text-left">Student Name</th>
                    <th className="border border-border px-4 py-2 text-left">Joined Date</th>
                    <th className="border border-border px-4 py-2 text-left">Release Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAllocations.map((allocation, index) => (
                    <tr key={index} className="hover:bg-muted/20">
                      <td className="border border-border px-4 py-2">{allocation.projectName}</td>
                      <td className="border border-border px-4 py-2">{allocation.studentName}</td>
                      <td className="border border-border px-4 py-2">{allocation.joinedDate?.split("T")[0]}</td>
                      <td className="border border-border px-4 py-2">
                        {allocation.releaseDate
                          ? allocation.releaseDate.split("T")[0]
                          : "Active"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectAllocationPage;