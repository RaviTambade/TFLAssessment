import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "../../../ui/card";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";

// Types from both implementations
type ApiActiveUser = {
  full_name: string;
  login_time: string;
  status: string;
};

type SessionRow = {
  id: number;
  name: string;
  login: string;
  logout: string | null;
  status: string;
};

const API_BASE_3000 = "http://localhost:3000/api/admin/logs";
const API_BASE_3899 = "http://localhost:3899/api/admin/sessions/logs";

const UserSessions = () => {
  // States for Port 3000 (Stats & Active List)
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [loginsLast24h, setLoginsLast24h] = useState(0);
  const [avgSessionTime, setAvgSessionTime] = useState("0h 0m 0s");
  const [activeUsersList, setActiveUsersList] = useState<ApiActiveUser[]>([]);
  const [showActiveUsers, setShowActiveUsers] = useState(false);

  // States for Port 3899 (Table)
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ HELPERS (Preserved)
  const formatTimeOnly = (dateString?: string) => {
    if (!dateString) return "N/A";
    const d = new Date(dateString);
    return isNaN(d.getTime()) ? "N/A" : d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getDuration = (loginTime?: string) => {
    if (!loginTime) return "N/A";
    const login = new Date(loginTime).getTime();
    const now = new Date().getTime();
    let diff = Math.floor((now - login) / 1000);
    const hours = Math.floor(diff / 3600);
    const mins = Math.floor((diff % 3600) / 60);
    return `${hours}h ${mins}m`;
  };

  const formatDateTime = (isoString: string | null) => {
    if (!isoString) return null;

    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // convert to 12-hour format

    return `${day}-${month}-${year} / ${hours}:${minutes} ${ampm}`;
  };

  // 🔥 FETCH DATA FROM BOTH BACKENDS
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 1. Fetch Stats from Port 3000
        const [countRes, loginsRes, avgRes] = await Promise.all([
          fetch(`${API_BASE_3000}/analytics/sessions/active/count`),
          fetch(`${API_BASE_3000}/analytics/login-activity/last-24-hours`),
          fetch(`${API_BASE_3000}/analytics/sessions/average-duration`)
        ]);

        const countData = await countRes.json();
        const loginsData = await loginsRes.json();
        const avgData = await avgRes.json();

        setActiveUsersCount(countData[0]?.activeSessions || 0);
        setLoginsLast24h(loginsData[0]?.totalLogins24h || 0);
        setAvgSessionTime(avgData.avgSessionTime || "0h 0m 0s");

        // 2. Fetch Sessions Table from Port 3899
        const sessionsRes = await fetch(API_BASE_3899);
        if (!sessionsRes.ok) throw new Error(`HTTP Error: ${sessionsRes.status}`);
        
        const sessionsData = await sessionsRes.json();
        let sessionsArray = Array.isArray(sessionsData) ? sessionsData : (sessionsData.data || sessionsData.sessions || []);
        
        const mappedSessions: SessionRow[] = sessionsArray.map((item: any) => ({
          id: item.sessionId || item.id,
          name: item.fullName || item.name,
          login: formatDateTime(item.loginTime || item.login),
          logout: formatDateTime(item.logoutTime),
          status: item.logoutTime ? "Inactive" : "Active"
        }));

        setSessions(mappedSessions);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 FETCH ACTIVE USERS LIST (Port 3000)
  const fetchActiveUsersList = async () => {
    try {
      const res = await fetch(`${API_BASE_3000}/analytics/users/active`);
      const raw = await res.json();
      const data = raw[0] || [];
      const cleaned: ApiActiveUser[] = data.map((u: any) => ({
        full_name: u.full_name || u["full_name "] || u.FULL_NAME || "N/A",
        login_time: u.login_time || u.LOGIN_TIME || "N/A",
        status: u.status || "UNKNOWN",
      }));
      setActiveUsersList(cleaned);
      setShowActiveUsers(true);
    } catch (err) { console.error(err); }
  };

  // 🔥 Filter logic
  const filteredSessions = useMemo(() => {
    return sessions.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, sessions]);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navbar isLoggedIn />

      <div className="flex-1 p-6 pt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">User Sessions</h1>

        {/* STATS CARDS (Port 3000) */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">Logins Today</span>
              <span className="text-3xl font-bold">{loginsLast24h}</span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">Avg Session Time</span>
              <span className="text-3xl font-bold">{avgSessionTime}</span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white cursor-pointer" onClick={fetchActiveUsersList}>
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">Active Users (View)</span>
              <span className="text-3xl font-bold">{activeUsersCount}</span>
            </CardContent>
          </Card>
        </div>

        {/* ACTIVE USERS MODAL/LIST (Port 3000) */}
        {showActiveUsers && (
          <Card className="mb-8 border-l-4 border-red-500 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Current Active Users</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b text-gray-700">
                    <th className="py-2">Name</th>
                    <th className="py-2">Login Time</th>
                    <th className="py-2">Duration</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {activeUsersList.map((u, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-2">{u.full_name}</td>
                      <td className="py-2">{formatTimeOnly(u.login_time)}</td>
                      <td className="py-2">{getDuration(u.login_time)}</td>
                      <td className={`py-2 font-bold ${u.status === "ACTIVE" ? "text-red-500" : "text-gray-500"}`}>{u.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => setShowActiveUsers(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
            </CardContent>
          </Card>
        )}

        {/* SEARCH BAR */}
        <div className="flex gap-4 mb-6">
          <input
            placeholder="Search sessions by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-4 py-2"
          />
          <button onClick={() => setSearchTerm("")} className="bg-primary text-white px-6 py-2 rounded-md">Clear</button>
        </div>

        {/* MAIN SESSIONS TABLE (Port 3899) */}
        <Card>
          <CardContent className="p-6">
            {error ? <div className="text-red-500 text-center py-8">{error}</div> :
             loading ? <div className="text-center py-8">Loading sessions...</div> : (
              <table className="w-full text-left">
                <thead className="border-b">
                  <tr className="text-lg font-semibold">
                    <th className="py-2">Name</th>
                    <th className="py-2">Login Time</th>
                    <th className="py-2">Logout Time</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions.slice(0, 15).map((s) => (
                    <tr key={s.id} className="border-b h-12">
                      <td>{s.name}</td>
                      <td>{s.login}</td>
                      <td>{s.logout || "-"}</td>
                      <td className={`font-semibold ${s.status === "Active" ? "text-primary" : "text-red-500"}`}>{s.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default UserSessions;
