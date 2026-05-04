import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WEBAPI_NODE_URL } from "@/lib/utils";

import { Linkedin, Github, Mail, Phone } from "lucide-react";

const UserProfile = () => {
  const { id } = useParams();

  const [userId, setUserId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userrole, setUserRoles] = useState([]);


  useEffect(() => {
    const currentuser = sessionStorage.getItem("current");

    if (currentuser) {
      try {
        const user = JSON.parse(currentuser);
        setUserId(user?.userid);
      } catch (e) {
        console.error("Invalid user data in sessionStorage");
      }
    }

  }, [id]);

  useEffect(() => {
    if (!userId) return;

    fetch(`${WEBAPI_NODE_URL}/users/${userId}/complete`) // ✅ generic API
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(res => {
        if (res.success) {
          setData(res.data);
        } else {
          setError("No data found");
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

    fetch(`${WEBAPI_NODE_URL}/roles/getUserByRole/${userId}`) // ✅ generic API
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(res => {
        if (res.success) {
          setUserRoles(res.data);
        } else {
          setError("No data found");
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

  }, [userId]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-20">{error}</div>;

  const user = data[0];

  const fullName = `${user.first_name || ""} ${user.last_name || ""}`;
  const initials = fullName
    ? fullName.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()
    : "NA";

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6 flex justify-center">
        <div className="w-full max-w-5xl space-y-8">

          {/* HEADER */}
          <Card>
            <CardContent className="p-8">
              <div className="flex justify-between items-center border-b pb-6">

                <div className="flex gap-6 items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>

                  <div>
                    <h2 className="text-3xl font-bold">
                      {fullName || "No Name"}
                    </h2>

                    {/* ✅ Dynamic Role */}
                    <Badge className="mt-2 bg-primary text-white">
                     <p>{userrole.map(r => r.role_name).join(", ")}</p>
                      
                    </Badge>

                    <div className="flex gap-4 mt-3 text-primary">
                      <Linkedin size={20} />
                      <Github size={20} />

                      {user.email && (
                        <a href={`mailto:${user.email}`}>
                          <Mail size={20} />
                        </a>
                      )}

                      {user.phone && (
                        <a href={`tel:${user.phone}`}>
                          <Phone size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-muted-foreground">
                    Experience
                  </p>
                  <p className="text-primary font-semibold">
                    {user.experience_years ?? 0} years
                  </p>

                  <Button className="mt-4">Edit Profile</Button>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* PROFESSIONAL */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Professional Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <p><b>Company:</b> {user.company_name || "N/A"}</p>
                <p><b>Job Title:</b> {user.job_title || "N/A"}</p>
                <p><b>Employment Type:</b> {user.employment_type || "N/A"}</p>
                <p><b>Location:</b> {user.location || "N/A"}</p>
                <p><b>Skills:</b> {user.skills || "N/A"}</p>
              </div>
            </CardContent>
          </Card>

          {/* PERSONAL */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <p><b>Email:</b> {user.email}</p>
                <p><b>Gender:</b> {user.gender}</p>
                <p><b>DOB:</b> {user.date_of_birth}</p>
                <p><b>Address:</b> {user.address}</p>
                <p><b>Pincode:</b> {user.pincode}</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;