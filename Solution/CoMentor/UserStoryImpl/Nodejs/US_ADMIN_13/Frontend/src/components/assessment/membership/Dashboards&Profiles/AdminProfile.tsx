import { ChangeEvent, useEffect, useState } from "react"
import Navbar from "../../../Navbar"
import Footer from "../../../Footer"
import { Avatar, AvatarFallback } from "../../../ui/avatar"
import { Card, CardContent } from "../../../ui/card"
import { Badge } from "../../../ui/badge"
import { Button } from "../../../ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

type PersonalInfo = {
  full_name: string
  email: string
  gender: string
  date_of_birth: string
  address: string
  pincode: string
}

type ProfessionalInfo = {
  company_name: string
  job_title: string
  employment_type: string
  experience_years: number
  location: string
  skills: string
  start_date: string
  end_date: string
  is_current_job: number
}

type AdminProfileResponse = Partial<{
  first_name: string
  last_name: string
  full_name: string
  name: string
  email: string
  gender: string
  date_of_birth: string
  dob: string
  address: string
  pincode: string
  company_name: string
  job_title: string
  employment_type: string
  experience_years: number | string
  location: string
  skills: string | string[]
  start_date: string
  end_date: string
  is_current_job: number | boolean
}>

type AdminProfileApiResult = {
  success?: boolean
  data?: {
    personalInfo?: AdminProfileResponse
    professionalInfo?: AdminProfileResponse[]
  } | AdminProfileResponse[] | AdminProfileResponse
}

const BASE_URL = "http://localhost:5000/api"
const USER_ID = "1"

const emptyPersonal: PersonalInfo = {
  full_name: "",
  email: "",
  gender: "",
  date_of_birth: "",
  address: "",
  pincode: ""
}

