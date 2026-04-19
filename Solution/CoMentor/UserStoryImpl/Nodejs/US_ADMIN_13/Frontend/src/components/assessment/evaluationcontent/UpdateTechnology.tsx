import { useState } from "react";

type Runtime = "JVM" | "Node.js" | "Python" | "";
type Language = "Java" | "JS" | "Python" | "";
type Layer = "Frontend" | "Backend" | "Database" | "";

interface TechnologyForm {
  runtime: Runtime;
  language: Language;
  layer: Layer;
  technology: string;
}

const RUNTIMES: Runtime[] = ["JVM", "Node.js", "Python"];
const LANGUAGES: Language[] = ["Java", "JS", "Python"];
const LAYERS: Layer[] = ["Frontend", "Backend", "Database"];

const MOCK_TECHNOLOGIES: (TechnologyForm & { id: number })[] = [
  { id: 1, runtime: "Node.js", language: "JS", layer: "Frontend", technology: "React" },
  { id: 2, runtime: "JVM", language: "Java", layer: "Backend", technology: "Spring Boot" },
  { id: 3, runtime: "Python", language: "Python", layer: "Database", technology: "SQLAlchemy" },
];

type ActionMode = "edit" | "delete" | null;
type ToastType = "success" | "delete" | null;

export default function UpdateTechnology() {
  const [technologies, setTechnologies] = useState(MOCK_TECHNOLOGIES);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [mode, setMode] = useState<ActionMode>(null);
  const [form, setForm] = useState<TechnologyForm>({ runtime: "", language: "", layer: "", technology: "" });
  const [shake, setShake] = useState(false);
  const [toast, setToast] = useState<ToastType>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const showToast = (type: ToastType) => {
    setToast(type);
    setTimeout(() => setToast(null), 2500);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSelect = (id: number) => {
    const tech = technologies.find((t) => t.id === id);
    if (tech) {
      setSelectedId(id);
      setForm({ runtime: tech.runtime, language: tech.language, layer: tech.layer, technology: tech.technology });
      setMode(null);
      setConfirmDelete(false);
    }
  };

  const handleEditMode = () => {
    if (selectedId === null) return triggerShake();
    setMode("edit");
    setConfirmDelete(false);
  };

  const handleDeleteMode = () => {
    if (selectedId === null) return triggerShake();
    setMode("delete");
    setConfirmDelete(true);
  };

  const handleUpdate = () => {
    if (!form.runtime || !form.language || !form.layer || !form.technology.trim()) return triggerShake();
    if (selectedId === null) return triggerShake();
    setTechnologies((prev) => prev.map((t) => (t.id === selectedId ? { ...t, ...form } : t)));
    showToast("success");
    setMode(null);
  };

  const handleDelete = () => {
    if (selectedId === null) return;
    setTechnologies((prev) => prev.filter((t) => t.id !== selectedId));
    showToast("delete");
    handleCancel();
  };

  const handleCancel = () => {
    setForm({ runtime: "", language: "", layer: "", technology: "" });
    setSelectedId(null);
    setMode(null);
    setConfirmDelete(false);
  };

  const selectedTech = technologies.find((t) => t.id === selectedId);

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <div className="relative w-full max-w-xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Manage <span className="text-orange-600">Technologies</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">Select a technology to edit or delete</p>
        </div>

        {/* Toast */}
        {toast && (
          <div className={`mb-4 px-4 py-3 rounded-xl text-sm font-semibold text-center tracking-wide border transition-all ${
            toast === "success"
              ? "bg-green-50 border-green-300 text-green-600"
              : "bg-red-50 border-red-300 text-red-600"
          }`}>
            {toast === "success" ? "✓ Technology updated successfully" : "🗑 Technology deleted"}
          </div>
        )}

        {/* Technology List */}
        <div className="mb-5">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Select Technology</p>
          <div className="flex flex-col gap-2">
            {technologies.length === 0 && (
              <p className="text-center text-gray-300 text-sm py-6 border border-dashed border-orange-200 rounded-xl">
                No technologies available
              </p>
            )}
            {technologies.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer transition-all border ${
                  selectedId === item.id
                    ? "bg-orange-50 border-orange-500 shadow-lg shadow-orange-100"
                    : "bg-white border-orange-200 hover:border-orange-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${selectedId === item.id ? "bg-orange-500" : "bg-orange-200"}`} />
                  <span className={`font-bold text-sm ${selectedId === item.id ? "text-orange-600" : "text-gray-700"}`}>
                    {item.technology}
                  </span>
                </div>
                <div className="flex gap-2 text-xs text-gray-500">
                  {[item.runtime, item.language, item.layer].map((tag) => (
                    <span key={tag} className="bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div
          className={`flex gap-3 mb-4 transition-all duration-150`}
          style={shake ? { animation: "shake 0.4s ease" } : {}}
        >
          <button
            onClick={handleEditMode}
            disabled={selectedId === null}
            className={`flex-1 flex items-center justify-center gap-2 font-bold text-sm py-2.5 rounded-xl border transition-all active:scale-95 ${
              mode === "edit"
                ? "bg-orange-600 text-white border-orange-600 shadow-lg"
                : "bg-white border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-500"
            } disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            EDIT
          </button>
          <button
            onClick={handleDeleteMode}
            disabled={selectedId === null}
            className={`flex-1 flex items-center justify-center gap-2 font-bold text-sm py-2.5 rounded-xl border transition-all active:scale-95 ${
              mode === "delete"
                ? "bg-red-500 text-white border-red-500 shadow-lg"
                : "bg-white border-red-200 text-red-500 hover:bg-red-50 hover:border-red-400"
            } disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            DELETE
          </button>
        </div>

        {/* Edit Panel */}
        {mode === "edit" && selectedId !== null && (
          <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-lg">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Editing: <span className="text-orange-600 font-bold">{selectedTech?.technology}</span></p>

            {/* Dropdowns */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {(["runtime", "language", "layer"] as const).map((field) => {
                const options = field === "runtime" ? RUNTIMES : field === "language" ? LANGUAGES : LAYERS;
                return (
                  <div key={field} className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-widest">{field}</label>
                    <div className="relative">
                      <select
                        value={form[field]}
                        onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                        className="w-full appearance-none bg-white border border-orange-200 text-gray-800 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer shadow-sm"
                      >
                        <option value="">Select</option>
                        {options.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-orange-400 text-xs">▼</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {options.map((o) => (
                        <span
                          key={o}
                          onClick={() => setForm((f) => ({ ...f, [field]: o }))}
                          className={`text-xs px-2 py-1 rounded cursor-pointer transition-all ${
                            form[field] === o
                              ? "bg-orange-600 text-white font-bold"
                              : "text-gray-400 hover:text-gray-700"
                          }`}
                        >
                          {form[field] === o ? "• " : "  "}{o}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-orange-100 my-5" />

            {/* Technology input */}
            <div className="flex items-center gap-4 mb-6">
              <label className="text-sm text-gray-700 whitespace-nowrap font-semibold">Technology :</label>
              <input
                type="text"
                value={form.technology}
                onChange={(e) => setForm((f) => ({ ...f, technology: e.target.value }))}
                placeholder="e.g. React"
                className="flex-1 bg-white border border-orange-200 text-gray-800 text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 placeholder-gray-300 transition-colors shadow-sm"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleUpdate}
                className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm py-2.5 rounded-xl transition-all active:scale-95 shadow-lg"
              >
                UPDATE
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-transparent border border-orange-200 hover:border-orange-400 text-gray-500 hover:text-gray-700 font-bold text-sm py-2.5 rounded-xl transition-all active:scale-95"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        {/* Delete Confirm Panel */}
        {mode === "delete" && confirmDelete && selectedId !== null && (
          <div className="bg-white border border-red-200 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col items-center text-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base">Delete Technology?</p>
                <p className="text-sm text-gray-500 mt-1">
                  You are about to delete <span className="font-semibold text-red-500">{selectedTech?.technology}</span>. This action cannot be undone.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {[selectedTech?.runtime, selectedTech?.language, selectedTech?.layer].map((tag) => (
                  <span key={tag} className="bg-red-50 border border-red-200 text-red-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-500 hover:bg-red-400 text-white font-bold text-sm py-2.5 rounded-xl transition-all active:scale-95 shadow-lg"
              >
                YES, DELETE
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-transparent border border-orange-200 hover:border-orange-400 text-gray-500 hover:text-gray-700 font-bold text-sm py-2.5 rounded-xl transition-all active:scale-95"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        {/* Idle hint */}
        {mode === null && selectedId !== null && (
          <div className="bg-white border border-orange-100 rounded-2xl p-4 text-center text-sm text-gray-400 shadow-sm">
            Choose <span className="text-orange-500 font-semibold">EDIT</span> to modify or <span className="text-red-400 font-semibold">DELETE</span> to remove this technology.
          </div>
        )}

        {mode === null && selectedId === null && (
          <div className="bg-white border border-dashed border-orange-200 rounded-2xl p-4 text-center text-sm text-gray-300 shadow-sm">
            ↑ Select a technology above to get started
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
