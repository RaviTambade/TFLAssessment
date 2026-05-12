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
import { Save } from "lucide-react";

import { Linkedin, Github, Mail, Phone, Edit } from "lucide-react";

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
  const [editingField, setEditingField] = useState("");




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


  const handleChange = (
    section: "personal" | "professional" | "academic",
    field: string,
    value: unknown
  ) => {

    if (section === "personal") {
      setPersonalData((prev) =>
        prev
          ? { ...prev, [field]: value }
          : null
      );
    }

    if (section === "professional") {
      setProfessionalData((prev) =>
        prev
          ? { ...prev, [field]: value }
          : null
      );
    }

    if (section === "academic") {
      setAcademicData((prev) =>
        prev
          ? { ...prev, [field]: value }
          : null
      );
    }
  };
  const updateSingleField = async (
    endpoint: string,
    field: string,
    value: unknown
  ) => {
    try {

      const storedUser = sessionStorage.getItem("current");

      if (!storedUser) return;

      const user = JSON.parse(storedUser);
      const userid = user?.userid;

      const response = await fetch(
        `http://localhost:3000/api/users/${userid}/${endpoint}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            [field]: value,
          }),
        }
      );

      const result = await response.json();

      console.log("UPDATED:", result);

      setEditingField("");

    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const onEditHandle = (field: string) => {
    setEditingField(field);
  };


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
                    className={`flex-1 py-4 px-6 font-semibold ${activeTab === tab
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
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <>

                        <div className="flex items-center gap-4">
                          <div className="w-32">
                            <p className="font-bold">First Name</p>
                          </div>

                          <Input
                            type="text"
                            value={personalData?.first_name || ""}
                            className="flex-1"
                            disabled={editingField !== "first_name"}
                            onChange={(e) =>
                              handleChange(
                                "personal",
                                "first_name",
                                e.target.value
                              )


                            }></Input>


                          <img
                            src="/editlogo.png"
                            onClick={() => onEditHandle("first_name")}
                            className="h-8 w-8 cursor-pointer"
                            alt="Edit Logo"
                          />
                          <div className="flex justify-center mt-1">
                            <Button onClick={() => updateSingleField("personal-info", "first_name", personalData.first_name)}
                              variant="ghost"
                              className="flex items-center gap-2">
                              <Save size={18} /></Button></div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-32">
                            <p className="font-bold">Last Name</p>
                          </div>

                          <Input
                            type="text"
                            value={personalData?.last_name || ""}
                            className="flex-1"
                            disabled={editingField !== "last_name"}
                            onChange={(e) =>
                              handleChange(
                                "personal",
                                "last_name",
                                e.target.value
                              )
                            }
                          />

                          <img
                            src="/editlogo.png"
                            onClick={() => onEditHandle("last_name")}
                            className="h-8 w-8 cursor-pointer"
                            alt="Edit Logo"
                          />

                          <div className="flex justify-center mt-1">
                            <Button onClick={() => updateSingleField("personal-info", "last_name", personalData.last_name)}
                              variant="ghost"
                              className="flex items-center gap-2">
                              <Save size={18} /></Button></div>                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-32">
                            <p className="font-bold">Email</p>
                          </div>

                          <Input
                            type="email"
                            value={personalData?.email || ""}
                            className="flex-1"
                            disabled={editingField !== "email"}
                            onChange={(e) =>
                              handleChange(
                                "personal",
                                "email",
                                e.target.value
                              )
                            }
                          />

                          <img
                            src="/editlogo.png"
                            onClick={() => onEditHandle("email")}
                            className="h-8 w-8 cursor-pointer"
                            alt="Edit Logo"
                          />

                          <div className="flex justify-center mt-1">
                            <Button onClick={() => updateSingleField("personal-info", "email", personalData.email)}
                              variant="ghost"
                              className="flex items-center gap-2">
                              <Save size={18} /></Button></div>                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-32">
                            <p className="font-bold">Contact</p>
                          </div>

                          <Input
                            type="text"
                            value={personalData?.contact || ""}
                            className="flex-1"
                            disabled={editingField !== "Contact"}
                            onChange={(e) =>
                              handleChange(
                                "personal",
                                "contact",
                                e.target.value
                              )
                            }
                          />
                          {/* 
                          <img
                            src="/editlogo.png"
                            onClick={() => onEditHandle("Contact")}
                            className="h-8 w-8 cursor-pointer"
                            alt="Edit Logo"
                          /> */}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-32">
                            <p className="font-bold">Date of Birth</p>
                          </div>

                          <Input
                            type="date"
                            value={personalData?.date_of_birth || ""}
                            className="flex-1"
                            disabled={editingField !== "date_of_birth"}
                            onChange={(e) =>
                              handleChange(
                                "personal",
                                "date_of_birth",
                                e.target.value
                              )
                            }
                          />

                          <img
                            src="/editlogo.png"
                            onClick={() => onEditHandle("date_of_birth")}
                            className="h-8 w-8 cursor-pointer"
                            alt="Edit Logo"
                          />
                          <div className="flex justify-center mt-1">
                            <Button onClick={() => updateSingleField("personal-info", "date_of_birth", personalData.date_of_birth)}
                              variant="ghost"
                              className="flex items-center gap-2">
                              <Save size={18} /></Button></div>                        </div>


                      </>
                    )}
                  </div>


                )}

                {/* PROFESSIONAL */}
                {activeTab === "professional" && (
                  <div className="space-y-4">

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Company Name</p>
                      </div>

                      <Input
                        type="text"
                        value={professionalData?.company_name || ""}
                        className="flex-1"
                        disabled={editingField !== "company_name"}
                        onChange={(e) =>
                          handleChange(
                            "professional",
                            "company_name",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("company_name")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("professional-info", "company_name", professionalData.company_name)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Job Title</p>
                      </div>

                      <Input
                        type="text"
                        value={professionalData?.job_title || ""}
                        className="flex-1"
                        disabled={editingField !== "job_title"}
                        onChange={(e) =>
                          handleChange(
                            "professional",
                            "job_title",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("job_title")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("professional-info", "job_title", professionalData.job_title)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Employment Type</p>
                      </div>

                      <Input
                        type="text"
                        value={professionalData?.employment_type || ""}
                        className="flex-1"
                        disabled={editingField !== "employment_type"}
                        onChange={(e) =>
                          handleChange(
                            "professional",
                            "employment_type",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("employment_type")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("professional-info", "employment_type", professionalData.employment_type)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Experience</p>
                      </div>

                      <Input
                        type="number"
                        value={professionalData?.experience_years || ""}
                        className="flex-1"
                        disabled={editingField !== "experience_years"}
                        onChange={(e) =>
                          handleChange(
                            "professional",
                            "experience_years",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("experience_years")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("professional-info", "experience_years", professionalData.experience_years)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Location</p>
                      </div>

                      <Input
                        type="text"
                        value={professionalData?.location || ""}
                        className="flex-1"
                        disabled={editingField !== "location"}
                        onChange={(e) =>
                          handleChange(
                            "professional",
                            "location",
                            e.target.value.split(",")
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("location")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("professional-info", "location", professionalData.location)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Skills</p>
                      </div>

                      <Input
                        type="text"
                        value={professionalData?.skills || ""}
                        className="flex-1"
                        disabled={editingField !== "skills"}
                        onChange={(e) =>
                          handleChange(
                            "professional",
                            "skills",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("skills")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("professional-info", "skills", professionalData.skills)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>
                    </div>

                  </div>
                )}
                {/* ACADEMIC */}
                {activeTab === "academic" && (
                  <div className="space-y-4">

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Stream Name</p>
                      </div>

                      <Input
                        type="text"
                        value={academicData?.stream_name || ""}
                        className="flex-1"
                        disabled={editingField !== "stream_name"}
                        onChange={(e) =>
                          handleChange(
                            "academic",
                            "stream_name",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("stream_name")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("academic-info", "stream_name", academicData.stream_name)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Specialization</p>
                      </div>

                      <Input
                        type="text"
                        value={academicData?.specialization || ""}
                        className="flex-1"
                        disabled={editingField !== "specialization"}
                        onChange={(e) =>
                          handleChange(
                            "academic",
                            "specialization",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("specialization")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("professional-info", "job_title", professionalData.job_title)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>                  </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Enrollment Year</p>
                      </div>

                      <Input
                        type="number"
                        value={academicData?.enrollment_year || ""}
                        className="flex-1"
                        disabled={editingField !== "enrollment_year"}
                        onChange={(e) =>
                          handleChange(
                            "academic",
                            "enrollment_year",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("enrollment_year")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("academic-info", "enrollment_year", academicData.enrollment_year)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>                  </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Passing Year</p>
                      </div>

                      <Input
                        type="number"
                        value={academicData?.passing_year || ""}
                        className="flex-1"
                        disabled={editingField !== "passing_year"}
                        onChange={(e) =>
                          handleChange(
                            "academic",
                            "passing_year",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("passing_year")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("academic-info", "passing_year", academicData.passing_year)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">Percentage</p>
                      </div>

                      <Input
                        type="number"
                        value={academicData?.percentage || ""}
                        className="flex-1"
                        disabled={editingField !== "percentage"}
                        onChange={(e) =>
                          handleChange(
                            "academic",
                            "percentage",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("percentage")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("academic-info", "percentage", academicData.percentage)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <p className="font-bold">College Name</p>
                      </div>

                      <Input
                        type="text"
                        value={academicData?.college_name || ""}
                        className="flex-1"
                        disabled={editingField !== "college_name"}
                        onChange={(e) =>
                          handleChange(
                            "academic",
                            "college_name",
                            e.target.value
                          )
                        }
                      />

                      <img
                        src="/editlogo.png"
                        onClick={() => onEditHandle("college_name")}
                        className="h-8 w-8 cursor-pointer"
                        alt="Edit Logo"
                      />
                      <div className="flex justify-center mt-1">
                        <Button onClick={() => updateSingleField("academic-info", "college_name", academicData.college_name)}
                          variant="ghost"
                          className="flex items-center gap-2">
                          <Save size={18} /></Button></div>


                    </div>


                  </div>

                )}
              </CardContent>

            </Card>
          </div>


        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;