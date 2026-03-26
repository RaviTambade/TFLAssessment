import React, { useState } from 'react';
import {
  ClipboardList,
  History,
  ChevronRight,
  Code2,
  ArrowLeft,
  Clock,
  X,
  PlayCircle,
  Tag,
  Layers,
  Cpu,
  Globe,
  BookOpen,
  CalendarDays,
  AlarmClock,
  AlertCircle,
  Award,
  Calendar
} from 'lucide-react';

interface Assessment {
  id: string;
  name: string;
  runtime: string;
  language: string;
  layerTechnology: string;
  technology: string;
  level: string;
  concepts: string[];
  duration: number;
  scheduledDate: string;
  scheduledTime: string;
}

interface AssessmentHistory {
  id: string;
  name: string;
  level: string;
  duration: number | null;
  score: number | null;
  completedAt: string | null;
}

interface Student {
  name: string;
}

const assignedAssessments: Assessment[] = [
  {
    id: '1',
    name: 'Java',
    runtime: 'Java',
    language: 'Java',
    layerTechnology: 'Backend',
    technology: 'Spring Boot',
    level: 'Beginner',
    concepts: ['Variables & Datatypes', 'Control Flow', 'Functions & Methods'],
    duration: 60,
    scheduledDate: '2026-03-20',
    scheduledTime: '10:30 AM',
  },
  {
    id: '2',
    name: 'React Fundamentals',
    runtime: 'Node.js',
    language: 'JavaScript',
    layerTechnology: 'Frontend',
    technology: 'React',
    level: 'Intermediate',
    concepts: ['JSX', 'State & Props', 'Hooks', 'Component Lifecycle'],
    duration: 90,
    scheduledDate: '2026-03-22',
    scheduledTime: '02:00 PM',
  },
  {
    id: '3',
    name: 'SQL Basics',
    runtime: 'PostgreSQL',
    language: 'SQL',
    layerTechnology: 'Database',
    technology: 'PostgreSQL',
    level: 'Beginner',
    concepts: ['SELECT queries', 'JOINs', 'Aggregation', 'Indexes'],
    duration: 45,
    scheduledDate: '2026-03-25',
    scheduledTime: '11:00 AM',
  },
];

const assessmentHistory: AssessmentHistory[] = [
  {
    id: 'h1',
    name: 'Java',
    level: 'Beginner',
    duration: 55,
    score: 82,
    completedAt: '2024-02-15',
  },
  {
    id: 'h2',
    name: 'SQL1',
    level: 'Advanced',
    duration: null,
    score: null,
    completedAt: null,
  },
  {
    id: 'h3',
    name: 'Dotnet',
    level: 'Intermediate',
    duration: 48,
    score: 74,
    completedAt: '2024-03-01',
  },
];

const student: Student = { name: 'Rajesh Kumar' };

type TabType = 'assigned' | 'history';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-1 bg-white rounded-xl border border-orange-100 p-1 w-fit">
      <button
        onClick={() => onTabChange('assigned')}
        className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeTab === 'assigned'
            ? 'bg-brand-red text-white shadow-sm'
            : 'text-orange-400 hover:text-brand-red hover:bg-orange-50'
        }`}
      >
        <ClipboardList className="w-4 h-4" />
        Assigned Assessment
      </button>
      <button
        onClick={() => onTabChange('history')}
        className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeTab === 'history'
            ? 'bg-brand-red text-white shadow-sm'
            : 'text-orange-400 hover:text-brand-red hover:bg-orange-50'
        }`}
      >
        <History className="w-4 h-4" />
        Assessment History
      </button>
    </div>
  );
};

