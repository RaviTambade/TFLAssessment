import { useEffect, useState } from "react";

interface SessionDto {
  id: number;
  name: string;
  loginTime: string;
  logoutTime: string;
  status: string;
}

interface DashboardStats {
  activeUsers: number;
  loginsToday: number;
  avgSessionTime: number;
}

const UserSessions = () => {
  const [sessions, setSessions] = useState<SessionDto[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5014/api/admin/dashboard");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSessions(data.sessions ?? []);
        setStats(data.dashboardStats ?? null);
      } catch {
        setError("Could not load session data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtered = sessions.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#d8352f",
          padding: "16px 24px",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Transflower Learning - Admin
      </nav>

      <div style={{ flex: 1, padding: "32px 24px" }}>
        {/* Title */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#d8352f",
            marginBottom: "32px",
          }}
        >
          User Sessions
        </h1>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {[
            { label: "Active Users", value: loading ? "..." : stats?.activeUsers ?? 0 },
            { label: "Avg Session Time", value: loading ? "..." : `${stats?.avgSessionTime ?? 0} Mins` },
            { label: "Logins Today", value: loading ? "..." : stats?.loginsToday ?? 0 },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "linear-gradient(135deg, #d8352f, #dc382e)",
                borderRadius: "12px",
                padding: "24px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: 600 }}>
                {stat.label}
              </span>
              <span style={{ fontSize: "28px", fontWeight: "bold" }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Search + Filter */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
  

  {/* Status Dropdown (Filter) */}
  <select
    value={statusFilter}
    onChange={(e) =>
      setStatusFilter(e.target.value as "All" | "Active" | "Inactive")
    }
    style={{
      border: "1px solid #d8352f",
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "15px",
      backgroundColor: "#fff7ed",
      color: "#dc382e",
      fontWeight: 600,
      cursor: "pointer",
      minWidth: "140px"
    }}
  >
    <option value="All">All</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>

  {/* Filter Button (OPTIONAL if you want button UI) */}

</div>
        {/* Table */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "24px",
          }}
        >
          {loading ? (
            <p
              style={{
                textAlign: "center",
                color: "#6b7280",
                padding: "32px 0",
              }}
            >
              Loading sessions...
            </p>
          ) : filtered.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#6b7280",
                padding: "32px 0",
              }}
            >
              No sessions found.
            </p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                  {["ID", "Name", "Login Time", "Logout Time", "Status"].map(
                    (h) => (
                      <th
                        key={h}
                        style={{
                          paddingBottom: "12px",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#1f2937",
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #f3f4f6",
                      height: "48px",
                    }}
                  >
                    <td style={{ color: "#6b7280" }}>{s.id}</td>
                    <td style={{ fontWeight: 500 }}>{s.name}</td>
                    <td style={{ color: "#6b7280" }}>{s.loginTime}</td>
                    <td style={{ color: "#6b7280" }}>
                      {s.logoutTime || "—"}
                    </td>
                    <td>
                      <span
                        style={{
                          fontWeight: 600,
                          color:
                            s.status === "Active" ? "#16a34a" : "#dc2626",
                          backgroundColor:
                            s.status === "Active"
                              ? "#dcfce7"
                              : "#fee2e2",
                          padding: "4px 10px",
                          borderRadius: "999px",
                        }}
                      >
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#ea580c",
          color: "#fff7ed",
          textAlign: "center",
          padding: "16px",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Transflower Learning. All rights reserved.
      </footer>
    </div>
  );
};

export default UserSessions;