import axios from "axios";
import { useState } from "react";

type SessionLog = {
  sessionId: number;
  userId: number;
  fullName: string;
  role: string | null;
  loginTime: string;
  logoutTime: string | null;
  sessionDurationMinutes: number;
};

type SessionsResponse = {
  success: boolean;
  data?: SessionLog[];
  message?: string;
};

const logsEndpoint = "http://localhost:3899/api/admin/sessions/logs";
const pageSize = 10;

function formatDateTime(value: string | null) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function getStatus(log: SessionLog) {
  return log.logoutTime ? "Inactive" : "Active";
}

function App() {
  const [logs, setLogs] = useState<SessionLog[]>([]);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasDisplayed, setHasDisplayed] = useState(false);
  const visibleLogs = logs.slice(0, visibleCount);
  const hasMoreLogs = visibleCount < logs.length;

  async function loadLogs() {
    setLoading(true);
    setError("");
    setHasDisplayed(true);

    try {
      const response = await axios.get<SessionsResponse>(logsEndpoint);
      const payload = response.data;

      if (!payload.success) {
        throw new Error(payload.message || "Unable to fetch user sessions.");
      }

      setLogs(payload.data ?? []);
      setVisibleCount(pageSize);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error while fetching user sessions.";
      setLogs([]);
      setVisibleCount(pageSize);
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  function handleShowMore() {
    setVisibleCount((currentCount) => currentCount + pageSize);
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">TF</div>
          <span>Transflower Learning</span>
        </div>
        <button type="button" className="profile-button">
          Profile
        </button>
      </header>

      <section className="sessions-panel">
        <div className="display-row">
          <button type="button" onClick={() => void loadLogs()} disabled={loading}>
            {loading ? "Loading..." : "Display"}
          </button>
        </div>

        {error ? <div className="message error">{error}</div> : null}
        {!error && loading ? <div className="message">Loading user sessions...</div> : null}
        {!loading && !error && hasDisplayed && logs.length === 0 ? (
          <div className="message">No user sessions found.</div>
        ) : null}

        {!error && hasDisplayed && logs.length > 0 ? (
          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Login Time</th>
                  <th>Logout Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {visibleLogs.map((log, index) => {
                  const status = getStatus(log);

                  return (
                    <tr key={log.sessionId}>
                      <td>{index + 1}</td>
                      <td>{log.fullName}</td>
                      <td>{formatDateTime(log.loginTime)}</td>
                      <td>{formatDateTime(log.logoutTime)}</td>
                      <td className={status === "Active" ? "status-active" : "status-inactive"}>{status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}

        {hasDisplayed && hasMoreLogs ? (
          <div className="show-more-row">
            <button type="button" onClick={handleShowMore}>
              Show More
            </button>
          </div>
        ) : null}
      </section>

      <footer className="footer-panel">
        <div className="footer-brand">
          <div className="brand-mark">TF</div>
          <span>Transflower Learning</span>
        </div>
        <p>Where learning becomes a shared adventure through collaboration and growth.</p>
        <p>Made with respect by one of the mentees</p>
        <p>(c) 2025 Transflower Learning Pvt Ltd. All rights reserved. Mentor at your Service.</p>
      </footer>
    </main>
  );
}

export default App;