interface AssessmentCardProps {
  assessment: Assessment;
  onDetails: (assessment: Assessment) => void;
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

const AssessmentCard: React.FC<AssessmentCardProps> = ({ assessment, onDetails }) => {
  return (
    <div className="bg-white rounded-2xl border border-orange-100 p-5 flex items-center justify-between gap-4 hover:shadow-md hover:border-brand-red/30 transition-all duration-200 animate-slide-up group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
          <Code2 className="w-6 h-6 text-brand-red" />
        </div>
        <div>
          <h3 className="font-semibold text-brand-dark text-base">{assessment.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColors[assessment.level] || 'bg-gray-100 text-gray-600'}`}>
              {assessment.level}
            </span>
            <span className="text-xs text-orange-400">{assessment.technology}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onDetails(assessment)}
        className="flex items-center gap-1.5 px-4 py-2 bg-brand-red text-white rounded-xl text-sm font-medium hover:bg-brand-orange transition-colors flex-shrink-0 group/btn"
      >
        Details
        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};

interface AssessmentDetailProps {
  assessment: Assessment;
  onBack: () => void;
  onCancel: () => void;
  onStart: () => void;
}

const DetailRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 py-3 border-b border-orange-50 last:border-0">
    <div className="w-8 h-8 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-xs text-orange-400 font-medium uppercase tracking-wider">{label}</p>
      <p className="text-brand-dark font-medium text-sm mt-0.5">{value}</p>
    </div>
  </div>
);

const AssessmentDetail: React.FC<AssessmentDetailProps> = ({ assessment, onBack, onCancel, onStart }) => {
  return (
    <div className="animate-slide-up">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-orange-400 hover:text-brand-red transition-colors mb-5 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Assigned Assessments
      </button>
      <div className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-brand-red to-orange-500 px-6 py-5">
          <p className="text-orange-100 text-xs font-medium uppercase tracking-widest mb-1">Assessment Details</p>
          <h2 className="text-white font-display text-2xl font-bold">{assessment.name}</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
              {assessment.level}
            </span>
            <span className="flex items-center gap-1 text-orange-100 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {assessment.duration} min
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">Test Details</h3>
          <div className="divide-y divide-orange-50">
            <DetailRow icon={<Cpu className="w-4 h-4 text-brand-red" />} label="Runtime" value={assessment.runtime} />
            <DetailRow icon={<Globe className="w-4 h-4 text-brand-red" />} label="Language" value={assessment.language} />
            <DetailRow icon={<Layers className="w-4 h-4 text-brand-red" />} label="Layer & Technology" value={assessment.layerTechnology} />
            <DetailRow icon={<Tag className="w-4 h-4 text-brand-red" />} label="Technology" value={assessment.technology} />
            <DetailRow icon={<Tag className="w-4 h-4 text-brand-red" />} label="Level" value={assessment.level} />
            <DetailRow icon={<CalendarDays className="w-4 h-4 text-brand-red" />} label="Scheduled Date" value={new Date(assessment.scheduledDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })} />
            <DetailRow icon={<AlarmClock className="w-4 h-4 text-brand-red" />} label="Scheduled Time" value={assessment.scheduledTime} />
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-brand-red" />
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Concepts Covered</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {assessment.concepts.map((concept, idx) => (
                <span key={idx} className="bg-brand-light border border-orange-200 text-brand-dark text-xs px-3 py-1.5 rounded-lg font-medium">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-xl border border-orange-200 text-orange-400 text-sm font-medium hover:bg-orange-50 hover:text-brand-red hover:border-brand-red transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onStart}
            className="flex items-center gap-2 px-6 py-2.5 bg-brand-red text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all duration-200 shadow-sm shadow-brand-red/30 group"
          >
            <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

interface AssessmentHistoryTableProps {
  history: AssessmentHistory[];
}

const ScoreBadge: React.FC<{ score: number | null }> = ({ score }) => {
  if (score === null) return <span className="text-orange-300 text-sm">—</span>;
  const color =
    score >= 80 ? 'text-green-600 bg-green-50' :
    score >= 60 ? 'text-yellow-600 bg-yellow-50' :
    'text-red-600 bg-red-50';
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-sm font-semibold ${color}`}>
      <Award className="w-3.5 h-3.5" />
      {score}%
    </span>
  );
};

