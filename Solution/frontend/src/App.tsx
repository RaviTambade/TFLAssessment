import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TapProgram from "./pages/TapProgram";
import RaviTambade from "./pages/RaviTambade";
import UpcomingAssessment from "./components/assessment/assessmentOrchestrator/UpcomingAssessment";
import UserProfile from "./components/assessment/membership/UserProfile";
import ChangePassword from "./components/assessment/membership/ChangePassword";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

interface User {
  userid: number;
}


const App = () => {
   const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const theUser = sessionStorage.getItem("current");
    if (theUser) {
      setCurrentUser(JSON.parse(theUser));
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
       <Navbar isLoggedIn={!!currentUser} />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tap-program" element={<TapProgram />} />
          <Route path="/ravi-tambade" element={<RaviTambade />} />
          <Route path="/upcoming-assessment" element={<UpcomingAssessment />} />
          <Route path="/component/assessment/membership/UserProfile/:id" element={<UserProfile />} />
          <Route path="/change-password/:id" element={<ChangePassword />} />

          {/* Module routes - /models/* */}
          <Route path="/models/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>

  );
};

export default App;