import React from "react";
import { useNavigate } from "react-router-dom";

const InsightCoreMenu: React.FC = () => {
  const menuItems = [
    { label: "Candidate Performance", path: "/models/candidate-performance" },
    { label: "Candidate Test Results", path: "/models/candidate-test-results" },
    { label: "Performance Snapshot", path: "/models/performance-snapshot" },
  ];

  const MenuButton: React.FC<{ label: string; path: string; icon?: React.ReactNode }> = ({ label, path, icon }) => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => navigate(path)}
        className="group w-full flex items-center justify-between px-8 py-5 rounded-xl font-semibold text-white text-lg tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
        style={{
          background: "linear-gradient(135deg, #e53935 0%, #ff6f00 100%)",
          boxShadow: "0 4px 15px rgba(229, 57, 53, 0.4)",
        }}
      >
        <span>{label}</span>
        <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-xl">
          {icon || "→"}
        </span>
      </button>
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fff5f5 0%, #fff8f0 50%, #fffaf5 100%)",
      }}
    >
      <div
        className="fixed top-[-80px] right-[-80px] w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #e53935, transparent)" }}
      />
      <div
        className="fixed bottom-[-60px] left-[-60px] w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6f00, transparent)" }}
      />

      <div className="w-full max-w-xl px-6 py-10">
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold text-gray-800 tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Insight Core Menu
          </h1>
          <p className="text-gray-500 mt-2 text-base">Select a module to get started</p>
        </div>

        <div
          className="rounded-3xl p-6 shadow-xl"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(229,57,53,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <MenuButton key={item.path} label={item.label} path={item.path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCoreMenu;
