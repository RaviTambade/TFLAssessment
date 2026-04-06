import { useEffect, useState } from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import getAllRoles, { Role } from "../../../../services/RolesManagement/GetRoles";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/* Get Roles Page */
const GetRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true);

        const data = await getAllRoles();
        console.log("API DATA:", data); // ✅ Debug

        setRoles(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch roles");
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return (
    <div className="min-h-screen bg-background select-none">
      <Navbar />

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              All Roles
            </h2>
          </div>

          {/* Loading */}
          {loading && (
            <p className="text-center text-muted-foreground">
              Loading roles...
            </p>
          )}

          {/* Error */}
          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {/* Roles */}
        {!loading && !error && (
  <div className="max-w-6xl mx-auto">
    <Card className="border-0 shadow-elegant overflow-hidden">
      <div className="bg-gradient-hero p-6 sm:p-8">
        <CardContent>
          {roles && roles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((role) => (
                <Button
                  key={role.role_id}
                  className="w-full text-left px-4 py-3 border"
                >
                  {role.role_name}
                </Button>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No roles found
            </p>
          )}
        </CardContent>
      </div>
    </Card>
  </div>
)}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetRoles;