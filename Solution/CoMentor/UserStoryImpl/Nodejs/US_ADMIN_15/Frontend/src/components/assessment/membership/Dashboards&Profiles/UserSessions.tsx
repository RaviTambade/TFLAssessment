import { Card, CardContent } from "../../../ui/card";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";

const sessions = [
  {
    id: 1,
    name: "Ravi Tambade",
    login: "12:00, 12-10-2025",
    logout: "12:20, 12-10-2025",
    status: "Inactive"
  },
  {
    id: 2,
    name: "Arnav Tolahunase",
    login: "14:03, 2-1-2025",
    logout: "-",
    status: "Active"
  },
  {
    id: 3,
    name: "Chaitrali Patil",
    login: "20:30, 20-11-2025",
    logout: "-",
    status: "Active"
  }
]

const UserSessions = () => {

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 p-6 pt-24">

        {/* Title */}
        <h1 className="text-4xl font-bold text-primary mb-8">
          User Sessions
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-2xl font-semibold">
                Active Users
              </span>

              <span className="text-3xl font-bold">
                37
              </span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-2xl font-semibold">
                Avg Session Time
              </span>

              <span className="text-3xl font-bold">
                20 Mins
              </span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-2xl font-semibold">
                Logins Today
              </span>

              <span className="text-3xl font-bold">
                52
              </span>
            </CardContent>
          </Card>

        </div>

        {/* Search */}
        <div className="flex gap-4 mb-6">

          <input
            placeholder="Search"
            className="flex-1 border border-border rounded-md px-4 py-2"
          />

          <button className="bg-primary text-white px-6 py-2 rounded-md">
            Filter
          </button>

        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-6">

            <table className="w-full text-left">

              <thead className="border-b">

                <tr className="text-lg font-semibold">

                  <th>ID</th>
                  <th>Name</th>
                  <th>Login Time</th>
                  <th>Logout Time</th>
                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {sessions.map((s) => (

                  <tr
                    key={s.id}
                    className="border-b h-12"
                  >

                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.login}</td>
                    <td>{s.logout}</td>

                    <td
                      className={`font-semibold ${
                        s.status === "Active"
                          ? "text-primary"
                          : "text-red-500"
                      }`}
                    >
                      {s.status}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </CardContent>
        </Card>

      </div>

      <Footer />

    </div>
  )
}

export default UserSessions