import DashboardHeader from "./DashboardHeader";
import KPIStrip from "./KPIStrip";
import CandidateTable from "./CandidateTable";
import DashboardPanels from "./DashboardPanels";

function EmployerDashboard() {

  const dashboardData = {
    employer: "TechNova",
    role: "Jr Full-Stack Developer",
    simulation: "Pre-Placement",
    runDate: "12-Mar-2025",

    kpis: {
      candidates: 24,
      employable: 7,
      trainable: 10,
      notReady: 7
    },

    rankings: [
      { name: "Nirjala Naik", score: "62%", status: "Trainable" },
      { name: "Sahil Kamble", score: "88%", status: "Employable" },
      { name: "Sanika Bhor", score: "95%", status: "Employable" },
      { name: "Nirjala", score: "95%", status: "Employable" }
    ],

    actions: ["Hire", "Train", "Reject"]
  };

  return (
    <div className="Dashboard-Container">
      <DashboardHeader data={dashboardData} />
      <KPIStrip kpis={dashboardData.kpis} />
      <CandidateTable rankings={dashboardData.rankings} />
      <DashboardPanels />
    </div>
  );
}

export default EmployerDashboard;
