import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

import { Linkedin, Github, Mail, Phone } from "lucide-react"

// TYPES
type PersonalInfo = {
  first_name?: string
  last_name?: string
  email?: string
  gender?: string
  date_of_birth?: string
  address?: string
  pincode?: string
}

type ProfessionalInfo = {
  company_name?: string
  job_title?: string
  employment_type?: string
  start_date?: string | null
  end_date?: string | null
  is_current_job?: number
  experience_years?: number
 
  location?: string
  skills?: string
}

type AcademicInfo = {
  stream_name?: string
  specialization?: string
  enrollment_year?: number
  passing_year?: number
  percentage?: number
  college_name?: string
}

const MentorProfile = () => {
  const userId = "21"

  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)

  const [personal, setPersonal] = useState<PersonalInfo>({})
  const [professional, setProfessional] = useState<ProfessionalInfo>({})
  const [academic, setAcademic] = useState<AcademicInfo>({})

  // ================= FETCH =================
  const fetchProfile = async () => {
    try {
      setLoading(true)

      const res = await fetch(
        `http://localhost:5000/api/employerprofile/${userId}`
      )
      const result = await res.json()
      const data = result?.data?.[0]

      if (!data) return

      setPersonal({
        first_name: data.first_name || "",
        last_name: data.last_name || "",
        email: data.email || "",
        gender: data.gender || "",
        date_of_birth: data.date_of_birth?.split("T")[0] || "",
        address: data.address || "",
        pincode: data.pincode || ""
      })

      setProfessional({
        company_name: data.company_name || "",
        job_title: data.job_title || "",
        employment_type: data.employment_type || "",
        start_date: data.start_date || null,
        end_date: data.end_date || null,
        is_current_job: data.is_current_job || 1,
        experience_years: data.experience_years || 0,
        location: data.location || "",
        skills: data.skills || ""
      })

    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  // ================= HANDLERS =================
  const handlePersonalChange = (key: string, value: any) => {
    setPersonal((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleProfessionalChange = (key: string, value: any) => {
    setProfessional((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleAcademicChange = (key: string, value: any) => {
    setAcademic((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  // ================= UPDATE =================
  const updatePersonal = async () => {
    try {
      const res = await fetch(
        `http://localhost:3898/api/v1/profile/${userId}/personal`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(personal)
        }
      )

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)

      alert("Personal info updated ✅")
      fetchProfile()

    } catch (err) {
      console.error(err)
      alert("Update failed ❌")
    }
  }

  const updateProfessional = async () => {
    try {
      const res = await fetch(
        `http://localhost:3898/api/v1/profile/${userId}/professional`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(professional)
        }
      )

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)

      alert("Professional info updated ✅")
      fetchProfile()

    } catch (err) {
      console.error(err)
      alert("Update failed ❌")
    }
  }

  const updateAcademic = async () => {
    try {
      const res = await fetch(
        `http://localhost:3898/api/v1/profile/${userId}/academic`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(academic)
        }
      )

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)

      alert("Academic info updated ✅")
      fetchProfile()

    } catch (err) {
      console.error(err)
      alert("Update failed ❌")
    }
  }

  if (loading) return <div className="p-10 text-center">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">
        <Card>
          <CardContent className="p-8 space-y-8">

            {/* HEADER */}
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {personal.first_name} {personal.last_name}
                </h2>
                <Badge>Mentor</Badge>
              </div>

              <Button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Close" : "Edit"}
              </Button>
            </div>

            <hr />

            {/* VIEW MODE */}
            <div className="border p-4 rounded">
              <h3 className="font-semibold">Personal Info</h3>
              <p>Email: {personal.email}</p>
              <p>Gender: {personal.gender}</p>
              <p>DOB: {personal.date_of_birth}</p>
            </div>

            <div className="border p-4 rounded">
              <h3 className="font-semibold">Professional Info</h3>
              <p>Company: {professional.company_name}</p>
              <p>Job: {professional.job_title}</p>
              <p>Location: {professional.location}</p>
            </div>

            {/* EDIT MODE */}
            {isEditing && (
              <div className="space-y-6">

                {/* PERSONAL */}
                <div className="border p-4 rounded">
                  <h3 className="font-semibold mb-2">Personal Info</h3>
                  <input placeholder="First Name" value={personal.first_name || ""} onChange={(e) => handlePersonalChange("first_name", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Last Name" value={personal.last_name || ""} onChange={(e) => handlePersonalChange("last_name", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Email" value={personal.email || ""} onChange={(e) => handlePersonalChange("email", e.target.value)} className="border p-2 w-full mb-2" />
                  <select value={personal.gender || ""} onChange={(e) => handlePersonalChange("gender", e.target.value)} className="border p-2 w-full mb-2">
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                  <input type="date" placeholder="Date of Birth" value={personal.date_of_birth || ""} onChange={(e) => handlePersonalChange("date_of_birth", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Address" value={personal.address || ""} onChange={(e) => handlePersonalChange("address", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Pincode" value={personal.pincode || ""} onChange={(e) => handlePersonalChange("pincode", e.target.value)} className="border p-2 w-full mb-2" />
                  <Button onClick={updatePersonal}>Update Personal</Button>
                </div>

                {/* PROFESSIONAL */}
                <div className="border p-4 rounded">
                  <h3 className="font-semibold mb-2">Professional Info</h3>
                  <input placeholder="Company Name" value={professional.company_name || ""} onChange={(e) => handleProfessionalChange("company_name", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Job Title" value={professional.job_title || ""} onChange={(e) => handleProfessionalChange("job_title", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Employment Type" value={professional.employment_type || ""} onChange={(e) => handleProfessionalChange("employment_type", e.target.value)} className="border p-2 w-full mb-2" />
                  <input type="number" placeholder="Experience Years" value={professional.experience_years || ""} onChange={(e) => handleProfessionalChange("experience_years", parseInt(e.target.value) || 0)} className="border p-2 w-full mb-2" />
                  <input placeholder="Location" value={professional.location || ""} onChange={(e) => handleProfessionalChange("location", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Skills" value={professional.skills || ""} onChange={(e) => handleProfessionalChange("skills", e.target.value)} className="border p-2 w-full mb-2" />
                  <Button onClick={updateProfessional}>Update Professional</Button>
                </div>

                {/* ACADEMIC */}
                <div className="border p-4 rounded">
                  <h3 className="font-semibold mb-2">Academic Info</h3>
                  <input placeholder="Stream Name" value={academic.stream_name || ""} onChange={(e) => handleAcademicChange("stream_name", e.target.value)} className="border p-2 w-full mb-2" />
                  <input placeholder="Specialization" value={academic.specialization || ""} onChange={(e) => handleAcademicChange("specialization", e.target.value)} className="border p-2 w-full mb-2" />
                  <input type="number" placeholder="Enrollment Year" value={academic.enrollment_year || ""} onChange={(e) => handleAcademicChange("enrollment_year", parseInt(e.target.value) || 0)} className="border p-2 w-full mb-2" />
                  <input type="number" placeholder="Passing Year" value={academic.passing_year || ""} onChange={(e) => handleAcademicChange("passing_year", parseInt(e.target.value) || 0)} className="border p-2 w-full mb-2" />
                  <input type="number" placeholder="Percentage" value={academic.percentage || ""} onChange={(e) => handleAcademicChange("percentage", parseFloat(e.target.value) || 0)} className="border p-2 w-full mb-2" />
                  <input placeholder="College Name" value={academic.college_name || ""} onChange={(e) => handleAcademicChange("college_name", e.target.value)} className="border p-2 w-full mb-2" />
                  <Button onClick={updateAcademic}>Update Academic</Button>
                </div>

              </div>
            )}

          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}

export default MentorProfile