import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Users, User } from "lucide-react";

interface User {
  userId: number;
  firstName: string;
  lastName: string;
}

const RoleUsers = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${WEBAPI_DOTNET_URL}/Roles/active-roles/${roleId}/users`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();
        console.log("Users:", data);

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    if (roleId) {
      fetchUsers();
    }
  }, [roleId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h2 className="text-2xl font-semibold text-foreground">
          Loading Users...
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant overflow-hidden">

            <div className="bg-gradient-hero">

              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground text-2xl">
                  <Users className="h-7 w-7 text-primary" />
                  Users
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">

                <div className="overflow-hidden rounded-lg border bg-background">
                  <table className="w-full">
                    <tbody>
                      {users.length > 0 ? (
                        users.map((user) => (
                          <tr
                            key={user.userId}
                            className="border-t hover:bg-muted/50 transition-colors"
                          >
                            <td
                              className="px-6 py-4 cursor-pointer"
                              onClick={() =>
                                navigate(
                                  `/component/assessment/membership/UserProfile/${user.userId}`
                                )
                              }
                            >
                              <div className="flex items-center gap-3">
                                <User className="h-5 w-5 text-primary" />
                                <span className="text-primary hover:underline font-medium">
                                  {user.firstName} {user.lastName}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="px-6 py-6 text-center text-muted-foreground">
                            No users found for this role.
                          </td>
                        </tr>
                      )}
                    </tbody>

                  </table>
                </div>

              </CardContent>

            </div>

          </Card>
        </div>

      </div>
    </section>
  );
};

export default RoleUsers;