import React, { useEffect, useState } from "react";
import { WEBAPI_DOTNET_URL, WEBAPI_JAVA_URL } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, FolderKanban } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Search, CheckCircle, UserCircle } from "lucide-react";



function AllocateProject() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [projects, setProjects] = useState<any[]>([]);
    const [students, setStudents] = useState<any[]>([]);
    const [projectId, setProjectId] = useState("");
    const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        loadData();

    }, []);



    const loadData = async () => {

        const currentUser = JSON.parse(sessionStorage.getItem("current") || "{}");
        const mentorId = currentUser.userid;

        console.log("Mentor ID:", mentorId);

        const projectResponse = await fetch(
            `${WEBAPI_JAVA_URL}/projects/mentee/${mentorId}`
        );

        console.log("Status:", projectResponse.status);

        const projectData = await projectResponse.json();

        console.log("Projects:", projectData);

        setProjects(projectData);

        const studentResponse = await fetch(`${WEBAPI_DOTNET_URL}/Students`);
        const studentData = await studentResponse.json();

        setStudents(studentData);
    };
    const allocateProject = async () => {
        const response = await fetch(
            `${WEBAPI_JAVA_URL}/projects/add`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    projectId: Number(projectId),
                    studentIds: selectedStudents,
                }),
            }
        );

        const result = await response.text();
        setMessage(result);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto">

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            Allocate Project
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Assign students to a project
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

                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FolderKanban className="text-red-600" />
                            Project Allocation
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">

                        {/* Project Dropdown */}
                        <select
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        >
                            <option value="">Select Project</option>

                            {projects.map((project) => (
                                <option
                                    key={project.projectId}
                                    value={project.projectId}
                                >
                                    {project.projectName}
                                </option>
                            ))}
                        </select>

                        {/* Student List */}
                        <div className="border rounded-lg max-h-80 overflow-y-auto">

                            {students.map((student: any) => (

                                <label
                                    key={student.id}
                                    className="flex items-center gap-3 p-3 border-b cursor-pointer hover:bg-gray-50"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedStudents.includes(student.id)}
                                        onChange={() => {
                                            if (selectedStudents.includes(student.id)) {
                                                setSelectedStudents(
                                                    selectedStudents.filter((id) => id !== student.id)
                                                );
                                            } else {
                                                setSelectedStudents([...selectedStudents, student.id]);
                                            }
                                        }}
                                    />

                                    <Users className="w-4 h-4 text-blue-500" />

                                    <span>
                                        {student.fullName || student.full_name}
                                    </span>

                                </label>

                            ))}

                        </div>

                        <p className="font-medium">
                            Selected Students: {selectedStudents.length}
                        </p>

                        {message && (
                            <div className="p-3 bg-gray-100 rounded-lg">
                                {message}
                            </div>
                        )}

                        <Button
                            className="w-full"
                            onClick={() => {
                                allocateProject();
                                navigate("/models/evaluationcontent/ProjectByMentee");
                            }}
                            disabled={!projectId || selectedStudents.length === 0}
                        >
                            Allocate Students
                        </Button>

                    </CardContent>
                </Card>

            </div>
        </div>
    );
}

export default AllocateProject;