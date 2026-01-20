
import DashboardHeader from "../EmployerDashboard/DashboardHeader";

function EmployerDashboard() {

  const dashboardData = {
    employer: "TechNova",
    role: "Jr Full-Stack Developer",
    simulation: "Pre-Placement",
    runDate: "12-Mar-2025",
  };

  return (
    <div className="Dashboard-Container">
      <DashboardHeader data={dashboardData} />
    </div>
  );
}

export default EmployerDashboard;
