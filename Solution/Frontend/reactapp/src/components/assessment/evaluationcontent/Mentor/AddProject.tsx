import React, { useState } from "react";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, FolderKanban, Github, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AddProject() {
    const navigate = useNavigate();

    const currentUser = JSON.parse(sessionStorage.getItem("current") || "{}");
    const mentorId = currentUser.userid;

    const [project, setProject] = useState({
        project_name: "",
        description: "",
        repository_url: "",
        status: "PENDING",
    });

    const saveProject = async () => {

        const response = await fetch(
            `${WEBAPI_JAVA_URL}/projects/createProject/${mentorId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            }
        );

        const result = await response.text();
        alert(result);

        if (response.ok) {
            setProject({
                project_name: "",
                description: "",
                repository_url: "",
                status: "PENDING",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-4xl mx-auto">

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            Add Project
                        </h1>

                        <p className="text-muted-foreground mt-2">
                            Create New Project
                        </p>

                    </div>

                    <Button
                        variant="outline"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>

                </div>

                <Card>

                    <CardHeader>

                        <CardTitle className="flex items-center gap-2">

                            <FolderKanban className="text-red-600" />

                            Project Details

                        </CardTitle>

                    </CardHeader>

                    <CardContent className="space-y-5">

                        <Input
                            placeholder="Project Name"
                            value={project.project_name}
                            onChange={(e) =>
                                setProject({
                                    ...project,
                                    project_name: e.target.value,
                                })
                            }
                        />

                        <textarea
                            rows={5}
                            className="w-full border rounded-md p-3"
                            placeholder="Project Description"
                            value={project.description}
                            onChange={(e) =>
                                setProject({
                                    ...project,
                                    description: e.target.value,
                                })
                            }
                        />

                        <div className="relative">

                            <Github className="absolute left-3 top-3 w-4 h-4 text-gray-500" />

                            <Input
                                className="pl-10"
                                placeholder="Repository URL"
                                value={project.repository_url}
                                onChange={(e) =>
                                    setProject({
                                        ...project,
                                        repository_url: e.target.value,
                                    })
                                }
                            />

                        </div>

                        <select
                            className="w-full border rounded-md p-3"
                            value={project.status}
                            onChange={(e) =>
                                setProject({
                                    ...project,
                                    status: e.target.value,
                                })
                            }
                        >
                            <option value="PENDING">PENDING</option>
                            <option value="IN_PROGRESS">IN_PROGRESS</option>
                            <option value="COMPLETED">COMPLETED</option>
                        </select>

                        <Button
                            className="w-full"
                            onClick={saveProject}
                        >
                            <Save className="mr-2 w-4 h-4" />
                            Create Project
                        </Button>

                    </CardContent>

                </Card>

            </div>

        </div>
    );
}

export default AddProject;