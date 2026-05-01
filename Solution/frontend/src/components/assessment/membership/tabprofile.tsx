import { useState, useEffect } from "react";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";

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
  university: string;
  degree: string;
  field: string;
  graduationYear: number;
  gpa: number;
  certifications: string[];
}

const TabProfile = () => {
  const [activeTab, setActiveTab] = useState<TabType>("professional");
  const [personalData, setPersonalData] = useState<PersonalDetails | null>(null);
  const [professionalData, setProfessionalData] = useState<ProfessionalDetails | null>(null);
  //const [academicData, setAcademicData] = useState<AcademicDetails | null>(null);
  const [loading, setLoading] = useState(false);

  // Professional Data
 // const professionalData: ProfessionalDetails = {
   // companyName: "Transflower Learning Pvt. Ltd.",
  //  // designation: "Chief Mentor",
  //   department: "Learning and Development",
  //   yearsOfExperience: 30,
  //   skills: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
  //   salary: "$120,000 - $140,000",
  // };

  // Academic Data
  const academicData: AcademicDetails = {
    university: "Massachusetts Institute of Technology (MIT)",
    degree: "Bachelor of Science",
    field: "Computer Science",
    graduationYear: 1997,
    gpa: 3.8,
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Data Engineer",
    ],
  };

  useEffect(() => {
    const fetchPersonalDetails = async () => {
      setLoading(true);

      let userid;

      const storedUser = localStorage.getItem("user");
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
          `http://localhost:3000/api/users/${userid}/personal/`
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

      const storedUser = localStorage.getItem("user");
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
          `http://localhost:3000/api/users/${userid}/professional/`
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


    fetchPersonalDetails();
    fetchProfessionalDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <div className="flex-1 flex justify-center items-center pt-24 p-6">
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

                <Input value={academicData.university} readOnly />
                <Input value={academicData.degree} readOnly />
                <Input value={academicData.field} readOnly />
                <Input
                  type="number"
                  value={academicData.graduationYear}
                  readOnly
                />
                <Input
                  type="number"
                  value={academicData.gpa}
                  readOnly
                />

                <div>
                  {academicData.certifications.map((c, i) => (
                    <div key={i}>✓ {c}</div>
                  ))}
                </div>
              </div>
            )}

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TabProfile;