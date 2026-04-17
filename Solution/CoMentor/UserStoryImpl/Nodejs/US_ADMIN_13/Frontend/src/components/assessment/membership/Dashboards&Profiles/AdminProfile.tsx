import { useEffect, useState } from "react"
import Navbar from "../../../Navbar"
import Footer from "../../../Footer"
import { Avatar, AvatarFallback } from "../../../ui/avatar"
import { Card, CardContent } from "../../../ui/card"
import { Badge } from "../../../ui/badge"
import { Button } from "../../../ui/button"
import { Linkedin, Github, Mail, Phone } from "lucide-react"

const Profile = () => {
  const userId = "1"
  const BASE_URL = "http://localhost:5000/api"

  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

  const [personal, setPersonal] = useState(null)
  const [professional, setProfessional] = useState({})
  const [editData, setEditData] = useState({})

  // ✅ SAFE DATE FORMAT (FIXED)
  const formatDate = (date) => {
    if (!date) return "-"

    const d = new Date(date)

    if (isNaN(d.getTime())) return date

    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
  }

  // ================= FETCH =================
  const fetchProfile = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${BASE_URL}/employerprofile/${userId}`)
      if (!res.ok) throw new Error("Failed to fetch")

      const result = await res.json()

      console.log("API RESULT:", result)

      // ✅ FIXED: supports BOTH array and {data: []}
      const data = Array.isArray(result)
        ? result[0]
        : result?.data?.[0]

      if (!data) return

      const fullName = `${data.first_name || ""} ${data.last_name || ""}`.trim()

      // ================= PERSONAL =================
      const personalData = {
        full_name: fullName,
        email: data.email || "",
        gender: data.gender || "",
        date_of_birth: data.date_of_birth || "",
        address: data.address || "",
        pincode: data.pincode || ""
      }

      setPersonal(personalData)

      // ================= PROFESSIONAL =================
      setProfessional({
        company_name: data.company_name || "",
        job_title: data.job_title || "",
        employment_type: data.employment_type || "",
        experience_years: data.experience_years || 0,
        location: data.location || "",
        skills: data.skills || "",
        start_date: data.start_date || "",
        end_date: data.end_date || "",
        is_current_job: data.is_current_job || 0
      })

      // ================= EDIT FORM =================
      setEditData({
        ...personalData,
        date_of_birth: data.date_of_birth
          ? new Date(data.date_of_birth).toISOString().split("T")[0]
          : ""
      })

    } catch (err) {
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  // ================= INPUT =================
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value })
  }

  const handleProfessionalChange = (key, value) => {
    setProfessional((prev) => ({ ...prev, [key]: value }))
  }

  // ================= UPDATE =================
  const handleUpdate = async () => {
    try {
      const names = editData.full_name.trim().split(" ")
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
        skills: professional.skills
      }

      const res = await fetch(`${BASE_URL}/employerprofile/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      if (!res.ok) throw new Error("Update failed")

      await fetchProfile()

      setIsEditing(false)
      setSuccessMsg("Profile updated successfully ✅")

      setTimeout(() => setSuccessMsg(""), 3000)

    } catch (err) {
      console.error("Update error:", err)
      alert("Update failed")
    }
  }

  // ================= UI =================
  if (loading) return <div className="p-10 text-center">Loading profile...</div>
  if (!personal) return <div className="p-10 text-center">No profile data</div>

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">
        <Card>
          <CardContent className="p-8 space-y-6">

            {successMsg && (
              <div className="bg-green-100 text-green-700 p-2 rounded">
                {successMsg}
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <Avatar className="h-24 w-24">
                  <AvatarFallback>
                    {personal.full_name?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="text-2xl font-bold">{personal.full_name}</h2>
                  <Badge className="mt-2">Admin</Badge>

                  <div className="flex gap-4 mt-3">
                    <Linkedin size={20} />
                    <Github size={20} />
                    <Mail size={20} />
                    <Phone size={20} />
                  </div>
                </div>
              </div>

              <Button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Close" : "Edit Profile"}
              </Button>
            </div>

            {/* ================= PROFILE DATA ================= */}
            <div className="border p-4 rounded">
              <p>Company: {professional.company_name || "-"}</p>
              <p>Job Title: {professional.job_title || "-"}</p>
              <p>Employment Type: {professional.employment_type || "-"}</p>
              <p>Start Date: {formatDate(professional.start_date)}</p>
              <p>End Date: {formatDate(professional.end_date)}</p>
              <p>Experience: {professional.experience_years || 0} years</p>
              <p>Location: {professional.location || "-"}</p>
              <p>Skills: {professional.skills || "-"}</p>

              <hr className="my-3" />

              <p>Gender: {personal.gender}</p>
              <p>DOB: {formatDate(personal.date_of_birth)}</p>
              <p>Email: {personal.email}</p>
              <p>Address: {personal.address}</p>
              <p>Pincode: {personal.pincode}</p>
            </div>

            {/* ================= EDIT ================= */}
            {isEditing && (
              <div className="border p-4 space-y-3 rounded">

                <input name="full_name" value={editData.full_name} onChange={handleChange} className="border p-2 w-full" />
                <input name="email" value={editData.email} onChange={handleChange} className="border p-2 w-full" />

                <select name="gender" value={editData.gender} onChange={handleChange} className="border p-2 w-full">
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>

                <input type="date" name="date_of_birth" value={editData.date_of_birth} onChange={handleChange} className="border p-2 w-full" />
                <input name="address" value={editData.address} onChange={handleChange} className="border p-2 w-full" />
                <input name="pincode" value={editData.pincode} onChange={handleChange} className="border p-2 w-full" />

                <input
                  value={professional.company_name}
                  onChange={(e) => handleProfessionalChange("company_name", e.target.value)}
                  placeholder="Company"
                  className="border p-2 w-full"
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