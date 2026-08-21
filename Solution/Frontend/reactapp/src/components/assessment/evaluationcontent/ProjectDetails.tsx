import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FolderKanban,
  Github,
  User,
  Calendar,
  Users
} from "lucide-react";


const ProjectDetails = () => {

  const { projectId } = useParams();


console.log("Project ID:", projectId);
console.log("API URL:", `${WEBAPI_JAVA_URL}/projects/${projectId}`);

  const navigate = useNavigate();

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchProject();
  }, [projectId]);


  const fetchProject = async () => {

    try {

      const response = await fetch(
        `${WEBAPI_JAVA_URL}/projects/${projectId}`
      );


      if (!response.ok) {
        throw new Error("Project not found");
      }


      const data = await response.json();
console.log("Project Response:", data);
console.log("Project ID:", projectId);

      setProject(data);


    } catch (error) {

      console.error("Fetch Error:",error);

    } finally {

      setLoading(false);

    }
  };


  if (loading) {
    return (
      <div className="text-center py-10">
        Loading project details...
      </div>
    );
  }


  if (!project) {
    return (
      <div className="text-center py-10">
        No project found
      </div>
    );
  }



  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-4xl mx-auto">


        {/* Header */}

        <div className="flex justify-between items-center mb-8">


          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Project Details
          </h1>


          <Button
            variant="outline"
            onClick={() =>
              navigate("/models/membership/dashboard")
            }
          >
            <ArrowLeft className="mr-2 h-4 w-4"/>
            Back
          </Button>


        </div>



        <Card className="shadow-xl border-l-4 border-red-500">


          <CardHeader>

            <CardTitle className="flex items-center gap-3 text-2xl">

              <FolderKanban className="text-red-600"/>

              {project.projectName}

            </CardTitle>

          </CardHeader>



          <CardContent className="space-y-5">


            {/* Description */}

            {project.description && (

              <div>

                <h3 className="font-semibold">
                  Description
                </h3>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

              </div>

            )}





            {/* Mentor */}

            {project.mentorName && (

              <div className="flex gap-2 items-center">

                <User className="w-5 h-5 text-blue-500"/>

                <span className="font-semibold">
                  Mentor:
                </span>

                {project.mentorName}

              </div>

            )}






            {/* Students */}

            {project.allocatedStudents && (

              <div className="flex gap-2 items-center">

                <Users className="w-5 h-5 text-green-500"/>

                <span className="font-semibold">
                  Students:
                </span>

                {project.allocatedStudents}

              </div>

            )}






            {/* Status */}

            {project.status && (

              <div>

                <span className="font-semibold">
                  Status:
                </span>

                <span className="ml-3 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                  {project.status}
                </span>

              </div>

            )}






            {/* Created Date */}

            {project.createdAt && (

              <div className="flex items-center gap-2">

                <Calendar className="w-5 h-5"/>

                <span className="font-semibold">
                  Created:
                </span>


                {new Date(project.createdAt)
                  .toLocaleDateString("en-IN")}

              </div>

            )}






            {/* Github */}

            {project.repositoryUrl && (

              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >

                <Button className="w-full mt-5">

                  <Github className="mr-2 h-5 w-5"/>

                  Open GitHub Repository

                </Button>


              </a>

            )}



          </CardContent>


        </Card>


      </div>


    </div>

  );

};


export default ProjectDetails;