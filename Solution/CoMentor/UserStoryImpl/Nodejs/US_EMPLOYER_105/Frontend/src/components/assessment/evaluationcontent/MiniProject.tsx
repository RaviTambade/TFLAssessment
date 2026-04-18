import React, { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

interface MiniProject {
  title: string;
  description: string;
  code: string;
}

const MiniProjectManager: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [projects, setProjects] = useState<MiniProject[]>([
    {
      title: "Student Management System",
      description: "Build CRUD APIs to manage student records.",
      code: `POST /students
GET /students
PUT /students/:id
DELETE /students/:id`,
    },
    {
      title: "Task Manager API",
      description: "Create APIs to manage tasks with deadlines.",
      code: `POST /tasks
GET /tasks
PUT /tasks/:id
DELETE /tasks/:id`,
    },
  ]);

  const [newProject, setNewProject] = useState<MiniProject>({
    title: "",
    description: "",
    code: "",
  });

  const handleAddProject = () => {
    if (!newProject.title) return alert("Title required");

    setProjects([...projects, newProject]);

    setNewProject({
      title: "",
      description: "",
      code: "",
    });

    alert("Mini Project Added 🚀");
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setEditingIndex(null);
    alert("Mini Project Updated ✅");
  };

  const handleDelete = (index: number) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
    alert("Mini Project Deleted ❌");
  };

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Mini Project <span className="text-orange-600">Manager</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Add, Edit or Remove Mini Projects
          </p>
        </div>

        {/* Add Mini Project */}
        <Card className="mb-10 shadow-lg border border-orange-200">
          <CardContent className="p-8 space-y-6">

            <h3 className="text-2xl font-semibold text-orange-600">
              Add Mini Project
            </h3>

            {/* Project Title */}
            <div>
              <label className="block mb-2 font-semibold">
                Project Title
              </label>
              <Input
                placeholder="Enter project title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="block mb-2 font-semibold">
                Project Description
              </label>
              <Textarea
                placeholder="Enter project description"
                rows={3}
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    description: e.target.value,
                  })
                }
              />
            </div>

            {/* Mini Project Code */}
            <div>
              <label className="block mb-2 font-semibold">
                Mini Project Code / Instructions
              </label>
              <Textarea
                rows={6}
                className="font-mono"
                placeholder="Enter project code or instructions"
                value={newProject.code}
                onChange={(e) =>
                  setNewProject({ ...newProject, code: e.target.value })
                }
              />
            </div>

            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={handleAddProject}
            >
              Add Mini Project
            </Button>

          </CardContent>
        </Card>

        {/* Existing Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <Card
              key={index}
              ref={ref}
              className={`shadow-lg border border-orange-200 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <CardContent className="p-6 space-y-4">

                {/* Title */}
                <div>
                  <label className="block mb-2 font-semibold">
                    Project Title
                  </label>
                  <Input
                    disabled={!isEditing || editingIndex !== index}
                    value={project.title}
                    onChange={(e) => {
                      const updated = [...projects];
                      updated[index].title = e.target.value;
                      setProjects(updated);
                    }}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block mb-2 font-semibold">
                    Project Description
                  </label>
                  <Textarea
                    rows={3}
                    disabled={!isEditing || editingIndex !== index}
                    value={project.description}
                    onChange={(e) => {
                      const updated = [...projects];
                      updated[index].description = e.target.value;
                      setProjects(updated);
                    }}
                  />
                </div>

                {/* Code */}
                <div>
                  <label className="block mb-2 font-semibold">
                    Mini Project Code / Instructions
                  </label>
                  <Textarea
                    rows={5}
                    className="font-mono"
                    disabled={!isEditing || editingIndex !== index}
                    value={project.code}
                    onChange={(e) => {
                      const updated = [...projects];
                      updated[index].code = e.target.value;
                      setProjects(updated);
                    }}
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">

                  {editingIndex === index ? (
                    <>
                      <Button
                        className="bg-orange-600 hover:bg-orange-700 text-white"
                        onClick={handleSave}
                      >
                        Save
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => setEditingIndex(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </>
                  )}

                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MiniProjectManager;