const emptyProfessional: ProfessionalInfo = {
  company_name: "",
  job_title: "",
  employment_type: "",
  experience_years: 0,
  location: "",
  skills: "",
  start_date: "",
  end_date: "",
  is_current_job: 0
}

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [personal, setPersonal] = useState<PersonalInfo>(emptyPersonal)
  const [professional, setProfessional] =
    useState<ProfessionalInfo>(emptyProfessional)
  const [editData, setEditData] = useState<PersonalInfo>(emptyPersonal)

  const formatDate = (date?: string) => {
    if (!date) return "-"
    const parsedDate = new Date(date)

    if (Number.isNaN(parsedDate.getTime())) {
      return date
    }

    return parsedDate.toISOString().split("T")[0]
  }

  const getProfileData = (
    result: unknown
  ): {
    personalInfo: AdminProfileResponse | null
    professionalInfo: AdminProfileResponse | null
  } => {
    if (!result || typeof result !== "object") {
      return { personalInfo: null, professionalInfo: null }
    }

    const apiResult = result as AdminProfileApiResult

    if (
      apiResult.data &&
      typeof apiResult.data === "object" &&
      !Array.isArray(apiResult.data) &&
      ("personalInfo" in apiResult.data || "professionalInfo" in apiResult.data)
    ) {
      const nestedData = apiResult.data as {
        personalInfo?: AdminProfileResponse
        professionalInfo?: AdminProfileResponse[]
      }

      return {
        personalInfo: nestedData.personalInfo || null,
        professionalInfo: nestedData.professionalInfo?.[0] || null
      }
    }

    if (Array.isArray(apiResult.data)) {
      return {
        personalInfo: apiResult.data[0] || null,
        professionalInfo: apiResult.data[0] || null
      }
    }

    if (apiResult.data && typeof apiResult.data === "object") {
      return {
        personalInfo: apiResult.data as AdminProfileResponse,
        professionalInfo: apiResult.data as AdminProfileResponse
      }
    }

    if (Array.isArray(result)) {
      return {
        personalInfo: (result[0] as AdminProfileResponse) || null,
        professionalInfo: (result[0] as AdminProfileResponse) || null
      }
    }

    return {
      personalInfo: result as AdminProfileResponse,
      professionalInfo: result as AdminProfileResponse
    }
  }

  const normalizeProfile = (
    personalInfo: AdminProfileResponse | null,
    professionalInfo: AdminProfileResponse | null
  ) => {
    const fallbackName =
      personalInfo?.full_name ||
      personalInfo?.name ||
      `${personalInfo?.first_name || ""} ${personalInfo?.last_name || ""}`.trim()

    const personalData: PersonalInfo = {
      full_name: fallbackName,
      email: personalInfo?.email || "",
      gender: personalInfo?.gender || "",
      date_of_birth: personalInfo?.date_of_birth || personalInfo?.dob || "",
      address: personalInfo?.address || "",
      pincode: personalInfo?.pincode || ""
    }

    const professionalData: ProfessionalInfo = {
      company_name: professionalInfo?.company_name || "",
      job_title: professionalInfo?.job_title || "",
      employment_type: professionalInfo?.employment_type || "",
      experience_years: Number(professionalInfo?.experience_years) || 0,
      location: professionalInfo?.location || "",
      skills: Array.isArray(professionalInfo?.skills)
        ? professionalInfo.skills.join(", ")
        : professionalInfo?.skills || "",
      start_date: professionalInfo?.start_date || "",
      end_date: professionalInfo?.end_date || "",
      is_current_job: professionalInfo?.is_current_job ? 1 : 0
    }

    return { personalData, professionalData }
  }

  const fetchProfile = async () => {
    try {
      setLoading(true)
      setErrorMsg("")

      const response = await fetch(`${BASE_URL}/adminprofile/${USER_ID}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.status}`)
      }

      const result = await response.json()
      const { personalInfo, professionalInfo } = getProfileData(result)

      if (!personalInfo && !professionalInfo) {
        throw new Error("No profile data returned by the API")
      }

      const { personalData, professionalData } = normalizeProfile(
        personalInfo,
        professionalInfo
      )

      setPersonal(personalData)
      setProfessional(professionalData)
      setEditData({
        ...personalData,
        date_of_birth: personalData.date_of_birth
          ? formatDate(personalData.date_of_birth)
          : ""
      })
    } catch (error) {
      console.error("Fetch error:", error)
      setErrorMsg("Could not load admin profile. Please check the backend API.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchProfile()
  }, [])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setEditData((previous) => ({ ...previous, [name]: value }))
  }

  const handleProfessionalChange = (
    key: keyof ProfessionalInfo,
    value: string | number
  ) => {
    setProfessional((previous) => ({ ...previous, [key]: value }))
  }

  const handleUpdate = async () => {
    try {
      setErrorMsg("")
      const names = editData.full_name.trim().split(/\s+/).filter(Boolean)
      const first_name = names[0] || ""
      const last_name = names.slice(1).join(" ")

      const body = {
        first_name,
        last_name,
        email: editData.email,
        gender: editData.gender,
        date_of_birth: editData.date_of_birth,
        address: editData.address,
        pincode: editData.pincode,
        company_name: professional.company_name,
        job_title: professional.job_title,
        employment_type: professional.employment_type,
        experience_years: professional.experience_years,
        location: professional.location,
        skills: professional.skills,
        start_date: professional.start_date,
        end_date: professional.end_date,
        is_current_job: professional.is_current_job
      }

      const response = await fetch(`${BASE_URL}/adminprofile/${USER_ID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        throw new Error(`Update failed: ${response.status}`)
      }

      await fetchProfile()
      setIsEditing(false)
      setSuccessMsg("Profile updated successfully.")
      setTimeout(() => setSuccessMsg(""), 3000)
    } catch (error) {
      console.error("Update error:", error)
      setErrorMsg("Profile update failed. Please verify the backend endpoint.")
    }
  }

  if (loading) {
    return <div className="p-10 text-center">Loading profile...</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">
        <Card>
          <CardContent className="p-8 space-y-6">
            {successMsg && (
              <div className="rounded bg-green-100 p-2 text-green-700">
                {successMsg}
              </div>
            )}

            {errorMsg && (
              <div className="rounded bg-red-100 p-2 text-red-700">
                {errorMsg}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback>
                    {personal.full_name?.[0] || "A"}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="text-2xl font-bold">{personal.full_name || "Admin"}</h2>
                  <Badge className="mt-2">Admin</Badge>

                  <div className="mt-3 flex gap-4">
                    <Linkedin size={20} />
                    <Github size={20} />
                    <Mail size={20} />
                    <Phone size={20} />
                  </div>
                </div>
              </div>

              <Button onClick={() => setIsEditing((previous) => !previous)}>
                {isEditing ? "Close" : "Edit Profile"}
              </Button>
            </div>

            <div className="rounded border p-4">
              <p>Company: {professional.company_name || "-"}</p>
              <p>Job Title: {professional.job_title || "-"}</p>
              <p>Employment Type: {professional.employment_type || "-"}</p>
              <p>Start Date: {formatDate(professional.start_date)}</p>
              <p>End Date: {formatDate(professional.end_date)}</p>
              <p>Experience: {professional.experience_years} years</p>
              <p>Location: {professional.location || "-"}</p>
              <p>Skills: {professional.skills || "-"}</p>

              <hr className="my-3" />

              <p>Gender: {personal.gender || "-"}</p>
              <p>DOB: {formatDate(personal.date_of_birth)}</p>
              <p>Email: {personal.email || "-"}</p>
              <p>Address: {personal.address || "-"}</p>
              <p>Pincode: {personal.pincode || "-"}</p>
            </div>

            {isEditing && (
              <div className="space-y-3 rounded border p-4">
                <input
                  name="full_name"
                  value={editData.full_name}
                  onChange={handleChange}
                  className="w-full border p-2"
                  placeholder="Full name"
                />

                <input
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  className="w-full border p-2"
                  placeholder="Email"
                />

                <select
                  name="gender"
                  value={editData.gender}
                  onChange={handleChange}
                  className="w-full border p-2"
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>

                <input
                  type="date"
                  name="date_of_birth"
                  value={editData.date_of_birth}
                  onChange={handleChange}
                  className="w-full border p-2"
                />

                <input
                  name="address"
                  value={editData.address}
                  onChange={handleChange}
                  className="w-full border p-2"
                  placeholder="Address"
                />

                <input
                  name="pincode"
                  value={editData.pincode}
                  onChange={handleChange}
                  className="w-full border p-2"
                  placeholder="Pincode"
                />

                <input
                  value={professional.company_name}
                  onChange={(event) =>
                    handleProfessionalChange("company_name", event.target.value)
                  }
                  className="w-full border p-2"
                  placeholder="Company"
                />

                <input
                  value={professional.job_title}
                  onChange={(event) =>
                    handleProfessionalChange("job_title", event.target.value)
                  }
                  className="w-full border p-2"
                  placeholder="Job title"
                />

                <input
                  value={professional.location}
                  onChange={(event) =>
                    handleProfessionalChange("location", event.target.value)
                  }
                  className="w-full border p-2"
                  placeholder="Location"
                />

                <Button onClick={handleUpdate}>Save</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
