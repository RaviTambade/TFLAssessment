import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Shield, Users } from "lucide-react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";

interface Role {
  roleId: number;
  roleName: string;
  description: string;
}

const ActiveRolesList = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${WEBAPI_DOTNET_URL}/Roles/active-roles`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch roles");
        }
        return response.json();
      })
      .then((data) => {
        setRoles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h2 className="text-2xl font-semibold text-foreground">
          Loading Active Roles...
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Active{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Roles
            </span>
          </h1>
        </div>

        {/* Roles */}
        <div className="max-w-5xl mx-auto grid gap-6">

          {roles.map((role) => (
            <Card
              key={role.roleId}
              onClick={() =>
                navigate(`/models/membership/active-roles/${role.roleId}/users`)
              }
              className="
                cursor-pointer
                border-0
                shadow-elegant
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-glow
              "
            >
              <div className="bg-gradient-hero p-6">

                <CardHeader className="p-0">
                  <CardTitle className="flex items-center gap-3 text-foreground text-2xl">
                    <Shield className="h-7 w-7 text-primary" />
                    {role.roleName}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 mt-4">

                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>

                  <div className="flex items-center gap-2 mt-6 text-primary font-medium">
                    <Users size={18} />
                    <span>View Users</span>
                  </div>

                </CardContent>

              </div>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ActiveRolesList;