import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import US_SME_51 from "@/components/userStory/US_SME_51";

function AppRoutes() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/display" element={<US_SME_51/>}/>
          {/* Evaluation Content */}
          {/* <Route path="evaluationcontent/componentmenu" element={<EvaluationContentMenu />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
