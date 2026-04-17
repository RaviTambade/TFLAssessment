import React from "react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, showBack = true }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-8">
      
      <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>
        {title}
      </h1>
      {subtitle && <p className="text-gray-500 mt-1 text-base">{subtitle}</p>}
      <div className="mt-3 h-1 w-16 rounded-full" style={{ background: "linear-gradient(90deg, #e53935, #ff6f00)" }} />
    </div>
  );
};

interface StatCardProps {
  value: string | number;
  label: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, color = "#e53935" }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white shadow-md border border-orange-100 min-w-[130px] flex-1"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <span className="text-3xl font-bold text-gray-800">{value}</span>
      <span className="text-sm text-gray-500 mt-1 text-center leading-snug">{label}</span>
    </div>
  );
};

const testsAttempted = [
  { id: 1, name: "Java Test" },
  { id: 2, name: "Node.js" },
  { id: 3, name: "C#" },
];

const CandidatePerformance: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-6" style={{ background: "linear-gradient(135deg, #fff5f5 0%, #fff8f0 100%)" }}>
      <div className="max-w-2xl mx-auto">
        <PageHeader title="Candidate Performance" subtitle="John Doe" />

        <div className="rounded-2xl p-6 mb-8 shadow-md" style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(229,57,53,0.12)" }}>
          <h2 className="text-lg font-semibold text-gray-600 mb-4">Performance Overview</h2>
          <div className="flex gap-4 flex-wrap">
            <StatCard value={6} label="Tests Attempted" color="#e53935" />
            <StatCard value={85} label="Overall Score" color="#ff6f00" />
            <StatCard value={78} label="Average Score" color="#f4a835" />
            <StatCard value="8.2%" label="Improvement Rate" color="#43a047" />
          </div>
        </div>

        <div className="rounded-2xl p-6 shadow-md" style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(229,57,53,0.12)" }}>
          <h2 className="text-lg font-semibold text-gray-700 mb-4 uppercase tracking-wide">Tests Attempted</h2>
          <div className="flex flex-col gap-3">
            {testsAttempted.map((test) => (
              <div key={test.id} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-orange-50 border border-orange-100 hover:shadow-sm transition-shadow">
                <span className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #e53935, #ff6f00)" }}>
                  {test.id}
                </span>
                <span className="text-gray-700 font-medium">{test.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePerformance;
