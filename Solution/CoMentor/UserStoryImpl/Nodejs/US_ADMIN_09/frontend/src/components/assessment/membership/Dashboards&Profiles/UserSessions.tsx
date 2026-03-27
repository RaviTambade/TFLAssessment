import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "../../../ui/card";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";

type ApiActiveUser = {
  full_name: string;
  login_time: string;
  status: string;
};

type SessionRow = {
  id: number;
  name: string;
  login: string;
  logout: string;
  status: string;
};

const API_BASE = "http://localhost:3000/api/admin/logs";

const UserSessions = () => {
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [loginsLast24h, setLoginsLast24h] = useState(0);
  const [avgSessionTime, setAvgSessionTime] = useState("0h 0m 0s");

  const [activeUsersList, setActiveUsersList] = useState<ApiActiveUser[]>([]);
  const [showActiveUsers, setShowActiveUsers] = useState(false);

  const [search, setSearch] = useState("");

  // ✅ TIME ONLY FORMAT
  const formatTimeOnly = (dateString?: string) => {
    if (!dateString) return "N/A";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "N/A";

    return d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ✅ DURATION CALCULATION
  const getDuration = (loginTime?: string) => {
    if (!loginTime) return "N/A";

    const login = new Date(loginTime).getTime();
    const now = new Date().getTime();

    let diff = Math.floor((now - login) / 1000);

    const hours = Math.floor(diff / 3600);
    diff %= 3600;

    const mins = Math.floor(diff / 60);

    return `${hours}h ${mins}m`;
  };

  // 🔥 ONLY COUNTS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countRes, loginsRes, avgRes] = await Promise.all([
          fetch(`${API_BASE}/getActiveSessionsCount`),
          fetch(`${API_BASE}/getLoginsLast24Hrs`),
          fetch(`${API_BASE}/getAvgSessionTime`)
        ]);

        const countData = await countRes.json();
        const loginsData = await loginsRes.json();
        const avgData = await avgRes.json();

        setActiveUsersCount(countData[0]?.activeSessions || 0);
        setLoginsLast24h(loginsData[0]?.totalLogins24h || 0);
        setAvgSessionTime(avgData.avgSessionTime || "0h 0m 0s");

      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // 🔥 FETCH ACTIVE USERS LIST
  const fetchActiveUsersList = async () => {
    try {
      const res = await fetch(`${API_BASE}/getActiveUsers`);
      const raw = await res.json();

      const data = raw[0] || []; // ✅ FIXED

      const cleaned: ApiActiveUser[] = data.map((u: any) => ({
        full_name:
          u.full_name ||
          u["full_name "] ||
          u.FULL_NAME ||
          u.fullName ||
          "N/A",

        login_time:
          u.login_time ||
          u["login_time "] ||
          u.LOGIN_TIME ||
          "N/A",

        status: u.status || "UNKNOWN",
      }));

      setActiveUsersList(cleaned);
      setShowActiveUsers(true);

    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => setShowActiveUsers(false);

  // 🔥 AUTO UPDATE DURATION EVERY MINUTE
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsersList(prev => [...prev]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const filteredSessions = useMemo(() => {
    const q = search.toLowerCase();
    return sessions.filter(s =>
      s.name.toLowerCase().includes(q)
    );
  }, [search, sessions]);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navbar isLoggedIn />

      <div className="flex-1 p-6 pt-16">
        <h1 className="text-4xl font-bold text-primary mb-8">User Sessions</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between p-6">
              <span>Logins Today</span>
              <span>{loginsLast24h}</span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between p-6">
              <span>Avg Session Time</span>
              <span>{avgSessionTime}</span>
            </CardContent>
          </Card>

          <Card
            className="bg-gradient-primary text-white cursor-pointer"
            onClick={fetchActiveUsersList}
          >
            <CardContent className="flex justify-between p-6">
              <span>View Active Users</span>
              <span>{activeUsersCount}</span>
            </CardContent>
          </Card>

        </div>

        {showActiveUsers && (
          <Card className="mb-8 border-l-4 border-red-500 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Active Users</h2>

              <table className="w-full text-left border-collapse">
                
                <thead className="border-b border-gray-300">
                  <tr className="text-md font-semibold text-gray-700">
                    <th className="py-3 px-2">Name</th>
                    <th className="py-3 px-2">Login Time</th>
                    <th className="py-3 px-2">Logged In From</th>
                    <th className="py-3 px-2">Status</th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {activeUsersList.map((u, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-2">{u.full_name}</td>

                      <td className="py-3 px-2">
                        {formatTimeOnly(u.login_time)}
                      </td>

                      <td className="py-3 px-2">
                        {getDuration(u.login_time)}
                      </td>

                      <td
                        className={`py-3 px-2 font-semibold ${
                          u.status === "ACTIVE"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {u.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleClose}
                  className="bg-red-500 text-white px-5 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent className="p-6">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Login</th>
                  <th>Logout</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredSessions.map(s => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.login}</td>
                    <td>{s.logout}</td>
                    <td>{s.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

      </div>

      <Footer />
    </div>
  );
};

export default UserSessions;