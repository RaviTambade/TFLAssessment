import { useEffect, useState } from "react";
import { Card,CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, RefreshCw } from "lucide-react";
import { useScrollAnimation } from "@/components/../hooks/use-scroll-animation";

interface UnassignedUser {
  userId: number;
  fullName: string;
}

const UnassignedUsers = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [users, setUsers] = useState<UnassignedUser[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5201/api/Roles/unassigned/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: UnassignedUser[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Unassigned{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Users
            </span>
          </h2>

          <p className="text-muted-foreground mt-2">
            Users who are currently not assigned to any mentor.
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <Button variant="hero" onClick={fetchUsers}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-10 text-lg">
            Loading users...
          </div>
        ) : (
          <div
            ref={ref}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {users.map((user) => (
              <Card
                key={user.userId}
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 bg-gradient-hero">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-7 h-7 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {user.fullName}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        User ID: {user.userId}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && users.length === 0 && (
          <Card className="mt-8 border-0 shadow-elegant">
            <CardContent className="p-8 text-center">
              <User className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="text-xl font-semibold">
                No Unassigned Users
              </h3>
              <p className="text-muted-foreground">
                There are no unassigned users available.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default UnassignedUsers;