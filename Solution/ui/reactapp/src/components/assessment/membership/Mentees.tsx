import { useEffect, useState } from "react";
import { WEBAPI_NODE_URL } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface Mentee {
  id: number;
  contact: string;
  status: string;
  assigned_on: string;
}

const Mentees = () => {
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchMentees();
  }, []);

  const fetchMentees = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${WEBAPI_NODE_URL}/mentors/1/mentees`);

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            My Mentees
          </h1>

          <p className="text-muted-foreground mt-2">
            View all assigned mentees
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-[var(--shadow-elegant)]">
          <CardHeader>
            <CardTitle className="text-2xl">Mentees List</CardTitle>
          </CardHeader>

          <CardContent>
            {/* Loading */}
            {loading && <p className="text-center py-6">Loading mentees...</p>}

            {/* Error */}
            {error && <p className="text-center text-red-500 py-6">{error}</p>}

            {/* Empty State */}
            {!loading && mentees.length === 0 && (
              <p className="text-center py-6 text-muted-foreground">
                No mentees assigned yet.
              </p>
            )}

            {/* Table */}
            {!loading && mentees.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="p-4 font-semibold">ID</th>

                      <th className="p-4 font-semibold">Contact</th>

                      <th className="p-4 font-semibold">Status</th>

                      <th className="p-4 font-semibold">Assigned Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {mentees.map((mentee) => (
                      <tr
                        key={mentee.id}
                        className="border-b border-border hover:bg-muted/40 transition"
                      >
                        <td className="p-4">{mentee.id}</td>

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
