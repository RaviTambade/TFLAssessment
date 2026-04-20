import TestDetails from './component/TestDetails';
import TestHistory from './component/TestHistory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(254,226,226,0.9),_transparent_35%),_linear-gradient(180deg,_rgb(255,245,241),_rgb(255,239,236))] text-slate-950">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 pt-4 pb-8 sm:px-10 lg:pt-4 lg:pb-10">
          <header className="rounded-[2rem] bg-white/90 px-6 py-5 shadow-glow ring-1 ring-white/80 backdrop-blur-sm sm:px-8 sm:py-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-[#d32f1f]">Transflower Learning</h1>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
                {/* <span className="rounded-full bg-[#ef3f2f] px-4 py-3 text-white shadow-sm shadow-[#ef6a5a]/30">Get Started</span> */}
                {/* <span className="text-slate-400">|</span> */}
                {/* <span className="text-slate-700">Test History</span> */}
              </div>
            </div>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <main className="grid gap-8">

                  <section className="w-full rounded-[2rem] bg-[#fff2f1] p-6 shadow-glow ring-1 ring-white/80 backdrop-blur-sm">
                    <TestHistory />
                  </section>
                </main>
              }
            />
            <Route
              path="/test-details/:id"
              element={
                <div className="rounded-[2rem] bg-white/90 p-6 shadow-glow ring-1 ring-white/80 backdrop-blur-sm">
                  <TestDetails />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;