const AssessmentHistoryTable: React.FC<AssessmentHistoryTableProps> = ({ history }) => {
  return (
    <div className="animate-slide-up">
      <div className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-brand-dark text-xl">Assessment History</h2>
            <p className="text-orange-400 text-xs mt-0.5">{history.length} records found</p>
          </div>
          <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-brand-red" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-light">
                <th className="text-left px-6 py-3 text-xs font-semibold text-orange-400 uppercase tracking-wider">Assessment Name</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-orange-400 uppercase tracking-wider">Level</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-orange-400 uppercase tracking-wider">Duration</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-orange-400 uppercase tracking-wider">Score</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-orange-400 uppercase tracking-wider">Completed On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-50">
              {history.map((item, idx) => (
                <tr key={item.id} className="hover:bg-brand-light/50 transition-colors" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red font-bold text-xs">
                        {item.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-brand-dark text-sm">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${levelColors[item.level] || 'bg-gray-100 text-gray-600'}`}>
                      {item.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.duration ? (
                      <span className="flex items-center gap-1.5 text-sm text-brand-dark">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        {item.duration} min
                      </span>
                    ) : (
                      <span className="text-orange-300 text-sm">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <ScoreBadge score={item.score} />
                  </td>
                  <td className="px-6 py-4">
                    {item.completedAt ? (
                      <span className="text-sm text-gray-500">
                        {new Date(item.completedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </span>
                    ) : (
                      <span className="text-xs text-orange-300 bg-orange-50 px-2 py-1 rounded-lg">In Progress</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {history.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-orange-300 text-sm">No assessment history yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface StartModalProps {
  assessment: Assessment;
  onClose: () => void;
  onConfirm: () => void;
}

const StartModal: React.FC<StartModalProps> = ({ assessment, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-slide-up overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-brand-red to-orange-400" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center">
                <PlayCircle className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-lg">Start Assessment</h3>
                <p className="text-orange-400 text-sm">{assessment.name}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-orange-300 hover:text-brand-red transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 flex items-start gap-3 mb-6">
            <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-brand-dark font-medium">Ready to begin?</p>
              <p className="text-xs text-orange-500 mt-1">
                This assessment will take approximately <strong>{assessment.duration} minutes</strong>. Once started, the timer cannot be paused.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-6 text-sm text-orange-400">
            <Clock className="w-4 h-4" />
            <span>Duration: {assessment.duration} minutes</span>
          </div>
          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-orange-200 text-orange-400 text-sm font-medium hover:bg-orange-50 transition-all">
              Not yet
            </button>
            <button onClick={onConfirm} className="flex-1 py-2.5 bg-brand-red text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all shadow-sm shadow-brand-red/30">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowAssessment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('assigned');
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);
  const [showStartModal, setShowStartModal] = useState(false);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedAssessment(null);
  };

  const handleDetails = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
  };

  const handleBack = () => {
    setSelectedAssessment(null);
  };

  const handleCancel = () => {
    setSelectedAssessment(null);
  };

  const handleStartClick = () => {
    setShowStartModal(true);
  };

  const handleStartConfirm = () => {
    setShowStartModal(false);
    alert(`Assessment "${selectedAssessment?.name}" started! Good luck 🚀`);
    setSelectedAssessment(null);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark">
          Student <span className="text-brand-red">Dashboard</span>
        </h1>
        <p className="text-orange-400 text-sm mt-1">Manage and track your assessments</p>
      </div>

      <div className="mb-6">
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {activeTab === 'assigned' && (
        <>
          {selectedAssessment ? (
            <AssessmentDetail assessment={selectedAssessment} onBack={handleBack} onCancel={handleCancel} onStart={handleStartClick} />
          ) : (
            <div className="space-y-3">
              {assignedAssessments.length === 0 ? (
                <div className="bg-white rounded-2xl border border-orange-100 py-16 text-center">
                  <BookOpen className="w-10 h-10 text-orange-200 mx-auto mb-3" />
                  <p className="text-orange-300 text-sm">No assessments assigned yet.</p>
                </div>
              ) : (
                assignedAssessments.map((assessment, idx) => (
                  <div key={assessment.id} style={{ animationDelay: `${idx * 0.08}s` }}>
                    <AssessmentCard assessment={assessment} onDetails={handleDetails} />
                  </div>
                ))
              )}
            </div>
          )}
        </>
      )}

      {activeTab === 'history' && <AssessmentHistoryTable history={assessmentHistory} />}

      {showStartModal && selectedAssessment && (
        <StartModal assessment={selectedAssessment} onClose={() => setShowStartModal(false)} onConfirm={handleStartConfirm} />
      )}
    </main>
  );
};

export default ShowAssessment;
