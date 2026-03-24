import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import US_SME from "../components/userStory/US_SME";

function AppRoutes() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route index element={<US_SME />} />
          <Route path="sme/concepts" element={<US_SME />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
