import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import LoginPage from "../components/assessment/membership/Login"; // login page 
import RegisterPage from "../components/assessment/membership/Register";// register page
import ChangePassword from "../components/assessment/membership/ChangePassword";// change password page


// Membership
import MembershipMenu from "@/components/assessment/membership/Dashboards&Profiles/MembershipMenu";
import GetRoles  from "@/components/assessment/membership/Dashboards&Profiles/GetRoles";
import Assessment from "../components/assessment/ComponentButtons";




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

          {/* Evaluation Content */}
         
          {/* Membership */}
          <Route path="membership/Login" element={<LoginPage />} />
          <Route path="membership/Register" element={<RegisterPage />} />
          <Route path="membership/ChangePassword" element={<ChangePassword />} />

          <Route path="membership/MembershipMenu" element={<MembershipMenu />} />
          <Route path="membership/AllRoles" element={<GetRoles />} />

       
          {/* /models alone (empty splat) shows main assessment */}
          <Route index element={<Assessment />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRoutes;
