import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//Evaluation Content
import EvaluationContentMenu from "../components/assessment/evaluationcontent/EvaluationContentMenu";
import Assessment from "@/components/assessment/ComponentButtons";
import ViewRuntimes from "@/components/assessment/evaluationcontent/ViewRuntimes";     
import AddRuntime from "@/components/assessment/evaluationcontent/AddRuntime";
import GetAllProjects from "@/components/assessment/evaluationcontent/GetAllProjects";
import ProjectDetails from "@/components/assessment/evaluationcontent/ProjectDetails";





function AppRoutes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Routes> 
          {/* With v7_relativeSplatPath, child routes match the splat portion (path after /models/) */}
          {/* Main Component Page */}
          <Route path="evaluationcontent/components" element={<Assessment />} />
          <Route path="evaluationcontent/componentmenu" element={<EvaluationContentMenu />} />
          <Route path="evaluationcontent/viewruntimes" element={<ViewRuntimes />} />
          <Route path="evaluationcontent/AddRuntime" element={<AddRuntime />} />
          <Route path="evaluationcontent/GetAllProjects" element={<GetAllProjects />} />
          <Route path="evaluationcontent/projects/:id" element={<ProjectDetails />} />
          <Route index element={<Assessment />} />

        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
