import { useState, FormEvent } from "react"
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Eye, EyeOff } from "lucide-react"

type TabType = "personal" | "professional" | "academic"

interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
}

interface ProfessionalDetails {
  companyName: string;
  designation: string;
  department: string;
  yearsOfExperience: number;
  skills: string[];
  salary: string;
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
  const [activeTab, setActiveTab] = useState<TabType>("professional")

  // Hardcoded Personal Details
  const personalData: PersonalDetails = {
    firstName: "Ravi",
    lastName: "Tambade",
    email: "ravi.tambade@transflower.in",
    phone: "+1-234-567-8900",
    dateOfBirth: "1975-08-18",
    address: "601, Rama Apartment,Walwekar Nagar ,Pune, Maharashtra, India - 411009"
  }

  // Hardcoded Professional Details
  const professionalData: ProfessionalDetails = {
    companyName: "Transflower Learning Pvt. Ltd.",
    designation: "Chief Mentor",
    department: "Learning and Development",
    yearsOfExperience: 30,
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
    salary: "$120,000 - $140,000"
  }

  // Hardcoded Academic Details
  const academicData: AcademicDetails = {
    university: "Massachusetts Institute of Technology (MIT)",
    degree: "Bachelor of Science",
    field: "Computer Science",
    graduationYear: 1997,
    gpa: 3.8,
    certifications: ["AWS Certified Solutions Architect", "Google Cloud Professional Data Engineer"]
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <div className="flex-1 flex justify-center items-center pt-24 p-6">
        <Card className="w-full max-w-2xl shadow-lg">
          {/* Tab Navigation */}
          <div className="border-b flex">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                activeTab === "personal"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Personal Details
            </button>
            <button
              onClick={() => setActiveTab("professional")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                activeTab === "professional"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Professional Details
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                activeTab === "academic"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Academic Details
            </button>
          </div>

          <CardContent className="p-8 space-y-6">
            {/* Personal Details Tab */}
            {activeTab === "personal" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input
                      type="text"
                      value={personalData.firstName}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input
                      type="text"
                      value={personalData.lastName}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    type="email"
                    value={personalData.email}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input
                    type="tel"
                    value={personalData.phone}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <Input
                    type="date"
                    value={personalData.dateOfBirth}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <Input
                    type="text"
                    value={personalData.address}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>
              </div>
            )}

            {/* Professional Details Tab */}
            {activeTab === "professional" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <Input
                    type="text"
                    value={professionalData.companyName}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                    <Input
                      type="text"
                      value={professionalData.designation}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <Input
                      type="text"
                      value={professionalData.department}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <Input
                      type="number"
                      value={professionalData.yearsOfExperience}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                    <Input
                      type="text"
                      value={professionalData.salary}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {professionalData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Academic Details Tab */}
            {activeTab === "academic" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
                  <Input
                    type="text"
                    value={academicData.university}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                    <Input
                      type="text"
                      value={academicData.degree}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                    <Input
                      type="text"
                      value={academicData.field}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                    <Input
                      type="number"
                      value={academicData.graduationYear}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                    <Input
                      type="number"
                      step="0.1"
                      value={academicData.gpa}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>
                  <div className="space-y-2">
                    {academicData.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-green-50 border border-green-200 px-4 py-2 rounded-md text-green-900"
                      >
                        ✓ {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TabProfile;