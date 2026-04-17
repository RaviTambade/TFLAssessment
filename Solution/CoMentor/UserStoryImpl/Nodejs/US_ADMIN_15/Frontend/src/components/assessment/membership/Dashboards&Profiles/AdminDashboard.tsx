import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";

interface CardProps {
  title: string
  icon?: ReactNode
  onClick?: () => void
}

/* Admin Card Component */
const AdminCard = ({ title, icon, onClick }: CardProps) => {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer select-none bg-gradient-primary text-primary-foreground shadow-[var(--shadow-elegant)]
        transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)] h-36 flex items-center justify-center"
    >
      <CardContent className="flex flex-col items-center justify-center text-center p-0">
        {icon && <div className="mb-2">{icon}</div>}
        <p className="font-semibold text-lg">{title}</p>
      </CardContent>
    </Card>
  )
}
/* Admin Dashboard Page */
const AdminDashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)] p-6 select-none">
     <div className="flex-1 pt-24 p-3"></div>
      {/* NAVBAR */}
      <Navbar isLoggedIn />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-10 text-primary text-center select-none">
        Admin Dashboard
      </h1>

      {/* Responsive Layout */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          max-w-4xl
          mx-auto
        "
      >
        <AdminCard 
          title="Assign Assessment" 
          onClick={() => navigate("/models/membership/AssignAssessment")}/>

        <AdminCard
          title="Manage Users"
          onClick={() => navigate("/models/membership/ManageUsers")}/>

        <AdminCard 
          title="User Sessions"
          onClick={() => navigate("/models/membership/UserSessions")}/>

        <AdminCard title="Exam Statistics" />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default AdminDashboard