import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "../../ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WEBAPI_NODE_URL } from "@/lib/utils";

import { Linkedin, Github, Mail, Phone } from "lucide-react";

type TabType = "personal" | "professional" | "academic";

interface PersonalDetails {
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  date_of_birth: string;
  address: string;
}

interface ProfessionalDetails {
  company_name: string;
  job_title: string;
  employment_type: string;
  experience_years: number;
  location: string[];
  skills: string;
}

interface AcademicDetails {
  stream_name: string;
  specialization: string;
  enrollment_year: number;
  passing_year: number;
  percentage: number;
  college_name: string;

}

const UserProfile = () => {
  const { id } = useParams();

  const [userId, setUserId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRoles, setUserRoles] = useState([]);
 const [activeTab, setActiveTab] = useState<TabType>("professional");
  const [personalData, setPersonalData] = useState<PersonalDetails | null>(null);
  const [professionalData, setProfessionalData] = useState<ProfessionalDetails | null>(null);
  const [academicData, setAcademicData] = useState<AcademicDetails | null>(null);



    const fetchPersonalDetails = async () => {
        setLoading(true);
  
        let userid;
  
        const storedUser = sessionStorage.getItem("current");
        if (storedUser) {
          try {
            const user = JSON.parse(storedUser);
            userid = user?.userid;
          } catch {
            console.error("Invalid user data");
          }
        }
  
        if (!userid) {
          console.error("User ID not found");
          setLoading(false);
          return;
        }
  
        try {
          const res = await fetch(
            `${WEBAPI_NODE_URL}/users/${userid}/personal/`
          );
  
          const data = await res.json();
          console.log("API RESPONSE:", data);
  
          const personal: PersonalDetails = data.data;
  
          // ✅ FIX DOB FORMAT
          if (personal.date_of_birth) {
            personal.date_of_birth =
              personal.date_of_birth.split("T")[0];
          }
  
          setPersonalData(personal);
        } catch {
          console.error("Failed to fetch personal details");
        } finally {
          setLoading(false);
        }
      };
  
  
       const fetchProfessionalDetails = async () => {
        setLoading(true);
  
        let userid;
  
        const storedUser = sessionStorage.getItem("current");
        if (storedUser) {
          try {
            const user = JSON.parse(storedUser);
            userid = user?.userid;
          } catch {
            console.error("Invalid user data");
          }
        }
  
        if (!userid) {
          console.error("User ID not found");
          setLoading(false);
          return;
        }
  
        try {
          const res = await fetch(
            `${WEBAPI_NODE_URL}/users/${userid}/professional/`
          );
  
          const data = await res.json();
          console.log("API RESPONSE:", data);
  
          const professional: ProfessionalDetails = data.data;
  
          console.log("PROFESSIONAL DETAILS:", professional);
          setProfessionalData(professional);
        } catch {
          console.error("Failed to fetch professional details");
        } finally {
          setLoading(false);
        }
      };
  
      const fetchAcademicDetails = async () => {
        setLoading(true);
  
        let userid;
  
        const storedUser = sessionStorage.getItem("current");
        if (storedUser) {
          try {
            const user = JSON.parse(storedUser);
            userid = user?.userid;
          } catch {
            console.error("Invalid user data");
          }
        }
  
        if (!userid) {
          console.error("User ID not found");
          setLoading(false);
          return;
        }
  
        try {
          const res = await fetch(
            `${WEBAPI_NODE_URL}/users/${userid}/academic/`
          );
  
          const data = await res.json();
          console.log("API RESPONSE:", data);
  
          const academic: AcademicDetails = data.data;
  
          console.log("ACADEMIC DETAILS:", academic);
          setAcademicData(academic);
        } catch {
          console.error("Failed to fetch academic details");
        } finally {
          setLoading(false);
        }
      };
  

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

  }, []);

  useEffect(() => {

    fetch(`${WEBAPI_NODE_URL}/roles/getUserByRole/${userId}`) // ✅ generic API
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(res => {
        if (res.success) {
          console.log("USER ROLES:", res.data);
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

      
    fetchPersonalDetails();
    fetchProfessionalDetails();
    fetchAcademicDetails();

  }, [userId]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-20">{error}</div>;

  // const user = data[0];

  const fullName = `${personalData?.first_name || ""} ${personalData?.last_name || ""}`;
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
                     <p>{userRoles?.map(r => r.role_name).join(", ")}</p>
                      
                    </Badge>

                    <div className="flex gap-4 mt-3 text-primary">
                      <Linkedin size={20} />
                      <Github size={20} />

                      {personalData?.email && (
                        <a href={`mailto:${personalData.email}`}>
                          <Mail size={20} />
                        </a>
                      )}

                      {personalData?.contact && (
                        <a href={`tel:${personalData.contact}`}>
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
                    {professionalData?.experience_years ?? 0} years
                  </p>

                 
                </div>

              </div>
            </CardContent>
          </Card>

       {/* <div className="min-h-screen bg-gradient-hero flex flex-col"> */}
      <div className="flex-1 flex justify-center items-center ">
        <Card className="w-full max-w-2xl shadow-lg">

          {/* Tabs */}
          <div className="border-b flex">
            {["personal", "professional", "academic"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`flex-1 py-4 px-6 font-semibold ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Details
              </button>
            ))}
          </div>

          <CardContent className="p-8 space-y-6">

            {/* PERSONAL */}
            {activeTab === "personal" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Personal Information</h2>

                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <Input value={personalData?.first_name || ""} readOnly />
                    <Input value={personalData?.last_name || ""} readOnly />
                    <Input value={personalData?.email || ""} readOnly />
                    <Input value={personalData?.contact || ""} readOnly />

                    {/* ✅ DOB FIXED */}
                    <Input
                      type="date"
                      value={personalData?.date_of_birth || ""}
                      readOnly
                    />

                    <Input value={personalData?.address || ""} readOnly />
                  </>
                )}
              </div>
            )}

            {/* PROFESSIONAL */}
            {activeTab === "professional" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Professional Information</h2>

                <Input value={professionalData?.company_name} readOnly />
                <Input value={professionalData?.job_title} readOnly />
                <Input value={professionalData?.employment_type} readOnly />
                <Input
                  type="number"
                  value={professionalData?.experience_years}
                  readOnly
                />
                 <Input value={professionalData?.location} readOnly />
                 <Input value={professionalData?.skills} readOnly />
                {/* <Input value={professionalData.salary} readOnly /> */}

                {/* <div className="flex gap-2 flex-wrap">
                  {professionalData.skills.map((s, i) => (
                    <span key={i} className="bg-blue-100 px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div> */}
              </div>
            )}

            {/* ACADEMIC */}
            {activeTab === "academic" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Academic Information</h2>

                <Input value={academicData?.stream_name} readOnly />
                <Input value={academicData?.specialization} readOnly />
                <Input value={academicData?.enrollment_year} readOnly />
                <Input
                  type="number"
                  value={academicData?.passing_year}
                  readOnly
                />
                <Input
                  type="number"
                  value={academicData?.percentage}
                  readOnly
                />

                  <Input value={academicData?.college_name} readOnly /> 

                  
              </div>
            )}

          </CardContent>
        </Card>
      </div>
    {/* </div> */}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;