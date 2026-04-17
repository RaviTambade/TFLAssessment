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
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

interface User {
  email: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* ✅ Navbar should be inside Router */}
          <Navbar isLoggedIn={!!user} />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tap-program" element={<TapProgram />} />
            <Route path="/ravi-tambade" element={<RaviTambade />} />
            <Route path="/models/*" element={<AppRoutes />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;