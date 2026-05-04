import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import Footer from "../../Footer";
import { WEBAPI_NODE_URL } from "@/lib/utils";

// Types
type ApiActiveUser = {
  full_name?: string;
  fullName?: string;
  login_time?: string;
  loginTime?: string;
  status?: string;
};

type ApiSession = {
  session_id?: string | number;
  sessionId?: string | number;
  id?: string | number;
  full_name?: string;
  fullName?: string;
  name?: string;
  login_time?: string;
  loginTime?: string;
  login?: string;
  logout_time?: string;
  logoutTime?: string;
  logout?: string;
};

type SessionRow = {
  id: string;
  name: string;
  login: string | null;
  logout: string | null;
  status: string;
};

const UserActivity = () => {
  // Stats + Active Users
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [loginsLast24h, setLoginsLast24h] = useState(0);
  const [avgSessionTime, setAvgSessionTime] = useState("0h 0m 0s");
  const [activeUsersList, setActiveUsersList] = useState<ApiActiveUser[]>([]);
  const [showActiveUsers, setShowActiveUsers] = useState(false);

  // Sessions Table
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Helpers
  const formatTimeOnly = (dateString?: string) => {
    if (!dateString) return "N/A";

    const d = new Date(dateString);

    return isNaN(d.getTime())
      ? "N/A"
      : d.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
  };

  const getDuration = (loginTime?: string) => {
    if (!loginTime) return "N/A";

    const login = new Date(loginTime).getTime();
    const now = new Date().getTime();

    const diff = Math.floor((now - login) / 1000);

    const hours = Math.floor(diff / 3600);
    const mins = Math.floor((diff % 3600) / 60);

    return `${hours}h ${mins}m`;
  };

  const formatDateTime = (isoString: string | null) => {
    if (!isoString) return null;

    const date = new Date(isoString);

    if (isNaN(date.getTime())) return null;

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${day}-${month}-${year} / ${hours}:${minutes} ${ampm}`;
  };

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Stats APIs
        const [countRes, loginsRes, avgRes] = await Promise.all([
          fetch(`$${WEBAPI_NODE_URL}/useractivity/active-count`),
          fetch(`$${WEBAPI_NODE_URL}/useractivity/logins-24h`),
          fetch(`$${WEBAPI_NODE_URL}/useractivity/average-time`),
        ]);

        const countData = await countRes.json();
        const loginsData = await loginsRes.json();
        const avgData = await avgRes.json();

        setActiveUsersCount(
          countData?.data?.totalActiveSessions || 0
        );

        setLoginsLast24h(
          loginsData?.data?.totalLogins24Hours || 0
        );

        setAvgSessionTime(
          avgData?.data?.avgSessionTime || "0h 0m 0s"
        );

        // Sessions API
        const sessionsRes = await fetch(`$${WEBAPI_NODE_URL}/useractivity/logs`);

        if (!sessionsRes.ok) {
          throw new Error(`HTTP Error: ${sessionsRes.status}`);
        }

        const sessionsData = await sessionsRes.json();

        const sessionsArray = Array.isArray(sessionsData)
          ? sessionsData
          : sessionsData.data || sessionsData.sessions || [];

        const mappedSessions: SessionRow[] = sessionsArray.map(
          (item: ApiSession, index: number) => ({
            id: String(
              item.session_id ||
                item.sessionId ||
                item.id ||
                index
            ),

            name:
              item.full_name ||
              item.fullName ||
              item.name ||
              "N/A",

            login: formatDateTime(
              item.login_time ||
                item.loginTime ||
                item.login
            ),

            logout: formatDateTime(
              item.logout_time ||
                item.logoutTime ||
                item.logout
            ),

            status:
              item.logout_time || item.logoutTime
                ? "Inactive"
                : "Active",
          })
        );

        setSessions(mappedSessions);
      } catch (err: unknown) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch Active Users
  const fetchActiveUsersList = async () => {
    try {
      const res = await fetch(`${WEBAPI_NODE_URL}/useractivity/active-users`);
      const raw = await res.json();

      const data = raw.data || [];

      const cleaned: Required<Pick<ApiActiveUser, "full_name" | "login_time" | "status">>[] = data.map(
        (u: ApiActiveUser) => ({
          full_name:
            u.full_name ||
            u.fullName ||
            "N/A",

          login_time:
            u.login_time ||
            u.loginTime ||
            "N/A",

          status: u.status || "UNKNOWN",
        })
      );

      setActiveUsersList(cleaned);
      setShowActiveUsers(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Search Filter
  const filteredSessions = useMemo(() => {
    return sessions.filter((s) =>
      s.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [sessions, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <div className="flex-1 p-6 pt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">
          User Sessions
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">
                Logins Today
              </span>
              <span className="text-3xl font-bold">
                {loginsLast24h}
              </span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">
                Avg Session Time
              </span>
              <span className="text-3xl font-bold">
                {avgSessionTime}
              </span>
            </CardContent>
          </Card>

          <Card
            className="bg-gradient-primary text-white cursor-pointer"
            onClick={fetchActiveUsersList}
          >
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">
                Active Users
              </span>
              <span className="text-3xl font-bold">
                {activeUsersCount}
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Active Users */}
        {showActiveUsers && (
          <Card className="mb-8 border-l-4 border-red-500 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">
                Current Active Users
              </h2>

              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th>Name</th>
                    <th>Login Time</th>
                    <th>Duration</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {activeUsersList.map((u, i) => (
                    <tr
                      key={`${u.full_name}-${u.login_time}-${i}`}
                      className="border-b"
                    >
                      <td>{u.full_name}</td>
                      <td>{formatTimeOnly(u.login_time)}</td>
                      <td>{getDuration(u.login_time)}</td>
                      <td>{u.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                onClick={() =>
                  setShowActiveUsers(false)
                }
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search sessions by name..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="flex-1 border px-4 py-2 rounded"
          />

          <button
            onClick={() => setSearchTerm("")}
            className="bg-primary text-white px-6 py-2 rounded"
          >
            Clear
          </button>
        </div>

        {/* Sessions Table */}
        <Card>
          <CardContent className="p-6">
            {error ? (
              <div className="text-red-500 text-center py-8">
                {error}
              </div>
            ) : loading ? (
              <div className="text-center py-8">
                Loading sessions...
              </div>
            ) : (
              <table className="w-full text-left">
                <thead className="border-b">
                  <tr>
                    <th>Name</th>
                    <th>Login Time</th>
                    <th>Logout Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredSessions
                    .slice(0, 15)
                    .map((s, index) => (
                      <tr
                        key={`${s.id}-${index}`}
                        className="border-b h-12"
                      >
                        <td>{s.name}</td>
                        <td>{s.login || "-"}</td>
                        <td>{s.logout || "-"}</td>
                        <td>{s.status}</td>
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

export default UserActivity;
