import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "../../../ui/badge";

import { Linkedin, Github, Mail, Phone } from "lucide-react";

const EmployerProfile = () => {
  const { id } = useParams();

  const [userId, setEmploerId] = useState(3);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set userId from params or use default value of 1
    const currentEmployerId = id ? parseInt(id) : 3;
    setEmploerId(currentEmployerId);
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/employerprofile/${userId}`)
      .then((res) => {
        console.log("FETCH STATUS:", res.status); // ✅ debug status
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("API RESPONSE:", res); // ✅ debug

        if (res.success && res.data) {
          setData(res.data);
        } else {
          setError(`No data found: ${JSON.stringify(res)}`);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err); // ✅ detailed error log
        setError(`Failed to fetch data: ${err.message}`);
        setLoading(false);
      });
  }, [userId]);

  // ✅ Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  // ✅ No data
  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No Data Found
      </div>
    );
  }

  const user = data[0];

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6 flex justify-center">

        <Card className="w-full max-w-5xl shadow-[var(--shadow-elegant)]">
          <CardContent className="p-8">

            {/* Header */}
            <div className="flex justify-between items-center border-b pb-6">

              {/* Left */}
              <div className="flex items-center gap-6">

                <Avatar className="h-24 w-24">
                  <AvatarFallback>
                    {(() => {
                      const full_name = user.first_name + " " + user.last_name;
                      return full_name
                        ? full_name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)
                        : "NA";
                    })()}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="text-3xl font-bold">
                    {user.first_name + "  "+user.last_name || "No Name"}
                  </h2>

                  <Badge className="mt-2 bg-primary text-white">
                    Employer
                  </Badge>

                  <div className="flex gap-4 mt-3 text-primary">
                    <Linkedin size={20} />
                    <Github size={20} />
                    <Mail size={20} />
                    <Phone size={20} />
                  </div>
                </div>

              </div>

              {/* Right */}
              <div className="text-right">
                <p className="text-muted-foreground">
                  Years of Experience
                </p>

                <p className="text-primary text-lg font-semibold">
                  {user.experience_years ?? 0} years
                </p>

                <Button className="mt-4 bg-primary text-white hover:bg-accent">
                  Edit Profile
                </Button>
              </div>

            </div>

            {/* Details */}
            <div className="mt-8 space-y-4 text-lg">

              <p>
                <span className="font-semibold">Company :</span>{" "}
                <span className="text-primary">
                  {user.company_name || "N/A"}
                </span>
              </p>

              <p>
                <span className="font-semibold">Job Title :</span>{" "}
                <span className="text-primary">
                  {user.job_title || "N/A"}
                </span>
              </p>

            </div>

          </CardContent>
        </Card>

      </div>

      <Footer />

    </div>
  );
};

export default EmployerProfile;