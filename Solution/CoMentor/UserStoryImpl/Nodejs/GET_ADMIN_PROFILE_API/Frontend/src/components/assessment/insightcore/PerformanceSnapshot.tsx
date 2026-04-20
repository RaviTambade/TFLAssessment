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

interface BadgeTagProps {
  label: string;
  type?: "strength" | "weakness" | "trend" | "rank" | "default";
}

const colorMap: Record<string, string> = {
  strength: "bg-green-100 text-green-700 border-green-300",
  weakness: "bg-red-100 text-red-600 border-red-300",
  trend: "bg-blue-100 text-blue-700 border-blue-300",
  rank: "bg-orange-100 text-orange-700 border-orange-300",
  default: "bg-gray-100 text-gray-700 border-gray-300",
};

const BadgeTag: React.FC<BadgeTagProps> = ({ label, type = "default" }) => {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${colorMap[type]}`}>
      ✓ {label}
    </span>
  );
};

const snapshotData = {
  candidateName: "John Doe",
  strengths: ["Java OOP", "Data Structures", "REST APIs", "SQL Queries"],
  weaknesses: ["System Design", "Multithreading", "Cloud Basics", "Docker"],
  trends: ["Improving in Java", "Consistent in Node.js"],
  ranks: ["Java: 1/7", "C#: 2/7"],
};

const PerformanceSnapshot: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-6" style={{ background: "linear-gradient(135deg, #fff5f5 0%, #fff8f0 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <PageHeader title="Performance Snapshot" subtitle={`Candidate: ${snapshotData.candidateName}`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(34,197,94,0.2)", borderTop: "4px solid #22c55e" }}>
            <h3 className="text-base font-bold text-green-700 mb-4 flex items-center gap-2">
              <span className="text-xl">💪</span> Strengths
            </h3>
            <div className="flex flex-col gap-2">
              {snapshotData.strengths.map((s) => (
                <BadgeTag key={s} label={s} type="strength" />
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6 shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(239,68,68,0.2)", borderTop: "4px solid #ef4444" }}>
            <h3 className="text-base font-bold text-red-600 mb-4 flex items-center gap-2">
              <span className="text-xl">⚠️</span> Weaknesses
            </h3>
            <div className="flex flex-col gap-2">
              {snapshotData.weaknesses.map((w) => (
                <BadgeTag key={w} label={w} type="weakness" />
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6 shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(59,130,246,0.2)", borderTop: "4px solid #3b82f6" }}>
            <h3 className="text-base font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="text-xl">📈</span> Trends
            </h3>
            <div className="flex flex-col gap-2">
              {snapshotData.trends.map((t) => (
                <BadgeTag key={t} label={t} type="trend" />
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6 shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(249,115,22,0.2)", borderTop: "4px solid #f97316" }}>
            <h3 className="text-base font-bold text-orange-600 mb-4 flex items-center gap-2">
              <span className="text-xl">🏆</span> Rank
            </h3>
            <div className="flex flex-col gap-2">
              {snapshotData.ranks.map((r) => (
                <BadgeTag key={r} label={r} type="rank" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSnapshot;
