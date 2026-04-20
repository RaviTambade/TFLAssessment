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

interface AssessmentRow {
  srNo: number;
  testName: string;
  score: number;
  percentile: number;
  rank: string;
  level: string;
  date: string;
}

const assessmentData: AssessmentRow[] = [
  { srNo: 1, testName: "Java", score: 90.0, percentile: 88.0, rank: "1/7", level: "Advanced", date: "2 Mar 2025" },
  { srNo: 2, testName: "Node.js", score: 76.5, percentile: 72.0, rank: "3/7", level: "Intermediate", date: "5 Mar 2025" },
  { srNo: 3, testName: "C#", score: 83.0, percentile: 80.5, rank: "2/7", level: "Advanced", date: "8 Mar 2025" },
];

const levelColors: Record<string, string> = {
  Advanced: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Beginner: "bg-red-100 text-red-600",
};

const CandidateTestResult: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-6" style={{ background: "linear-gradient(135deg, #fff5f5 0%, #fff8f0 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <PageHeader title="Assessment Result" subtitle="Candidate: John Doe" />

        <div className="rounded-2xl overflow-hidden shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(229,57,53,0.12)" }}>
          <div className="grid grid-cols-6 gap-2 px-6 py-4 text-white text-sm font-semibold uppercase tracking-wider" style={{ background: "linear-gradient(135deg, #e53935, #ff6f00)" }}>
            <span>Sr No</span>
            <span>Test Name</span>
            <span>Score</span>
            <span>Percentile</span>
            <span>Rank</span>
            <span>Level / Date</span>
          </div>

          {assessmentData.map((row, idx) => (
            <div
              key={row.srNo}
              className={`grid grid-cols-6 gap-2 px-6 py-4 items-center text-sm text-gray-700 border-b border-orange-50 hover:bg-orange-50 transition-colors ${
                idx % 2 === 0 ? "bg-white" : "bg-red-50/30"
              }`}
            >
              <span className="font-bold text-orange-500">{row.srNo}</span>
              <span className="font-semibold text-gray-800">{row.testName}</span>
              <span className="font-bold text-gray-800">{row.score.toFixed(2)}</span>
              <span>{row.percentile.toFixed(2)}</span>
              <span className="font-medium">{row.rank}</span>
              <div className="flex flex-col gap-1">
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${levelColors[row.level] || "bg-gray-100 text-gray-600"}`}>
                  {row.level}
                </span>
                <span className="text-gray-400 text-xs">{row.date}</span>
              </div>
            </div>
          ))}

          {[...Array(2)].map((_, i) => (
            <div key={`empty-${i}`} className="grid grid-cols-6 gap-2 px-6 py-4 text-sm text-gray-300 border-b border-orange-50">
              <span>{assessmentData.length + i + 1}</span>
              <span className="col-span-5 border-b border-dashed border-gray-200 mt-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateTestResult;
