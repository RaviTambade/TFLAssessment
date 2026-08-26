import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardAdmin from "./dashboardadmin";
import DashboardStudent from "./dashboardstudent";
import DashboardSME from "./dashboardsme";
import DashboardMentor from "./dashboardmentor";

const Dashboard = () => {
  const [role, setRole] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = sessionStorage.getItem("current");
    if (userData) {
      const user = JSON.parse(userData);
      setRole(user.rolename);
    }
  }, []);

  return (
    <div>
      {role === "Admin" && <DashboardAdmin />}  
      {role === "Student" && <DashboardStudent />}  
      {role === "SME" && <DashboardSME />}  
      {role === "Mentor" && <DashboardMentor />}  
    </div>
  );
};

export default Dashboard;