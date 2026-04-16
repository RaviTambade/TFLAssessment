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

export default function AddTechnology() {
  const [form, setForm] = useState<TechnologyForm>({
    runtime: "",
    language: "",
    layer: "",
    technology: "",
  });
  const [added, setAdded] = useState<TechnologyForm[]>([]);
  const [shake, setShake] = useState(false);

  const handleAdd = () => {
    if (!form.runtime || !form.language || !form.layer || !form.technology.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setAdded((prev) => [...prev, form]);
    setForm({ runtime: "", language: "", layer: "", technology: "" });
  };

  const handleCancel = () => {
    setForm({ runtime: "", language: "", layer: "", technology: "" });
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">

      <div className="relative w-full max-w-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Add <span className="text-orange-600">Technology</span>
          </h1>
        </div>

        {/* Card */}
        <div
          className={`bg-white border border-orange-200 rounded-2xl p-8 shadow-lg space-y-6`}
          style={shake ? { animation: "shake 0.4s ease" } : {}}
        >
          {/* Dropdowns row */}
          <div className="grid grid-cols-3 gap-6">

            {/* Runtime */}
            <div>
              <label className="block mb-2 font-semibold text-gray-800">Runtime</label>
              <div className="relative">
                <select
                  value={form.runtime}
                  onChange={(e) => setForm((f) => ({ ...f, runtime: e.target.value as Runtime }))}
                  className="w-full appearance-none bg-white border border-orange-200 text-gray-800 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer shadow-sm"
                >
                  <option value="">Choose runtime</option>
                  {RUNTIMES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-orange-400 text-xs">▼</span>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                {RUNTIMES.map((r) => (
                  <span
                    key={r}
                    onClick={() => setForm((f) => ({ ...f, runtime: r }))}
                    className={`text-xs px-2 py-1 rounded cursor-pointer transition-all ${
                      form.runtime === r
                        ? "bg-orange-600 text-white font-bold"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {form.runtime === r ? "• " : "  "}{r}
                  </span>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block mb-2 font-semibold text-gray-800">Language</label>
              <div className="relative">
                <select
                  value={form.language}
                  onChange={(e) => setForm((f) => ({ ...f, language: e.target.value as Language }))}
                  className="w-full appearance-none bg-white border border-orange-200 text-gray-800 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer shadow-sm"
                >
                  <option value="">Choose language</option>
                  {LANGUAGES.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-orange-400 text-xs">▼</span>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                {LANGUAGES.map((l) => (
                  <span
                    key={l}
                    onClick={() => setForm((f) => ({ ...f, language: l }))}
                    className={`text-xs px-2 py-1 rounded cursor-pointer transition-all ${
                      form.language === l
                        ? "bg-orange-600 text-white font-bold"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {form.language === l ? "• " : "  "}{l}
                  </span>
                ))}
              </div>
            </div>

            {/* Layer */}
            <div>
              <label className="block mb-2 font-semibold text-gray-800">Layer</label>
              <div className="relative">
                <select
                  value={form.layer}
                  onChange={(e) => setForm((f) => ({ ...f, layer: e.target.value as Layer }))}
                  className="w-full appearance-none bg-white border border-orange-200 text-gray-800 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer shadow-sm"
                >
                  <option value="">Choose layer</option>
                  {LAYERS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-orange-400 text-xs">▼</span>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                {LAYERS.map((l) => (
                  <span
                    key={l}
                    onClick={() => setForm((f) => ({ ...f, layer: l }))}
                    className={`text-xs px-2 py-1 rounded cursor-pointer transition-all ${
                      form.layer === l
                        ? "bg-orange-600 text-white font-bold"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {form.layer === l ? "• " : "  "}{l}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-orange-100" />

          {/* Technology input */}
          <div className="flex items-center gap-4">
            <label className="text-sm text-gray-700 whitespace-nowrap font-semibold">
              Technology :
            </label>
            <input
              type="text"
              value={form.technology}
              onChange={(e) => setForm((f) => ({ ...f, technology: e.target.value }))}
              placeholder="e.g. React"
              className="flex-1 bg-white border border-orange-200 text-gray-800 text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 placeholder-gray-300 transition-colors shadow-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAdd}
              className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm py-2.5 rounded-lg transition-all active:scale-95 shadow-lg"
            >
              ADD
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-transparent border border-orange-200 hover:border-orange-400 text-gray-500 hover:text-gray-700 font-bold text-sm py-2.5 rounded-lg transition-all active:scale-95"
            >
              CANCEL
            </button>
          </div>
        </div>

        {/* Added technologies list */}
        {added.length > 0 && (
          <div className="mt-6">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
              Added ({added.length})
            </p>
            <div className="flex flex-col gap-2">
              {added.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-orange-200 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm"
                >
                  <span className="text-orange-600 font-bold text-sm">
                    {item.technology}
                  </span>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span className="bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">{item.runtime}</span>
                    <span className="bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">{item.language}</span>
                    <span className="bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">{item.layer}</span>
                  </div>
                </div>
              ))}
            </div>
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
