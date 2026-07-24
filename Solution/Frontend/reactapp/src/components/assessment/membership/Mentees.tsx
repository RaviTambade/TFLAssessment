import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WEBAPI_NODE_URL } from "@/lib/utils";
import { Users, FolderKanban, Phone, CalendarDays, CheckCircle2, ArrowLeft } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface Mentee {
  id: number;
  mentee_name: string;
  projectId: number;
  allocated_project: string | null;
  repositoryUrl: string | null;
  contact: string;
  status: string;
  assigned_on: string;
}


const Mentees = () => {
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const currentUser = JSON.parse(sessionStorage.getItem("current") || "{}");
  const mentorId = currentUser.userid;
  const navigate = useNavigate();

  useEffect(() => {
    fetchMentees();
  }, []);

  const fetchMentees = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${WEBAPI_NODE_URL}/mentors/${mentorId}/mentees`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch mentees");
      }

      const result = await response.json();

      console.log("API RESPONSE:", result);

      setMentees(result.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load mentees");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[var(--gradient-hero)] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              My Mentees
            </h1>
          </div>

          <button
            onClick={() => navigate("/models/membership/dashboard")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </button>
        </div>

        {/* Main Card */}
        <Card className="bg-card/250 backdrop-blur-sm border border-border shadow-[var(--shadow-elegant)]">
          <CardHeader>
            <CardTitle className="text-xl">Mentees List</CardTitle>
          </CardHeader>

          <CardContent>
            {/* Loading */}
            {loading && <p className="text-center py-6">Loading mentees...</p>}

            {/* Error */}
            {error && <p className="text-center text-red-500 py-6">{error}</p>}

            {/* Empty State */}
            {!loading && mentees.length === 0 && (
              <p className="text-center py-2 text-muted-foreground">
                No mentees assigned yet.
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-[var(--shadow-elegant)]">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Mentees</p>
                    <h2 className="text-3xl font-bold text-primary mt-1">
                      {mentees.length}
                    </h2>
                  </div>

                  <div className="p-4 rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Table */}
            {!loading && mentees.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-primary/10">
                    <tr className="border-b border-border text-left">
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary">ID</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary">Mentee Name</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary">Project</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary">Contact</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary">Status</th>
                      <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary">Assigned Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {mentees.map((mentee) => (
                      <tr
                        key={mentee.id}
                        className="border-b border-border hover:bg-muted/40 transition"
                      >
                        <td className="p-4">{mentee.id}</td>

                        <td className="p-4"><button
                          onClick={() => navigate(`/models/membership/UserProfile/${mentee.id}`)}
                          
                        >
                          {mentee.mentee_name}
                        </button></td>

                    <td className="p-4">
                          {mentee.allocated_project ? (
                                                      <button
                            onClick={() =>
                              navigate(`/models/evaluationcontent/project/${mentee.projectId}/mentees`)
                            }
                          >
                            {mentee.allocated_project}
                          </button>
                          ) : (
                            <span className="text-muted-foreground">
                              Not Allocated
                            </span>
                          )}
                    </td>

                        <td className="p-4">{mentee.contact}</td>

                        <td className="p-4">
                          <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                            {mentee.status}
                          </span>
                        </td>

                        <td className="p-4 text-muted-foreground">
                          {new Date(mentee.assigned_on).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Mentees;
